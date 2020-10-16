import React from "react";
const FooterElements = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];
const Footer = () => {
  return (
    <div className="footer">
      <ul>
        {FooterElements.map(element => (
          <li>{element}</li>
        ))}
      </ul>
    </div>
  );
};
export default Footer;
