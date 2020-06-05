function setToCurrentClass(element){
    var array = document.getElementsByTagName('a');
    for(var x=0;x<array.length;x++){
            array[x].className = "notActive";
    }
    element.className = "active";
}