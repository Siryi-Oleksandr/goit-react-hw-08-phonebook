import Header from 'components/Header/Header';
import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Layout;
