import React from "react";
import {createRoot}  from "react-dom/client";
//import { ReactDOM } from "react-dom";
import './index.css';
import PrimeraApp from "./PrimeraApp";

const container = document.querySelector('#root');
const saludo=<h1>Hola mundo</h1>;

const root=createRoot(container);
root.render(<PrimeraApp nombre={"María"}  />)
//ReactDOM.render(saludo, root);



