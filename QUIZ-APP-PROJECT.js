const questions=[
    {
    'que':"Which of the Following is ML",
    'a':"Html",
    'b':"Css",
    'a':"Js",
    'correct':"a",
},
    {
    'que':"Which of the Following for Styling",
    'a':"Html",
    'b':"Css",
    'a':"Js",
    'correct':"a",
},
]
let index=0;
let total=questions.length;
let right=0, wrong=0;
const quesBox=document.getElementById("quesBox")
const optionInput=document.querySelectorAll('.options')

const loadQuestion=()=>{
    if(index==total){
        return endQuiz();
    }
    reset();
    const data=questions[index]
    quesBox.innerText=`${index+1})${data.que}`
optionInput[0].nextElementSibling.innerHTML=data.a;
optionInput[1].nextElementSibling.innerHTML=data.b;
}

const submit=()=>{
    const data=questions[index];
const ans=getAnswer()
if(ans==data.correct){
    right++;
}
else{
    wrong++;
}
index++;

loadQuestion();
return;
}

//No making get getAnswer Function
const getAnswer=()=>{
let answer;
optionInput.forEach(
(input)=>
{
    if(input.checked){
        answer=input.value;
    }
}

)
return answer
}

const endQuiz=()=>{
    <h2>Thanks for Playing the quiz</h2>
}

const reset=()=>{
    optionInput.forEach((input)=>{
        input.checked=false;
    })
}