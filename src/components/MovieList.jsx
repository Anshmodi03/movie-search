// src/components/MovieList.jsx
import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const MovieList = ({ movies, addToPlaylist }) => {
  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid item xs={12} sm={6} md={4} key={movie.id}>
          <Card style={{ backgroundColor: "#808787" }}>
            <CardMedia
              component="img"
              height="100%"
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <CardContent>
              <Typography variant="h6">{movie.title}</Typography>
              <Button variant="contained" onClick={() => addToPlaylist(movie)}>
                Add to Playlist
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
