var num;
var screan_save = '';  
var first_num = "0"; 
var second_num;
var rez;
var operation; 
b7.onclick = function on_click_button() {
    num = document.getElementById("b7").innerText;
    write_num(); 
}
b6.onclick = function on_click_button() {
    num = document.getElementById("b6").innerText;
    write_num(); 
}
b8.onclick = function on_click_button() {
    num = document.getElementById("b8").innerText;
    write_num(); 
}
b5.onclick = function on_click_button() {
    num = document.getElementById("b5").innerText;
    write_num(); 
}
b4.onclick = function on_click_button() {
    num = document.getElementById("b4").innerText;
    write_num(); 
}
b3.onclick = function on_click_button() {
    num = document.getElementById("b3").innerText;
    write_num(); 
}
b2.onclick = function on_click_button() {
    num = document.getElementById("b2").innerText;
    write_num(); 
}
b1.onclick = function on_click_button() {
    num = document.getElementById("b1").innerText;
    write_num(); 
}
b9.onclick = function on_click_button() {
    num = document.getElementById("b9").innerText;
    write_num(); 
}
b0.onclick = function on_click_button() {
    // console.log(document.getElementById("b0").innerText);
    num = document.getElementById("b0").innerText;
    write_num(); 
}
b_plus.onclick = function on_click_button() {
    first_num = document.getElementById("output").innerText; 
    screan_save = "";
    operation = "plus";  
}
b_minus.onclick = function on_click_button() {
    first_num = document.getElementById("output").innerText;
    screan_save = "";
    operation = "minus";  
}
b_multi.onclick = function on_click_button() {
    first_num = document.getElementById("output").innerText;
    screan_save = "";
    operation = "multi";  
};
b_equal.onclick = function on_click_button() {
    second_num = screan_save;
    switch(operation) {
        case "del":
            rez = parseFloat(first_num) / parseFloat(second_num); 
            break; 
        case "plus":
            rez = parseInt(first_num) + parseInt(second_num);
            break; 
        case "minus":
            rez = parseInt(first_num) - parseInt(second_num);
            break;
        case "multi":
            rez = parseInt(first_num) * parseInt(second_num);
            break;
    }
    console.log("первое == " + first_num);
    console.log("второе == " +second_num);

    if (rez.toString().length >= 9) {
        screan_save = 'NaN';
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b0").disabled = true;
        document.getElementById("b_del").disabled = true;
        document.getElementById("b_plus").disabled = true;
        document.getElementById("b_minus").disabled = true;
        document.getElementById("b_multi").disabled = true;

    } else {
    console.log("rez == " + rez.toString());
    first_num = rez; 
    document.getElementById("output").textContent = rez;
    }; 
    

}
b_clear.onclick = function on_click_button() {
    document.getElementById("output").textContent = "0";
    screan_save = "";
    document.getElementById("b1").disabled = false;
    document.getElementById("b2").disabled = false;
    document.getElementById("b3").disabled = false;
    document.getElementById("b4").disabled = false;
    document.getElementById("b5").disabled = false;
    document.getElementById("b6").disabled = false;
    document.getElementById("b7").disabled = false;
    document.getElementById("b8").disabled = false;
    document.getElementById("b9").disabled = false;
    document.getElementById("b0").disabled = false;
    document.getElementById("b_del").disabled = false;
    document.getElementById("b_plus").disabled = false;
    document.getElementById("b_equal").disabled = false;
    document.getElementById("b_minus").disabled = false;
    document.getElementById("b_multi").disabled = false;
}
b_del.onclick = function on_click_button() {
    first_num = document.getElementById("output").innerText;
    screan_save = "";
    operation = "del";  
}

function write_num() {
    screan_save = screan_save + num ; 
    if (screan_save.length == 10){
        screan_save = 'xD - press "C"';
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b0").disabled = true;
        document.getElementById("b_del").disabled = true;
        document.getElementById("b_plus").disabled = true;
        document.getElementById("b_equal").disabled = true;
        document.getElementById("b_minus").disabled = true;
        document.getElementById("b_multi").disabled = true;


    } 
    document.getElementById("output").textContent = screan_save;
    
    
}

const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
});

