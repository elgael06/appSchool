import { TYPES } from "../constants";

export interface iActionsShowLoading{
    type:string,
    status:boolean
}

const showLoading:any=(state:boolean,actions:iActionsShowLoading)=>{
    switch(actions.type){
        case TYPES.CHANGE_SHOW_LOADING:
            console.log('change status')
            return actions.status;
        default:
            return 0;
    }
}

export default showLoading;