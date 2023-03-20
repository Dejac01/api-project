import React from 'react'
import Cards from '../components/Cards';
import {useState, useEffect} from "react";


function List({ handleOnClick }) {
  const apiKey = "440d7f76bbmsh4facf782795d9d5p1b51a0jsn6de6932883eb";
  const [team, setTeam] = useState([])

    useEffect(() => {
        //Function to Fetch Data
        const getData = async () => {
            const response = await fetch('https://api-nba-v1.p.rapidapi.com/teams/statistics?id=1&season=2020')
            const data = await response.json()
            const teamList = data.results.slice(0, data.results.length).map(item => item).flat()
            setTeam(teamList)
        }
    
        getData()
    }, [])
  
  return (
    <div className='List'> 
    
    {team.map((TeamClass, id) => {
                return (
                    <Cards key={id} TeamClass={id} handleOnClick={handleOnClick} />
                )
            })}
    </div>
  )
}

export default List