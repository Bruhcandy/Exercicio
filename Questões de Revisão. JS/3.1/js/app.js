
function tabuada(){
    var number = parseInt(document.getElementById("number").value);
    var resposta = document.getElementById('resposta');
    var tabuada='';
  
    for(var i=1; i<=10 ; i++)
     tabuada += number+" x "+i+" = "+
                 number*i+"<br />";
    
    resposta.innerHTML = tabuada;
  }







  








