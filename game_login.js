function addUser() {
    p1n = document.getElementById("inputP1").value;
    p2n = document.getElementById("inputP2").value;

    localStorage.setItem("playerOneName", p1n);
    localStorage.setItem("playerTwoName", p2n);

    window.location = "game_page.html"
}