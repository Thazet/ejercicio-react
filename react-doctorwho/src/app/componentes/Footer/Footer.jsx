import React from "react";
import { MenuRrss } from "./MenuRrss";
import "./globals.css";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="overlap-group">
                <div className="rectangle" />
                <MenuRrss className="menu-rrss" />
                <img className="logo-cadena" alt="Logo cadena" src="logo-cadena.png" />
                <img className="vector" alt="Vector" src="vector-1.svg" />
            </div>
        </div>
    );
};
