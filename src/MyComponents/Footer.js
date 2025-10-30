import React from 'react';

export const Footer = () => {
  const footerStyle = {
    position: "relative",
    bottom: 0,
    width: "100%",
    zIndex: 1000,
  };

  return (
    <footer className="bg-dark text-light text-center py-3" style={footerStyle}>
      Copyright &copy; mytodoslist.com
    </footer>
  );
};