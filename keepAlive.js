const https = require("https");

const URL = "https://yummifyy.onrender.com"; 
function pingServer() {
    const req = https.get(URL, (res) => {
        console.log(`[${new Date().toLocaleTimeString()}] Status: ${res.statusCode}`);
    });

    req.on("error", (err) => {
        console.error("Ping failed:", err.message);
    });

    req.setTimeout(5000, () => {
        console.log("Request timeout");
        req.destroy();
    });
}

pingServer();

setInterval(pingServer, 5 * 60 * 1000);