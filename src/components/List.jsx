import React from "react";
import Cards from "../components/Cards";
import { useState, useEffect } from "react";

function List({ handleOnClick }) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '440d7f76bbmsh4facf782795d9d5p1b51a0jsn6de6932883eb',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };
  

  const [teams, setTeam] = useState([]);

  useEffect(() => {
    //Function to Fetch Data
    const getData = async () => {
    fetch('https://api-nba-v1.p.rapidapi.com/teams?page=0', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    };

    getData();
  }, []);

  return (
    <div className="List">
      {teams.map((TeamClass, id) => {
        return <Cards key={id} TeamClass={id} handleOnClick={handleOnClick} />;
      })}
    
    </div>
  );
}

export default List;
