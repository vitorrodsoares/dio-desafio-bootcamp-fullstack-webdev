const alunos = [
    {
    nome: 'Fernando',
    nota: 7,
    turma: '1A', 
    },
    {
    nome: 'Luiza',
    nota: 9,
    turma: '1A', 
    },
    {
    nome: 'Caio',
    nota: 4,
    turma: '2A', 
    },
    {
    nome: 'Maria',
    nota: 6,
    turma: '2A',
    },
    {
    nome: 'Rafaela',
    nota: 5,
    turma: '3A', 
    },
    {
    nome: 'Lucas',
    nota: 7,
    turma: '3A', 
    }
    ];


function notasAlunos (alunos, media) {
    let alunosAprovados = [];

    for (let i = 0; i < alunos.length; i++) {

        let {nome, nota} = alunos[i];

        if (nota >= media) {
        alunosAprovados.push(nome);
        }
    }

    return alunosAprovados;
}



console.log(notasAlunos(alunos, 6));