import React, { useState, useEffect } from 'react';
import './ClockFunctional.css';

const ClockFunctional = (props) => {

    console.log(`Initialization lifecycle: setting state: [date, setDate]`);

    const [date, setDate] = useState(new Date());

    const tick = () => setDate(new Date());

    useEffect(() => {
        let timerId = setInterval(
            () => { tick() },
            1000
        );
        console.log(`Mounting && updation lifecycle: componentDidMount() && componentDidUpdate()`);

        return (() => {
            clearInterval(timerId)
            console.log(`Unmounting lifecycle: componentWillUnmount()`);
        });
    }, [date]);

    return (
        <div className="clock">
            <h4>Time: {date.toLocaleTimeString()} <span onClick={props.toggleClockMethod}>X</span></h4>
        </div>
    );
}

export default ClockFunctional;