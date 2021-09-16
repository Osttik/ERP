import * as React from 'react';
import './custom.css'
import graphImg from "./graph1.png"

interface IState{}
interface IProps{}
export default class Graph extends React.Component<IProps,IState>{
render(){
    return(
          <div className="graph">
            <h1 className="text_in_graph">Graph which shows your report statictic per every week:</h1>
             <img src={graphImg} alt="" height="200px" width="300px"/>
          </div>
        
    );
}

}