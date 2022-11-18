import './App.css';
import Image from './Image';
import staringCat from './staringCat.jpg';

function App() {
  console.log(staringCat);
  return (
   <main>
    <Image source={staringCat} alternativeText={'Cute cat staring'} />
   </main>
  );
}

export default App;