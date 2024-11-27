import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "desktop_app",
            filename: "remoteEntry.js",
            exposes: {
                "./navbar": "./src/components/navbar/navbar",
                "./footer": "./src/components/footer/footer",
                "./solve_needs": "./src/components/solve_needs/solve_needs",
            },
            shared: ["react", "react-dom"],
        }),
    ],

    build: {
        modulePreload: false,
        target: "esnext",
        minify: false,
        cssCodeSplit: false,
    },
});
