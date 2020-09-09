import React from 'react';
import classes from './Light.module.css';

const Light = (props) => {

    let colour = '';

    if(props.state) {
        if (props.colour === 'red') {
            colour = classes.Red;
        } else if (props.colour === 'yellow') {
            colour = classes.Yellow;
        } else if (props.colour === 'green') {
            colour = classes.Green;
        }
    } else {
        colour = classes.Light;
    }

    return (
        <div className={colour}></div>
    );
    
};

export default Light;