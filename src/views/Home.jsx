// Home.jsx
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  Tooltip,
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Home() {
  // Example data
  const results = [
    { title: "Result 1", description: "Description 1" },
    { title: "Result 2", description: "Description 2" },
    { title: "Result 3", description: "Description 3" },
    // Add more results as needed
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
        {results.map((result, index) => {
          const [isFavorite, setIsFavorite] = useState(false);

          return (
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
                <Tooltip title="Add to favorites">
                  <IconButton
                    aria-label="add to favorites"
                    onClick={() => {
                      setIsFavorite(!isFavorite);
                      setAlert({
                        open: true,
                        message: !isFavorite
                          ? "Added to Favorites"
                          : "Removed from Favorites",
                      });
                    }}
                  >
                    {isFavorite ? (
                      <FavoriteIcon color="error" />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </IconButton>
                </Tooltip>
                <div>
                  <Typography variant="h6">$123.45 MXN</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Min Investment
                  </Typography>
                </div>
              </CardActions>
            </Card>
          );
        })}

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