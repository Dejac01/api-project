import React from "react";

function Cards(props) {
  console.log(props.team);

  return (
    <div className="Cards">
      <div className="prop">{props.team.code}</div>
      <div className={`${props.team.nbaFranchise ? "nba" : "not-nba"}`}>
        Nba Franchise
       </div>
      <div>
        {props.team.name}
        <div/>
        <div>
        <img src={props.team.logo} alt="" className="logo" />
      </div>
    </div>
    </div>
  );
}

export default Cards;
