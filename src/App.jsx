import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MovieList from "./components/MovieList";
import Playlist from "./components/Playlist";
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
          <Typography variant="h4" gutterBottom style={{ alignText: "start" }}>
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
            <Button
              variant="outlined"
              type="submit"
              style={{
                fontWeight: "500",
                color: "#000",
                border: "1px solid #363b3b",
              }}
            >
              Search
            </Button>
          </form>
          {isLoading && <Typography>Loading...</Typography>}
          <MovieList movies={results} addToPlaylist={addToPlaylist} />
          <Button
            variant="outlined"
            onClick={confirmPlaylist}
            style={{ marginTop: "30px", fontWeight: "500", color: "#000" }}
          >
            Confirm Playlist
          </Button>
        </>
      ) : (
        <Playlist movies={playlist} color={handleColor} />
      )}
    </Container>
  );
}

export default App;
