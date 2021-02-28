module.exports = function reverse(n) {
	if (n > 0) {
		n = String(n);
		n = n.split('').reverse().join('');
	} else {
		n = String(n);
		n = n.split('').reverse().slice(0, -1).join('');
	}
	return +n;
}
