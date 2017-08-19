/*

 * 
 */
class NegociaoesView{
    
    constructor(elemento){
        this._elemento = elemento;//o elemento e minha referencia no html no caso a div com id negociaoesView
    }
    
    _template(model){//model é um objeto da class ListaNegociacoes.js
        return `
        <div class="py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Quantidade</th>
                                    <th>Valor</th>
                                    <th>Volume</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${                                
                                    model.Negocioaoes.map(n => {
                                        return `
                                            <tr>
                                                <td>${DateHelper.dataParaTexto(n.data)}</td>                                                
                                                <td>${n.quantidade}</td>                                                
                                                <td>${n.valor}</td>                                                
                                                <td>${n.volume}</td>                                                
                                            </tr>
                                        `
                                    }).join("")
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
    }
    
    _update(model){
        this._elemento.innerHTML = this._template(model);//atualizando um template 
    }
    
}