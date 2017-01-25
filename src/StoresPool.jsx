import {ReduceStore} from "flux/utils";
import AppDispatcher from "./Dispatcher.jsx";

/*
Это вроде бы полезная штука
Здесь мы создаем и храним Storages
удобство в том, что мы их можем убивать, отключать, включать и создавать
Что хорошо
*/
class StoresPool {
    constructor(){
      this._stores={};
    }
    create(id,storeCls){
        var o=this._stores[id];
        if(o) return o.store;
        this._stores[id]={
          registered:true,
          store:new storeCls()
        };
    }
    remove(id){
      var o=this._stores[id];
      if(o){
          this.off(id);
          o.store=null;
          this._stores[id]=null;
          delete this._stores[id];
        }
    }
    off(id){
      var o=this._stores[id];
      if(o && o.registered){
          AppDispatcher.unregister(o.store.getDispatchToken());
      }
    }
    on(id){
      var o=this._stores[id];
      if(o && !o.registered){
          AppDispatcher.register(o.store);
      }
    }
    item(id){
      return this._stores[id]?this._stores[id].store:null;
    }
    arr(...ids){
      var ret=[];
      ids.map(id=>{
        if(this._stores[id]){
          ret.push(this._stores[id].store);
        }
      })
      return ret;
    }
}

export default new StoresPool();
