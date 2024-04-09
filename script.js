//function myfunc(){
//    alert(document.getElementById("language").value);
//}

var countQues=0;
var lang;
var score=0;

var HTMLquestions=[

  {
        question: "Which of the following is not a type of real-time operating system?",
        choices: ["Hard Real-Time Operating System", "Soft Real-Time Operating System", "Firm Real-Time Operating System", "Multitasking Operating System"],
        answer: 4
    },
    {
        question: "In a real-time operating system, which of the following best describes the scheduling approach?",
        choices: ["Round-robin scheduling", "Priority-based scheduling", "First-come, first-served scheduling", "Shortest Job Next (SJN) scheduling"],
        answer: 2
    },
    {
        question: "What is the main goal of a real-time operating system?",
        choices: ["Maximizing throughput", "Minimizing latency", "Maximizing response time", "Minimizing system complexity"],
        answer: 3
    },
    {
        question: "Which of the following is a characteristic of a hard real-time operating system?",
        choices: ["Loose timing constraints", "Tolerates occasional deadline misses", "Criticality of deadline misses is low", "Strict timing constraints"],
        answer: 4
    },
    {
        question: "Which of the following is an example of a real-time operating system?",
        choices: ["Linux", "Windows", "VxWorks", "Mac OS"],
        answer: 3
    }
];

