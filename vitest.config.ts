/// <reference types="vitest" />
import { defineConfig } from 'vite'

const vitestConfig = {
  test: {
    globals: true,
    environment: 'happy-dom'
  }
}

export default defineConfig(vitestConfig)
