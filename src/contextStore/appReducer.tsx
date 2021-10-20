import {reducerStateType,reducerActionType} from '../components/types'
export default (state:reducerStateType[], action:reducerActionType):reducerStateType[] => {
    switch (action.type) {
        case 'DELETE':
            return state.filter(transaction => transaction.id !== action.payload)
        case 'ADD':
            return state=[action.payload,...state]
        default:
            return state;
    }
}