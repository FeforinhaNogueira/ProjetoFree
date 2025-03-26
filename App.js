import React from 'react';
import Navbar from './components/navBar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="home">
          <center><h1>Maria Fernanda Do Monte Nogueira</h1>
          <img src="https://reformavisual.com/wp-content/uploads/2017/05/moana-movie-real-life-800x600.jpg" alt="personagem de desenho" width={400} height={400}/> 
          <p>Eu tenho 17 anos de idade, moro na cidade de Campinas-sp faz 7 anos. Gosto de praticar esportes principalmente taekwondo, natação e judô. Sou cristã, da igreja adventista do sétimo dia. Minha cor favorita é roxo, minha comida é lasanha e o meu doce é sonho de creme. </p></center>
          
        </section>
      </main>
    </div>
  );
}




export default App;



