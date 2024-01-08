import React from "react";
import { VerAhora } from "./VerAhora";
import "./carrusel.css";
export const Box = () => {
    return (
        <div className="box">
            <div className="carrusel-mobile">
                <div className="text-carrusel">
                    <VerAhora className="ver-ahora-instance" />
                    <div className="div">Allons-y!</div>
                </div>
            </div>
        </div>
    );
};
export const CarruselButtons = () => {
    return (
        <div className="carrusel-buttons">
            <div className="ellipse" />
            <div className="div" />
            <div className="ellipse-2" />
            <div className="ellipse-3" />
            <div className="ellipse-4" />
        </div>
    );
};

