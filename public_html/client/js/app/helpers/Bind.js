class Bind {
    constructor(model , view ,...props){
        let proxy = ProxyFactory.create(model,props,(model) => // cirando um proxy com um objeto de ListaNegociacoes e NegociaoesView
            view._update(model)); // quando as propriedades da view forem alterada eu chamo o update  
            view._update(model); // ja que a view quando inicia o navegador ainda n foi setado nenhum valor eu inicio ela manualment vazia 
            return proxy;
            
    }
}