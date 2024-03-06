const turmaA = [
    {
        "nome": "Israel Kessler",
        "nota": 6.5
    },
    {
        "nome": "Gessika Alves",
        "nota": 7.8
    },
    {
        "nome": "Leo Ferreira",
        "nota": 5.9
    },
    {
        "nome": "Henrique Costa",
        "nota": 2.3
    },
    {
        "nome": "Ana Clara Souza",
        "nota": 8.9
    }
]

turmaA.forEach( function(turmaA) {
    const nomeAluno = turmaA.nome;
    const notaAluno = turmaA.nota;

    function resultadoFinal() {
        if(notaAluno >= 6) {
            const fraseAprovado = `O(A) aluno(a) ${nomeAluno} obteve média de ${notaAluno} e foi APROVADO(A).`;
            console.log(fraseAprovado);
        }
    }

    resultadoFinal();
});