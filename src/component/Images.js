import React from 'react';

const Images = (props) =>{
    return(
        <div className="ui container">
            <br/>
            <img 
                src= {`/pictures/${props.src.name}`} 
                alt={props.alt} width="500px" height="350px"></img>
        </div>
    );   
};

export default Images;