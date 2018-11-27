import React from 'react';
import './score.css';


class Score extends React.Component {

    render(){

        var attempts = this.props.attempts;
        var percentage = Math.round((this.props.score / attempts) * 100);
    
        if (isNaN(percentage)){
            percentage = "-";
        }
    
        // if attempts is not yet defined, set it to zero
        if (isNaN(attempts)){
            attempts = 0;
        }
        
        return (
            <div className="results">
                <div className="score">{this.props.score} / {attempts}</div>
            </div>
        );
    }

}


export default Score;