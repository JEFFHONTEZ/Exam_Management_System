import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        // FIXED: Only run wayfinder if NOT on Vercel, and pass the config here
        process.env.VERCEL
        ? null
        : wayfinder({
            formVariants: true,
        }),

        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
                            tailwindcss(),
    ].filter(Boolean), // <--- This is important! It removes the 'null' so Vite doesn't crash
                            esbuild: {
                                jsx: 'automatic',
                            },
});
