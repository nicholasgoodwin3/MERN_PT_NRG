import React from 'react';
import { useParams } from 'react-router-dom';

const ParamsComponent = (props)=>{
    const {word, color, backgroundCol} = useParams();
    return(
        <div>
            {
                isNaN(word)?  
                <h1 style={color? {color: color, backgroundColor: backgroundCol}:null}>
                    Heres your Word!<br>
                    </br>
                    {word}
                </h1>:
                <h1>
                    Heres your number!<br>
                    </br>
                    {word}
                </h1>
            }
        </div>
    )
}


export default ParamsComponent;