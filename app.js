const questions= [{
    'que':'Which of the following is a markup language?',
    'a':'HTML',
    'b':'CSS',
    'c':'JavaScript',
    'd':'PHP',
    'correct':'a'

},
{
    'que':'What year was JavaScript launched?',
    'a':'1996',
    'b':'1995',
    'c':'1994',
    'd':'none of the above',
    'correct':'b'


},
{
    'que':'What does CSS Stands for?',
    'a':'Hypertext Markup Language',
    'b':'Cascading Style Sheet',
    'c':'Jason Object Notation',
    'd':'Helicopters Terminals',
    'correct':'a'

}
]
let index = 0;
let total = questions.length;
let right=0,
    wrong=0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion= ()=>{
    const data = questions[index]
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;



}
const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    if(ans== data.correct){
        right++;

    }else{
        wrong++;

    }
}

const getAnswer = () => {
    optionInputs.forEach {

    
        (input) =>{
            if(input.checked){
                return input.value;
                
            } 

        }
    }

}


// initial call

loadQuestion();
