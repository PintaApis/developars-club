# Developars.club

Plataforma de perfiles de desarrollo. Creada por y para la comunidad. Con propósitos educativos con la idea de crear un producto.

## ¿Cómo está estructurado el código?

Este proyecto utiliza [Turborepo](https://turborepo.com/) para manejar los paquetes de forma monorepo. Cada paquete tiene su propia documentación y se encuentra en la carpeta `packages`. Las aplicaciones se encuentran en la capreta `apps`.

Este turborepo usa [npm](https://www.npmjs.com/) como package manager. Incluye los siguientes packages/apps:

### Apps y Paquetes

- `web`: Aplicación [Next.js](https://nextjs.org). Frontend de la plataforma
- `eslint-config-custom`: Configuraciones de `eslint` (incluye `eslint-config-next` y `eslint-config-prettier`)
- `tsconfig`: fichero `tsconfig.json`s usado en el monorepo

### Utilidades

Este turborepo tiene algunas herramientas adiccionales añadidas y configuradas.

- [TypeScript](https://www.typescriptlang.org/) para el tipado estático.
- [ESLint](https://eslint.org/) para el linting.
- [Prettier](https://prettier.io) para el formateo de código.

### Build

Para construir el proyecto, se debe ejecutar el siguiente comando:
```
cd my-turborepo
npm run build
```

### Develop

Para desarrollar el proyecto, se debe ejecutar el siguiente comando:

```
cd my-turborepo
npm run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```
---
## ¿Cómo contribuir al proyecto?

Es un proyecto open source, por lo que cualquier persona puede contribuir. Para ello, se debe seguir el siguiente flujo de trabajo:

1. Crear un fork del proyecto.
2. Crear una rama con el nombre de la feature que se va a implementar.
3. Crear un PR con la feature implementada.
4. Se revisará el PR y se sugerirán los cambios necesarios si es preciso.
5. Se harán los cambios necesarios y se volverá a revisar el PR.
6. Se hará merge del PR.
7. Tu contribución será añadida al proyecto.

Dale un vistazo a la [guía de contribución](CONTRIBUTING.md) para más información.

---

## Links útiles

A continuación se listan algunos links útiles para el desarrollo de este proyecto:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)

---
## Licencia
MIT &copy; 2022 [PintaAPI Developer Community](https://discord.gg/carlosazaustre)
