/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable*/
import { 
    CHANGETOEN,
    CHANGETOAR
} from "./actionNames";

export function CHANGETOENAction(){
    return dispatch=>{
        dispatch({
            type:CHANGETOEN,
        })
    }
}
export function CHANGETOARAction(){
    return dispatch=>{
        dispatch({
            type:CHANGETOAR,
        })
    }
}