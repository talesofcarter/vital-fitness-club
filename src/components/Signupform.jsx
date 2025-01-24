import React, { useState } from "react";
import logo from "../assets/vital-fitness-logo.png";
import googleLogo from "../assets/google-logo.webp";
import facebookLogo from "../assets/facebook-logo.png";
import Dataform from "./Dataform";

import { motion } from "framer-motion";

export default function Signupform() {
  const [buttonText, setButtonText] = useState("Submit");
  const [isShown, setIsShown] = useState(false);
  const [formData, setFormData] = useState({
    fitnessGoals: [],
    activityLevel: "",
    packageCategory: "",
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  function toggleShown() {
    if (!isShown) {
      setIsShown(true);
    }
  }

  function toggleRemove() {
    if (isShown) {
      setIsShown(!true);
    }
  }

  function changeBtnContent() {
    setButtonText("Submitting...");
    setTimeout(() => {
      setButtonText("Submitted");
    }, 1000);
    toggleShown();
  }

  function handleCheckboxChange(event) {
    const { name, value, checked } = event.target;
    if (checked) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: [...prevData[name], value],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: prevData[name].filter((item) => item !== value),
      }));
    }
  }
  function handleRadioChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleTermsCheckbox(event) {
    setIsChecked(event.target.checked);
  }
  return (
    <div className="layout">
      <section>
        <div className="form-wrapper">
          <div className="header-section">
            <img className="logo" src={logo} />
            <motion.h1
              initial={{ y: -250 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
            >
              Vital Fitness Club
            </motion.h1>
          </div>
          <div className="signup-container">
            <form
              className="signup-info-container"
              onSubmit={(event) => {
                event.preventDefault();
                event.target.reset();
              }}
            >
              <div>
                <h2 className="create-account-header">Create a New Account</h2>
              </div>
              <div className="label-container">
                <label htmlFor="email">Full Name</label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="fullName"
                  className="info"
                  placeholder="Enter Your Full Name"
                />
              </div>

              <div className="label-container">
                <label htmlFor="email">Email</label>
                <input
                  onChange={handleInputChange}
                  name="email"
                  action="submit"
                  type="email"
                  className="info"
                  placeholder="abcd@gmail.com"
                />
              </div>

              <div className="label-container">
                <label htmlFor="password">Password</label>
                <input
                  onChange={handleInputChange}
                  name="password"
                  action="submit"
                  type="password"
                  className="info"
                  placeholder="Enter Your Password"
                />
              </div>

              <fieldset>
                <legend>Fitness Goals</legend>
                <label>
                  <input
                    onChange={handleCheckboxChange}
                    type="checkbox"
                    name="fitnessGoals"
                    value="Weight loss"
                  />
                  <motion.span
                    whileHover={{ scale: 1.3, color: "#148a3b", originX: 0 }}
                    transition={{ type: "spring", stiffness: 150 }}
                  >
                    Weight Loss
                  </motion.span>
                </label>

                <label>
                  <input
                    onChange={handleCheckboxChange}
                    type="checkbox"
                    name="fitnessGoals"
                    value="Muscle gain"
                  />
                  <motion.span
                    whileHover={{ scale: 1.3, color: "#148a3b", originX: 0 }}
                    transition={{ type: "spring", stiffness: 150 }}
                  >
                    Muscle gain
                  </motion.span>
                </label>

                <label>
                  <input
                    onChange={handleCheckboxChange}
                    type="checkbox"
                    name="fitnessGoals"
                    value="Improved endurance"
                  />
                  <motion.span
                    whileHover={{ scale: 1.3, color: "#148a3b", originX: 0 }}
                    transition={{ type: "spring", stiffness: 150 }}
                  >
                    Improved endurance
                  </motion.span>
                </label>

                <label>
                  <input
                    onChange={handleCheckboxChange}
                    type="checkbox"
                    name="fitnessGoals"
                    value="Increased flexibility"
                  />
                  <motion.span
                    whileHover={{ scale: 1.3, color: "#148a3b", originX: 0 }}
                    transition={{ type: "spring", stiffness: 150 }}
                  >
                    Increased flexibility
                  </motion.span>
                </label>
              </fieldset>

              <fieldset>
                <legend>Activity Level</legend>
                <label>
                  <input
                    onChange={handleRadioChange}
                    type="radio"
                    name="activityLevel"
                    value="Sedentary"
                  />
                  <motion.span
                    whileHover={{ scale: 1.3, color: "#148a3b", originX: 0 }}
                    transition={{ type: "spring", stiffness: 150 }}
                  >
                    Sedentary
                  </motion.span>
                </label>

                <label>
                  <input
                    onChange={handleRadioChange}
                    type="radio"
                    name="activityLevel"
                    value="Moderately active"
                  />
                  <motion.span
                    whileHover={{ scale: 1.3, color: "#148a3b", originX: 0 }}
                    transition={{ type: "spring", stiffness: 150 }}
                  >
                    Moderately active
                  </motion.span>
                </label>

                <label>
                  <input
                    onChange={handleRadioChange}
                    type="radio"
                    name="activityLevel"
                    value="Very active"
                  />
                  <motion.span
                    whileHover={{ scale: 1.3, color: "#148a3b", originX: 0 }}
                    transition={{ type: "spring", stiffness: 150 }}
                  >
                    Very active
                  </motion.span>
                </label>
              </fieldset>

              <fieldset>
                <legend>Package Category</legend>
                <label>
                  <input
                    onChange={handleRadioChange}
                    type="radio"
                    name="packageCategory"
                    value="Bronze"
                  />
                  <motion.span
                    whileHover={{ scale: 1.3, color: "#148a3b", originX: 0 }}
                    transition={{ type: "spring", stiffness: 150 }}
                  >
                    Bronze
                  </motion.span>
                </label>

                <label>
                  <input
                    onChange={handleRadioChange}
                    type="radio"
                    name="packageCategory"
                    value="Silver"
                  />
                  <motion.span
                    whileHover={{ scale: 1.3, color: "#148a3b", originX: 0 }}
                    transition={{ type: "spring", stiffness: 150 }}
                  >
                    Silver
                  </motion.span>
                </label>

                <label>
                  <input
                    onChange={handleRadioChange}
                    type="radio"
                    name="packageCategory"
                    value="Gold"
                  />
                  <motion.span
                    whileHover={{ scale: 1.3, color: "#148a3b", originX: 0 }}
                    transition={{ type: "spring", stiffness: 150 }}
                  >
                    Gold
                  </motion.span>
                </label>

                <label>
                  <input
                    onChange={handleRadioChange}
                    type="radio"
                    name="packageCategory"
                    value="Platinum"
                  />
                  <motion.span
                    whileHover={{ scale: 1.3, color: "#148a3b", originX: 0 }}
                    transition={{ type: "spring", stiffness: 150 }}
                  >
                    Platinum
                  </motion.span>
                </label>
              </fieldset>

              <div className="terms-container">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleTermsCheckbox}
                />
                <span>
                  <p>
                    I agree with the{" "}
                    <span className="terms-of-services">Terms of services</span>{" "}
                    and{" "}
                    <span className="terms-of-services">Privacy Policy</span>
                  </p>
                </span>
              </div>

              <div className="button-container">
                <motion.button
                  onClick={changeBtnContent}
                  className="submit-button"
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0px 0px 8px #ffffff",
                    boxShadow: "0px 0px 8px #015b1f",
                  }}
                >
                  {buttonText}
                </motion.button>
              </div>

              <div className="socials-buttons-section">
                <button className="google-button">
                  <img className="google-logo" src={googleLogo} />
                  <span>Continue with Google</span>
                </button>
                <button className="facebook-button">
                  <img className="facebook-logo" src={facebookLogo} />
                  <span>Login with Facebook</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section>
        {isShown && (
          <Dataform
            formData={formData}
            toggleRemove={toggleRemove}
            isChecked={isChecked}
          />
        )}
      </section>
    </div>
  );
}
