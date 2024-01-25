// middleware/redirect-www.js
export default function ({ req, res }) {
    // Check if the request is coming with www
    if (req.headers.host.startsWith('www.')) {
      // Redirect to the non-www version
      res.writeHead(301, {
        Location: `https://${req.headers.host.replace('www.', '')}${req.url}`,
      });
      res.end();
    }
  }
  