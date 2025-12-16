
import { useState } from "react";
import Results from "./results";

function Quiz() {
    const initialAnswers = [null, null, null];
    const [userAnswers, setUserAnswers] = useState(initialAnswers);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const selectedAnswer = userAnswers[currentQuestionIndex];
    const [isQuizFinished, setIsQuizFinished] = useState(false); // Placeholder for future use

    const questionBank = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Mars"
        },
        {
            question: "Who wrote 'To be, or not to be'?",
            options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Ernest Hemingway"],
            answer: "William Shakespeare"
        }
    ];

    function handleSelectOption(option) {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestionIndex] = option;
        setUserAnswers(newUserAnswers);
        console.log("Selected option:", newUserAnswers.toString());
    }

    function navigateNext() {
        if (currentQuestionIndex === questionBank.length - 1 ) {
            console.log("Quiz finished with answers:", userAnswers.toString());
            finishQuiz();
            return;
        }

        setCurrentQuestionIndex(() => Math.min(currentQuestionIndex + 1, questionBank.length - 1));
    }

    function navigatePrevious() {
        setCurrentQuestionIndex(() => Math.max(currentQuestionIndex - 1, 0));
    }

    function finishQuiz() {
        setIsQuizFinished(true);
    }

    function restartQuiz() {
        setUserAnswers(initialAnswers);
        setCurrentQuestionIndex(0);
        setIsQuizFinished(false);
    }

    if (isQuizFinished) {
        return <Results questionBank={questionBank} userAnswers={userAnswers} restartQuiz={restartQuiz} />
    }

    return (
        <div>
            <h2>Question {currentQuestionIndex + 1}</h2>
            <p className="question">{questionBank[currentQuestionIndex].question}</p>

            {questionBank[currentQuestionIndex].options.map((option, index) => (
                <button key={index} className={"option" + (option === selectedAnswer ? " selected" : "")} onClick={() => handleSelectOption(option)}>{option}</button>
            ))}


            <div className="nav-buttons">
                <button className="prev-button" onClick={navigatePrevious} disabled={currentQuestionIndex === 0}>Previous</button>
                <button className="next-button" onClick={navigateNext} disabled={!selectedAnswer}>
                    {currentQuestionIndex === questionBank.length - 1 ? "Finish Quiz" : "Next"}
                </button>
            </div>

        </div>
    )
}

export default Quiz;