import RootActionTypes from './RootActionTypes.jsx';
import RootDispatcher from '../Dispatcher.jsx';
import ServerApi from '../ServerApi.jsx';

const RootActions = {
/*
cls - is an ID of requested modeule
data - is an Object with params to send {'param1':'val1','param2':'val2'...}
*/
  loadModule(cls,data) {
    ServerApi.ask(cls,data);
    this.setModule("Loading");
  },

  setModule(cls,data){
    RootDispatcher.dispatch({
      type: RootActionTypes.SET_ROOT_MODULE,
      cls:cls,
      data:data,
    });
  }
};

export default RootActions;
