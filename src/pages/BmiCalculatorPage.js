import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const BMI_CALCULATION = {
  UNDERWEIGHT: {
    range: "less than 18.5",
    suggestion:
      "You are underweight. You should try to gain weight by eating a balanced diet and exercising regularly.",
  },
  NORMAL: {
    range: "between 18.5 and 24.9",
    suggestion:
      "Congratulations! Your BMI is within the healthy range. Keep up the good work by maintaining a balanced diet and exercising regularly.",
  },
  OVERWEIGHT: {
    range: "between 25 and 29.9",
    suggestion:
      "You are overweight. You should try to lose weight by eating a balanced diet and exercising regularly.",
  },
  OBESE: {
    range: "30 or greater",
    suggestion:
      "You are obese. You should try to lose weight by eating a balanced diet and exercising regularly. You may also want to consult with a healthcare professional for additional guidance.",
  },
};

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [category, setCategory] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const calculatedBMI = weight / (heightInMeters * heightInMeters);
      const roundedBMI = calculatedBMI.toFixed(1);
      setBMI(roundedBMI);

      if (calculatedBMI < 18.5) {
        setCategory("UNDERWEIGHT");
        setSuggestion(BMI_CALCULATION.UNDERWEIGHT.suggestion);
      } else if (calculatedBMI < 25) {
        setCategory("NORMAL");
        setSuggestion(BMI_CALCULATION.NORMAL.suggestion);
      } else if (calculatedBMI < 30) {
        setCategory("OVERWEIGHT");
        setSuggestion(BMI_CALCULATION.OVERWEIGHT.suggestion);
      } else {
        setCategory("OBESE");
        setSuggestion(BMI_CALCULATION.OBESE.suggestion);
      }
    }
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="bmi-home">
        <div className="bmi-card-container">
          <Card sx={{ height: 520, width: 600 }}>
            <CardContent>
              <label>
                <input
                  className="form-control mb-3"
                  type="number"
                  value={height}
                  onChange={handleHeightChange}
                  placeholder="Height (cm)"
                />
              </label>
              <br />
              <label>
                <input
                  className="form-control mb-3"
                  type="number"
                  value={weight}
                  onChange={handleWeightChange}
                  placeholder="Weight (kg)"
                />
              </label>
              <br />
              <button
                onClick={calculateBMI}
                className="btn btn-outline-primary mb-5"
              >
                Calculate BMI
              </button>
              {bmi && category && suggestion && (
                <div>
                  <p>Your BMI is: {bmi}</p>
                  <p>Your BMI category is: {category}</p>
                  <p>{suggestion}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default BMICalculator;
