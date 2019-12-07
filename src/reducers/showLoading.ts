import { TYPES } from "../constants";

export interface iActionsShowLoading{
    type:any,
    status:boolean
}

const showLoading:any=(state:boolean,actions:iActionsShowLoading)=>{
    switch(actions.type){
        case TYPES.CHANGE_SHOW_LOADING:
            return actions.status;
        default:
            return false;
    }
}

export default showLoading;