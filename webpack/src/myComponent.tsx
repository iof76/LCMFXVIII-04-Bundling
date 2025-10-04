import React from "react";
import * as myStyles from "./mystyles.scss";


export const MyComponent : React.FC = () => {

  console.log(process.env.ENVIROMENT_STRING);

  return (
    <div className={myStyles.container}>
        <div className={myStyles.logo}>
            <img src="./content/logo_1.png" alt="webpack" />
        </div>
        <h1 className={myStyles.headerTitle} >Hello world from React in Webpack</h1>
        <p>In {process.env.ENVIROMENT_STRING}</p>


    </div>
  )
};