import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a href="/stopwatch">Stopwatch</a>
          </li>
          <li>
            <a href="/timer">Timer</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
