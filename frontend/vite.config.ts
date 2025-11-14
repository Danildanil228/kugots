import path from "path"
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Разделяем vendor библиотеки
          vendor: ['react', 'react-dom'],
          // Radix UI компоненты
          radix: [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dropdown-menu', 
            '@radix-ui/react-menubar',
            '@radix-ui/react-radio-group',
            '@radix-ui/themes'
          ],
          // Material UI
          mui: ['@mui/material', '@mui/icons-material'],
          // UI утилиты
          utils: ['clsx', 'tailwind-merge', 'class-variance-authority'],
          // HTTP клиент
          http: ['axios'],
          // Swiper для каруселей
          swiper: ['swiper'],
          // Прочие зависимости
          libs: ['react-router-dom', 'react-player', 'lucide-react']
        }
      }
    },
    // Оптимизации для продакшена
    minify: 'esbuild',
    sourcemap: false,
    // Чанки для лучшего кэширования
    chunkSizeWarningLimit: 1000,
    // Оптимизация статических assets
    assetsInlineLimit: 4096
  },
  // Оптимизация dev сервера
  server: {
    port: 5173,
    strictPort: true,
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
  // Включим обработку различных форматов изображений
  assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.webp']
})