import React from "react";

const Header = () => {
  return (
    <section>
      <header className="flex justify-around pt-4">
        <img src="../../public/assets/logo.png" alt="logo" width={100} />

        <div className="flex justify-center items-center gap-8 ">
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="buttonStyle">
            <a href="">Contact</a>
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