var CSSquestions=[

    {
        question: "Which of the following is not a type of real-time operating system?",
        choices: ["Hard Real-Time Operating System", "Soft Real-Time Operating System", "Firm Real-Time Operating System", "Multitasking Operating System"],
        answer: 4
    },
    {
        question: "In a real-time operating system, which of the following best describes the scheduling approach?",
        choices: ["Round-robin scheduling", "Priority-based scheduling", "First-come, first-served scheduling", "Shortest Job Next (SJN) scheduling"],
        answer: 2
    },
    {
        question: "What is the main goal of a real-time operating system?",
        choices: ["Maximizing throughput", "Minimizing latency", "Maximizing response time", "Minimizing system complexity"],
        answer: 3
    },
    {
        question: "Which of the following is a characteristic of a hard real-time operating system?",
        choices: ["Loose timing constraints", "Tolerates occasional deadline misses", "Criticality of deadline misses is low", "Strict timing constraints"],
        answer: 4
    },
    {
        question: "Which of the following is an example of a real-time operating system?",
        choices: ["Linux", "Windows", "VxWorks", "Mac OS"],
        answer: 3
    },
    {
        question: "What is the purpose of a watchdog timer in real-time operating systems?",
        choices: ["To monitor user input", "To prevent system crashes", "To manage memory allocation", "To optimize CPU utilization"],
        answer: 2
    },
    {
        question: "Which of the following factors is crucial in determining the suitability of an RTOS for a specific application?",
        choices: ["Kernel size", "Developer popularity", "Price", "Color scheme"],
        answer: 1
    },
    {
        question: "What is the role of a real-time operating system in embedded systems?",
        choices: ["To provide a user-friendly interface", "To ensure reliable performance under time constraints", "To support multitasking for user applications", "To handle file management tasks"],
        answer: 2
    },
    {
        question: "What does the term 'preemption' mean in the context of real-time operating systems?",
        choices: ["The process of scheduling tasks", "The process of suspending a task to allow another task to run", "The process of terminating a task", "The process of task initialization"],
        answer: 2
    },
    {
        question: "Which of the following best describes a distributed real-time operating system?",
        choices: ["A real-time operating system that runs on multiple processors but does not share resources", "A real-time operating system that runs on a single processor and shares resources", "A real-time operating system that runs on multiple processors and shares resources", "A real-time operating system that does not support multitasking"],
        answer: 3
    }
];
var JSquestions=[

    {
        question: "Which of the following is true about variable naming conventions in JavaScript?",
        choices: ["JavaScript variable names must begin with a letter or the underscore character.","JavaScript variable names are case sensitive.","Both of the above."," None of the above."],
        answer: 3
    
    }, 
    {/*wscubetech*/
        question: " Which of the following is a server-side Java Script object?",
        choices: ["Function","File","FilleUpload","Data"],
        answer: 2
    
    },
    {
        question: "Java script can be used for Storing the form's contents to a database file on the server",
        choices: ["False","True"],
        answer: 1
    
    }, 
    {
        question: "How does Java Script store dates in objects of Date type?",
        choices: ["The number of days since January 1st, 1900","The number of seconds since January 1st, 1970","The number of milliseconds since January 1st, 1970","The number of picoseconds since January 1st, 1970"],
        answer: 3
    
    },
    {
        question: "C-style block-level scoping is not supported in Java script",
        choices: ["False","True"],
        answer: 2
    
    },
    {
        question: "JavaScript ignores extra spaces in Syntax",
        choices: ["True","False"],
        answer: 2
    
    }, 
    {
        question: "Which of the following is the tainted property of a window object in Java Script?",
        choices: ["Pathname","Protocol","Defaultststus","Host"],
        answer: 3
    
    },
    {
        question: "Which attribute needs to be changed to make elements invisible?",
        choices: ["visibilty","visible","invisible","None of the above"],
        answer: 1
    
    }, 
    {
        question: " Javascript is an object oriented language?",
        choices: ["False","True"],
        answer: 2
    
    },
    {
        question: "What is the alternate name for Java script?",
        choices: ["LimeScript","ECMScript","Both of the above","ECMAScript"],
        answer: 4
    
    }
                
];
var PYquestions=[

    {
        question: "What is the output of the following program : print(Hello World'[::-1])",
        choices: ["dlroW olleH","Hello Worl","d","Error"],
        answer: 1
    
    }, 
    {
        question: "Given a function that does not return any value, what value is shown when executed at the shell?",
        choices: ["int","bool","void","None"],
        answer: 4
    
    },
    {
        question: "Which module in Python supports regular expressions?",
        choices: ["re","regex","pyregex","None of the above"],
        answer: 1
    
    }, 
    {
        question: "What is the output of the following program : (tricky ques.)  print (0.1 + 0.2 == 0.3) ",
        choices: ["True","False","Machine Dependent","Error"],
        answer: 2
    
    },
    {
        question: "Which of the following is not a complex number?",
        choices: ["k = 2 + 3j","k = complex(2, 3)","k = 2 + 3l","k = 2 + 3J"],
        answer: 3
    
    },
    {
        question: "What does ~~~~~~5 evaluate to?",
        choices: ["+5","-11","+11","-5"],
        answer: 1
    
    }, 
    {
        question: "Given a string s = “Welcome”, which of the following code is incorrect?",
        choices: ["print s[0]","print s.lower()","s[1] = ‘r’","print s.strip()"],
        answer: 3
    
    },
    {
        question: "________ is a simple but incomplete version of a function.",
        choices: ["Stub","Function","A function developed using bottom-up approach","A function developed using top-down approach"],
        answer: 1
    
    }, 
    {
        question: "To start Python from the command prompt, use the command ______",
        choices: ["execute python","go python","python","run python"],
        answer: 3
    
    },
    {
        question: "Which of the following is correct about Python?",
        choices: ["It supports automatic garbage collection.","It can be easily integrated with C, C++, COM, ActiveX, CORBA, and Java","Both of the above","None of the above"],
        answer: 3
    
    }
                
];
var Cquestions=[

    {
        question: "C Language was developed in the year ____",
        choices: ["1970","1975","1980","1985"],
        answer: 1
    
    }, 
    {
        question: "Which one is not a reserve keyword in C Language?",
        choices: ["auto","main","case","register"],
        answer: 2
    
    },
    {
        question: "A C variable name can start with a ____",
        choices: ["Number","Plus Sign","Underscore","Asterisk"],
        answer: 3
    
    }, 
    {
        question: "Prototype of a function means _____",
        choices: ["Name of Function","Output of Function","Declaration of Function","Input of a Function"],
        answer: 3
    
    },
    {
        question: "Name the loop that executes at least once.",
        choices: ["for","If","do-while","while"],
        answer: 3
    
    },
    {
        question: "Far pointer can access _____",
        choices: ["Single memory location","No memory location","All memory location","First and Last Memory Address"],
        answer: 3
    
    }, 
    {
        question: "A pointer pointing to a memory location of the variable even after deletion of the variavle is known as _____",
        choices: ["far pointer","dangling pointer","null pointer","void pointer"],
        answer: 2
    
    },
    {
        question: "An uninitialized pointer in C is called ___",
        choices: ["Constructor","dangling pointer","Wild Pointer","Destructor"],
        answer: 3
    
    }, 
    {
        question: "A pointer that is pointing to NOTHING is called ____",
        choices: ["VOID Pointer","DANGLING Pointer","NULL Pointer","WILD Pointer"],
        answer: 3
    
    },
    {
        question: "Who is known as the father of C Language ?",
        choices: ["Digvijay","James A. Sosling","Dr. E. F. Codd","Dennis Ritchie"],
        answer: 4
    
    }
                
];





