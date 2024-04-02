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
}