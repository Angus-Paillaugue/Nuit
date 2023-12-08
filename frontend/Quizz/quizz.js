function changeScore(score) {
    localStorage.setItem('score', localStorage.getItem('score') + score);
    updateScoreInNavBar();
}