//alert(questions.length);
document.getElementById("score").textContent="Score : "+0;
document.querySelector(".view-results").style.display="none";
document.querySelector(".quiz").style.display="none";
document.querySelector(".final-result").style.display="none";








document.querySelector(".choose-lang").addEventListener("click",function(){

    lang=document.getElementById("language").value+"questions";
    document.getElementById("ques-left").textContent="Question : "+(countQues+1)+"/"+window[lang].length;

//    alert(window[lang].length);
    //window["anything"] will convert "anything" string to object because window is also an object
    document.querySelector(".quiz").style.display="block";
    
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
     for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/
    
//    window.location.href="#score";

});





document.querySelector(".submit-answer").addEventListener("click",function(){
//     alert(window[lang][countQues].choices[window[lang][countQues].answer-1]);
//     alert(document.querySelector('input[name="options"]:checked').value);

    if(document.querySelector('input[name="options"]:checked').value===window[lang][countQues].choices[window[lang][countQues].answer-1]){
           
        score+=10;
        document.getElementById("score").textContent="Score : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle correct'>"+(countQues+1)+"</div>";
           
    }else{
    
        score-=5;
        document.getElementById("score").textContent="Score : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle incorrect'>"+(countQues+1)+"</div>";
    };
    
    if (countQues<window[lang].length-1){
        countQues++;
    }else{
        document.querySelector(".submit-answer").style.display="none";
        document.querySelector(".view-results").style.display="unset";

    }
    
    document.getElementById("ques-left").textContent="Question : "+(countQues+1)+"/"+window[lang].length;
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
    for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/

});

document.querySelector(".view-results").addEventListener("click",function(){
    
    document.querySelector(".final-result").style.display="block";
    
    document.querySelector(".solved-ques-no").innerHTML="You Solved "+(countQues+1)+" questions of "+document.getElementById("language").value;
    
    var correct= document.getElementById("ques-view").getElementsByClassName("correct").length;
    
    document.querySelector(".right-wrong").innerHTML=correct+" were Right and "+((countQues+1)-correct)+" were Wrong";
    
    document.getElementById("display-final-score").innerHTML="Your Final Score is: "+score;
    
    if (correct/(countQues+1)>0.8){
        document.querySelector(".remark").innerHTML="Remark: OutStanding ! :)";
    }else if(correct/(countQues+1)>0.6){
        document.querySelector(".remark").innerHTML="Remark: Good, Keep Improving.";
    
    }else if(correct/(countQues+1)){
        document.querySelector(".remark").innerHTML="Remark: Satisfactory, Learn More.";
    }else{
        document.querySelector(".remark").innerHTML="Remark: Unsatisfactory, Try Again.";
    }
    
//    window.location.href="#display-final-score";

});

document.getElementById("restart").addEventListener("click",function(){
    location.reload();

});

document.getElementById("about").addEventListener("click",function(){
    alert("Quiz Website Project Created By Digvijay Singh");

});


/*Smooth Scroll*/


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});



/*Smooth Scroll End*/
