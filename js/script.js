const input_color_1 = document.getElementById("input_color_1");
const input_color_2 = document.getElementById("input_color_2");
const printer = document.getElementById("printer");
const body = document.body;

// Background Structure = linear-gradient(to top, red, blue)

function update_background(direction) {
    body.style.background = `linear-gradient(to ${direction}, ${input_color_1.value}, ${input_color_2.value})`;
}

function print_background() {
    printer.textContent = body.style.background;
}

function arrow_btn_clicked(direction) {
    update_background(direction);
    print_background();
}