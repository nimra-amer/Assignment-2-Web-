import './Toggle_File.css';
import { useState } from 'react';

function Toggle(){
 const [on,setOn] = useState(false);

 function handleLightMode()
 {
    document.body.classList.add('light_mode');
    document.body.classList.remove('dark_mode');
 }

 function handleDarkMode()
 {
    document.body.classList.add('dark_mode');
    document.body.classList.remove('light_mode');
 }

 function handle_button(){
    if (on===false){  //light mode-on
        handleLightMode();
        setOn(true);
    }
    if(on===true){           //dark-mode on
       handleDarkMode();
       setOn(false);
    }
 }

 return (
    <button id = "main" onClick = {handle_button}>{on ? 'Switch to Dark Mode' : 'Switch to Light Mode'}</button>
 )
}

export default Toggle;