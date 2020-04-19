var favFruit = [];
var favFruit2 = [];

//lista
var group1 = ['Lucas', 'Talita', 'Ze'];
//lista
var group2 = ['Tania', 'Wander', 'Pedrinho'];
//lista
var group3 = ['Willian', 'Bernado', 'Thiaguinho'];
var people = [];
people[0] = group1;
people[1] = group2;
people[2] = group3;

//favFruit 01
favFruit['banana'] = people[1];
favFruit['maca'] = people[0];
favFruit['morango'] = people[2];

//favFruit 02
favFruit2['banana']  = people[1];
favFruit2['maca']  = [];
var otherPeople = [];
otherPeople['others'] = people[0];
favFruit2['maca'] = otherPeople;

//Conclusao: um array dentro do outro array para nao ficar como lista, sempre adicionar o index
//: otherPeople['others'] = people[0];

console.log(favFruit2);
