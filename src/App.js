import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainLayout } from './components/layouts/MainLayout';
// import { AuthLayout } from './components/layouts/AuthLayout';


function App() {
  return (
    <BrowserRouter basename="/consomer-ivoirien/public/">
      <Routes>
        <Route path="*" element={<MainLayout />}/>
      </Routes>
    </BrowserRouter>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="*" element={<MainLayout />}/>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
