// PSEUDOCODE
// input: [x, y, z, a, b]
// proses:
// [
//   (x + 0 + kanan dari x)
//   (y + kiri dari y + kanan dari y)
//   (z + kiri dari z + kanan dari z)
//   (a + kiri dari a + kanan dari a)
//   (b + kiri dari b + 0)
// ]

// CREATE FUNCTION 
// RUN FUNCTION(ARRAY)
// SAVE newARRAY SET []
// SAVE result SET 0

//   LOOPING ARRAY 

//   	IF "X" LOOPING ADALAH LOOP PERTAMA 

//   		SAVE "hasil" array[X] + 0 + array[X + 1]
//   		newARRAY.PUSH(hasil)
//   		IF "HASIL" MODULUS > 0
//   		result += HASIL 

//   	ELSE IF "X" LOOPING	ADALAH LOOP TERAKHIR

//   		SAVE "hasil" array[X] + array[X -1] + 0
//   		newARRAY.PUSH(hasil)
//   		IF "HASIL" MODULUS > 0
//   		result += HASIL

//   	ELSE 

//   		SAVE "hasil" array[X] + array[X - 1] + array [X + 1] 
//   		newARRAY.PUSH(hasil)
//   		IF "HASIL" MODULUS > 0
//   		result += HASIL

// RETURN result

var numberCruncher = (arr) => {
	
	var array = []
	var result = 0

	for (var i = 0; i < arr.length; i++) {
		
		if (i == 0) {

			let hasil = arr[i] + 0 + arr[i + 1]
			array.push(hasil)
			if (hasil % 2 > 0) {
				result += hasil
			}
			

		}else if (arr.length == (i + 1)) {

			let hasil = arr[i] + arr[i - 1] + 0
			array.push(hasil)
			if (hasil % 2 > 0) {
				result += hasil
			}
			
		}else{

			let hasil = arr[i] + arr[i - 1] + arr[i + 1]
			array.push(hasil)
			if (hasil % 2 > 0) {
				result += hasil
			}
			
		}

	}
	return result
} 

console.log(numberCruncher([2,5,1,3]))
console.log(numberCruncher([2, 3, 1, 4, 1, 5, 0, 3]))
console.log(numberCruncher([3, 6, 8, 9, 1, 2, 3]))
