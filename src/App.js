import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/pages/Create';
import Landing from './components/pages/Landing';


function App() {

  const [eventFormStates, setEventFormStates] = useState({
    event: "",
    host: "",
  });

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create" element={<Create eventFormStates={eventFormStates} setEventFormStates={setEventFormStates} />} />
        
        {/* <Route path="/event" element={<InfoPage eventFormStates={eventFormStates} />} /> */}
      </Routes>
    </div>
    
  );
}

export default App;
