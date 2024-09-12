import React, { useState, useEffect } from "react";
import "./App.css";

function Heart({ xPos, yPos, size }) {
  return (
    <div
      className="heart"
      style={{
        left: `${xPos}%`,
        top: `${yPos}%`,
        width: `${size}px`,
        height: `${size}px`,
      }}
    ></div>
  );
}

function App() {
  const [hearts, setHearts] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Math.random(),
        xPos: Math.random() * 100,
        yPos: Math.random() * 100,
        size: Math.random() * 35 + 20, // Herzgrößen zwischen 20px und 60px
      };
      setHearts((prev) => [...prev, newHeart]);

      // Herzen nach einer Zeit entfernen
      setTimeout(() => {
        setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id));
      }, 3000); // Herzen verschwinden nach 3 Sekunden
    }, 500); // Alle 0.5 Sekunden ein neues Herz hinzufügen

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <div className="App">
      <h1>Login</h1>
      {hearts.map((heart) => (
        <Heart key={heart.id} xPos={heart.xPos} yPos={heart.yPos} size={heart.size} />
      ))}
    </div>
    <div className="Login">
      <h4>Du kennst das Passwort...</h4>
      <input className="input" type="number" value={inputValue} onChange={handleInputChange} />
      <div>
        <button className="btn-weiter">Weiter</button>
      </div>
    </div>
    </div>
  );
}

export default App;
