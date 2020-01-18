import React from "react";
import EnsarBavrkLogo from "../images/Ensar.svg";
import './layout.css';

export const Footer = () => {
  return (
    <div className={'layout-footer'}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center', backgroundColor: '#0f0f0f', width: '100%', padding: '10px 20px'}}>
        <p style={{margin: 0, fontSize: 12}}>The footer year @ {new Date().getFullYear()}
          <span style={{ marginLeft: 10}} className={'emojis'} role="img" aria-label="Face With Hand Over Mouth">🤭</span>
        </p>
        <EnsarBavrkLogo style={{ height: 30, width: 100 }} />
      </div>
    </div>
  );
}