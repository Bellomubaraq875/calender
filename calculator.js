let result = document.getElementById("inputext");

let calculator = (number) => {
    result.value = result.value+number;
}


let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("Incorrect value");
    }
}
function clr(){
    result.value = " ";
}
function del() {
    result.value = result.value.slice(0,-1);
}