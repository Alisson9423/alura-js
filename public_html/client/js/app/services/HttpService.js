class HttpService {
    
    
    
    get(url){
        return new Promise((resolve,reject) =>{
            
            let xhr = new XMLHttpRequest();
            xhr.open('GET',url);
        
        
            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4){

                    if(xhr.status == 200){
                        
                        resolve(JSON.parse(xhr.responseText));
                        
                    }else{
                       Reject(xhr.responseText);
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
            
        });
    }
    
}