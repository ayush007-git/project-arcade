for(let i=25;i>=0;i--){
    var slider = document.createElement("div");
    slider.setAttribute("class", "slider animate");
    slider.setAttribute("Id","slider"+i);
    document.getElementById("main_box").append(slider);
}