import React from "react";
import Loactions from "./Loactions";
import Info from "./Info";
import SocialNav from "./SocialNav";
import logoUrl from "../../assets/logo.png";
import footerContent from "../../assets/footerContent.json";

const Footer = () => {
  return (
    <div className="flex flex-col gap-3">
      <Loactions locContent={footerContent.locations} />
      <Info title={footerContent.title} infoContent={footerContent.links} />
      <img src={logoUrl} alt="" className="w-full" />
      <SocialNav navContent={footerContent.nav} />
    </div>
  );
};

export default Footer;
