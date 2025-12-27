export default {
    async fetch(request) {
        const allowedOrigins = [
            "https://sp4cebar.com",
            "https://sp4cebarsystems.github.io",
            "http://localhost:5500",
            "http://127.0.0.1:5500"
        ];

        const origin = request.headers.get("Origin");

        if (!origin || !allowedOrigins.includes(origin)) {
            return new Response("Forbidden", { status: 403 });
        }

        // CORS preflight
        if (request.method === "OPTIONS") {
            return new Response(null, {
                status: 204,
                headers: {
                    "Access-Control-Allow-Origin": origin,
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type, Authorization",
                    "Access-Control-Max-Age": "86400"
                }
            });
        }

        const incomingUrl = new URL(request.url);

        // Choose target based on the first path segment
        let targetBase;
        if (incomingUrl.pathname.startsWith("/lowresapi")) {
            targetBase = "https://lowresapi.timokloss.com";
        } else if (incomingUrl.pathname.startsWith("/lowresfiles")) {
            targetBase = "http://lowresfiles.timokloss.com";
        } else {
            return new Response("Not Found", { status: 404 });
        }

        // Build full target URL
        const targetUrl = new URL(targetBase);
        targetUrl.pathname = incomingUrl.pathname.replace(/^\/(?:lowresapi|lowresfiles)/, "");
        // targetUrl.pathname = incomingUrl.pathname; // keeps /api1/... or /api2/... 
        targetUrl.search = incomingUrl.search;

        const apiResponse = await fetch(targetUrl.toString(), {
            method: request.method,
            headers: {
                "Accept": "application/json"
                // Forward Authorization if needed:
                // "Authorization": request.headers.get("Authorization")
            }
        });

        return new Response(apiResponse.body, {
            status: apiResponse.status,
            headers: {
                "Access-Control-Allow-Origin": origin,
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
                "Content-Type": apiResponse.headers.get("Content-Type") ?? "application/json"
            }
        });
    }
};
