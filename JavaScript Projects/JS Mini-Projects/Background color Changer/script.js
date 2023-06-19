var index = 0;


function changeColors(){
    var colors =["red", "green", "blue","Orange", "Yellow","purple","brown"];
    
    var bgColor = document.getElementById("bgColor").innerHTML="Visible color is " + colors[index];
    document.getElementsByTagName("body")[0].style.backgroundColor = colors[index++];

    if(index>colors.length-1){
        index = 0;
    }
    
}
