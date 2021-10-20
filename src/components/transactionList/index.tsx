import React, { useContext } from 'react'
// import { GlobalContext } from '../ContextStore/GlobalState'
import Transaction from './transaction'


const TransactionList = () => {
    // const { transaction } = useContext(GlobalContext);
    // console.log(content)
    return (
        <div>
            <h3>History</h3>
            <hr />
            <ul className="list">
                <Transaction/>
                {/* {transaction.map((v, i) => <Transaction transaction={v} key={i} />)} */}
            </ul>
        </div>
    )
}

export default TransactionList
