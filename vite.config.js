import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Caminho relativo: funciona tanto em "https://usuario.github.io/"
  // quanto em "https://usuario.github.io/nome-do-repo/", sem precisar editar nada.
  base: './',
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
