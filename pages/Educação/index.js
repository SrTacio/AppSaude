import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import {Link} from 'react-router-dom';
import logoImg from '../../assets/images/logoAppWhite.svg';
import backIcon from '../../assets/images/icons/back.svg';
import PageHeader from '../../components/PageHeader';
import { makeStyles } from '@material-ui/core/styles';


export default function Educação() {

    
const rootElement = document.getElementById("root");
return (
  <div id="page-cuidadores" className="container">
  {/* <PageHeader/> */}
  <header className="page-header">
    <div className="top-bar-container">
      <Link to= "/AppMenu"> 
      <img src={backIcon} alt="Voltar" />
      </Link>
      <img src={logoImg} alt="Cuidador" />      
    </div>
  
    <div className ="header-content">
      <strong>Educação em Dor</strong>
    </div>
  </header> 

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </div>

);
}