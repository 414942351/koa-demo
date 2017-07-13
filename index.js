var koa = require('koa');
var app = new koa();
//X-Response-Time
app.name = 'this is app'
app.use(function *(next) {
	var start = new Date();
	yield next;
	var ms = new Date() - start;
	this.set('X-Response-Time', ms + 'ms');
});
//logger
app.use(function *(next) {
	var start = new Date();
	yield next;
	var ms = new Date() - start;
	console.log('%s %s - %s', this.method, this.url, ms);
});
//response
app.use(function *() {
	this.body = 'FreeStyle';
})
app.listen(3000);