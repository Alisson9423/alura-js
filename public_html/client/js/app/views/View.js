class View {
    constructor(elemento){
        this._elemento = elemento; //o elemento e minha referencia no html no caso a div com id negociaoesView
    }
    
    template(){
        throw new Error("O Metodo Template Deve Ser Implementado ")
    }
    
    _update(model){
        this._elemento.innerHTML = this.template(model);//
    }
}