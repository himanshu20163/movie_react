import logo from './logo.svg';
import './App.css';
import Movies from './component/Cards'
import Bright from './component/Bright-movie-banner.jpg' 


function App() {
  let ans='./component/Bright-movie-banner.jpg'
  return (
    <div className="App">
     <Movies img={Bright}  img_short="https://th.bing.com/th/id/OIP.CrUlmS1E7cvHvnHwL7XMywHaK9?w=115&h=180&c=7&r=0&o=5&pid=1.7" para='Bright is a 2017 American urban fantasy action film directed by David Ayer, written by Max Landis, and starring Will Smith, Joel Edgerton, Noomi Rapace, Lucy Fry, Édgar Ramírez, and Ike Barinholtz.'
      movie_title="Bright" movie_release="2017,david Ayer" movie_text="117 Action,Crime,Fantasy" />

    <Movies img="https://th.bing.com/th/id/OIP.SBD9Be2mKMWCkns4EzKJqAHaEK?w=284&h=180&c=7&r=0&o=5&pid=1.7"  img_short="https://th.bing.com/th/id/OIP.vS-dwSnu05hoyKV58rYK2gHaNI?w=115&h=180&c=7&r=0&o=5&pid=1.7" 
      movie_title="Pathan" movie_release="2023,Shahrukh khan" movie_text="150 Action,romance" para="Pathaan is a 2023 Indian Hindi-language action thriller film directed by Siddharth Anand and produced by Aditya Chopra of Yash Raj Films. "/>
      {/* <img src="./component/Bright-movie-banner.jpg"></img> */}

      <Movies img="https://th.bing.com/th/id/OIP.tnChaDTO0IRu8Qucn3z9uAHaEK?w=330&h=186&c=7&r=0&o=5&pid=1.7"  img_short="https://th.bing.com/th?id=OSK.dc73d5f666f32ca03849d5e2d7d57bda&w=116&h=168&c=7&o=6&pid=SANGAM" 
      movie_title="Brahmastra" movie_release="2022,Ranbir Kapoor" movie_text="150 Action,romance" para="Brahmāstra: Part One – Shiva is a 2022 Indian Hindi-language fantasy action-adventure film written and directed by Ayan Mukerji and produced by Karan Johar. "/>
    </div>
  );
}

export default App;
