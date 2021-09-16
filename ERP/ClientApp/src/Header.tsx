import * as React from 'react';
import './custom.css'
import Logo1 from "./logo1.png"

interface IState{}
interface IProps{}
export default class Header extends React.Component<IProps,IState>{
render(){
    return(
        <header className="header">
        <div className="container">
          <div className="header__inner">
            <div >
              <img src={Logo1} alt="" />
            </div>
            <nav className="nav">
              <a className="nav__link" href="#">Some button</a>
              <a className="nav__link" href="#">My profile</a>
            </nav>
          </div>
        </div>
      </header>
    
    
    
    
    
    
    
    

    
    
    );
}

}