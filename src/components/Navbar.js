import React from "react";
import logo from "../assets/images/logo.svg";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        borderBottom: "1px solid #ccc",
        padding: "1.5rem 1.5rem", // 1 rem = 16 px it is a relative unit based on the fontsize
      }}
    >
      <img src={logo} style={{ height: "40px" }} />

      <div>
        <a href="/" style={styles.link}>
          Listing
        </a>
      </div>

      <div>
        <a href="/contact" style={styles.link}>
          Contact
        </a>
      </div>
      <div>
        <a href="/about" style={styles.link}>
          About
        </a>
      </div>
      <div>
        <a href="/FAQ" style={styles.link}>
          FAQ
        </a>
      </div>
      <div>
        <a href="/impressum" style={styles.link}>
          Impressum
        </a>
      </div>

      <div>
        <a href="/pokemonlist" style={styles.link}>
          Pokemons
        </a>
      </div>
    </div>
  );
}

const styles = {
  link: {
    textDecoration: "none",
    color: "blue",
    fontWeight: "bold",
    fontSize: "16px",
  },
};

export default Navbar;
