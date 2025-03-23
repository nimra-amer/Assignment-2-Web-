import './Contact.css';
import emailjs from 'emailjs-com';
import {useState , useEffect} from "react";
import {motion} from 'framer-motion';

function Contact_Info(){

    const [contact_data , setContact_Data] = useState({
        person_name : '',
        email : '',
        message : ''
    });

    const [form_submitted ,setForm_Submitted] = useState(false);
    const [animation , setAnimation] = useState(false);

    function handleChange(event){
        const {name , value} = event.target;
        setContact_Data({...contact_data , [name]: value});

    }

    function handle_Submission(event){      //all the code taken from google
       event.preventDefault(); 
       setAnimation(true);

       emailjs.send('service_rdwcmz8' , 'template_nlrhbor' , {
        form_name: contact_data.person_name,
        reply_to: contact_data.email,
        message: contact_data.message
       }, 'n5XIubMHOBIwbR6xB')
       .then((result) => {
        setContact_Data({person_name : '', email : '', message : ''});
        setForm_Submitted(true); //Setting the value of submission to true
        setAnimation(false);
       }, (error) => {
        alert("Failed to Send Message")
        setAnimation(false);
       })
    }

    useEffect(() => {
        if (form_submitted === true){
            alert("Form Submitted Successfully");
        }
    }, [form_submitted]); //Only re-render once when form_submitted becomes true

    return (
           
           <form id = "contact_form" onSubmit = {handle_Submission}> 
             <h2 id = "contact_heading">Contact Me !!</h2>
             {/*Name*/}
             <label for = "person_name">Full Name           </label>
             <input type = "text" name = "person_name" onChange = {handleChange} value = {contact_data.person_name} required/>

             {/*E-mail*/}
             <label for = "email">Valid E-Mail Account          </label>
             <input type = "email" name = "email" onChange = {handleChange} value = {contact_data.email} required />
             <br></br>
             <br></br>

             {/*Message*/}
             <label for = "message">Message</label>
             <br></br>
             <textarea id = "message" type = "text" name = "message" onChange={handleChange} value = {contact_data.message} required minLength="75" placeholder = "Minimum 75 characters"></textarea>
            
             {animation ? (
                 <motion.button id="contact_submit" type="button" disabled initial={{ scale: 1 }} animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 0.6 }}> Sending...
                 </motion.button>) : (
             <button id="contact_submit" type="submit">Send Message !</button>)}
            </form>
    )
}
export default Contact_Info;