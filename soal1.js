var drawThreeColsBox = (angka) => {
	for (var i = 1; i <= angka; i++) {
		let hasil = ""
		for (var j = 2; j >= 0; j--) {
			hasil += " "+ ((i * 3) - j)
		}
		console.log(hasil)
	}
	console.log()	
}

// for sesuai dengan tinggi 

drawThreeColsBox(5)
drawThreeColsBox(3)
drawThreeColsBox(1)
