//latihan-2

var result = [5,9,6,7,9,8,10,7,8];
var text   = 0;
var txt    = 0;
var text1  = 0;
for (var i = 0; i < result.length; i++) {
	text += result[i];
};
function mean() {
	var meanTotal = text / result.length;
	document.write(meanTotal)
}
function median() {
	var arr1 = result.sort(function(a,b){
		return a-b;
	});
	var pjng = arr1.length;
	if (pjng % 2 == 1) {
		var ttlpjng = Math.floor(pjng / 2);
		document.write(arr1[ttlpjng] + "<br>");
	}
	if (pjng % 2 == 0) {
		var ttlpjng = pjng / 2;
		document.write(arr1[ttlpjng] + "<br>");
	}
}
function modus(arr) {
	var arrModus = [], isSame = false;

	for (var i = 0; i < arr.length; i++) {
		for (var j = i+1; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				isSame = true;
				arrModus.push(arr[i]);
			} else {
				isSame = false;
			}
		}
	}

	return (arrModus[0] === undefined || isSame) ? -1 : arrModus[0];
}
function simpanganBaku() {
	var textBaku = 0;
	var textr = 0;
	for (var i = 0; i < result.length; i++) {
		textBaku += result[i];
	};
	var jarak = result.length;
    var nilaiUndifined = text / jarak;
    
	var nilai3 = Math.pow(result[0] - jarak,2) + Math.pow(result[1] - jarak, 2) + Math.pow(result[2] - jarak, 2) + Math.pow(result[3] - jarak, 2) + Math.pow(result[4] - jarak, 2) + Math.pow(result[5] - jarak, 2) + Math.pow(result[6] - jarak, 2)+Math.pow(result[7] - jarak, 2)+Math.pow(result[8] - jarak, 2);
	var sb = Math.sqrt(nilai3);
	document.write(sb + "<br>");
}

//Hasil

document.write("mean adalah: ");
mean();

document.write("<br>");

document.write("median adalah: ");
median();

document.write("modus adalah: "+modus(result) + "<br>");

document.write("simpanganBaku adalah: ");
simpanganBaku();