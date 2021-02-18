import React from 'react';

import './styles.css';

import Background from '../../components/Background';
import Header from '../../components/Header';
import Card from '../../components/Card';

import ECommerceIcon from '../../assets/Icon-E-commerce.svg';
import SoftwareIcon from '../../assets/Icon-Software.svg';
import SiteInstIcon from '../../assets/Icon-Site.svg';
import HomeIcon from '../../assets/house-image.svg';

const eCommerceDesc = "Sua loja online pronta para entregar o máximo de valor aos seus clientes.";
const eCommerceAlt = "E-Commerce Icon";

const softwareDesc = "Sistemas de gerenciamento feitos de forma personalizada para sua empresa.";
const softwareAlt = "Software Icon";

const siteInstDesc = "Sua empresa posicionada na web com um site completo.";
const siteInstAlt = "Site Institucional Icon";


class Home extends React.Component{

  render(){
    return(
      <div className="home">
        <Background/>
        <div className="container">
          <Header/>
          <div className="menu-description">
            <div className="software-house">
              <img src={HomeIcon} alt="Home Icon"/>
              <h3>SOFTWARE HOUSE</h3>
            </div>
            <div className="home-description">
              <div className="title">
                <h1>Projetos <span>{"<"}</span>web & mobile<span>{">"}</span> de um jeito descomplicado</h1>
              </div>
              <div className="description">
                <p>
                Desenvolvemos projetos focados em entregar uma aplicação de ponta, alinhando design e desenvolvimento para sua aplicação.
                </p>
              </div>
              <div className="buttons-description">
                <button>Começar um Projeto!</button>
                <button className="outline-button">Ver Projetos</button>
              </div>
            </div>  
          </div>
        </div>
        <div className="card-container">
          <Card title="E-Commerce" description={eCommerceDesc} iconImg={ECommerceIcon} iconAlt={eCommerceAlt}/>
          <Card title="Software" description={softwareDesc} iconImg={SoftwareIcon} iconAlt={softwareAlt}/>
          <Card title="Site Institucional" description={siteInstDesc} iconImg={SiteInstIcon} iconAlt={siteInstAlt}/>
        </div>
      </div>
    );
  }

};

export default Home;