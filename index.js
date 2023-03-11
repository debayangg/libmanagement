const parse=require('url').parse;
const server=require('http').createServer((req,res)=>{
	res.writeHead(200,{'Content-Type':'text/plain'});
	console.log(parse(req.url,true).query);
})
server.listen(3000,()=>{
	console.log("Hheheheheheheh!!!!!!!");
})
