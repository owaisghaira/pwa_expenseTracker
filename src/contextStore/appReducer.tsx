// import { reducerStateType, reducerActionType } from "../components/types";
// export default (state: reducerStateType[],action: reducerActionType): reducerStateType[] => {
//   switch (action.type) {
//     case "DELETE":
//       return state.filter((transaction) => transaction.id !== action.payload);
//     case "ADD":
//       return (state = [action.payload, ...state]);
//     default:
//       return state;
//   }
// };
import { reducerActionType, reducerStateType } from '../components/types'


export default (state: reducerStateType[], action: reducerActionType):reducerStateType[] => {


    switch (action.type) {
        case 'DELETE_TRANSACTION':



            return state.filter(trans => trans.id !== action.payload)

        case 'ADD_TRANSACTION':



            return state = [action.payload, ...state]



        default:
            return state;
    }
}