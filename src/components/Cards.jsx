import React from 'react'

function Cards(props) {
    console.log(props.team)
    
  return (
    <div className='Cards'>
<div>{props.team.city}</div>
<div>{props.team.code}</div>
<span className={`${props.team.nbaFranchise? "nba" : "not-nba"}`}>
    nba team
</span>
<div>
{props.team.name}
<img src={props.team.logo} alt="" className="logo" />
</div>
    </div>
  )
}

export default Cards