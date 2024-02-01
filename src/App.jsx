import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Grid, Container, Typography } from '@mui/material';
import CharacterCard from './CharacterCard';
import { fetchCharacters } from './api';
import './app.css'; 
const App = () => {
  const [characters, setCharacters] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCharacters();
        // Agregar una propiedad 'isFavorite' a cada personaje
        const charactersWithFavorites = data.map((character) => ({
          ...character,
          isFavorite: false,
        }));
        setCharacters(charactersWithFavorites);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchData();
  }, []);

  // Manejar el cambio de favorito
  const handleToggleFavorite = (characterName) => {
    setCharacters((prevCharacters) =>
      prevCharacters.map((character) =>
        character.name === characterName ? { ...character, isFavorite: !character.isFavorite } : character
      )
    );
  };

  return (
    <Router>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h3" gutterBottom>
          Escoge a tu favorito
        </Typography>
        <Routes>
          <Route
            path="/"
            element={<CharacterList characters={characters} onToggleFavorite={handleToggleFavorite} />}
          />
          {/* Otras rutas */}
        </Routes>
      </Container>
    </Router>
  );
};

const CharacterList = ({ characters, onToggleFavorite }) => {
  // Ordenar los personajes alfabéticamente por nombre
  const sortedCharacters = characters.slice().sort((a, b) => a.name.localeCompare(b.name));

  return (
    
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={5}>
        {sortedCharacters.map((character) => (
          <CharacterCard
            key={character.name}
            character={character}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </Grid>
    </Container>

  );
};

export default App;