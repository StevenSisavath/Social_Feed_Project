import React, { useState } from 'react';
import './LikeButton.css'

const LikeButton = (props) => {
    const [likeButton, setLikeButton] = useState('inactive');

    function handleLikeClick(){
        if(likeButton === 'inactive'){
            setLikeButton('active')
        }
        else{
            setLikeButton('inactive')
        }
    }

    return ( 
        <div>
            <button className={likeButton} onClick = {handleLikeClick}>{props.likemessage}</button>
        </div>
     );
}
 
export default LikeButton;