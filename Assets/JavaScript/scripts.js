
        var wins = 0;
        var losses = 0;
        var guesses = 8;
        var selectedanswers = "";
        var hiddenletters = [];
        var currentword = [];
        var incorrectletter = [];
        var guessed = [];

        
        Var nycanswers = { 

        choices: 
        ["taxi", "subway", "pizza","bagel", "broadway", "pigeon"],

    
        keyStroke: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        ]
        // random selection of nyc items 

        Randomizenyc: function (){
        selectedanswers = this.choices[Math.floor(Math.random)()*this.choices.length];
        console.log(selectedanswers)
        return selectedanswers;
        },
        //blanks
        creatingblanks: function () {
        for (var i=0; i<selectedanswers.length; i++) {hiddenletters.push("_");
        }
        for(var i=0; i<selectedanswers.length; i++){
        currentword.push(selectedanswers[i]charAt())
        }
        },
        gameContent: function(){
            document.getElementById("guesses").textContent = "Guesses left: " + guesses;
            document.getElementById("lettersIncorrect").textContent = "Incorrect letters: " + incorrectLetters;
            document.getElementById("lettersGuessed").textContent = "Guessed letters: " + guessed;
            document.getElementById("numWord").textContent = "( " + selectedanswers.length + " letter word" + " )";
            document.getElementById("spaces").textContent = "  " + hiddenLetters.join(" ") + "  ";
            document.getElementById("wins").textContent = "Wins: " + wins;
            document.getElementById("losses").textContent = "Losses: " + losses;
        },
    

    
    
        //method for beginning a new round
        startOver: function(){
            guesses = 8;
            hiddenLetters = [];
            currentWord = [];
            incorrectLetters = [];
            guessed = []
    

