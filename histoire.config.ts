import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  plugins: [HstVue()],
  routerMode: 'hash',
  outDir: 'docs',
  vite: {
    base: process.env.HISTOIRE_BASE || '/',
  },
  tree: {
    groups: [
      { title: 'Basic usage', include: (file) => file.path.startsWith('src/stories/1-basic-usage') },
      { id: 'configure-columns', title: 'Configure columns' },
      { id: 'theming', title: 'Theming' },
      { id: 'stress-test', title: 'Stress test' },
    ],
  },
  defaultStoryProps: {
    autoPropsDisabled: true,
  },
})
