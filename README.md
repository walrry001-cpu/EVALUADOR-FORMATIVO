# Evaluador Formativo · 5.° E

Aplicación web de un solo archivo (`index.html`) con su service worker (`sw-v20261103.js`). Funciona en el celular y guarda los datos en el propio dispositivo.

## Qué cambió en esta versión (20261103)
- **Matemática:** 3 preguntas base + 1 adicional (solo para el nivel AD). Las demás áreas siguen con 5 base + 1 adicional.
- **Confirmar respuesta:** al tocar una opción solo se marca; el estudiante puede cambiarla y, cuando está seguro, pulsa «Confirmar respuesta». Recién ahí se corrige.
- Se mantienen el botón «No está listo» (pasa al final de la cola y conserva las respuestas) y el botón 🗑️ Eliminar en los exámenes guardados.

## Cómo subirlo
1. Reemplaza `index.html` en el repositorio y agrega `sw-v20261103.js`. Deja los demás archivos (manifest, iconos y los `sw-...` anteriores).
2. Abre la página una vez con internet. La primera vez limpia la caché anterior; no borra exámenes ni registros.

## Ojo con Matemática
Los exámenes de Matemática guardados antes tienen 6 preguntas. Al abrirlos se usan solo las 4 primeras; para guardarlos de nuevo hay que quitar las 2 que sobran.
Con 3 preguntas base, los umbrales por defecto (50 % y 75 %) dan C con 1 acierto, B con 2 y A con 3. Se pueden cambiar en el formulario.
