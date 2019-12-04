import { connect } from 'react-redux'
import { addUsuario } from '../actions';
import Apps, { iLogUsuario } from '../pages/login';


const mapStateToProps = (state:any) =>({

});

const mapDispatchToProps = (dispatch:any) =>({
  evAddUsuario(usuario:iLogUsuario){
    if(usuario.id>0){
      let user={
        id:usuario.id,
        nombre:'gael'
      }
      console.log(user);
      dispatch(addUsuario(user))
    }
  }
});

export default connect(
    mapStateToProps,
  mapDispatchToProps)(Apps);

