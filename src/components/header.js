import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Hero title
            </h1>
            <h2 className="subtitle">
              Hero subtitle
            </h2>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;