import React from "react";

interface Props {}

const Logo = () => {
  return (
    <div className="text-dark font-secoundary font-semibold text-[32px] lg:text-[45px] flex">
      Real<p className="text-logoYellow">.</p>
    </div>
  );
};

export const LogoSmall = () => {
  return (
    <div className="text-dark font-secoundary font-bold text-[40px] flex">
      R<p className="text-logoYellow">.</p>
    </div>
  );
};

export default Logo;
