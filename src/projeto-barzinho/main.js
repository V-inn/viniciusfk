const valorArrecadado = document.getElementById("valorArrecadado");
const valorAdicional = document.getElementById("valorAdicional");

function boloClick(){addValue(3); addQuantity("bolo");};
function brigadeiroClick(){addValue(1); addQuantity("brigadeiro");};
function pizzaClick(){addValue(2.5); addQuantity("pizza");};
function sucoClick(){addValue(2.5); addQuantity("suco");};
function paoClick(){addValue(2); addQuantity("pao");};
function donutClick(){addValue(2); addQuantity("donut");}
function sucoGrandeClick(){addValue(8); addQuantity("sucoGrande");}
function cafeClick(){addValue(1); addQuantity("cafe");}

function adicionarClick(){addToTotal(); makeVisible(false);};
function cancelarClick(){cancelOperation(); makeVisible(false);};

var sumVal = 0.0;

var tempData = {
    bolo: 0,
    brigadeiro: 0,
    pizza: 0,
    suco: 0,
    pao: 0,
    donut: 0,
    sucoGrande: 0,
    cafe: 0
}

var storedData = {
    bolo: 0,
    brigadeiro: 0,
    pizza: 0,
    suco: 0,
    pao: 0,
    donut: 0,
    sucoGrande: 0,
    cafe: 0,
    value: 0.0
}

function makeVisible(val){
    if(val){
        document.getElementById("botoesAcao").classList.remove("invisible");
    }else{
        document.getElementById("botoesAcao").classList.add("invisible");
    }
}

function addValue(value){
    if(isNaN(parseFloat(valorAdicional.innerText))){
        valorAdicional.innerText = 0.00;
    }

    sumVal = parseFloat(valorAdicional.innerText) + value

    valorAdicional.innerText = sumVal.toFixed(2);

    makeVisible(true);
}

function addToTotal(value){
    var val = parseFloat(valorArrecadado.innerText) + sumVal;
    sumVal = 0.0;
    valorAdicional.innerText = "0.00";

    storedData["value"] = val;
    
    Object.entries(tempData).forEach(([key, value]) => {
        storedData[key] += value;

        var item = document.getElementById(key+"_quantity");
        item.innerText = storedData[key];

        var addedItem = document.getElementById("new_"+key+"_quantity");
        addedItem.innerText = 0;

        tempData[key] = 0;
    })

    valorArrecadado.innerText = val.toFixed(2);

    saveData();
}

function cancelOperation(){
    sumVal = 0.0;
    valorAdicional.innerText = "0.00";

    Object.entries(tempData).forEach(([key, value]) => {
        tempData[key] = 0;
        var addedItem = document.getElementById("new_"+key+"_quantity");
        addedItem.innerText = 0;
    })
}

function addQuantity(id){
    var item = document.getElementById("new_"+id+"_quantity");

    tempData[id] += 1;

    item.innerText = parseInt(item.innerText) + 1;
}

function saveData(){
    localStorage.setItem("Data", JSON.stringify(storedData));
}

function loadData(){
    var data = JSON.parse(localStorage.getItem("Data"));
    
    Object.entries(data).forEach(([key, value]) => {
        if(key == "value"){
            valorArrecadado.innerText = value.toFixed(2);
        }else{
            document.getElementById(key+"_quantity").innerText = value;
        }

        storedData[key] = value;
    });
}

function limpar(){
    Object.keys(storedData).forEach((key) => {
        storedData[key] = 0;
    })
    saveData();
    loadData();
}

loadData();