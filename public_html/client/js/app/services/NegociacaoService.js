class NegociacaoService {
    
    obterNegociacoesDaSemana(cb){
        let xhr = new XMLHttpRequest();
        xhr.open('GET','negociacoes/semana');
        
        
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4){
            
                if(xhr.status == 200){
                console.log("ok");
                cb(null,JSON.parse(xhr.responseText)
                    .map(objeto => new Negociacao(new Date(objeto.data),objeto.quantidade, objeto.valor)))
                    
            
                
            }else{
               cb("Não Foi Possivel Obter as Negociaoes :(",null);
                console.log(xhr.responseText);
            }
        }
        };
       
        /*
        0: Requisição ainda não iniciada 
        1: Conxeção com servidor estabelecida
        2: Requisição Recebida
        3: Processando Requisição
        4: Requisição Comcluida e a resposta esta pronta 
         */
        xhr.send();
        
        
        
        console.log(xhr.readyState);
    }
    
    obterNegociacoesDaSemanaAnterior(cb){
        let xhr = new XMLHttpRequest();
        xhr.open('GET','negociacoes/anterior');
        
        
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4){
            
                if(xhr.status == 200){
                console.log("ok");
                cb(null,JSON.parse(xhr.responseText)
                    .map(objeto => new Negociacao(new Date(objeto.data),objeto.quantidade, objeto.valor)))
                    
            
                
            }else{
               cb("Não Foi Possivel Obter as Negociaoes :(",null);
                console.log(xhr.responseText);
            }
        }
        };
       
        /*
        0: Requisição ainda não iniciada 
        1: Conxeção com servidor estabelecida
        2: Requisição Recebida
        3: Processando Requisição
        4: Requisição Comcluida e a resposta esta pronta 
         */
        xhr.send();
        
        
        
        console.log(xhr.readyState);
    }
    
    obterNegociacoesDaSemanaRetrasada(cb){
        let xhr = new XMLHttpRequest();
        xhr.open('GET','negociacoes/retrasada');
        
        
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4){
            
                if(xhr.status == 200){
                console.log("ok");
                cb(null,JSON.parse(xhr.responseText)
                    .map(objeto => new Negociacao(new Date(objeto.data),objeto.quantidade, objeto.valor)))
                    
            
                
            }else{
               cb("Não Foi Possivel Obter as Negociaoes :(",null);
                console.log(xhr.responseText);
            }
        }
        };
       
        /*
        0: Requisição ainda não iniciada 
        1: Conxeção com servidor estabelecida
        2: Requisição Recebida
        3: Processando Requisição
        4: Requisição Comcluida e a resposta esta pronta 
         */
        xhr.send();
        
        
        
        console.log(xhr.readyState);
    }
}