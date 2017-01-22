import {Container} from 'flux/utils';
import RootStore from './RootStore.jsx';
import RootActions from './RootActions.jsx';

import LoginApp from '../LoginApp/LoginApp.jsx';

/*
Это компонент рута
*/

class RootApp extends React.Component {
/*
Эти две функции - черная магия. Они обязательны когда компонент является
Container - т.e. берет свое state у Store. В данном случае - мы говорим,
что испольщует RootStore и что наше state - забирается из RootState.getState()
*/
    static getStores(){
      return [RootStore];
    }

    static calculateState(prevState){
      return {
        rootStore:RootStore.getState()
      }
    }
/*
Когда он видит, что его вставили в дерево - он делает запрос на сервер на
cls = home
Это проверка прав. Если у юзера валидная session - сервер определит права,
подключит нужный вариант home и скажет, что рисовать
Если веввion не валидна - сервер выдаст команду рисовать LoginApp
*/
    componentDidMount(){
      RootActions.loadModule('home');
    }


    render (){
      const cls=this.state.rootStore.get('cls');
      switch(cls){
        case 'Loading':
          return <div>loading</div>
        case '':
          return <div>not inited yet</div>
        case 'LoginApp':
          return <LoginApp/>
        default:
          return <div>Panic, there is no {cls} cather</div>
      }
    }
}

export default Container.create(RootApp);
