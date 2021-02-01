import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Dinesh Pandikona</h2>
        <p><a href="mailto:pandikonadinesh13@gmail.com">pandikonadinesh13@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Dinesh. I like building things.
        I am currently <a href="http://www.vnrvjiet.ac.in/">VNR VJIET</a> under graduate, Team-Lead for a group of 6 at my workplace.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Dinesh Pandikona <Link to="/">dineshpandikona.me</Link>.</p>
    </section>
  </section>
);

export default SideBar;
