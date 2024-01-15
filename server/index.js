import http from "node:http";
import httpProxy from "http-proxy";

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  if (/^\/api\/herolist/.test(req.url)) {
    req.url = req.url.replace(/^\/api\/herolist/, "");
    proxy.web(req, res, {
      target: "https://www.dota2.com/datafeed/herolist?language=english",
      changeOrigin: true,
      secure: false,
    });
  } else if (/^\/api\/herodata/.test(req.url)) {
    req.url = req.url.replace(/^\/api\/herodata/, "");
    proxy.web(req, res, {
      target: `https://www.dota2.com/datafeed/herodata?language=english${req.url}`,
      changeOrigin: true,
      secure: false,
    });
  } else if (/^\/api\/heroStats/.test(req.url)) {
    req.url = req.url.replace(/^\/api\/heroStats/, "");
    proxy.web(req, res, {
      target: `https://api.opendota.com/api/heroStats`,
      changeOrigin: true,
      secure: false,
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    const response = "Proxy running...";
    res.end(response);
  }
});

server.listen(8080);
