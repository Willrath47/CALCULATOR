import React from "react";
import '../css/Clear.css'
const BotonClear = (props) =>(
     
    <div className="Clear" onClick={props.ManejarClear}>
        {props.children}

    </div>

);
export default BotonClear