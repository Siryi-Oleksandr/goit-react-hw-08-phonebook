import { Navigation } from 'components/Navigation/Navigation';
import React from 'react';

function AppBar() {
  return (
    <div>
      <header>
        <>
          <Navigation />
          {/* <UserMenu />;
          <AuthNav />; */}
        </>
      </header>
    </div>
  );
}

export default AppBar;
