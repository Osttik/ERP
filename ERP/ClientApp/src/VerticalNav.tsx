import * as React from 'react';
import './custom.css'

interface IState{}
interface IProps{}
export default class VerticalNav extends React.Component<IProps,IState>{
render(){
    return(
            <div className="vertical_nav">
                <a className="vertical_nav__link" href="#">Report</a>
                <a className="vertical_nav__link" href="#">Report 2</a>
                <a className="vertical_nav__link" href="#">Send letters</a>
            </div>      

    

    
    
    
    
    
    
    

    
    
    );
}

}