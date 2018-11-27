import React from 'react';
import './button.css';

class Button extends React.Component {

    render(){

        let buttonText = "Answer";
        
        return (
            <button className="button" onClick={this.props.updateIndex}>{buttonText}</button>
        );
    }

}

export default Button;