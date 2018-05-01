var quiztitle = "World Capitals Quiz";
    /**
    * Array holding questions, pictures, facts and answers
    */
    var quiz = [
        {
            "question"      :   "What is the capital of Japan?",
            "image"         :   "japan.png",
            "choices"       :   [
                                    "Osaka",
                                    "Tokyo",
                                    "Kyoto",
                                    "Kobe"
                                ],
            "correct"       :   "Tokyo",
            "fact"   :   "Tokyo is the capital of Japan",
            "explan" : "Tokyo is the largest metropolitan in the world, hosting over 36 million people spread over 3 prefectures.",
        },
        {
            "question"      :   "What is the capital of Russia?",
            "image"         :   "russia.png",
            "choices"       :   [
                                    "Saint Petersburg",
                                    "Volgograd",
                                    "Kiev",
                                    "Moscow"
                                ],
            "correct"       :   "Moscow",
            "fact"   :   "Moscow is the capital of Russia",
            "explan" : "The capital of Russia moved from St. Petersburg to Moscow in 1918."
        },
        {
            "question"      :   "What is the capital of Switzerland?",
            "image"         :   "switz.png",
            "choices"       :   [
                                    "Bern",
                                    "Zurich",
                                    "Geneva",
                                    "Vienna"
                                ],
            "correct"       :   "Bern",
            "fact"   :   "Bern is the capital of Switzerland",
            "explan" : "Just over 130,00 people live in Bern, making it Switzerland’s fourth-largest city. Foreigners make up 23.2% of the population, with the two largest groups being Germans and Italians."
        },
        {
            "question"      :   "What is the capital of New Zealand?",
            "image"         :   "newze.png",
            "choices"       :   [
                                    "Queenstown",
                                    "Christchurch",
                                    "Wellington",
                                    "Auckland"
                                ],
            "correct"       :   "Wellington",
            "fact"   :   "Wellington is the capital of New Zealand",
            "explan" : "Wellington is known as Windy Wellington. This is because of the strong gusty winds that are always blowing over the city.",
        },
        {
            "question"      :   "What is the capital of Turkey?",
            "image"         :   "turkey.png",
            "choices"       :   [
                                    "Ankara",
                                    "Istanbul",
                                    "Antalya",
                                    "Izmir"
                                ],
            "correct"       :   "Ankara",
            "fact"   :   "Ankara is the captial of Turkey",
            "explan" : "Ankara is Turkey's second largest city after former imperial capital Istanbul.",
        },

        {
            "question"      :   "What is the capital of Brazil?",
            "image"         :   "brazil.png",
            "choices"       :   [
                                    "Sao Paulo",
                                    "Brasilia",
                                    "Rio de Janeiro",
                                    "Salvador"
                                ],
            "correct"       :   "Brasilia",
            "fact"   :   "Brasilia is the captial of Brazil",
            "explan" : "The city was planned and developed in 1956 with Lucio Costa as the principal urban planner and Oscar Niemeyer as the principal architect.",
        },

        {
            "question"      :   "What is the capital of Spain?",
            "image"         :   "spain.png",
            "choices"       :   [
                                    "Sevilla",
                                    "Valencia",
                                    "Barcelona",
                                    "Madrid"
                                ],
            "correct"       :   "Madrid",
            "fact"   :   "Madrid is the captial of Spain",
            "explan" : "With 250 sunny days in year, Madrid is the sunniest city of Europe.",
        },

         {
            "question"      :   "What is the capital of Egypt?",
            "image"         :   "egypt.png",
            "choices"       :   [
                                    "Giza",
                                    "Alexandria",
                                    "Cairo",
                                    "Luxor"
                                ],
            "correct"       :   "Cairo",
            "fact"   :   "Cairo is the captial of Egypt",
            "explan" : "The famous Giza pyramid complex and the ancient city of Memphis are located in Cairo's geographical area.",
        },

         {
            "question"      :   "What is the capital of Poland?",
            "image"         :   "poland.png",
            "choices"       :   [
                                    "Warsaw",
                                    "Gdansk",
                                    "Lodz",
                                    "Krakow"
                                ],
            "correct"       :   "Warsaw",
            "fact"   :   "Warsaw is the captial of Poland",
            "explan" : "Warsaw got the nickname 'Phoenix City' due to the fact that the city was destroyed several times in its history, but every time it was rebuilt.",
        },

         {
            "question"      :   "What is the capital of Canada?",
            "image"         :   "canada.png",
            "choices"       :   [
                                    "Ottawa",
                                    "Calgary",
                                    "Montreal",
                                    "Toronto"
                                ],
            "correct"       :   "Ottawa",
            "fact"   :   "Ottawa is the captial of Canada",
            "explan" : "As of 2016, Ottawa had a city population of 934,243 and a metropolitan population of 1,323,783 making it the fourth-largest city in Canada.",
        },

    ];

    var currentquestion = 0, score = 0, submt=true, picked;
    jQuery(document).ready(function($){
        
        function htmlEncode(value){
          return $(document.createElement('div')).text(value).html();
        }
       
        function addChoices(choices){
            if(typeof choices !== "undefined" && $.type(choices) == "array"){
                $('#choice-block').empty();
                for(var i=0;i<choices.length; i++){
                    $(document.createElement('li')).addClass('choice choice-box').attr('data-index', i).text(choices[i]).appendTo('#choice-block');                    
                }
            }
        }
        
        /**
         * Resets all of the fields to prepare for next question
         */
        function nextQuestion(){
            submt = true;
            $('#fact').empty();
            $('#explan').empty();
            $('#question').text(quiz[currentquestion]['question']);
            $('#pager').text('Question ' + Number(currentquestion + 1) + ' of ' + quiz.length);
            if(quiz[currentquestion].hasOwnProperty('image') && quiz[currentquestion]['image'] != ""){
                if($('#question-image').length == 0){
                    $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question'])).insertAfter('#question');
                } else {
                    $('#question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question']));
                }
            } else {
                $('#question-image').remove();
            }
            addChoices(quiz[currentquestion]['choices']);
            setupButtons();
        }
        /**
         * After choice is selected, answer is checked
         */
        function checkQuestion(choice){
            if(quiz[currentquestion]['choices'][choice] == quiz[currentquestion]['correct']){
                $('.choice').eq(choice).css({'background-color':'#37990d'});
                $('#fact').html('<br><strong>Correct!</strong><br>' + htmlEncode(quiz[currentquestion]['fact']));
                $('#explan').html(htmlEncode(quiz[currentquestion]['explan']));
                score++;
            } else {
                $('.choice').eq(choice).css({'background-color':'#a30b0b'});
                $('#fact').html('<strong>Incorrect!</strong> <br>' + htmlEncode(quiz[currentquestion]['fact']));
                $('#explan').html(htmlEncode(quiz[currentquestion]['explan']));
                console.log(quiz[currentquestion]['correct']);

                var CorrectAnswerText = quiz[currentquestion]['correct'];
                $("div>div:contains('"+CorrectAnswerText+"')").css({'background-color':'#37990d'});
                var CorrectAnswerText = $("a:contains('correct')");

            }
            currentquestion++;
            $('#submitbutton').html('NEXT QUESTION &raquo;').on('click', function(){
                if(currentquestion == quiz.length){
                    endQuiz();
                } else {
                    $(this).text('Check Answer').css({'color':'#222'}).off('click');
                    nextQuestion();
                }
            })
        }
        /**
         * Sets up the event listeners for each button.
         */
        function setupButtons(){
            $('.choice').on('mouseover', function(){
                $(this).css({'background-color':'#e1e1e1'});
            });
            $('.choice').on('mouseout', function(){
                $(this).css({'background-color':'#fff'});
            })
            $('.choice').on('click', function(){
                picked = $(this).attr('data-index');
                $('.choice').removeAttr('style').off('mouseout mouseover');
                $(this).css({'border-color':'#222','font-weight':700,'background-color':'#c1c1c1'});
                if(submt){
                    submt=false;
                    $('#submitbutton').css({'color':'#000'}).on('click', function(){
                        $('.choice').off('click');
                        $(this).off('click');
                        checkQuestion(picked);
                    });
                }
            })
        }
        
        /**
         * End of quiz
         */
        function endQuiz(){
            $('#fact').empty();
            $('#explan').empty();
            $('#question').empty();
            $('#image').empty();
            $('#choice-block').empty();
            $('#submitbutton').remove();
            $('#question').text("You got " + score + " out of " + quiz.length + " questions correct!");
            $(document.createElement('h2')).css({'text-align':'center', 'font-size':'4em'}).text(Math.round(score/quiz.length * 100) + '%').insertAfter('#question');
        }


      
        function init(){
            //add title
            if(typeof quiztitle !== "undefined" && $.type(quiztitle) === "string"){
                $(document.createElement('h1')).text(quiztitle).appendTo('#frame');
            } else {
                $(document.createElement('h1')).text("Quiz").appendTo('#frame');
            }
            //add pager and questions
            if(typeof quiz !== "undefined" && $.type(quiz) === "array"){
                //add pager
                $(document.createElement('p')).addClass('pager').attr('id','pager').text('Question 1 of ' + quiz.length).appendTo('#frame');
                //add first question
                $(document.createElement('h2')).addClass('question').attr('id', 'question').text(quiz[0]['question']).appendTo('#frame');
                //add image if present
                if(quiz[0].hasOwnProperty('image') && quiz[0]['image'] != ""){
                    $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[0]['image']).attr('alt', htmlEncode(quiz[0]['question'])).appendTo('#frame');
                }
                $(document.createElement('p')).addClass('fact').attr('id','fact').html('&nbsp;').appendTo('#frame');
                 $(document.createElement('p')).addClass('explan').attr('id','explan').html('&nbsp;').appendTo('#frame');
            
                //questions holder
                $(document.createElement('ul')).attr('id', 'choice-block').appendTo('#frame');
            
                //add choices
                addChoices(quiz[0]['choices']);
            
                //add submit button
                $(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Check Answer').css({'font-weight':700,'color':'#222','padding':'30px 0'}).appendTo('#frame');
            
                setupButtons();
            }
        }
        
        init();
    });