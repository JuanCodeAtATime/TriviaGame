# TriviaGame

//GAME OBJECTIVE//
This trivia game will consist of 10 multiple choice questions.  
One question will be displayed at a time on the page with 4 multiple choices.
User will have 10 seconds to answer question.
There will be an autmoated timer counting down the 10 seconds for every question.
If Player  answers correctly, the 10 second timer will reset, and a new question will be displayed
If Player answers incorrectly, they will have unlimited amount of tries within the 10 sec limit.
AFter answering the 10th question, computer will display breakdown of Player's results (correct, incorrect, and a Trophy based on performance tier level).

//PSEUDOCODE//
This game will need an obejct containing game name, all possible questions, and all possible answers.
Questions will be matched with boolean values which will evaluate if answer is true or false.
SetInterval function will be set to every 10 seconds (10,000 ms), then a .50 second delay before advancing to next question
Need gameclock to start at 10 seconds, then count down -1 second until 0.
From question to question, the only elements that will change are images connected to questions, inner html for questions and inner html for answers, which will be displayed on buttons.
After 10 second timer expires, the correct answer will be displayed, and the question will change after a 2.5 second delay (allowing Player to read/process the information before advancing to next question)
At the end of the game, the score will be displayed, and a button will allow Player to start game over--without--refreshing.  That is, the score record will remain the same.

Things I need:
Countdown Timer (from 10 to 0)
10 trivia questions
40 possible answers (30 incorrect/10 correct)
Button elements for the the answer choices

