import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, CardActions, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star'; 
import StarBorderIcon from '@mui/icons-material/StarBorder'; 

const CharacterCard = ({ character }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card style={{ backgroundColor: isFavorite ? 'gold' : 'white' }}>
        <CardContent>
          <Typography variant="h5">{character.name}</Typography>
          <img src={character.image} alt={character.name} />
          <Typography>Species: {character.species}</Typography>
        </CardContent>
        <CardActions style={{ justifyContent: 'flex-end' }}>
          <IconButton onClick={toggleFavorite} color={isFavorite ? 'primary' : 'default'}>
            {isFavorite ? <StarIcon /> : <StarBorderIcon />}
          </IconButton>
          {isFavorite && <Typography variant="body2" color="textSecondary">Favorito</Typography>}
        </CardActions>
      </Card>
    </Grid>
  );
};


export default CharacterCard;