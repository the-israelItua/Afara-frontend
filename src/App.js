import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BackgroundIcon } from './assets';
import Score from './routes/score';
import Signup from './routes/signup';

function App() {


  return (
    <div className="container-fluid d-flex justify-content-center">
      <BackgroundIcon className='position-absolute start-0 end-0  h-100 w-100'  />

      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Signup />} />
          <Route path={'/score'} element={<Score />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
