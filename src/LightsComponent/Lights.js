import React from 'react';
import classes from './Lights.module.css';
import Light from '../LightComponent/Light';

const Lights = (props) => {

    return (
        <div>
            <div className={classes.Red}>
                <Light colour={'red'} state={props.redLight}/>
            </div>
            <div>
                <Light colour={'yellow'} state={props.yellowLight}/>
            </div>
            <div className={classes.Green}>
                <Light colour={'green'} state={props.greenLight}/>
            </div>  
        </div>      
    );
    
}

export default Lights;