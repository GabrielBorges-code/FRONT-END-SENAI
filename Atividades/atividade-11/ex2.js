// Atividade 1;
var num_1 = parseInt(document.getElementById("num_1").innerHTML);
var num_2 = parseInt(document.getElementById("num_2").innerHTML);

var soma = num_1 + num_2;

document.getElementById("resultado").innerHTML = "<strong>" + soma + "</strong>";

// Atividade 2;
var caixa_azul = parseFloat(document.getElementById("caixa_azul").innerHTML);

// A formula de conversão é: F = (9 * C / 5) + 32

var fahrenheit = (9 * caixa_azul / 5) + 32;

document.getElementById("caixa_amarela").innerHTML = "<strong>" + fahrenheit + "</strong>";

// Atividade 3;
var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
]; 

var novo_array = [];

novo_array.push(grupos[2][1], grupos[2][2], "Mariana", "Felipe", "Carla");

document.getElementById("novo_array").innerHTML = novo_array;

// Atividade 4;
var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrela': 4
}

document.getElementById("categoria_principal").innerHTML = "<strong>" + curso["categoria"][0] + "</strong>";

var total_aval = curso["n_aval_1_estrela"]  + curso["n_aval_2_estrelas"] + curso["n_aval_3_estrelas"]  + curso["n_aval_4_estrelas"] + curso["n_aval_5_estrelas"] 

var media_aval = (1 * curso["n_aval_1_estrela"]) + (2 * curso["n_aval_2_estrelas"]) + (3 * curso["n_aval_3_estrelas"]) + (4 * curso["n_aval_4_estrelas"]) + (5 * curso["n_aval_5_estrelas"]) / (total_aval);

document.getElementById("total_aval").innerHTML = "<strong>" + total_aval + "</strong>";
document.getElementById("media_aval").innerHTML = "<strong>" + media_aval.toFixed(1) + "</strong>";

// Atividade 5
var dados = {
    'nome':'Gabriel',
    'sobrenome': 'borges',
    'email':'gabriel.moura2009@hotmail.com'
}

var tabela = '<div class="tableBox"><table> <tr> <th>Nome Completo</th> <th>Email</th> </tr><tr><td>' + dados["nome"] + " " + dados["sobrenome"]   + '</td><td>' + dados["email"] + '</td> </tr></table> </div>';

document.getElementById("tabela").innerHTML = tabela;
