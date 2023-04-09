import React, { useState } from "react";

const PlayerForm = (props) => {

    const {setSearchQuery} = props;

    const getSearch = (query) => {
        setSearchQuery(query)
    }

    return(
        <div id="new-player-form">
        <form>
            <label className="name" htmlFor="name">Name:</label>
             <input type="text" name="name" onKeyUp={(e) => getSearch(e.target.value)} />
              <button className="name" type="search" onClick={() => getSearch()}>Search</button>
        </form>
        </div>)
}

export default PlayerForm