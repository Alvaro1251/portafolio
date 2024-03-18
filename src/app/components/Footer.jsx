import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    // <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
    <footer className="footer border border-t-[#33353F] border-l-transparent border-b-transparent border-r-transparent">
      {/* <div className="container p-12 flex justify-center"> */}
      <div className="flex justify-center p-12">
        <p className="text-slate-600">
          Muchas gracias por visitar mi portfolio. ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
