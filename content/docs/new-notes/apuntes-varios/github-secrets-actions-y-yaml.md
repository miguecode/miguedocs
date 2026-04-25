---
title: "GitHub Secrets, Actions y YAML"
description: "Los GitHub Secrets son una característica de GitHub que permite guardar valores sensibles de nuestro proyecto de forma segura y cifrada (como claves de nuestra ..."
---


## GitHub Secrets

- Los GitHub Secrets son una característica de GitHub que permite guardar valores sensibles de nuestro proyecto de forma segura y cifrada (como claves de nuestra API, tokens de acceso y cualquiero otro tipo de código). Son seguros ya que no se muestran en los logs y no son visibles para nadie (ni siquiera para nosotros, una vez que los guardamos). Sirven para proteger nuestro archivo ".env" sin tener que subirlo al repositorio.

- **Para agregar Secrets, tenemos que ir a**: 

```typescript
El repositorio > Settings > Secrets and variables > Actions
```
- Aca, vamos a crear un "repository secret" por cada clave que queramos guardar. Para hacerlo tenemos que especificarle un nombre, y un valor. Este valor nunca lo vamos a poder volver a ver, pero sí lo podemos actualizar si queremos.


## GitHub Actions

- GitHub Actions es una plataforma de automatización de flujos de trabajo (workflows) integrada en GitHub. Sirve para que el repositorio realice tareas automáticamente, como testear, compilar, desplegar código o ejecutar scripts sin necesidad de intervención manual. Estas tareas automatizadas se definen en un archivo con lenguaje YAML, ubicado en la carpeta .github/workflows/.

- Cada archivo describe un workflow distinto, es decir, un flujo de trabajo que se puede activar de forma automática mediante un evento (como un push al repositorio, la creación de un pull request, o un horario determinado).

- **Un workflow contiene**: 

1. Jobs: tareas independientes que se ejecutan.
2. Steps: los pasos específicos dentro de cada job (instalar dependencias, correr scripts, compilar, etc).
3. Runners: máquinas virtuales donde se ejecuta todo (Linux, Windows o Mac).

- Los GitHub Secrets, como vimos, se usan dentro de los workflows para inyectar valores sensibles sin exponerlos. Se accede a ellos con la sintaxis: ${{ secrets.NOMBRE_DEL_SECRET }}.


## YAML (YAML Ain't Markup Language)

- YAML es un lenguaje de serialización de datos de fácil lectura para humanos, usado principalmente para configurar archivos de configuración y en apliaciones que requieren serialización y almacenamiento de datos.

- Los archivos con lenguaje YAML pueden tener la extensión ".yaml" o ".yml". Su sintaxis tiene una forma estructurada y simple, basada en sangrías.

- En relación con GitHub Actions, YAML sirve para describir qué tiene que hacer GitHub con nuestro código, de forma automática. Por ejemplo: correr un script, testear o compilar.


## Ejemplo con mi proyecto del bot de Twitter

# Workflow name
name: Post random Messi image to Twitter

# Workflow trigger
on:
  schedule:
```typescript
- **cron**: "0 15 * * *" # Todos los días a las 15:00 UTC (12:00 Argentina)
```
  workflow_dispatch:

# Jobs to do
jobs:
  post-tweet:
```typescript
runs-on: ubuntu-latest

steps:
  - **name**: ⬇️ Clonar el repositorio
    uses: actions/checkout@v3

  - **name**: 🟢 Configurar Node.js
    uses: actions/setup-node@v3
    with:
      node-version: 20

  - **name**: 📦 Instalar dependencias
    run: npm ci

  - **name**: 🔧 Compilar TypeScript
    run: npx tsc

  - **name**: 🔑 Configurar variables de entorno
    run: |
      echo "TWITTER_API_KEY=${{ secrets.TWITTER_API_KEY }}" >> .env
      echo "TWITTER_API_SECRET=${{ secrets.TWITTER_API_SECRET }}" >> .env
      echo "TWITTER_ACCESS_TOKEN=${{ secrets.TWITTER_ACCESS_TOKEN }}" >> .env
      echo "TWITTER_ACCESS_SECRET=${{ secrets.TWITTER_ACCESS_SECRET }}" >> .env
      echo "CLOUD_NAME=${{ secrets.CLOUD_NAME }}" >> .env
      echo "CLOUDINARY_API_KEY=${{ secrets.CLOUDINARY_API_KEY }}" >> .env
      echo "CLOUDINARY_API_SECRET=${{ secrets.CLOUDINARY_API_SECRET }}" >> .env

  - **name**: 🚀 Ejecutar bot
    run: node dist/main.js
```