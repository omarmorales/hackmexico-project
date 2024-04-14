// Home.jsx
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Slider, Typography, FormControlLabel, Checkbox, Snackbar } from '@mui/material';
import MuiAlert from "@mui/material/Alert";
import "../App.css";

import ResultCard from "../components/ResultCard";
import { Height } from "@mui/icons-material";

function Home() {
  // Example data
  const results = [
    {
      title: "Cetesdirecto",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/80/Cetesdirecto.png",
      description:
        "This is a description for Investment 1. It's a great opportunity with low risk and high returns.",
      minInvestment: 1000,
      risk: "low",
    },
    {
      title: "100 ladrillos",
      image:
        "https://ayuda.100ladrillos.com/hc/article_attachments/14826951229197",
      description:
        "This is a description for Investment 2. It's a moderate opportunity with medium risk and medium returns.",
      minInvestment: 1467.56,
      risk: "medium",
    },
    {
      title: "Investment 3",
      image: "https://via.placeholder.com/150",
      description:
        "This is a description for Investment 3. It's a risky opportunity with high risk and high returns.",
      minInvestment: 3000,
      risk: "high",
    },
  ];

  const [value, setValue] = useState([500, 20000]);
  const [checkedLow, setCheckedLow] = useState(true);
  const [checkedMedium, setCheckedMedium] = useState(true);
  const [checkedHigh, setCheckedHigh] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCheckLow = (event) => {
    setCheckedLow(event.target.checked);
  };

  const handleCheckMedium = (event) => {
    setCheckedMedium(event.target.checked);
  };

  const handleCheckHigh = (event) => {
    setCheckedHigh(event.target.checked);
  };

  const filteredResults = results.filter(result => 
    result.minInvestment >= value[0] && 
    result.minInvestment <= value[1] &&
    ((result.risk === 'low' && checkedLow) ||
     (result.risk === 'medium' && checkedMedium) ||
     (result.risk === 'high' && checkedHigh))
  );

  const [alert, setAlert] = useState({ open: false, message: "" });

  return (
    <div>
      <div
        style={{
          height: window.innerWidth <= 600 ? "10em" : "auto",
          overflow: "visible",
        }}
      >
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            500,
            "The best tools for your first investment in Mexico 🇲🇽",
            1500,
            "The best tools for your investments in Mexico 😎",
            1500,
            "The best tools for your investments worldwide 🌎",
            500,
          ]}
          speed={50}
          style={{ fontSize: "2em" }}
          repeat={Infinity}
        />
      </div>

      <div>
        <Typography id="range-slider" gutterBottom>
          Investment Range
        </Typography>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={500}
          max={100000}
          valueLabelFormat={(value) => `$${value.toLocaleString("es-MX")} MXN`}
        />

        <FormControlLabel
          control={<Checkbox checked={checkedLow} onChange={handleCheckLow} />}
          label="Low Risk"
        />
        <FormControlLabel
          control={
            <Checkbox checked={checkedMedium} onChange={handleCheckMedium} />
          }
          label="Medium Risk"
        />
        <FormControlLabel
          control={
            <Checkbox checked={checkedHigh} onChange={handleCheckHigh} />
          }
          label="High Risk"
        />

        {filteredResults.map((result, index) => (
          <ResultCard key={index} result={result} setAlert={setAlert} />
        ))}

        <Snackbar
          open={alert.open}
          autoHideDuration={6000}
          onClose={() => setAlert({ ...alert, open: false })}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <MuiAlert
            onClose={() => setAlert({ ...alert, open: false })}
            severity="info"
            variant="filled"
          >
            {alert.message}
          </MuiAlert>
        </Snackbar>
      </div>
    </div>
  );
}

export default Home;
