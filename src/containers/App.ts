import { connect } from 'react-redux'
import App from '../App';
import { change_loading } from '../actions';


const mapStateToProps = (state:any) =>({
    showLoading:state.showLoading
});

const mapDispatchToProps = (dispatch:any) =>({
    setShowLoading(status:boolean){
        dispatch(change_loading(status));
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(App);