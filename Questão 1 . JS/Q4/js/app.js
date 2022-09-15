
function experiencia(anos)
 {
     anos = Number (prompt("Dígite quantos anos você tem de experiência"))
     if (anos >= 0 &&  anos <=1) {
         var xp = "iniciante";
     } 
     else if (anos >= 1 &&  anos <=3){
         var xp = "Intermediario";
     }
     else if (anos >= 3 &&  anos <=6) {
         var xp = "Avançado";
     }
     else{
        var xp = "Jedi master"
     }
     return xp
 }
     console.log(experiencia());

  








