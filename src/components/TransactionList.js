import React from 'react';

export const TransactionList = () => {
    return (

        <React.Fragment>

            {/* To be replaced with a transaction component */}
            <h3>History</h3>
                <ul className="list">
                    <li className="minus">
                    Cash <span>-$400</span><button className="delete-btn">x</button>
                    </li>
                </ul>

        </React.Fragment>

    )
}