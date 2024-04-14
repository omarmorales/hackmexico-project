// Home.jsx
import React, { useState } from "react";
import {
  Typography,
} from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import {
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";

import ResultCard from '../components/ResultCard';

function Home() {
  // Example data
  const results = [
    {
      title: "Investment 1",
      image: "https://via.placeholder.com/150",
      description: "This is a description for Investment 1. It's a great opportunity with low risk and high returns.",
      minInvestment: 1000,
      risk: "low",
    },
    {
      title: "Investment 2",
      image: "https://via.placeholder.com/150",
      description: "This is a description for Investment 2. It's a moderate opportunity with medium risk and medium returns.",
      minInvestment: 2000,
      risk: "medium",
    },
    {
      title: "Investment 3",
      image: "https://via.placeholder.com/150",
      description: "This is a description for Investment 3. It's a risky opportunity with high risk and high returns.",
      minInvestment: 3000,
      risk: "high",
    },
  ];

  const [alert, setAlert] = useState({ open: false, message: "" });

  return (
    <div>
      <div>
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            500,
            "The best options for your first investment in Mexico 🇲🇽", // initially rendered starting point
            1500,
            "The best options for your investments in Mexico 😎",
            1500,
            "The best options for your investments worldwide 🌎",
            500,
          ]}
          speed={50}
          style={{ fontSize: "2em" }}
          repeat={Infinity}
        />
      </div>

      <div>
        
      {results.length === 0 ? (
    <Typography variant="h5" component="div">
      No results found 😞
    </Typography>
  ) : (
    results.map((result, index) => (
      <ResultCard
        key={index}
        result={result}
      />
    ))
  )}

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