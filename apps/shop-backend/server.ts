import app from './src/app';

if (import.meta.env.PROD) {
  app.listen(3000);
  console.log('[PROD] Server listening on port 3000');
}

export const viteNodeApp = app;
