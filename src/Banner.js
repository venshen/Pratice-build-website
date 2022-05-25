// import React from 'react'
import './Banner.css'
import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Search from './Search';
// import { useHistory } from "react-router-dom";

function Banner() {
    // const history = useHistory();
    // const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="Banner">
        {/* <div className="Banner_search">
            {showSearch && <Search />}
            <Button  onClick={() => setShowSearch(!showSearch)} className="Banner_searchButton" variant="outlined">{showSearch ? "Hide": "Search Date"}</Button>
        </div> */}

        <div className="Banner_info">
            <h1>Get out and stretch your imaginaion</h1>
            <h5>
                Plan a different kind of getaway to uncover the hidden gems near you
            </h5>
            <Button variant="outlined">Explore nearby</Button>
        </div>
    </div>
  )
}

export default Banner