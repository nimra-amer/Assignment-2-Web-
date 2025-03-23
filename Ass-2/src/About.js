import './About.css';

function About_Info(props){
    return(
        <div className='about_section'>
           <img src={props.profile_picture} alt="Profile" />
           <h2>My Background</h2>
           <p>Hey! I am {props.Name} and I am {props.age} years old. I have completed my {props.degree} in {props.major}. {props.description}</p>
           <hr />
           <h2>Skills</h2>
           <p>{props.skills_list}</p>
           <hr />
           <h2>Interests</h2>
           <p>{props.interest_list}</p>
           <hr id="last_hr"/>
           <br></br>
        </div>
    )
}

export default About_Info;