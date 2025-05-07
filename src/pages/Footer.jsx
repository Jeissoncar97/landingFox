import React from "react";
import { Link } from "react-router-dom";
import LogoFooter from "../assets/images/logo-footer.png";

const Footer = () => {
    const socialLinks = {
        "facebook-f": "https://www.facebook.com/tu_pagina",
        "instagram": "https://www.instagram.com/tu_perfil",
    };

    return (
        <footer>
            {/* Top Footer */}
            <div className="bg-gray-800 py-4 text-gray-400">
                <div className="container px-4 mx-auto">
                    <div className="-mx-4 flex flex-wrap justify-between">

                        {/* Logo + About */}
                        <div className="px-4 my-4 w-full xl:w-1/5">
                            <Link to="/">
                                <img
                                    src={LogoFooter}
                                    alt="Logo"
                                    className="w-40 hover:brightness-200 transition duration-100"
                                />
                            </Link>
                            <p className="text-justify mt-2">
                                En Fox Pizza preparamos cada pedido al momento, con el sabor que nos ha acompañado por más de 7 años. ¡Gracias por ser parte de nuestra historia!
                            </p>
                        </div>

                        {/* Links */}
                        <div className="px-4 my-4 w-full sm:w-auto">
                            <h2 className="text-2xl pb-4 mb-4 border-b-4 border-primary">LINKS</h2>
                            <ul className="leading-8 flex flex-col">
                                <Link to="/"><p className="hover:text-blue-400">Inicio</p></Link>
                                <Link to="/About"><p className="hover:text-blue-400">Nosotros</p></Link>
                                <Link to="/Contact"><p className="hover:text-blue-400">Contacto</p></Link>
                                <Link to="/Menu"><p className="hover:text-blue-400">Menú</p></Link>
                                <Link to="/Menu"><p className="hover:text-blue-400">Haz tu pedido</p></Link>
                            </ul>
                        </div>

                        {/* Menú Items */}
                        <div className="px-4 my-4 w-full sm:w-auto">
                            <h2 className="text-2xl pb-4 mb-4 border-b-4 border-primary">Menú</h2>
                            <ul className="leading-8 flex flex-col">
                                <Link to="/About"><p className="hover:text-blue-400">Pizzas</p></Link>
                                <Link to="/About"><p className="hover:text-blue-400">Lasagnas</p></Link>
                                <Link to="/Contacto"><p className="hover:text-blue-400">Spaguettis</p></Link>
                                <Link to="/Menu"><p className="hover:text-blue-400">Otros gustos</p></Link>
                                <Link to="/Menu"><p className="hover:text-blue-400">Sabor mexicano</p></Link>
                                <Link to="/Menu"><p className="hover:text-blue-400">Hamburguesas</p></Link>
                                <Link to="/Menu"><p className="hover:text-blue-400">Adiciones</p></Link>
                                <Link to="/Menu"><p className="hover:text-blue-400">Bebidas</p></Link>
                            </ul>
                        </div>

                        <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
                            <h2 className="text-2xl pb-4 mb-4 border-b-4 border-primary">Visita nuestras redes</h2>
                            <div className="flex">
                                {Object.entries(socialLinks).map(([platform, url], i) => (
                                    <a
                                        key={i}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-2 hover:text-blue-400 hover:border-blue-400"
                                    >
                                        <i className={`fab fa-${platform} w-4 h-4`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="bg-indigo-700 py-2 text-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <div className="text-center">
                            Desarrollado & Diseñado por{" "}
                            <a
                                href="https://www.facebook.com/jeisson.andres.39589/"
                                className="hover:text-blue-400 transition duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Jeisson Cardenas
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
