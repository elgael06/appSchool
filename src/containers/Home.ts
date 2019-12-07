import { connect } from 'react-redux';
import Home from '../pages/Home';


const mapStateToProps = (state:any) =>({
    usuario:state.Usuario
});

const mapDispatchToProps = (dispatch:any) =>({

});

export default connect(
    mapStateToProps,
  mapDispatchToProps)(Home);
