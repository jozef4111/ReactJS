import React from 'react';
import './Step.css';

function Step(props) {

    return (
        <div>
            <span className="step">Krok: </span>
            <input type="number" min="1" value={props.stepValue} onChange={props.changeStepValue} />
        </div>
    );
}

export default Step;