 // Soal Ke empat

 var  getReport = (data) => {

 	var array = []
 	for (var i = 0; i < data.length; i++) {			

 		const index = array.findIndex( array => array.classCode === data[i].classCode )
 		if (index >= 0) {
 			data[i].score >= 70 ? array[index].passed.push(data[i].name) : array[index].failed.push(data[i].name)	
 		}else{ 			
 			let object = {
 				classCode : data[i].classCode,
 				failed : [],
 				passed : []
 			}
 			data[i].score >= 70 ? object.passed.push(data[i].name) : object.failed.push(data[i].name)
 			array.push(object)
 		}

 	}
 	return array
 }

 var grades1 = [
 { name: 'John', score: 80, classCode: 'A' },
 { name: 'Mike', score: 60, classCode: 'B' },
 { name: 'Budi', score: 70, classCode: 'C' },
 { name: 'Siti', score: 50, classCode: 'A' },
 { name: 'Aaron', score: 10, classCode: 'A' },
 { name: 'Arthur', score: 10, classCode: 'C' },
 { name: 'Osass', score: 10, classCode: 'B' },
 { name: 'Yolo', score: 90, classCode: 'C' },
 ];

 console.log(getReport(grades1));
