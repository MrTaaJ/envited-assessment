import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './components/pages/Landing';


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/create" element={<CreatePage eventFormStates={eventFormStates} setEventFormStates={setEventFormStates} />} />
        <Route path="/event" element={<InfoPage eventFormStates={eventFormStates} />} /> */}
      </Routes>
    </div>
    
  );
}

export default App;
