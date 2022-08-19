import React from "react";
import { Link } from "react-router-dom";
import FooterBg from '../../Assets/images/footer.png';
const Footer = () => {
const currentYear = (new Date().getFullYear());
  return (
    <footer style={{
      background:`url(${FooterBg})`,
      backgroundSize: 'cover'
    }} className="footer-center" >
      <div className="footer p-10 bg-white text-secondary-content">
      <div>
        <span className="footer-title">Services</span>
        <Link to='/' className="link link-hover">Branding</Link>
        <Link to='/' className="link link-hover">Design</Link>
        <Link to='/' className="link link-hover">Marketing</Link>
        <Link to='/' className="link link-hover">Advertisement</Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link to='/' className="link link-hover">About us</Link>
        <Link to='/' className="link link-hover">Contact</Link>
        <Link to='/' className="link link-hover">Jobs</Link>
        <Link to='/' className="link link-hover">Press kit</Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link to='/' className="link link-hover">Terms of use</Link>
        <Link to='/' className="link link-hover">Privacy policy</Link>
        <Link to='/' className="link link-hover">Cookie policy</Link>
      </div>
      
      </div>
      <p className="my-16">Copyright © {currentYear} - 
      <a href='https://mollikacomputer.com/' className="link link-hover" target="_blank" >MollikaComputer</a>
       </p>
    </footer>
  );
};

export default Footer;