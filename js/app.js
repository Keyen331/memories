function flip(card) {
	console.log(card)
	document.getElementById('card').style.transform='rotateY(180deg)'
	if (document.getElementById(card).style.transform==='rotateY(180deg)') {
		setTimeOut(function () {document.getElementById(card).style.transform= 'rotateY(0deg)';}, 1000);
	}
}