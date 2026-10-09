let sketch = localStorage.getItem("sketch");

function applyTheme(){
    if(sketch === "1"){
        document.getElementById("style-theme").setAttribute("href","resources/sketch1.css");
    }
    else{
        document.getElementById("style-theme").setAttribute("href","resources/sketch2.css");
    }
}

function switchTheme(){
    if(sketch === "1"){
        sketch = "2";
    }
    else{
        sketch = "1";
    }
    localStorage.setItem("sketch",sketch);
    applyTheme();
}

applyTheme();