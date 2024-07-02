for (let i = 25; i > 0; i--) {
    let slider = document.createElement("div");
    slider.setAttribute("class", "slider animate");
    slider.setAttribute("id", "slider" + i);
    document.getElementById("main_box").append(slider);
}

function stop_Slider(slider) {
    var current_slider = document.getElementById("slider".concat(slider));
    var slider_above = document.getElementById("slider".concat(slider + 1));
    if (slider == 1) {
        slider_below = current_slider;
    }
    else {
        var slider_below = document.getElementById("slider".concat(slider - 1));
    }
    var left = window.getComputedStyle(current_slider).getPropertyValue("left");
    current_slider.classList.remove("animate");
    current_slider.style.left = left;
    var width = parseInt(window.getComputedStyle(current_slider).getPropertyValue("width"));
    var left_below = parseInt(window.getComputedStyle(slider_below).getPropertyValue("left"));
    left = parseInt(left);
    var difference = left - left_below;
    var absolute_diff = Math.abs(difference);
    if (difference > width || difference < -width) {
        var score = "Score: ".concat(slider - 1);
        alert(score);
        location.reload();
    }
    if (difference > 0) {
        left = left + absolute_diff;
    }
    if (difference <= 0) {
        left = left - difference;
        current_slider.style.left = left.toString().concat("px");
    }
    var offset = (width - absolute_diff).toString().concat("px");
    current_slider.style.width = offset;
    slider_above.style.width = offset;
    slider_above.style.visibility = "visible";
    var onclick = "stop_Slider(" + (slider + 1) + ")";
    document.getElementById("btn").setAttribute("onclick", onclick);

}