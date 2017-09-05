/*

 * 
 */
class NegociaoesView extends View{
    
    constructor(elemento){
        super(elemento);//passando elelmento para class super no caso a class pai View
    }
    
    template(model){//model é um objeto da class ListaNegociacoes.js 
        // `` => template string 
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
                                        console.log(n);
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
                            
                             <tfoot>
                            <td colspan="3"></td>
                            <td>${(function(){//roubando utilizando IIFE
                                let total = 0;
                                model.Negocioaoes.forEach(n => total+= n.volume);
                                return total;
                                
                            })()}</td>
                            </tfoot>
                             
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
    }
    
    
    
}