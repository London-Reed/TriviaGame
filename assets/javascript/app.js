


    var mins = 1;  
    var secs = mins * 60;
    var currentSeconds = 0;
    var currentMinutes = 0;
    var currentQuestion = 0;
    var correctAnswers = 0;
    var quizOver = false;

    setTimeout(Decrement,1000); 

    var answers = ['Phil Jackson', 'Nate Robinson', 'Hakeem Olajuwon & Sam Bowie'],
                    data = $("input"),
                    correctAnswer = 0,
                    incorrectAnswer = 0
                    
    
    






    function Decrement() {
        currentMinutes = Math.floor(secs / 60);
        currentSeconds = Math.floor(secs % 60);
        if(currentSeconds <= 9) currentSeconds = "0" + currentSeconds;
        secs--;
        $("#display").html("" + currentSeconds) ; 
        if(secs !== -1) setTimeout('Decrement()',1000);
    };


    
        
    

  
