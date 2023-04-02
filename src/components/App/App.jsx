import React, { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';
import { Container } from './App.styled';
import { Toaster } from 'react-hot-toast';
import Layout from 'components/Layout/Layout';
import { refreshUser } from 'redux/auth/authOperation';
import { useAuth } from 'hooks/useAuth';
import Loader from 'components/Loader/Loader';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LogInPage = lazy(() => import('pages/LogInPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LogInPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
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
