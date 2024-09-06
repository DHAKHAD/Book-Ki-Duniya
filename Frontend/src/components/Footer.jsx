import React from "react";

const Footer = () => {
  return (
    <div>
      <hr />
      <footer className="footer footer-center  text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Book
            ki Duniya
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
