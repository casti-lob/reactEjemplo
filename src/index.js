import React from "react";
import {createRoot}  from "react-dom/client";
import CounterApp from "./CounterApp";
//import { ReactDOM } from "react-dom";
import './index.css';
//import PrimeraApp from "./PrimeraApp";


const container = document.querySelector('#root');
//const saludo=<h1>Hola mundo</h1>;

const root=createRoot(container);
root.render(<CounterApp value={20}  />)
//ReactDOM.render(saludo, root);



