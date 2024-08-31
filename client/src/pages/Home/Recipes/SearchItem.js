import React, { useState } from "react";

const SearchItem = ({ getRecipes }) => {

    const [search, setSearch] = useState("");

    const onChangeHandler = (event) => {
        setSearch(event.target.value);
    }; 

    const submitSearch = (event) => {
        event.preventDefault();
        getRecipes(search);
    };

    const blankInput = search === "" || search === null || search === undefined;

    return (
        <>
        <form onSubmit={submitSearch}>
            <input type="text" value={search} onChange={onChangeHandler} style={{margin:"0 5px"}} placeholder='E.g. "avocado"'/>
            <button className="website-btn" type="submit" disabled={blankInput} style={{margin:"0 5px"}}>Search</button>
        </form>
        </>
    )
};

export default SearchItem;