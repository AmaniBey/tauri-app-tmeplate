import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig(async () => ({
    plugins: [
        vue(),
        AutoImport({
            imports: [
                'vue',
                'vue-router',
                'pinia'
            ]
        }),
        Components({
            dts: true,
            resolvers: [
                (name) => {
                    if (name.startsWith('Base')) {
                        return {importName: name.slice(4), path: `@/components/${name}.vue`}
                    }
                },
            ],
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
        }
    },
    clearScreen: false,
    server: {
        port: 1420,
        strictPort: true,
        watch: {
            // 3. tell vite to ignore watching `src-tauri`
            ignored: ["**/src-tauri/**"],
        },
        proxy: {
            // 在此处为需要解决跨域的 API 配置代理
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '') // 去掉 /api 前缀
            }
        }
    },
}));
