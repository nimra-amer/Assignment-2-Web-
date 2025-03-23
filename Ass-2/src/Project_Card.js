import './Project_Card.css';

function ProjectCard(props){
    return (
        <div className = "Project_Cards">
            <h2 id = "project_name">{props.name}</h2>
            <img id = "project_image" src = {props.image} alt = "Project" />
            <a href={props.link} target="_blank">Access Code !!</a>
            <br></br>
            <p>{props.description}</p>
            <hr />
        </div>
    )

}

export default ProjectCard;