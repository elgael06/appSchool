import { CHANGE_SHOW_LOADING } from "../constants";

export interface iActionsShowLoading{
    type:string,
    status:boolean
}

const showLoading:any=(state:boolean,actions:iActionsShowLoading)=>{
    switch(actions.type){
        case CHANGE_SHOW_LOADING:
            return actions.status;
        default:
            return false;
    }
}

export default showLoading;


