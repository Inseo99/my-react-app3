import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import BoardWrite from './board/BoardWrite';
import Home from './board/Home';

function App() {
  return (
    // <div>
    //   컨텐츠 내용이 출려되는 부분입니다.
    // </div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/boardWriteReact' element={<BoardWrite />} />
    </Routes>
  );
}

export default App;
