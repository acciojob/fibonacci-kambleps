function fibonacci(num) {
// your code here
	let n=num;
	let first = 0;
	let second = 1;
	let next = 0;
	let arr =[];
	arr.push(0);
	arr.push(1);
	for(let i=1;i<=n;i++)
		{
			next = first+second;
			first=second;
			second=next;
			arr.push(next);
		}
	return arr;
}

module.exports = fibonacci;
