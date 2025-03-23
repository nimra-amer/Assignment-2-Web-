import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Portfolio from './Data_Entry';
import NavBar from './navigation';
import Hero from './Home';
import About_Info from './About';
import Projects_Info from './Projects';
import Contact_Info from './Contact';
import Footer from './Footer';
import { useState } from 'react';
import ProjectCard from './Project_Card';
import Toggle from './Toggle_File';



function App() {

  const [storeData , setStoreData] = useState({});
  return ( 
    <BrowserRouter>
     <NavBar />
     <Toggle />
       <Routes>  
        
        <Route path = "/" element= {<Portfolio setStoreData = {setStoreData} />} />
        <Route path = "/Home" element = {<Hero Name = {storeData.Name} Bio = {storeData.Bio}/>} />
        <Route path= "/About" element = {<About_Info Name = {storeData.Name} skills_list = {storeData.Skills} interest_list = {storeData.Interests} profile_picture = {storeData.Profile_Picture} age = {storeData.age} degree = {storeData.degree} major = {storeData.Major} description = {storeData.Description} />} />
        <Route path = "/Contact" element = {<Contact_Info />} />
        <Route path= "/Projects" element = {<Projects_Info element Project_Name = {storeData.Project_Name} Description_Project = {storeData.Description_Project} Project_Image = {storeData.Project_Image} link = {storeData.Github_Link}/>} />
        <Route path = "/Project_Card" element = {<ProjectCard />}/>
       </Routes>
       <Footer SocialMedia = {storeData.Social_Media} />
    </BrowserRouter>
  );
}

export default App;
