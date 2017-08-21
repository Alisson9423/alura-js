class ProxyFactory{
    
    static create(Objeto,props,acao){
       return  new Proxy(new ListaNegociacoes(),{
           get(target,prop,reciver){
               
                if(props.includes(prop) && typeof(target[prop]) == typeof(Function)){
                    return function(){
                        console.log(`interceptando ${prop}`);
                        Reflect.apply(target[prop],target,arguments);
                        return acao(target);
                    };
                }
                
            return Reflect.get(target,prop,reciver);
           } 
        });
    }
}