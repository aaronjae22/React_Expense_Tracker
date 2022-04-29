import React, { useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {

    const { transactions } = useContext(GlobalContext);


    return (

        <React.Fragment>

            {/* To be replaced with a transaction component */}
            <h3>History</h3>
                <ul className="list">
                    {transactions.map(transaction => (
                        <li className="minus">
                        {transaction.text} <span>-$400</span><button className="delete-btn">x</button>
                        </li>
                    ))}
                    
                </ul>

        </React.Fragment>

    )
}