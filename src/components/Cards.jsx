import React from "react";

function Cards(props) {
  console.log(props.team);

  return (
    <div className="Cards">
      <div className="prop">{props.team.code}</div>
      <div className={`${props.team.nbaFranchise ? "nba" : "not-nba"}`}>
        <img src='https://www.freepnglogos.com/uploads/nba-logo-png/nba-debate-club-milken-hottest-new-club-the-roar-25.png' alt='' className="NBA1"/>
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
