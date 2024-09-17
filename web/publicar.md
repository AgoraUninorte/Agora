---
date: 2024-09-17
author: Arturo Rebolledo
title: Publicar en Ágora
toc: true
index: false
---
# Guía para publicar artículos en Agora

## Paso 1: Hacer un fork del repositorio

1. Ve a https://github.com/AgoraUninorte/Agora
2. En la esquina superior derecha, haz clic en el botón "Fork"
3. Espera a que se complete el proceso de fork

## Paso 2: Acceder a tu fork

1. Una vez completado el fork, estarás en tu propia copia del repositorio
2. La URL será algo como: https://github.com/TuUsuario/Agora

## Paso 3: Crear un nuevo archivo

1. En tu fork, navega a la carpeta `web`
2. Haz clic en "Add file" y luego en "Create new file"
3. Nombra tu archivo con el título del artículo en formato "slug" (por ejemplo: "mi-primer-articulo.md")

## Paso 4: Escribir el contenido del artículo

1. Comienza con los atributos YAML al inicio del archivo:

```yaml
---
date: 17/09/2024
author: Tu Nombre (Corto)
image: images/tuimagen.jpg
title: Título de tu artículo
toc: true
---
```
La imagen tambien puede ser una url

2. Escibe tu artículo en markdown y estructuralo así:

```markdown
# Título principal

## Subtítulo

![Descripción de la imagen](ruta/a/tu/imagen.jpg)

**Nombre del Autor (Nombre Completo)**

Contenido de tu artículo...

## Bibliografía

- Apellido, N. (Año). Título del libro. Editorial.
- Apellido, N. (Año). Título del artículo. Nombre de la revista, volumen(número), páginas.
```

## Paso 5: Commit de los cambios

1. Al terminar de escribir, desplázate hacia abajo
2. En "Commit new file", escribe una breve descripción de tu artículo
3. Asegúrate de que está seleccionado "Commit directly to the main branch"
4. Haz clic en "Commit new file"

## Paso 6: Crear un Pull Request

1. Regresa a la página principal de tu fork
2. Verás un mensaje que dice "This branch is X commit(s) ahead of AgoraUninorte:main"
3. Haz clic en "Contribute" y luego en "Open pull request"
4. Revisa los cambios y asegúrate de que todo esté correcto
5. Haz clic en "Create pull request"
6. Añade un título descriptivo y, si lo deseas, un comentario explicando tu artículo
7. Finalmente, haz clic en "Create pull request"

## Paso 7: Esperar revisión

1. Los administradores del repositorio original revisarán tu artículo
2. Si se necesitan cambios, te lo harán saber en los comentarios del Pull Request
3. Puedes hacer los cambios necesarios en tu fork y el Pull Request se actualizará automáticamente
4. Una vez aprobado, tu artículo se fusionará con el repositorio principal y se publicará en la página de Agora

Recuerda que puedes hacer cambios adicionales a tu artículo mientras el Pull Request esté abierto. Simplemente edita el archivo en tu fork y los cambios se reflejarán en el Pull Request.

Esta guía te permite contribuir al proyecto Agora sin necesidad de tener acceso directo al repositorio principal. ¡Buena suerte con tu publicación!
