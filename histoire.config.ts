import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  setupFile: './histoire.setup.ts',
  plugins: [HstVue()],
  routerMode: 'hash',
  outDir: 'docs',
  vite: {
    base: process.env.HISTOIRE_BASE || '/',
  },
  tree: {
    groups: [
      { title: 'Basic usage', include: (file) => file.path.startsWith('src/stories/1-basic-usage') },
      { title: 'Configure columns', include: (file) => file.path.startsWith('src/stories/2-configure-columns') },
      { title: 'Theming', include: (file) => file.path.startsWith('src/stories/3-theming') },
      { title: 'Stress test', include: (file) => file.path.startsWith('src/stories/4-stress-test') },
    ],
  },
  defaultStoryProps: {
    autoPropsDisabled: true,
  },
})
