import * as React from 'react';
import './custom.css'

interface IState{}
interface IProps{}
export default class LastLettersMenu extends React.Component<IProps,IState>{
render(){
    return(
            <div className="last_letters_menu">
            <a className="last_letters" href="#">1st letter </a>
            <a className="last_letters" href="#">2nd letter </a>
            <a className="last_letters" href="#">3rd letter </a>
            <a className="last_letters" href="#">4th letter </a>
            <a className="last_letters" href="#">5th letter </a>
            </div>

    
    
    
    
    
    

    
    
    );
}

}