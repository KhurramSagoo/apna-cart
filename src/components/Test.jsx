import axios from "axios";
import React, { useEffect } from "react";

const Test = () => {
  const options = {
    method: "GET",
    url: "https://dp.p.rapidapi.com/",
    params: {
      RecipeId: "10610",
      Servings: "0",
      method: "GetRecipe",
    },
    headers: {
      "X-RapidAPI-Key": "e14fedfd7cmsh26bee68ef28cb8ap17b47djsn8802f3e5b0b9",
      "X-RapidAPI-Host": "dp.p.rapidapi.com",
    },
  };
  const getFood = async () => {
    try {
      const response = await axios.get(options);
      // console.log(response);
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFood();
  }, []);

  return <div>Test</div>;
};

export default Test;
