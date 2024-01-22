function saveAnswer() {
    var answer = document.getElementById('textInput').value;
    localStorage.setItem('VideoAnswer', answer);
    window.location.href = '4.Pic.html';
}
