import React from 'react';

function Button(props){

   const {text,backgroundColor,color,border}=props;

    return(
        <button style={{backgroundColor:backgroundColor, color:color ,border:border}}>
        {text}
        </button>
    )
   
}
export default Button;