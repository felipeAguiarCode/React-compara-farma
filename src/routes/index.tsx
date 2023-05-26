import {
  ProductPage,
  LoginPage,
  NewPointPage
} from '../pages'
import { Route, Routes, Navigate } from 'react-router-dom'

export function AppRoutes() {
  return (
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
        path="/newpoint"
        element={<NewPointPage />}
      />

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}