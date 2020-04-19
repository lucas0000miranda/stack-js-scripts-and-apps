//entrada do usuario

var w = prompt('Digite a largura');
var h = prompt('Digite a altura');

document.write(calcLand(w,h));

//como functions sao blocos isolados nao importa onde vc irah chamar
function calcLand(width, height) {
    return width * height;
}
