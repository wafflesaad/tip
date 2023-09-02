let calculate = document.getElementById("calc");
let bill = document.getElementById("amount");
let people = document.getElementById("people");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let custombtn = document.getElementById("custombtn");
let cBtnInFocus = false;
let tip = document.getElementById("tip");
let total = document.getElementById("total");

let tipamount = 0.0;
let buttonclicked = 0;

calculate.addEventListener("click", function(){
    let billf = parseFloat(bill.value);
    let peoplei = parseFloat(people.value);

    console.log(tipamount);

    if(tipamount == 0.0 || buttonclicked == 0 || bill.value.length == 0 || people.value.length == 0){
        return;
    }

    let tipdisplay = (tipamount * billf / 100)/ peoplei;
    let tipdisplays = tipdisplay.toFixed(2);

    tip.innerHTML = tipdisplays;


    let totalPerPerson = billf / peoplei;
    let totalPerPersons = totalPerPerson.toFixed(2);

    total.innerHTML = totalPerPersons;

    //resetbtn();  
    //buttonclicked = 0;  
});



btn1.addEventListener("mouseover", function(){
    highlightBtn(btn1);
});

btn1.addEventListener("mouseout", function(){
    if(buttonclicked != 1){
        deHighlightBtn(btn1);
    }    
});

btn1.addEventListener("click", function(){
    resetbtn();
    tipamount = 5.0;
    buttonclicked = 1;
    highlightBtn(btn1);
});

btn2.addEventListener("mouseover", function(){
    highlightBtn(btn2);
});

btn2.addEventListener("mouseout", function(){
    if(buttonclicked != 2){
        deHighlightBtn(btn2);
    }    
});

btn2.addEventListener("click", function(){
    resetbtn();
    tipamount = 10.0;
    buttonclicked = 2;
    highlightBtn(btn2);
});

btn3.addEventListener("mouseover", function(){
    highlightBtn(btn3);
});

btn3.addEventListener("mouseout", function(){
    if(buttonclicked != 3){
        deHighlightBtn(btn3);
    }    
});

btn3.addEventListener("click", function(){
    resetbtn();
    tipamount = 15.0;
    buttonclicked = 3;
    highlightBtn(btn3);
});

btn4.addEventListener("mouseover", function(){
    highlightBtn(btn4);
});

btn4.addEventListener("mouseout", function(){
    if(buttonclicked != 4){
        deHighlightBtn(btn4);
    }    
});

btn4.addEventListener("click", function(){
    resetbtn();
    tipamount = 20.0;
    buttonclicked = 4;
    highlightBtn(btn4);
});

btn5.addEventListener("mouseover", function(){
    highlightBtn(btn5);
});

btn5.addEventListener("mouseout", function(){
    if(buttonclicked != 5){
        deHighlightBtn(btn5);
    }    
});

btn5.addEventListener("click", function(){
    resetbtn();
    tipamount = 25.0;
    buttonclicked = 5;
    highlightBtn(btn5);
});

custombtn.addEventListener("mouseover", function(){
    highlightBtn(custombtn);
})

custombtn.addEventListener("focus", function(){
    highlightBtn(custombtn);
    cBtnInFocus = true;
})

custombtn.addEventListener("blur", function(){

        
    cBtnInFocus = false;
})

custombtn.addEventListener("mouseout", function(){
    if(buttonclicked != 6 && cBtnInFocus == false){
        deHighlightBtn(custombtn);
    }  
})

custombtn.addEventListener("click", function(){
    resetbtn();
    
    if(custombtn.value.length == 0){
        return;
    }

    tipamount = parseFloat(custombtn.value);
    buttonclicked = 6;
    highlightBtn(custombtn);
})

function resetbtn(){
    deHighlightBtn(btn1);
    deHighlightBtn(btn2);
    deHighlightBtn(btn3);
    deHighlightBtn(btn4);
    deHighlightBtn(btn5); 
    deHighlightBtn(custombtn);
}

function highlightBtn(btn){
    btn.style.color = "hsl(183, 100%, 15%)";
    btn.style.backgroundColor = "hsl(172, 67%, 45%)";
}

function deHighlightBtn(btn){
    btn.style.color = "hsl(189, 41%, 97%)";
    btn.style.backgroundColor = "hsl(183, 100%, 15%)";
}
