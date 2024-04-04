import React from 'react'

function Card(props){
    const{src,title,content,width,height}=props;

    return(
        <>
        <div>
            {<img src={src} alt="logo" width={width} height={height}/>}
            <h4>{title}</h4>
           <p>{content}</p> 
        </div>
        </>
    )
}
export default Card;