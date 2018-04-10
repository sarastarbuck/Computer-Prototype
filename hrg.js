

//store questions in an array

var allQuestions = [{
	"question": "What is the capital of Japan?",
	"image": "japan.png",
	"choices": ['Osaka', 'Tokyo', 'Kyoto', 'Kobe'],
	"correctAnswer": "Tokyo",
	"explanation": "drexplanaion of"
},
{
	question: 'What is the capital of Russia?',
	choices: ['Saint Petersburg', 'Volgograd', 'Moscow', 'Keiv'],
	correctAnswer: 3
},
{
	question: 'What is the capital of New Zealand?',
	choices: ['Queenstown', 'Auckland', 'Christchurch', 'Wellington'],
	correctAnswer: 4
},
{	
	question: 'What is the capital of Turkey?',
	choices: ['Ankara', 'Istanbul', 'Antalya', 'Izmir'],
	correctAnswer: 1

},
{	
	question: 'What is the capital of Switzerland?',
	choices: ['Zurich', 'Geneva', 'Bern', 'Vienna'],
	correctAnswer: 3
}];

//Reference to tags
var questionTitle = document.getElementById('questionTitle');
var selectionList = document.getElementById('selectionList');
var nextButton = document.getElementById('nextButton');



//define some variables
var i = 0;
var length1 = allQuestions.length;
var correctAnswer = 0;

nextButton.onclick = function() {
   
    if(i>allQuestions.length -1){
       i=0;       
    }    
    populateQuestion(i);
    i++;

    document.getElementById("ready").style.display = "none";
    document.getElementById("earthpic").style.display = "none";
};

function populateQuestion(qNum) {
    var individualQuestion = allQuestions[i];
    questionTitle.innerText = individualQuestion.question;
    
    selectionList.innerHTML = ""; //reset choices list
    for(key in individualQuestion.choices){
        var radioBtnName = "question"+i+"_choice";
        var choiceText = individualQuestion.choices[key];
        selectionList.appendChild(createLi(radioBtnName,choiceText));
    }
}

function createLi(name, choiceText) {
        var e = document.createElement('li');
        var radioHtml = '<input type="radio" name="' + name + '"';    
        radioHtml += '/>';
        radioHtml += choiceText;        
        e.innerHTML = radioHtml;        
        return e;
    }


