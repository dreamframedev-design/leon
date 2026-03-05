import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                contact: resolve(__dirname, 'contact.html'),
                frjet: resolve(__dirname, 'frjet.html'),
                nanolab: resolve(__dirname, 'nanolab.html'),
                nanome: resolve(__dirname, 'nanome.html'),
                nanoscreen: resolve(__dirname, 'nanoscreen.html'),
                nanous: resolve(__dirname, 'nanous.html'),
                news: resolve(__dirname, 'news.html'),
                pitchDeck: resolve(__dirname, 'pitch-deck.html'),
                pitchDeckLight: resolve(__dirname, 'pitch-deck-light.html'),
                products: resolve(__dirname, 'products.html'),
                services: resolve(__dirname, 'services.html')
            }
        }
    }
})
