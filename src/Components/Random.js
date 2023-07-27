import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Random.css";

export default function Random() {
  const [recipe, setRecipe] = useState();
  const [resultText, setResultText] = useState("");
  const [selectedLanguageKey, setLanguageKey] = useState("");
  const [languagesList, setLanguagesList] = useState([]);

  const getRecipe = async () => {
    try {
      const apiKey = "2614ee1e35124385807f83ddc7607da6";
      let response = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`
      );
      setRecipe(response.data.recipes[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const translateText = (text, callback) => {
    if (!text || !selectedLanguageKey) return;
  
    const chunkSize = 1000;
    const chunks = [];
  
    for (let i = 0; i < text.length; i += chunkSize) {
      chunks.push(text.substring(i, i + chunkSize));
    }
  
    let translatedText = '';
  
    const translateNextChunk = async (index) => {
      if (index < chunks.length) {
        const data = {
          q: chunks[index],
          source: "auto",
          target: selectedLanguageKey,
        };
  
        try {
          const response = await axios.post(
            `https://libretranslate.de/translate`,
            data
          );
          translatedText += response.data.translatedText;
        } catch (error) {
          alert("Translation error:", error.response.data);
        }
  
        translateNextChunk(index + 1);
      } else {
        callback(translatedText);
      }
    };
  
    translateNextChunk(0);
  };

  const translateSummary = () => {
    if (recipe) {
      translateText(recipe.summary, setResultText);
    }
  };

  const translateDishTypes = () => {
    if (recipe) {
      translateText(recipe.dishTypes.join(", "), (translatedText) => {
        setResultDishTypes(translatedText.split(", "));
      });
    }
  };

  const translateIngredients = () => {
    if (recipe) {
      const ingredientsText = recipe.extendedIngredients
        .map((ingredient) => ingredient.name)
        .join(", ");
      translateText(ingredientsText, (translatedText) => {
        setResultIngredients(translatedText.split(", "));
      });
    }
  };

  const translateInstructions = () => {
    if (recipe) {
      console.log("recipe.analyzedInstructions", recipe.analyzedInstructions);
  
      const instructionsText = recipe.analyzedInstructions.flatMap((instruction) =>
        instruction.steps ? instruction.steps.map((item) => item.step) : []
      ).join("\n");
  
      translateText(instructionsText, (translatedText) => {
        console.log("translatedText", translatedText);
  
        const translatedInstructions = translatedText.split("\n");
  
        const translatedSteps = [];
        let currentStep = [];
  
        translatedInstructions.forEach((step) => {
          if (step.trim() === "") {
            if (currentStep.length > 0) {
              translatedSteps.push(currentStep.join(" "));
              currentStep = [];
            }
          } else {
            currentStep.push(step);
          }
        });
  
        if (currentStep.length > 0) {
          translatedSteps.push(currentStep.join(" "));
        }
  
        setResultInstructions(translatedSteps);
      });
    }
  };
  
  useEffect(() => {
    axios.get(`https://libretranslate.de/languages`).then((response) => {
      setLanguagesList(response.data);
    });
    getRecipe();
  }, []);

  useEffect(() => {
    translateSummary();
    translateDishTypes();
    translateIngredients();
    translateInstructions();
  }, [recipe, selectedLanguageKey]);

  const [resultDishTypes, setResultDishTypes] = useState([]);
  const [resultIngredients, setResultIngredients] = useState([]);
  const [resultInstructions, setResultInstructions] = useState([]);

  const languageKey = (selectedLanguage) => {
    setLanguageKey(selectedLanguage.target.value);
  };

  return (
    <div>
      <div className="main-div">
        {recipe && (
          <>
            <div className="headline-div">
              <a className="title" target="_blank" href={recipe.sourceUrl}>
                {recipe.title}
              </a>
              <br></br>
              <img className = "element" src={recipe.image} alt="Recipe" />
            </div>

            <div className="element">
              {resultDishTypes.map((item, index) => (
                <p className="descriptor" key={index}>
                  {item}
                </p>
              ))}
            </div>
            <p className = "element" dangerouslySetInnerHTML={{ __html: resultText }}></p>
            <div>
              <span>Ingredients: </span>
              {resultIngredients.map((ingredient, index) => (
                <span key={index}>
                  {index !== resultIngredients.length - 1
                    ? ingredient + ", "
                    : ingredient + "."}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
      <button className="btn" onClick={getRecipe}>
        Find new recipe
      </button>
      <select className="language-select" onChange={languageKey}>
        <option>Please Select Language..</option>
        {languagesList.map((language) => (
          <option value={language.code} key={language.code}>
            {language.name}
          </option>
        ))}
      </select>

      
    </div>
  );
}
