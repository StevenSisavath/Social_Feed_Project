import React, { useState } from 'react';
import './DislikeButton.css'

const DislikeButton = (props) => {
    const [dislikeButton, setDislikeButton] = useState('inactiveDis');

    function handleDislikeClick(){
        if(dislikeButton === 'inactiveDis'){
            setDislikeButton('activeDis')
        }
        else{
            setDislikeButton('inactiveDis')
        }
    }

    return ( 
        <div>
            <button className={dislikeButton} onClick = {handleDislikeClick}>{props.dislikemessage}</button>
        </div>
     );
}
 
export default DislikeButton;