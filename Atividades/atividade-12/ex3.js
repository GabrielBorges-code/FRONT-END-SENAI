// Atividade 1
document.getElementById('converter').onclick = function () {
    var temp_celsius = document.getElementById('temp_celsius').value;

    var fahrenheit = (9 * temp_celsius / 5) + 32;

    document.getElementById('temp_fahr').innerHTML = "<strong>" + fahrenheit + "</strong>";

}
// Atividade 2
anos_copa = [];

for(var i = 1930; i <= 2018; i = i + 4){
    anos_copa.push(i);  

}

document.getElementById('anos_copa').innerHTML = "<li> " + anos_copa + " </li>        ";

// Atividade 3
document.getElementById('calcular').onclick = function (){
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var n_faltas = document.getElementById('n_faltas').value;
    
    var media_notas = (parseFloat(nota1) + parseFloat(nota2)) / 2;

    parseFloat(media_notas.toFixed(2));

    if(media_notas >= 6.5 && n_faltas <= 6){
        document.getElementById('result').innerHTML = "Sua média: " + media_notas + " Faltas: " + n_faltas +  ". Você está aprovado";

    }else if (media_notas < 6.5  && n_faltas < 6){
        document.getElementById('result').innerHTML = "Sua média: " + media_notas + " Faltas: " + n_faltas +  ". Você está reprovado";

    }else if (n_faltas > 6 && media_notas < 6.5){
        document.getElementById('result').innerHTML = "Sua média: " + media_notas + " Faltas: " + n_faltas +  ". Você está reprovado por nota e por falta";

    }else if (media_notas >= 6.5 && n_faltas > 6){
        document.getElementById('result').innerHTML = "Sua média: " + media_notas + " Faltas: " + n_faltas +  ". Você está reprovado por falta";

    }

}

// Atividade 4
var vendas_cursos = [
    {
        'aluno': 'Emmanuel Gomes',
        'data': '10/06/2018',
        'valor': 34.99,
        'reembolso': null
    },
    {
        'aluno': 'Carla Dias',
        'data': '10/06/2018',
        'valor': 29.99,
        'reembolso': null
    },
    {
        'aluno': 'Rafael Marques',
        'data': '11/06/2018',
        'valor': 39.99,
        'reembolso': '13/06/2018'
    },
    {
        'aluno': 'Maria Isabel Pereira',
        'data': '11/06/2018',
        'valor': 29.99,
        'reembolso': null        
    },
    {
        'aluno': 'Andre Luis Silva',
        'data': '12/06/2018',
        'valor': 34.99,
        'reembolso': null
    }
];


for(var i = 0; i < vendas_cursos.length; i++){

    if(vendas_cursos[i]['reembolso'] == null){
        document.getElementById('vendas_cursos').innerHTML += '<tbody id="vendas_cursos"><tr><td>' + vendas_cursos[i]["aluno"] + '</td><td>' + vendas_cursos[i]["data"] + '</td><td>' + vendas_cursos[i]["valor"] + '</td></tr></tbody>';
        
    }
        
}

var total_vendas = vendas_cursos[0]["valor"] + vendas_cursos[1]["valor"] + vendas_cursos[3]["valor"] + vendas_cursos[4]["valor"];

console.log(total_vendas);

document.getElementById('total_vendas').innerHTML = "<td>" + total_vendas + "</td>";

