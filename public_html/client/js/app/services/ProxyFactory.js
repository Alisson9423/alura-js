class ProxyFactory{
    
    static create(Objeto,props,acao){
       return  new Proxy(Objeto,{
           get(target,prop,reciver){
               
                if(props.includes(prop) && ProxyFactory._ehFuncao(target[prop])){
                    return function(){
                        console.log(`interceptando ${prop}`);
                        Reflect.apply(target[prop],target,arguments);
                        return acao(target);
                    };
                }
                
            return Reflect.get(target,prop,reciver);
           },
           
           set(target,prop,value,reciver){
               if(prop.includes(prop)){
                   acao(target);
               }
               return Reflect.set(target,prop,value,reciver);
               
           }
           
        });
    }
    
    static _ehFuncao(func){
        return typeof(func) == typeof(Function);
    }
}