import { useState } from "react";
export default function Player({name,symbol,isActive}){

    const [isEdited, setIsEdited] = useState(false);

    function handleClick(){
        setIsEdited((edited)=>!edited);
    }
    var playerName = <span className="player-name">{name}</span>
    if(isEdited){
        playerName = <input type="text" required />
    }
    
    return (
       <li className={isActive ? 'active': undefined }>
            <span className="player">                          
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>Edit</button>
       </li>
    )
}