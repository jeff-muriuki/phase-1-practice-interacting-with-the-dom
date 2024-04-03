document.addEventListener('DOMContentLoaded', function () {
    let timerInterval;
    let counterValue = 0;

    function startTimer() {
        timerInterval = setInterval(() => {
            // Increment counter value and update display
            counterValue++;
            document.getElementById('counter').textContent = counterValue;
        }, 1000); // Increment every second
    
    }
    
    // Function to pause the timer
    function pauseTimer() {
        clearInterval(timerInterval); // Stop the timer
        // Disable all buttons except the pause button
        document.getElementById('plus').disabled = true;
        document.getElementById('minus').disabled = true;
        document.getElementById('heart').disabled = true;
        document.getElementById('submit').disabled = true;
        // Change label on pause button to "resume"
        document.getElementById('pause').textContent = 'resume';
        // Add event listener to resume button
        document.getElementById('pause').removeEventListener('click', pauseTimer);
        document.getElementById('pause').addEventListener('click', resumeTimer);
    }

    // Function to resume the timer
    function resumeTimer() {
        startTimer(); // Restart the timer
        // Enable all buttons
        document.getElementById('plus').disabled = false;
        document.getElementById('minus').disabled = false;
        document.getElementById('heart').disabled = false;
        document.getElementById('submit').disabled = false;
        // Change label on pause button back to "pause"
        document.getElementById('pause').textContent = 'pause';
        // Add event listener to pause button
        document.getElementById('pause').removeEventListener('click', resumeTimer);
        document.getElementById('pause').addEventListener('click', pauseTimer);
    }

    
    // Event listener for minus button
    document.getElementById('minus').addEventListener('click', function() {
        counterValue--; // Decrement counter value
        document.getElementById('counter').textContent = counterValue; // Update display
    });

    // Event listener for like button
    document.getElementById('heart').addEventListener('click', function() {
    // Create or update the like count for the current counter value
    const counter = document.getElementById('counter');
    const counterValue = parseInt(counter.textContent);
    let likeCount = 1; // Initialize like count

    // Check if there's already a like count for the current counter value
    const existingLike = document.querySelector(`.likes li[data-counter="${counterValue}"]`);
    if (existingLike) {
        // If there's an existing like count, update it
        likeCount = parseInt(existingLike.dataset.likes) + 1;
        existingLike.textContent = `${counterValue} has been clicked ${likeCount} times`;
        existingLike.dataset.likes = likeCount;
    } else {
        // If there's no existing like count, create a new list item
        const newLike = document.createElement('li');
        newLike.textContent = `${counterValue} has been clicked ${likeCount} time`;
        newLike.dataset.counter = counterValue; // Set data attribute for counter value
        newLike.dataset.likes = likeCount; // Set data attribute for like count
       // document.querySelector('.likes').appendChild(newLike); // Append to likes list
    }
});

    // Event listener for pause button
    document.getElementById('pause').addEventListener('click', function() {
        pauseTimer(); // Pause the timer
    });

    // Event listener for comment form submit button
    document.getElementById('submit').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission
        // Get value of comment input field
        const comment = document.getElementById('comment-input').value;
        // Create new comment element
        const newComment = document.createElement('p');
        newComment.textContent = comment; // Set text content of comment
        // Append comment to comments section
        document.getElementById('list').appendChild(newComment);
    });

    // Start the timer when the page loads
    startTimer();




})


