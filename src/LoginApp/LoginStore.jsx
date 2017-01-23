import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import LoginActionTypes from './LoginActionTypes.jsx';
import RootDispatcher from '../Dispatcher.jsx';


class LoginStore extends ReduceStore {
  constructor() {
    super(RootDispatcher);
  }

  getInitialState() {
    return Immutable.Map({'mode':'form'});
  }

  reduce(state, action) {
    console.log("LoginStore");
    console.log(action);
    switch (action.type) {
      case LoginActionTypes.LOGIN_SET_MODE:
        return state.set('mode',action.mode);
      default:
        return state;
    }
  }
}

export default new LoginStore();
