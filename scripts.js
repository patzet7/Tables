//Script of linking arrays

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = maleNames.concat(femaleNames);

var newName = 'Marian';

	if (allNames.indexOf(newName) === -1){
			allNames.push(newName);
	}

console.log(allNames); // ['Asia', 'Kasia', 'Ola', 'Jola', 'Piotrek', 'Marek', 'Arek', 'Jarek', 'Marian']
