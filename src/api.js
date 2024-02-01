export const fetchCharacters = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
  
      // Extraemos la información solicitada
      const characters = data.results.map((character) => ({
        name: character.name,
        image: character.image,
        species: character.species,
      }));
  
      return characters;
    } catch (error) {
      console.error('Error al obtener personajes:', error);
      throw error;
    }
  };