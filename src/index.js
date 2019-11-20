import React from 'react';
import ReactDOM from 'react-dom';

const stateInfo = (
    state, state1, state2, state3, state4, 
    pop, popState1, popState2, popState3, popState4, 
    capital, capState1, capState2, capState3, capState4) => {
    return (
        <div>
            <tr>
                <th>{state}</th>
                <th>{pop}</th>
                <th>{capital}</th>
            </tr>
            <tr>
                <td>{state1}</td>
                <td>{popState1}</td>
                <td>{capState1}</td>
            </tr>
            <td>{state2}</td>
            <td>{popState2}</td>
            <td>{capState2}</td>
            <tr>
                <td>{state3}</td>
                <td>{popState3}</td>
                <td>{capState3}</td>
            </tr>
            <tr>
                <td>{state4}</td>
                <td>{popState4}</td>
                <td>{capState4}</td>
            </tr>
        </div>
    )
};

ReactDOM.render(
    stateInfo("State", "Idaho", "Tennessee", "Maine", "Wisconsin", 
    "Population", "0", "6.651 million", "1.331 million", "5.779 million", 
    "Capital", "Boise", "Nashville", "Agusta", "Madison"),
    document.getElementById('root')
);