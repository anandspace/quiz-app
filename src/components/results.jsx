function Results({ questionBank, userAnswers, restartQuiz }) {
    function getScore() {
        let score = 0;
        for (let i = 0; i < questionBank.length; i++) {
            if (userAnswers[i] === questionBank[i].answer) {
                score++;
            }
        }
        return score;
    }

    const score = getScore();

    return <div>
        <h2>Quiz Completed</h2>
        <p>Your Score: {score}/{questionBank.length}</p>
        <button className="restart-button" onClick={restartQuiz}>Restart Quiz</button>
    </div>;
}

export default Results;