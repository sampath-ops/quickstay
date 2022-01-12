/* eslint-disable */
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import SignUp from './Components/SignUp/SignUp';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login-Otp/Login';
import Filter from './Components/Filter/Filter';
import ChoosePlan from './Components/ChoosePlan/ChoosePlan';
import PropertyDetails from './Components/PropertyDetails/PropertyDetails';
import GeoLocation from './GeoLocation';
import ScrollToTop from './ScrollToTop';
import { useState } from 'react';

function App() {

  // GET DOCUMENTS ON SEARCH
  const [documentSnap,setDocumentSnap] =useState([]);
  const searchedPropertiesHandler = (docs)=>{
    setDocumentSnap(docs);
  }
    
  // PROPERTY DETAILS
  const [propertyDetails,setPropertyDetails] = useState();

  const onAddPropertyDetails = (property)=>{
    setPropertyDetails(property);
  }
  

  return (  
    <Router>
      <GeoLocation/>
      <ScrollToTop>
      <Routes>
         <Route exact path="/" element={<Home searchedProperties={searchedPropertiesHandler} addPropDetailsHandler={onAddPropertyDetails}/>}/>
         <Route path="/signup" element={<SignUp/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/filters" element={<Filter snap={documentSnap} addPropDetailsHandler={onAddPropertyDetails}/>}/>
         <Route path="/choose-plan" element={<ChoosePlan/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/property-details" element={<PropertyDetails propDetails={propertyDetails} state={propertyDetails}/>}/>
      </Routes>
      </ScrollToTop>
      <Footer/>
    </Router> 
   
  );
}

export default App;
