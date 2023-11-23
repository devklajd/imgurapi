const app = require("./backend/app");
const http = require("http");
const normalizePort = val => {
    var port = parseInt(val, 10);
    if (isNaN(port)) {

        return val;
    }
    if (port >= 0) {
        return port;
    }

    return false;
};


const onError = error => {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};


const port = normalizePort(process.env.PORT || "5000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
console.log(port);
server.listen(port);