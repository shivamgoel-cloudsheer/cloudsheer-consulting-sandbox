// Cross-platform wrapper: builds Vite with VITE_BASE set for GitHub Pages
// sandbox path. Avoids needing cross-env as a devDependency.
import { spawnSync } from 'node:child_process'

process.env.VITE_BASE = '/cloudsheer-consulting-sandbox/'

const result = spawnSync('npx', ['vite', 'build'], {
  stdio: 'inherit',
  shell: true,
  env: process.env,
})

process.exit(result.status ?? 0)
