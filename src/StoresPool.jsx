import invariant from "invariant";

class FluxStoresPool {
    constructor(){
      this._stores={};
    }
    create(id,storeCls){
        var o=this._stores[id];
        if(o) return o.store;
        let s=new storeCls();
        if(!s.getDispatcher || !s.getDispatchToken)
          invariant(false,"Store creation error: store class should has getDispatcher and getDispatchToken methods");
        this._stores[id]={
          registered:true,
          store:s
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
      if(o && o.dospatcher){
          o.store.getDispatcher().unregister(o.store.getDispatchToken());
      }
    }
    on(id){
      var o=this._stores[id];
      if(o && !o.registered){
          o.store.getDispatcher().register(o.store);
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

export default new FluxStoresPool();
