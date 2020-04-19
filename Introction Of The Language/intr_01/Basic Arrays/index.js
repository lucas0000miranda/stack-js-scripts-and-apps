//array commum
//apenas faca-se receber o objeto array
var fruitList = Array();

fruitList['exotico'] = 'banana';
fruitList[1] = 'maca';
fruitList[2] = 'morango';

//outra forma de escrever o array
var completeAddressHeader= Array('street', 'city');
//e outra SO EH POSSIVEL MANIPULAR OS INDEXIES, SE VOCE CRIAR OS INDEXIES COMO O EXEMPLO ANTERIOR
var completeAddresContent = ['Albertinho Filho', 'Florianopolis'];

var completeAddress = [];
completeAddress['street'] = 'Albertinho Filho';
completeAddress['city'] = 'Florianopolis';
completeAddress['postal'] = '88040-460';

//OBJETOS

var obj = {
    name:  'Lucas',
    number: 1241243,
    address: completeAddressHeader + ' ' + completeAddresContent,
    shippingAddress: completeAddress,
    favfruits: fruitList,
    favfruit: fruitList['exotico']
};


console.log(obj);

