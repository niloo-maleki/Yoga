import React from 'react'
import logoImage from "../assets/images/ballet-dance-illustration-logo-white-background-logo-design-template_255467-460.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo">
            <a
              href="/"
              className="flex items-center"
            >
              <img
                src={logoImage}
                className="img-logo"
                alt="Yoga Logo"
              />
            </a>
            </div>
  )
}

export default Logo