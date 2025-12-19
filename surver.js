const http = require("http");

http.createServer((request,response)=>{
    const path = request.url;
    const method = request.method;
    console.log(`received ${method} request for :${path}`);

    if(path.includes("/abc") && method === "GET"){
        response.write("you have reached the /abc endpoint");
        response.end();
    }
    else{
        response.write("Hello world!");
        response.end();
    }

    

}).listen(4000,()=>{
    console.log("surver running on localhost:4000");
});

