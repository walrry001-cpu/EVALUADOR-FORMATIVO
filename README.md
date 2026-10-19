# Evaluación formativa – I.E. N.° 82019 La Florida del Inca

Aplicación web de un solo archivo (`evaluador-formativo-v20261019.html`) más su service worker (`sw-v20261019.js`).

## Cambio de esta versión (v20261019)
- Botón **🗑️ Eliminar** en cada examen guardado (lista «Evaluaciones guardadas»), con confirmación. No borra resultados del registro.
- Archivo y service worker con **nombre nuevo** y limpieza automática de cachés y service workers anteriores (una vez por versión). Los datos guardados no se tocan.
- Service worker «red primero»: siempre intenta cargar la versión más nueva.

## Cambios anteriores
- Botón **«No terminó: pasar al siguiente»** durante la evaluación: el estudiante pasa al final de la cola y, cuando le toca de nuevo, continúa en la pregunta donde se quedó (conserva sus respuestas). Se guarda con el avance de la sesión.
- Dos selectores de PDF independientes: **Fila A** y **Fila B**.
- Cada selector importa solo a su fila; subir una no borra la otra.
- Cada fila muestra su propio mensaje de estado y el selector se limpia tras importar.

## Publicar en GitHub Pages
1. Sube `evaluador-formativo-v20261019.html`, `sw-v20261019.js` y este README a la raíz del repositorio. Abre `https://<usuario>.github.io/<repositorio>/evaluador-formativo-v20261019.html` una vez para que se limpie la caché anterior.
2. Settings → Pages → Branch: `main` / carpeta `/ (root)` → Save.
