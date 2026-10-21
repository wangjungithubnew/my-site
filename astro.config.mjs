import { defineConfig } from 'astro/config';

// 纯静态网站，不需要任何适配器
export default defineConfig({
  output: 'static',
});
