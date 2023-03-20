import React from 'react'
import {Link} from 'react-router-dom'


 function Nav (props){
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/Stats">
        <div>Stats</div>
      </Link>
    </div>
  );
};
export default Nav