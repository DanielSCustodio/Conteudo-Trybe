let fruits = [3, 4, 1, 1, 1];
total =0;
for (let index = 0; index < fruits.length; index += 1) {
	total += fruits[index];
}

if (total > 15) {
	console.log(total);
}else{
	console.log("valor menor que 16 - total =",total);
}