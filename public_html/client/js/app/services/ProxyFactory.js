class ProxyFactory {
    /*ah ideia é quando o view for modifica ela deve se atualizar automaticamente */
    
    /*quando vc chama  um metodo em javascript ele faz um get na function primeiro e depois um Reflect.apply para passar o valor  */
    static create(objeto, props, acao) {
     
        return new Proxy(objeto, {
                
                get(target, prop, receiver) { //target = alvo no caso ListaNegociacoes props = propiedade  acao = assim que achar alvo vai executar uma ação reciver = referencia ao meu proxy
                    
                    if(props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {// se dentro do array existir propriedades 'adiciona ow esvazia' EEEE  éééé´uma function ele executa o codigo a baixo se NÃO é uma leitura de um get padrão e deixa o fluxo acontecer normal 'isso tudo por que dentro do javascript existe uma função que se chama function :( '
                        
                        return function() {
                            
                            console.log(`interceptando ${prop}`);
                            let retorno = Reflect.apply(target[prop], target, arguments); //Reflect executando operação de leitura no objeto original da propriedade ques estou acessando mais info sobre https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply
                            acao(target);
                            return retorno;
                        }
                    }
                    
                    return Reflect.get(target, prop, receiver);
                },
                
                set(target, prop, value, receiver) { //target = alvo props = propiedade  acao = assim que achar alvo vai executar uma ação value = valor a ser alterado  reciver = referencia ao meu proxy
                    
                    let retorno = Reflect.set(target, prop, value, receiver);
                    if(props.includes(prop)) acao(target);
                    return retorno;
                }
        });
    }
    
    static _ehFuncao(func) {
        
        return typeof(func) == typeof(Function);
    }
}