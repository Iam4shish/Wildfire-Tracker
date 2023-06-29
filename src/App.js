import { useState,useEffect } from 'react';
import Map from './components/Map';
import Loader from './components/Loader';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [eventData,setEventData]=useState([]);
  const [loading,setLoading]=useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events');
      const { events } = await res.json(); // because of the type of API we just got events from it
      setEventData(events);
      setLoading(false)
    }

    fetchEvents();

    
  }, [])

  return (
    <div>
    <Header></Header>
     {!loading?<Map eventData={eventData} />: <Loader />}
     <Footer></Footer>
    </div>
    
  );
}

export default App;
