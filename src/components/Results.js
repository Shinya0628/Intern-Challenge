import React from "react";
import { Typography, Button } from '@material-ui/core';

const Results = ({ movie }) => {
    // const handleNomination = (e) => {
    //     e.preventDefault();
    //     props.nomination();
    // }
    
    return (
        <div className="movie">
            <Typography>*{movie.Title}({movie.Year})</Typography>
            <Button 
                variant="outlined"
                // onClick={handleNomination}
            >
                Nominate
            </Button>
        </div>
    );
};

export default Results;