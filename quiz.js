function checkAnswer(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Declare the correct answer
    const correctAnswer = "4"; // The correct answer to the quiz

    // Retrieve the user's answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // Get the feedback element
    const feedbackElement = document.getElementById("feedback");

    // Compare userAnswer with correctAnswer
    if (userAnswer === correctAnswer) {
        // If the user's answer is correct
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        // If the user's answer is incorrect
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the form
document.getElementById("quizForm").addEventListener("submit", checkAnswer);