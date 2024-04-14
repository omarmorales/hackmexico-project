// Home.jsx
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

function Home() {
  let navigate = useNavigate(); // Use useNavigate

  // Example data
  const results = [
    { title: "Result 1", description: "Description 1" },
    { title: "Result 2", description: "Description 2" },
    { title: "Result 3", description: "Description 3" },
    // Add more results as needed
  ];

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
        {results.map((result, index) => (
          <Card key={index} sx={{ margin: "20px 0" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {result.title}
              </Typography>
              <Typography variant="body2">{result.description}</Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <div>
                <Typography variant="h6">$123.45 MXN</Typography>
                <Typography variant="body2" color="text.secondary">
                  Min Investment
                </Typography>
              </div>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Home;
