import { useNavigate } from "react-router-dom";
import {useState } from "react";
import './Data_Entry.css';

function Portfolio({setStoreData}) {
    const navigate = useNavigate();
    const [socialLink, setSocialLink] = useState("");
    const [socialName , setSocialName] = useState("");

    const [data,setData] = useState ({
      Name: '' ,
      age: '',
      degree: '',
      Major: '',
      Bio: '',
      Skills: '',
      Interests: '',
      Description: '',
      Project_Name: '',
      Github_Link: '',
      Description_Project: '',
      Social_Media : [],
      Profile_Picture: '',
      Project_Image: ''
      //add_social_media : ({})
    });
    
    function details_storage(event) {
        event.preventDefault();
        console.log(data);
        setStoreData(data);
        alert("Form Submitted Successfully!!!")
        navigate('/Home');
    }

    function handle_Change(event){
        const {name , value} = event.target;
        setData({...data , [name]: value});

    }

    function handle_Image(event) {
      const file = event.target.files?.[0];
      if (file) {
        const imageURL = URL.createObjectURL(file);
        setData({ ...data, Profile_Picture: imageURL });
      }
    }
    

    function Add_Media(event){
        event.preventDefault();
        if (socialName.trim() === "" || socialLink.trim() === "") return;

        const newSocial = {
          name: socialName,
          link: socialLink
        };

        setData((prevData) => ({ 
            ...prevData, Social_Media : [...(prevData.Social_Media || []) , newSocial]
        }))
        setSocialName("");
        setSocialLink("");
    }

    

    return (
        <form id = "personal_info" onSubmit={details_storage}>
          <h1>Student's Information</h1>
          
          <h2>Personal Information</h2>

          {/*Student's Name*/}
          <label for="Name">Full Name      </label>
          <input type="text" name="Name" value = {data.Name} onChange = {handle_Change} required /> 
          
          {/*Age - Other Detail*/ }
          <label for = "age">Age      </label>
          <input type = "number" name = "age" value = {data.age} onChange = {handle_Change} />  

          {/*Bio*/}
          <br/>
          <label for="Bio">Short Bio                    </label>
          <textarea id = "Bio" type="text" name = "Bio" value = {data.Bio} onChange = {handle_Change} required></textarea>


          {/*Other introductory Details*/}

          {/*Education*/}
          <h2>Education</h2>
          <label for="degree">Degree        </label>
          <select name="degree" value = {data.degree} onChange = {handle_Change} required>
            <option value="">Select a Degree</option>
            <option value="Matric">Matric</option>
            <option value="O/A">O/A-Levels</option>
            <option value="Intermediate">Intermediate</option>
            <option value="BS">Bachelors</option>
            <option value="MS">Masters</option>
          </select >
          
          {/*Major*/}
          <label for = "Major">Major      </label>
          <input type = "text" name = "Major" value = {data.Major} onChange = {handle_Change} required />
          
          
          <h2>About Me</h2> {/*"About Me Information"*/}

          {/*Profile Picture*/}
          <label for = "Profile_Picture">Profile Picture      </label>
          <input type= "file" accept= "image/*" onChange = {handle_Image}/>
 
          {/*Skills*/}
          <br></br>
          <label for = "Skills">Skills      </label>
          <textarea id = "Skills" type="text" name="Skills" placeholder = "In case of more than 1 , seperate them with ," required onChange = {handle_Change}></textarea>

          {/*Interests*/}
          <label for = "Interests">Interests      </label>
          <textarea type="text" id = "Interests" name="Interests" placeholder = "In case of more than 1 , seperate them with ," required onChange = {handle_Change}></textarea>

          {/*Description*/}
          <br/>
          <label for = "Description">Description      </label>
          <textarea id = "Description" type = "text" name = "Description" placeholder = "Minimum 75 characters , Maximum 200 characters" minlength = "75" maxLength= "500" value = {data.Description} required onChange = {handle_Change}></textarea>


          <h2>Project Details</h2> 

          {/*Project Title*/}
          <label for = "Project_Name">Project Title     </label>
          <input type = "text" name = "Project_Name" required onChange = {handle_Change} />

          {/*Project Image*/}
          <label for = "Project_Image">Image      </label>
          <input type = "file" accept = "image/*" onChange = {handle_Image}/>

          {/*Project Code's Link*/}
          <label for = "Github_Link">Github Link      </label>
          <input type = "url" name = "Github_Link" required onChange = {handle_Change}/>

          {/*Project Description*/}
          <br/>
          <label for = "Decription_Project">Description      </label>
          <textarea type = "text" name = "Description_Project" value = {data.Description_Prpject} onChange = {handle_Change}></textarea>

          <h2>Social Media Links</h2>
          
          {/*Social Media Links*/}

          {/*Name*/}
          <label for = "Social_Name">Name     </label>
          <input type = "text" value = {socialName} onChange = {(event) => setSocialName(event.target.value)}/>

          {/*Link*/}
          <label for = "Social_Media">Social Media Links      </label>
          <input type = "url" value = {socialLink} onChange = {(event) => setSocialLink(event.target.value)}/>
          <br></br>
          <button id = "add_social_media" onClick = {Add_Media}>Add Social Media Links</button>
          <ul>
           {data.Social_Media && data.Social_Media.map((media, index) => (
           <li key={index}>
              {media.name} - <a href={media.link} target="_blank" rel="noopener noreferrer">{media.link}</a>
           </li>
           ))}
          </ul>

          
          <button id = "Submit_Button" type = "submit">Generate Portfolio</button>

        </form>
)
}

export default Portfolio;