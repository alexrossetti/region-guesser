import React from 'react';
import './Name.css';

class Name extends React.Component {

    render(){

        //console.log(this.props.name);
        
        return(
            <div className="name">{this.props.name} {this.props.surname}</div>
        );

    }
}

export default Name;