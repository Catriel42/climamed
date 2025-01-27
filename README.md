# React + Vite

Este template proporciona una configuración mínima para que React funcione en Vite con HMR (Hot Module Replacement) y algunas reglas de ESLint.

Actualmente, están disponibles dos plugins oficiales:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) usa [Babel](https://babeljs.io/) para Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) usa [SWC](https://swc.rs/) para Fast Refresh

## Requisitos previos

Asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (preferiblemente la versión LTS).
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/) (gestores de paquetes).

## Instalación

1. Clona este repositorio:

   ```bash
   git clone <URL del repositorio>
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd <nombre_del_directorio>
   ```

3. Instala las dependencias:

   Si estás usando `npm`:

   ```bash
   npm install
   ```

   O si prefieres `yarn`:

   ```bash
   yarn
   ```

## Comandos

- **Para correr el proyecto en modo desarrollo (con Hot Module Replacement):**

   Si usas `npm`:

   ```bash
   npm run dev
   ```

   O si usas `yarn`:

   ```bash
   yarn dev
   ```

   Esto abrirá el servidor de desarrollo en [http://localhost:3000](http://localhost:3000).

- **Para construir el proyecto para producción:**

   Si usas `npm`:

   ```bash
   npm run build
   ```

   O si usas `yarn`:

   ```bash
   yarn build
   ```

   Esto generará los archivos optimizados en el directorio `dist/`.

- **Para servir la versión de producción:**

   Si usas `npm`:

   ```bash
   npm run preview
   ```

   O si usas `yarn`:

   ```bash
   yarn preview
   ```

   Esto lanzará un servidor para ver cómo se verá el proyecto en producción, generalmente en [http://localhost:5000](http://localhost:5000).

## Personalización del Plugin de React

Puedes elegir entre dos opciones para manejar el Hot Module Replacement (HMR) en React:

1. **Usando Babel (recomendado si ya estás familiarizado con Babel):**
   
   Instala el plugin `@vitejs/plugin-react`:

   ```bash
   npm install @vitejs/plugin-react
   ```

2. **Usando SWC (recomendado si prefieres un enfoque más rápido y ligero):**

   Instala el plugin `@vitejs/plugin-react-swc`:

   ```bash
   npm install @vitejs/plugin-react-swc
   ```

   Configura el plugin en el archivo `vite.config.js` según el plugin que prefieras usar.
