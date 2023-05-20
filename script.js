function fibonacci(num) {
// your code here
	let n=num;
	let first = 0;
	let second = 1;
	let next = 0;
	for(let i=1;i<=n;i++)
		{
			next = first+second;
			first=second;
			second=next;
		}
	return next;
}

module.exports = fibonacci;
