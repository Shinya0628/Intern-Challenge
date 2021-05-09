import React, { useState } from "react";
import { Typography, Input, Button } from '@material-ui/core';

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
      <form className="search">
        <Typography>Movie title</Typography>
        <Input
            multiline={true}
            value={searchValue}
            onChange={handleSearchInputChanges}
            // type="text"
        />
        <Button 
            variant="contained"
            color="primary"
            onClick={callSearchFunction}
            // type="submit"
        >
            SEARCH
        </Button>
      </form>
    );
}

export default Search;