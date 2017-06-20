function parent() {
	this.multiplier = 3;
	var mapCallback = (function(I) { return  I * this.multiplier }).bind(this);
	return [33, 77, 99, 81, 55].map(mapCallback);
}