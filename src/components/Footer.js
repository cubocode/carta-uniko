import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer-container footer-carta">
      <div className="footer-content footer-carta__left">
        <p>Úniko Tafí · Cafetería de especialidad</p>
      </div>
      <div className="footer-content footer-carta__right">
      <p>
  Powered by <span className="footer-link-style">Groovit</span>
</p>
      </div>
    </footer>
  );
}

export default Footer;
