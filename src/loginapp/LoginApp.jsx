import {Container} from 'flux/utils';
import LoginStore from './LoginStore.jsx';
import LoginActions from './LoginActions.jsx';
import LoginForm from './LoginForm.jsx';
import LoginWait from './LoginWait.jsx';

class LoginApp extends React.Component {
    static getStores(){
      return [LoginStore];
    }

    static calculateState(prevState){
      return {
        loginStore:LoginStore.getState()
      }
    }

    componentDidMount(){
      
      LoginActions.setMode('form');
    }

    render (){
      const mode=this.state.loginStore.get('mode');
      switch(mode){
        case 'form':
          return <LoginForm/>
        case 'loading':
          return <LoginWait/>
        default:
          return <div>Panic, there is no {mode} cather</div>
      }
    }
}

export default Container.create(LoginApp);
