const SUELDO= 115000
let extra= parseInt (prompt("Ingresar monto extra"))
let sueldo_total= SUELDO + extra

for(index=0; index<=sueldo_total; index++){
    alert("El sueldo total es de " + sueldo_total)
    if(extra<10000){
        alert("Tenes que esforzarte más")
    }else if(extra<30000){
        alert("Vas mucho mejor")
    }else{
        alert("No tenes techo")
    }
    if(extra >= 0){
        break
    }
}