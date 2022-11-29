import { useState } from "react";
import Container from "./Components/Container";
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import CharacterContainer from "./Components/CharacterContainer";
function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    const api = await fetch(
      "https://simpsons-quotes-api.herokuapp.com/quotes?count=3"
    );
    const frase = await api.json();
    setCharacters(frase);
  };

  return (
    <Container>
      <Header />
      {!characters ? (
        <Welcome reqApi={reqApi} />
      ) : (
        <CharacterContainer characters={characters} reqApi={reqApi}/>
      )}
    </Container>
  );
}

export default App;
