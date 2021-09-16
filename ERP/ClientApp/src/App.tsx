import * as React from 'react';
import './custom.css'
import graphImg from "./graph1.png"
import Header from './Header';
import VerticalNav from './VerticalNav'
import LastLettersMenu from './LastLettersMenu'
import Graph from './Graph'

interface IState { }
interface IProps { }
export default class App extends React.Component<IProps, IState>{
  render() {
    return (

      <div>    

        <Header></Header>
          <div className="main_content">
            <VerticalNav></VerticalNav>
            <LastLettersMenu></LastLettersMenu>
            <Graph></Graph>
          </div>
        </div>











    );
  }

}