import React from 'react'

function Cards(props) {
    console.log(props.team)
    
  return (
    <div className='Cards'>
{props.team.city}
{props.team.code}
<span className={`${props.team.nbaFranchise? "nba" : "not-nba"}`}>
    NBA Team
</span>
<div>
{props.team.name}
<img src={props.team.logo} alt="" className="logo" />
</div>
    </div>
  )
}

export default Cards