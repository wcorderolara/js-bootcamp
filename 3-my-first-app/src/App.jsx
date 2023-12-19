import './App.css'
import MyComponent from './MyComponent'
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');
  const [logo, setLogo] = useState('');
  const [choise, setChoise] = useState('');

  const logos = {
    DC: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/240px-DC_Comics_logo.png",
    MARVEL: "https://1000marcas.net/wp-content/uploads/2020/02/logo-Marvel-2-500x314.png"
  }
  function randomLogo() {
    return Math.random() < 0.5 ? "DC" : "MARVEL";
  }

  function choiseLogo() {
    setChoise((prevState) => {
      if(prevState !== randomLogo()) {
        return randomLogo();
      }
      return prevState;
    });

    setTitle( (prevState) => {
      if(prevState !== choise){
        return choise;
      }
      return prevState;
    });
    setLogo(logos[choise]);
  }

  return (
    <>
      <button onClick={choiseLogo}>Mostrar Logo</button>
      <MyComponent titulo={title} imgUrl={logo} />
    </>
  )
}

export default App
