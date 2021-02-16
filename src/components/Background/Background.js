import React from 'react';

import './Background.css';

import {ReactComponent as ModulesHome} from '../../assets/Modulos-Home.svg';

class Background extends React.Component{

  render(){
    return (
      <div className="Background">
        <div className="ModulesHome">
          <ModulesHome/>
        </div>
      </div>
    )
  }

}

export default Background;
