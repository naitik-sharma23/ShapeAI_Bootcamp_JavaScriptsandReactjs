import React from "react";
function Footer() {
   var c_Year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {c_Year} </p>
    </footer>
  );
}
export default Footer;