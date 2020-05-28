setInterval(function() {
    const clock = document.querySelector(".display");
    let time = new Date();
    let sek = time.getSeconds();
    let min = time.getMinutes();
    let ore = time.getHours();
    let dita = 'AM';
    if (ore > 12) {
        dita = 'PM';
        ore = ore - 12;
    }
    if (ore == 0) {
        ore = 12;
    }
    if (sek < 10) {
        sek = '0' + sek;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (ore < 10) {
        ore = '0' + ore;
    }
    clock.textContent = ore + ':' + min + ':' + sek + " " + dita;
});