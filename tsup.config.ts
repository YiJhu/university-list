import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.ts'],
  tsconfig: './tsconfig.dev.json',
  outDir: './dist',
  format: ['esm'],
  dts: true,
  sourcemap: false,
  clean: true,
})
