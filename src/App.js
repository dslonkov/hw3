import './App.css';
import Stars from './components/Stars';
import Listing from "./components/Listing";
import { data } from './data/cardsData';

function App() {
  return (
    // <Stars count={4} />
    <Listing items={data} />
  );
}

export default App;
