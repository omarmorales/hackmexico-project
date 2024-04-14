// ResultCard.jsx
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Tooltip,
  Chip,
  Box,
  CardActions,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function ResultCard({ result, setAlert }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const riskColors = {
    low: "green",
    medium: "yellow",
    high: "red",
  };

  return (
    <Card sx={{ margin: "20px 0" }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {result.image ? (
            <img
              src={result.image}
              alt={result.title}
              style={{
                width: "auto",
                height: "50px",
                marginRight: "10px",
                marginBottom: "10px",
              }}
            />
          ) : (
            <Typography
              variant="h5"
              component="div"
              sx={{ marginRight: "10px" }}
            >
              {result.title}
            </Typography>
          )}
          <Typography
            variant="overline"
            style={{ color: riskColors[result.risk] }}
          >
            {result.risk} risk
          </Typography>
        </Box>
        <Typography variant="body1">
          {result.description && result.description.length > 300
            ? `${result.description.substring(0, 300)}...`
            : result.description}
        </Typography>
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
          <Typography variant="h6">
            {new Intl.NumberFormat("es-MX", {
              style: "currency",
              currency: "MXN",
            }).format(result.minInvestment)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Min Investment
          </Typography>
        </div>
      </CardActions>
    </Card>
  );
}

export default ResultCard;
