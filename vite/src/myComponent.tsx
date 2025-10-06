import React from "react";
import config from "./env-config";

export const MyComponent : React.FC = () => {

  console.log(config.ENVIROMENT_STRING);

  return (
    <div className="container">
        <div className="logo">
            <img src="./src/content/logo_1.png" alt="vite" />
        </div>
        <h1 className="headerTitle">Hello world from React in Vite</h1>
        <p>In {config.ENVIROMENT_STRING}</p>
    </div>
  )
};