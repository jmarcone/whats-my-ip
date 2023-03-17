import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Map from "./components/Map";
import 'leaflet/dist/leaflet.css';
import Spinner from './components/Spinner';


function App() {

  const [myIP, setMyIP] = useState(null);
  const [loading, setLoading] = useState("false");

  const API_KEY = process.env.REACT_APP_IPIFY_API_KEY;
  // const API = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;
  //https://cors-anywhere.herokuapp.com/corsdemo
  const API_URL = `https://ipapi.co/json/`;

  useEffect(() => {
    setLoading(true);
    axios.get(API_URL)
      .then(({ data }) => setMyIP(data))
      .catch(error => console.error(error))
      .finally(setLoading(false))
      ;


  }, [])

  console.log(myIP);
  
  return (
    <div className="App">
      {
        myIP === null
          ?
            <Spinner />
          :
            <Map myIP={myIP} />
      }

    </div>
  );
}

export default App;
