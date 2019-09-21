/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable*/
import { CHANGETOEN,CHANGETOAR } from "../actions/actionNames";
const defaultState = {
    isRTL:false
}
export default function complaintReducer(state = defaultState, action) {
    switch (action.type) {
        case CHANGETOAR:
            return {
                ...state,             // keep the existing state,
                isRTL:true
            };
        case CHANGETOEN:
            return {
                ...state,             // keep the existing state,
                isRTL:false
            };
        default:
            return state;
    }
};
