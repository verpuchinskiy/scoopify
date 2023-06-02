"use client";

import "./Footer.scss";
import React from "react";
import DraftsIcon from '@mui/icons-material/Drafts';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <p>Lundshøjvej, 32 6500 Vedsted</p>
        <p>Copenhagen, Denmark</p>
      </div>
      <div className="right">
        <p>Still have questions?</p>
        <p>Contact us!</p>
        <div className="icons">
            <DraftsIcon />
            <InstagramIcon />
            <TwitterIcon />
        </div>
      </div>
    </div>
  );
};
