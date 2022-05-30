import React from 'react';


export const Header = () => {
  return (
    <nav className="navbar bg-info">
      <div className="mx-4">
        <a className="navbar-brand text-white fs-1 " href="/">
          YourLife
        </a>
        <span className="fs-4 ms-2 text-white">Posts about lifestyle</span>
      </div>
    </nav>
  );
};
