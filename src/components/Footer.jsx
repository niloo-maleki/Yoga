import React from "react";
import { Link } from "react-router-dom";
import MyButton from "./MyButton";
import { CONTACT, MENUITEM } from "../constant/Index";

const Footer = () => {
  return (
    <footer className="bg-slate-900 pb-16">
      <div className="container mx-auto px-16">
        <section className="grid">
          <div className="flex w-full justify-center pt-14">
            <div>
              <h2 className="justify-center py-8 font-bold text-5xl text-white flex">
                Subscribe Our Newsletter
              </h2>
              <hr className="w-1/3 m-auto border-2" />
              <form className="flex w-full mt-14 ">
                <input
                  type="text"
                  name="Enter your email"
                  placeholder="Enter your email"
                  className="bg-white px-5 w-full px  border-inherit mb-5 h-16"
                />
                <MyButton classes="bg-slate-900 hover:bg-yellow-600 text-s text-white text-lg max-w-xs my-3 h-10 px-3 -ml-32">
                  SUBSCRIBE
                </MyButton>
              </form>
            </div>
          </div>
        </section>
        <hr className="w-3/4 m-auto border-2 my-32" />
        <section>
          <nav className="text-white px-16">
            <div className="grid grid-cols-3 gap-4 justify-items-center">
              <ul className="list nav nav-tabs flex flex-col flex-wrap list-none">
                <h3 className="font-semibold text-xl mb-4">QUICK LINKS</h3>
                {MENUITEM.map((item) => (
                  <li key={item.id} className="nav-item my-2 hover:text-yellow-500 font-semibold">
                    <Link to={item.to} className="nav-link ">
                      {item.linkName}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="list nav nav-tabs flex flex-col flex-wrap list-none">
                <h3 className="font-semibold text-xl mb-4">TOP Yoga</h3>
                <li className="nav-item">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humou
                </li>
              </ul>
              <ul className="list nav nav-tabs flex flex-col flex-wrap list-none">
                <h3 className="font-semibold text-xl mb-4">Contact</h3>
                {CONTACT.map((item) => (
                  <li key={item.id} className="nav-item my-2 flex ">
                    <i className="text-white mr-2">{item.icon}</i>
                    <span className="nav-link text-white fa4-ma">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </section>
      </div>
      <div className="container mx-auto text-white pt-16">
        <div className="flex justify-center text-lg font-normal">
          <p>© 2045 All Rights Reserved. By HTML Design</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
