function removeRecomendations(element) {
	var p = $(element).parents('.pinWrapper').parent();
	console.log('removing element:');
	console.log(p);
	//p.remove();
}

$('.hidePinInfo').each(function(i, el) {
	console.log('index: ' + i + '; el: ' + el);
	removeRecomendations(el);
})