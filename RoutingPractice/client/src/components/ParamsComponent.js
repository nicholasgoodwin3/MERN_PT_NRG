import React from 'react';
import { useParams } from 'react-router-dom';

const ParamsComponent = (props)=>{
    const {word, color, backgroundCol} = useParams();
    return(
        <div>
            {
                isNaN(word)?  
                <p style={color? {color: color, backgroundColor: backgroundCol}:null}>
                    This is a word: {word}
                </p>:<p>
                    This is a number: {word}
                </p>
            }
        </div>
    )
}


export default ParamsComponent;