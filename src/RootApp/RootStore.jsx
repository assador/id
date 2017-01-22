import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import RootActionTypes from './RootActionTypes.jsx';
import RootDispatcher from '../Dispatcher.jsx';


class RootStore extends ReduceStore {
  constructor() {
    super(RootDispatcher);
  }

  getInitialState() {
    return Immutable.Map({'cls':''});
  }

  reduce(state, action) {
    switch (action.type) {
      case RootActionTypes.SET_ROOT_MODULE:
        return state.set('cls',action.cls);
      default:
        return state;
    }
  }
}

export default new RootStore();
