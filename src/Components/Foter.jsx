import React from "react";
import link from "../assets/images/linkedin.svg";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram2.svg";
import spotify from "../assets/images/spotify.svg";
import youtube from "../assets/images/youtube.svg";
import devops from "../assets/images/devops.svg";
import iso from "../assets/images/iso.png";
import aws from "../assets/images/aws.png";

const Foter = () => {
  return (
    <footer className="bg-blue-500 text-white py-10 pl-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">CloudArcOps</h2>
            <p className="text-sm mb-4 pl-3 tracking-wider">BUILT ON TRUST</p>
            <div className="flex space-x-4 mb-6">
              <a href="#">
                <img src={link} alt="LinkedIn" className=" w-10 h-10" />
              </a>
              <a href="#">
                <img src={facebook} alt="Facebook" className="w-10 h-10" />
              </a>
              <a href="#">
                <img src={instagram} alt="Instagram" className="  w-10 h-10" />
              </a>
              <a href="#">
                <img src={youtube} alt="YouTube" className="w-10 h-10" />
              </a>
              <a href="#">
                <img src={spotify} alt="Spotify" className="w-10 h-10" />
              </a>
            </div>
            <div className="flex space-x-4">
              <img src={devops} alt="GoodFirms Badge" className="w-20 h-20" />
              <img src={iso} alt="ISO Badge" className="w-20 h-20" />
              <img src={aws} alt="AWS Badge" className="w-20 h-20" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white-500">
              QUICK LINKS
            </h3>
            <ul className="flex space-x-4 mb-4">
              <li>
                <a href="#" className="flex items-center">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  Resources
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white-500">
              OUR OFFICES
            </h3>
            <ul className="space-y-4">
              <li>
                <p className="flex items-center">
                  <span className=" mr-2">📍</span> Surat, Gujarat
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white-500">
              CONTACT NUMBER
            </h3>
            <ul className="space-y-4">
              <li>
                <p className="flex items-center">+91 9999999999</p>
                <p>+91 9999999999</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-2 text-center">
          <p>Privacy Policy</p>
          <p>© 2024 CloudArcOps LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Foter;