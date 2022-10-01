## Getting Started

### Modo Desarrollo
Para ejecutar la app en local, hacerlo desde el directorio `/` raiz del monorepo:

```bash
npm run dev
```

Si quieres ejecutar el servidor de prueba, con datos *mockeados*, muevete al directorio `/apps/web` y ejecuta:

```bash
npm run server:dev
```

Y abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

### Test e2e
Si quieres lanzar los tests de aceptación y *end-to-end* de la app, tienes dos formas. Si los quieres  lanzar en modo gráfico, muevete a la carpeta `/apps/web` y ejecuta:

```bash
npm run test:e2e:open
```
Si quieres correrlos en modo consola, ve a la carpeta raíz `/` y ejecuta:

```bash
npm run test:e2e
```

> Para lanzar los tests, debes tener la aplicación corriendo con `npm run dev` desde la carpeta raíz `/` en otra terminal.