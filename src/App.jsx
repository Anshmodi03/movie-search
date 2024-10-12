// src/App.jsx
import React, { useState } from "react";
import { Container, TextField, Typography, Box } from "@mui/material";
import MovieList from "./components/MovieList";
import Playlist from "./components/Playlist";
import DrawOutlineButton from "./components/DrawOutlineButton"; // Import the button
import styles from "./bubble.module.css"; // Import bubble text styles
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [playlist, setPlaylist] = useState([]);
  const [confirming, setConfirming] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=e84138f418be87db4b3df51692721f3d&language=en-US&query=${query}`
      );
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  const addToPlaylist = (movie) => {
    setPlaylist((prev) => [...prev, movie]);
  };

  const confirmPlaylist = () => {
    setConfirming(true);
  };

  const handleColor = "#dedede"; // Replace with your favorite color

  return (
    <Container
      alignCenter
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      {!confirming ? (
        <>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            width="100%"
            marginTop="-40px"
          ></Box>
          <Typography
            variant="h4"
            gutterBottom
            className={styles.bubble} // Apply bubble text effect here
          >
            Movie Search Website
          </Typography>
          <form
            onSubmit={handleSearch}
            style={{ width: "100%", maxWidth: "600px" }}
          >
            <TextField
              label="Search for a movie"
              variant="outlined"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              fullWidth
              style={{ marginBottom: "20px" }}
            />
            <DrawOutlineButton type="submit">Search</DrawOutlineButton>
          </form>
          {isLoading && <Typography>Loading...</Typography>}
          <MovieList movies={results} addToPlaylist={addToPlaylist} />
          <DrawOutlineButton
            onClick={confirmPlaylist}
            style={{ marginTop: "30px" }}
          >
            Confirm Playlist
          </DrawOutlineButton>
        </>
      ) : (
        <Playlist movies={playlist} color={handleColor} />
      )}
    </Container>
  );
}

export default App;
