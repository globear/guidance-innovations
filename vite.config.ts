import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// Plugin to serve /clock and /clock/ with the static clock page
function clockPagePlugin(): import("vite").Plugin {
  return {
    name: "clock-page",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathname = req.url?.split("?")[0] ?? "";
        if (pathname === "/clock" || pathname === "/clock/") {
          const filePath = path.resolve(__dirname, "public/clock/index.html");
          if (fs.existsSync(filePath)) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(fs.readFileSync(filePath, "utf-8"));
            return;
          }
        }
        next();
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    clockPagePlugin(),
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
