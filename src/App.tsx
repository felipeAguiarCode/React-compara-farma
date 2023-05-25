import './App.css'
import { ProductPage, LoginPage } from './pages'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route
            path="/"
            element={<LoginPage />}
          />

          <Route
            path="/products"
            element={<ProductPage />}
          />

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
