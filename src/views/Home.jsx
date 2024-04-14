// Home.jsx
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import '../App.css';

import ResultCard from "../components/ResultCard";
import { Height } from "@mui/icons-material";

function Home() {
  // Example data
  const results = [
    {
      title: "Investment 1",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Cetesdirecto.png",
      description:
        "This is a description for Investment 1. It's a great opportunity with low risk and high returns.",
      minInvestment: 1000,
      risk: "low",
    },
    {
      title: "100 ladrillos",
      image: "https://ayuda.100ladrillos.com/hc/article_attachments/14826951229197",
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

  const [alert, setAlert] = useState({ open: false, message: "" });

  return (
    <div>
      <div style={{ height: window.innerWidth <= 600 ? '10em' : 'auto', overflow: 'visible' }}>
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            500,
            "The best tools for your first investment in Mexico 🇲🇽", // initially rendered starting point
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
        {results.map((result, index) => (
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
