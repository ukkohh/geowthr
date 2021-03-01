import './App.css';
import { useState, useEffect } from "react";
import Weather from './Weather';

function App() {
  const [Lat, setLat] = useState(0);
  const [Lng, setLng] = useState(0);
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setIsLoading(false);
      }, (error) => {
        alert(error);
      })
    } else {
      alert('Your browser does not support geoloction!')
    }
  }, [])

  if (IsLoading) {
    return <p>Loading...</p>
  } else {
    return (
      <div className="content">
        <h3>Your position</h3>
        <p>
          Position:&nbsp;
          {Lat.toFixed(3)},
          {Lng.toFixed(3)}
        </p>
        <Weather Lat={Lat} Lng={Lng} />
      </div>
    );
  }
}

export default App;