import React from "react";


import Card from "./Card";

import {Link} from 'react-router-dom';
import logoImg from '../../assets/images/logoAppWhite.svg';
import backIcon from '../../assets/images/icons/back.svg';
import PageHeader from '../../components/PageHeader';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
      root: {
      flexGrow: 0,
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

export default function Avaliaçaõ() {
    const classes = useStyles();
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

                <Card />
            </React.StrictMode>,
            

        </div>
    );
}