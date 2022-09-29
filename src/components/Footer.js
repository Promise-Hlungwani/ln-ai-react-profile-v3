import React from 'react';

function Footer() {
  const email = `paulinahbaloyi95@gmail.com`;
  const address = `Midrand 1682, Gauteng `;

  return (
    <div className="footer">
      <h4>
        Email: {email} <br /> Address: {address}
      </h4>
    </div>
  );
}

export default Footer;
