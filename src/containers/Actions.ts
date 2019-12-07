import { connect } from 'react-redux'
import Actions from '../pages/Actions';


const mapStateToProps = (state:any) =>({
    usuario:state.Usuario
});

const mapDispatchToProps = (dispatch:any) =>({
});

export default connect(
    mapStateToProps,
  mapDispatchToProps)(Actions);