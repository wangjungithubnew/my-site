import { defineConfig } from 'astro/config';
import edgeone from '@edgeone/astro'; // 引入适配器

export default defineConfig({
  output: 'static', // 保持静态输出
  adapter: edgeone(), // 添加适配器
});
