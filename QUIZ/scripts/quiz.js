const quizData = [

    {
        question: "Qual a linguagem que 'roda' em um navegador?",
        a: "Java",
        b: "C#",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "O que significa a sigla CSS?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "O que significa a sigla HTML?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",

    },

    {
        question: "Em que ano o JavaScript foi lançado?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "Nenhuma das alternativas.",
        correct: "b",
    },
    {
        question: "Qual a função do atributo target?",
        a: "Tag responsável pela criação de um link",
        b: "Abrir o link na mesma aba",
        c: "Indicar o caminho relativo ou absoluto de uma outra página",
        d: "Informar onde o link será aberto",
        correct:"d",
    },
    {
        question: "Para que serve a instrução DOCTYPE?",
        a: "Indicar a versão do HTML",
        b: "Inserir elementos em um documento",
        c: "Indicar o idioma",
        d: "Representar o cabeçalho do documento",
        correct:"a",
    },

];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else if(score > 3){
           quiz.innerHTML = `
           <h2>Você respondeu ${score}/${quizData.length} questões corretamente</h2>

           <button onclick="location.reload()">Recarregar</button>
           `
       } else if(score < 3){
           quiz.innerHTML = `
           <h2>Você respondeu ${score}/${quizData.length} questões corretamente</h2>
            <h2>Estude mais</h2>
            <button onclick="window.location.href='Resumo.html'">Clique aqui</button>`
       }
    }
})

/* Arquivo server.jsconst http = require('http');const host = 'localhost';
const port = 8000;const requestListener = function (req, res) {
    console.log('request received');    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end('<h1>This is Ngrok</h1>');
};const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});*/
