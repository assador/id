import invariant from "invariant";

class FluxStoresPool {
    constructor(){
      this._stores={};
    }
    create(id,storeCls,...params){
        var o=this._stores[id];
        if(o) return o.store;
        let s=new storeCls(...params);
        if(!s){
          invariant(false,"Store creation error: can't create storeCls instance");
        }
        if(!s.getDispatcher || !s.getDispatchToken){
          invariant(false,"Store creation error: store class should has getDispatcher and getDispatchToken methods");
        }
        this._stores[id]={
          registered:true,
          store:s
        };
        return s;
    }
    reBind(container,containerClass){
      if(container._fluxContainerSubscriptions)
        container._fluxContainerSubscriptions.setStores(containerClass.getStores(container.props));
    }
    remove(id){
      var o=this._stores[id];
      if(o){
          const dispatcher=o.store.getDispatcher();
          if(!o.store.getDispatchToken()) return;
          dispatcher.unregister(o.store.getDispatchToken());
          o.store=null;
          this._stores[id]=null;
          delete this._stores[id];
          return true;
        }
        return false;
    }
    off(id){
      var o=this._stores[id];
      if(o && o.registered){
          const dispatcher=o.store.getDispatcher();
          if(!o.store.getDispatchToken()) return;
          this._stores[id].storedFunc=dispatcher._callbacks[o.store.getDispatchToken()];
          dispatcher._callbacks[o.store.getDispatchToken()]=function(){};
          this._stores[id].registered=false;
          return true;
      }
      return false;
    }
    on(id){
      var o=this._stores[id];
      if(o && !o.registered){
          const dispatcher=o.store.getDispatcher();
          dispatcher._callbacks[o.store.getDispatchToken()]=o.storedFunc;
          this._stores[id].storedFunc=null;
          o.registered=true;
          return true;
      }
      return false;
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

export default new FluxStoresPool();
