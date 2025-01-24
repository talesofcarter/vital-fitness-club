import closeSign from "../assets/close-sign.png";

import { motion } from "framer-motion";
export default function Dataform({ formData = {}, toggleRemove, isChecked }) {
  return (
    <motion.section
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 2, type: "spring", stiffness: 120 }}
      className="dataform"
    >
      <div className="info-wrapper">
        <div className="header-section">
          <h1>Thank you for purchasing this package!🎉</h1>
        </div>

        <div className="info-container">
          <p>Full Name: {formData.fullName}</p>
          <p>Email: {formData.email}</p>
          <div>
            <h3>Fitness Goals </h3>
            {formData.fitnessGoals.length === 0 ? (
              <span>"Please select an option"</span>
            ) : (
              <ul>
                {formData.fitnessGoals.map((goal, index) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
            )}
          </div>
          <p>Activity Level: {formData.activityLevel}</p>
          <p>Package Category: {formData.packageCategory}</p>
          <p>
            Terms of services and privacy policy:{" "}
            {isChecked ? "Agreed" : "Not agreed"}
          </p>
        </div>
      </div>
      <img onClick={toggleRemove} className="close-sign" src={closeSign} />
    </motion.section>
  );
}
