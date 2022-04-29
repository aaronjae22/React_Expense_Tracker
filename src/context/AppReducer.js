// AppReducer is how we specify the application state changes
// in response to certain actions

export default (state, action) => {
    switch(action.type) {

        case 'DELETE_TRANSACTION':
            return {
                ...state,
                // send down all the transactions except the one that is being deleted
                transactions: state.transactions.filter(transaction => transaction.id !== 
                    action.payload)
            }

        default:
            return state;
    }
}