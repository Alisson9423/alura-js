var campos =  [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);


var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit',function(event){
    event.preventDefault();
    
    var tr = document.createElement('tr'); //criando tr
    
    campos.forEach(function(campo){//chamando essa function com cada elemento do array 
        var td = document.createElement('td');// criando a td
        td.textContent = campo.value;//add conteudo no meio da td
        tr.appendChild(td);
        
    });
    
    var tdVolume = document.createElement('td');//criando uma td para exibir resultado de valume  
    tdVolume.textContent = campos[1].value * campos[2].value; //resultado da multiplicação
    tr.appendChild(tdVolume);//add td
    
    tbody.appendChild(tr);//add tr na no tbody
    
    
    //restando valores 
    campos[0].value = ''; 
    campos[1].value = 1;
    campos[2].value = 0;
    
    //add foco na data 
    campos[0].focus();
    
});