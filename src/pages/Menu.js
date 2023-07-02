import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReferenceDataContext } from '../ReferenceDataContext';


export function Menu() {
    const [formData, setFormData] = useState({});
    // The useState hook creates the variable formData, and function setFormData
    const { setUserData } = useContext(ReferenceDataContext); 
    // useContext will access the setUserData function from ReferenceDataContext
    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault(); // Prevents default form submission behavior
      setUserData(formData);
      navigate('/contact'); // Redirect to new page
    };
  
    const handleInputChange = (event) => {
      const { target } = event;
      const { name, value } = target;
  
    // Updates formData when there are changes to the form input.  
      setFormData({
        ...formData, // Keep existing form data
        [name]: value // Update formData based on what was entered into the form as input
      });
    }
    
return (
   <div className = "menu-page">
      <section className = "menu-buttons-container">
        <div className = "search-bar">
                <form id="form" onSubmit = {handleSubmit}>
                    <input id="my-input" type="text" name="myInput" placeholder="Search through the menu" 
                    onChange={handleInputChange}/>
                    <button className = "search-button" type = "submit">
                    <svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
                    </button>
                </form>  
        </div>
        <button type="button" class = "b">Appetizers</button>
        <button type="button" class = "b">Sandwiches</button>
        <button type="button" class = "b">Desserts</button>
        <button type="button" class = "b">Drinks</button>
      </section>
          <img src="https://images.pexels.com/photos/1739748/pexels-photo-1739748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="restaurant image" className="bakery" />
            <section className = "menu-container">
              
              <div className = "first-img">
              <img src="https://images.pexels.com/photos/6534617/pexels-photo-6534617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="croissants" />
                <div className = "captions" >
                  <h3>Croissants</h3>
                  <span>Our recipe guarantees buttery, fluffy, and flaky croissants
                    which has made it the most popular item on the menu.</span>
                </div>
                <button type="button" class = "b">Learn more</button>
              </div>

              <div className = "second-img">
              <img src="https://cdn.discordapp.com/attachments/1113663834310316112/1121986836017991730/tomatoes-1603599_1280.jpg" className="quiches" />
                <div className = "captions" >
                  <h3>Quiches</h3>
                  <span>Our French tarts consist of pastry crust filled with savoury
                  custard and pieces of cheese, meat, seafood or vegetables.</span>
                </div>
                <button type="button" class = "b">Learn more</button>
              </div>

            <div className = "third-img">
            <img src="https://images.pexels.com/photos/8176276/pexels-photo-8176276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="pastries" />
                <div className = "captions" >
                  <h3>Pastries</h3>
                  <span>We offer a variety of fresh pastries from cupcakes, 
                  cakes, muffins, and fruit tarts.</span>
                </div>
                <button type="button" class = "b">Learn more</button>
              </div>
            </section>
    </div>
  )
  }
