import { useNavigate } from 'react-router-dom';
import './Home.css';

function Hero(props){

 const navigate = useNavigate();
 
 function goToWork()
 {
    navigate('/Projects')
 }

 function goToContact()
 {
    navigate('/Contact')
 }

    return(
        <div className = "hero_section">
            <h2>Welcome to {props.Name}'s Portfolio</h2>
            <hr />
            <p>{props.Bio}</p>
            <hr />
            <div className='button_row'>
             <button id = "Work" onClick = {goToWork} >View My Work</button>
             <button id = "contact_me" onClick = {goToContact}>Contact Me</button>
            </div>
        </div>
    )
}


export default Hero;