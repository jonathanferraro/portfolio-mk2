import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { SearchPage } from './routes/SearchPage/SearchPage';
import { Portfolio } from './routes/portfolio/Portfolio';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<SearchPage/>} />
            <Route path='/portfolio' element={<Portfolio/>} />

          </Routes>    
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
