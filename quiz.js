$(document).ready(function() {

  let questions = ["Q1. When was NU founded?", "Q2. How many students are enrolled at NU as of Fall 2022?", "Q3. What is the share of international students at NU", 
     "Q4. Which region has the most undergrads enrolled in Fall 2022?", "Q5. How many PhD students were enrolled in Fall 2022 in total?", 
     "Q6. How many Master's Programs are there at NU?", "Q7. 1 of most represented countries among NU International Faculty?", "Q8. Average Graduation GPA in SSH", 
     "Q9. Estimated tuition fees for 4 years of Bachelor Programs (KZT)?", "Q10. The strategic partner of SSH?"];
  let answers = ["2010", "6800", "2.8%", "Astana city", "343", "29", "USA", "3.22", "9798000", "University of Wisconsin-Madison"];
  let choice_options = [
    ["2009", "2010", "2011", "2012"], ["6200", "6800", "7000", "7500"], ["2.8%", "1.5%", "3.4%", "4%"],
    ["Almaty city", "Zhambyl region", "Astana city", "Karagandy region"], ["193", "228", "289", "343"], ["29", "15", "41", "32"],
    ["USA", "Japan", "Indonesia", "France"], ["3.51", "3.08", "3.22", "3.45"], ["6798000", "7798000", "8798000","9798000"], 
    ["University of Tsukuba", "University of Cambridge", "University of Wisconsin-Madison","University of Chicago"]
  ];

  let quizBox = $("#quiz-box");
  
  function generateQuiz() {
    for (let i = 0; i < questions.length; i++) {
      let questionBox = $("<div class='question'>"); 
      questionBox.append("<p>" + questions[i] + "</p>"); 

      for (let j = 0; j < choice_options[i].length; j++) {
        let label = $("<label>");
        let input = $("<input type='radio' name='q" + i + "' value='" + choice_options[i][j] + "'>");
        label.append(input);
        label.append(choice_options[i][j]);
        questionBox.append(label);
      }
      quizBox.append(questionBox);
    }
  }

  generateQuiz();
  
  $("#check-btn").click(function() {
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
      let selectedAnswer = $("input[name='q" + i + "']:checked").val();
      if (selectedAnswer === answers[i]) {
        score++;
      }
    }

    $("#quiz-box").append ("<h2>Result of the quiz is: " + score + " out of " + questions.length + "</h2>");
  });

});