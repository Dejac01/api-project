import React from "react";
import Cards from "../components/Cards";
import { useState, useEffect } from "react";

function List({ }) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '440d7f76bbmsh4facf782795d9d5p1b51a0jsn6de6932883eb',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };
  

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    //Function to Fetch Data
    //convert response to javascript object using j.son
    const getData = async () => {
    fetch('https://free-nba.p.rapidapi.com/teams', options)
        .then(response => response.json())
        .then((response) => { 
          setTeams((response.response));})
        .catch(err => console.error(err));
    };

    getData();
  }, []);

  return (
    <div className="List">
      {teams.map((team, id) => {
        return <Cards key={id} team={team}/>;
      })}
    
    </div>
  );
}

export default List;
