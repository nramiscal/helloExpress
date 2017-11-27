var app = require("express")();
var port = 8000;

app.get('/', function(request, response){
	response.send("<h1>Hello Express</h1>");
})

app.listen(port, function(){
	console.log(`listening on port ${port}`);
})
