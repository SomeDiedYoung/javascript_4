let day = ["ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი", "კვირა"];
let input = document.getElementById("taskOneInput");

for (let i = 1; i <= 7; i++) {
    let btn = document.getElementById(i.toString());
    btn.onclick = outputInfo;
}

function outputInfo() {
    input.value = day[this.id-1];
}
