import React from "react";
import {
  Button,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const Playlist = ({ movies, color, goBack }) => {
  return (
    <Container
      style={{
        textAlign: "center",
        backgroundColor: color,
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <Button variant="outlined" color="black" href="/">
        Back
      </Button>
      <Typography variant="h5" gutterBottom>
        Your Playlist
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} key={movie.id}>
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <CardContent>
                <Typography variant="h6">{movie.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="body1">My favorite color is {color}</Typography>
    </Container>
  );
};

export default Playlist;
