import LoginActionTypes from './LoginActionTypes.jsx';
import RootDispatcher from '../Dispatcher.jsx';
import ServerApi from '../ServerApi.jsx';
import RootActions from '../ServerApi.jsx';
import LoginStore from './LoginStore.jsx';
//import RootStore from '../RootApp/RootStore.jsx';

const LoginActions = {
  setMode(mode){
    RootDispatcher.dispatch({
      type: LoginActionTypes.LOGIN_SET_MODE,
      mode:mode,
    });
  },

  sendForm(login,password){
    this.setMode('loading');
    ServerApi.ask('login',{
      'action':'in',
      'login':login,
      'password':password,
    });
  }
};

export default LoginActions;
