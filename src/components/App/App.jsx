import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';
import { Container } from './App.styled';
import { Toaster } from 'react-hot-toast';
import Layout from 'components/Layout/Layout';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LogInPage = lazy(() => import('pages/LogInPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>

      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
      <GlobalStyle />
    </Container>
  );
}

export default App;
