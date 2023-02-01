import React from 'react'

import { useNavigate } from "react-router-dom";  

function PersonalInfo() {
  
  const navigate = useNavigate();
  return (
    <div>

<div className="formbold-main-wrapper info-page">
  {/* <!-- Author: FormBold Team -->
  <!-- Learn More: https://formbold.com --> */}
  <div className="formbold-form-wrapper">
    
    <img id='my-img' src="https://th.bing.com/th/id/R.da2e546841da40cdcf60061743233500?rik=IeO7Sr%2fkUW54wQ&riu=http%3a%2f%2fwww.venmond.com%2fdemo%2fvendroid%2fimg%2favatar%2fbig.jpg&ehk=JihI5nQ0BOd0W%2bZVhtIWmqwac0NMyRMOV7%2bzryywg%2fg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"/>

    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div className="formbold-form-title">
        <h2 className="">Personal Info</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>

      <div className="formbold-input-flex">
        <div>
          <label for="firstname" className="formbold-form-label">
            First name
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            className="formbold-form-input"
          />
        </div>
        <div>
          <label for="lastname" className="formbold-form-label"> Last name </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            className="formbold-form-input"
          />
        </div>
      </div>

      <div className="formbold-input-flex">
        <div>
          <label for="email" className="formbold-form-label"> Email </label>
          <input
            type="email"
            name="email"
            id="email"
            className="formbold-form-input"
          />
        </div>
        <div>
          <label for="phone" className="formbold-form-label"> Phone number </label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="formbold-form-input"
          />
        </div>
      </div>

      <div className="formbold-mb-3">
        <label for="address" className="formbold-form-label">
          Street Address
        </label>
        <input
          type="text"
          name="address"
          id="address"
          className="formbold-form-input"
        />
      </div>

      <div className="formbold-mb-3">
        <label for="address2" className="formbold-form-label">
          Street Address Line 2
        </label>
        <input
          type="text"
          name="address2"
          id="address2"
          className="formbold-form-input"
        />
      </div>

      <div className="formbold-input-flex">
        <div>
          <label for="state" className="formbold-form-label"> State/Prvince </label>
          <input
            type="text"
            name="state"
            id="state"
            className="formbold-form-input"
          />
        </div>
        <div>
          <label for="country" className="formbold-form-label"> Country </label>
          <input
            type="text"
            name="country"
            id="country"
            className="formbold-form-input"
          />
        </div>
      </div>

      <div className="formbold-input-flex">
        <div>
          <label for="post" className="formbold-form-label"> Post/Zip code </label>
          <input
            type="text"
            name="post"
            id="post"
            className="formbold-form-input"
          />
        </div>
       
      </div>

      <div className="formbold-checkbox-wrapper">
        <label for="supportCheckbox" className="formbold-checkbox-label">
          <div className="formbold-relative">
            <input
              type="checkbox"
              id="supportCheckbox"
              className="formbold-input-checkbox"
            />
            
          </div>
          I agree to the defined
          <a href="#"> terms, conditions, and policies</a>
        </label>
      </div>

      <button className="formbold-btn">Next</button>
      
    </form>
  </div>
</div>
</div>
  )
}

export default PersonalInfo
