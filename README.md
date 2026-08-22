# 📋 Evaluación Formativa · 5.° "E"

**I.E. N.° 82019 "La Florida del Inca"** — Cajamarca, Perú
Prof. Walter Rodrigo Arribasplata Chavarry

Herramienta web (offline-first) para tomar evaluaciones formativas de "preguntas relámpago" a los 28 estudiantes de la sección, con niveles de logro **C · B · A · AD** y conclusión descriptiva basada en los estándares de aprendizaje del **CNEB** (Currículo Nacional de la Educación Básica).

🔗 **Usar en línea:** _(se completa automáticamente al activar GitHub Pages — ver abajo)_
`https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`

---

## ✨ Características

- Evalúa a los 28 estudiantes en orden de lista, uno por uno.
- Cada evaluación usa 6 preguntas: 5 base (100%) + 1 adicional que solo aparece si el estudiante acierta las 5 base y define el nivel **AD**.
- Escala: `< 50% = C` · `50%–75% = B` · `75%–100% = A` · `100% + acierta la adicional = AD`.
- Las preguntas se muestran en el orden exacto en que se escribieron o se importaron desde PDF, con cada opción marcada (a, b, c, d).
- Registro de evaluaciones con opción de **volver a tomar** o **eliminar** una evaluación guardada por error.
- Si se cierra la app a mitad de una sesión, al reabrir se ofrece **reanudar** donde quedó.
- Funciona completamente **sin internet**, salvo dos funciones puntuales que descargan una librería externa la primera vez que se usan en el dispositivo:
  - Importar preguntas desde PDF.
  - Descargar el informe en PDF.
- Instalable como app (PWA) en celular o laptop.
- Todo lo guardado (bancos de preguntas, evaluaciones, asistencia) se queda en el navegador del dispositivo — usa el botón **💾 Copia de seguridad** dentro de la app para no perder datos al cambiar de equipo.

## 📱 Cómo usarlo

### Opción A — Desde GitHub Pages (recomendado, no requiere instalar nada)
1. Abre el enlace del sitio publicado (arriba) en Chrome, desde el celular o la laptop.
2. Opcional: en el navegador, usa "Agregar a pantalla de inicio" / "Instalar app" para tenerlo como una app normal.

### Opción B — Sin internet, copiando la carpeta
1. Descarga este repositorio completo (botón **Code → Download ZIP**).
2. Copia la carpeta a tu celular o laptop.
3. Abre `index.html` con Chrome.
4. Todo funciona sin conexión, salvo las dos funciones puntuales descritas arriba.

## 📂 Estructura del repositorio

```
├── index.html          # La aplicación completa
├── manifest.json        # Configuración PWA (instalable)
├── sw.js                 # Service worker (cache offline)
├── favicon.ico
├── icons/
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── apple-touch-icon.png
│   ├── favicon-32.png
│   └── favicon-16.png
└── LEEME.txt             # Instrucciones rápidas (español, uso local)
```

## 🚀 Publicar en GitHub Pages

1. Sube este repositorio a GitHub (ver sección siguiente).
2. En el repo: **Settings → Pages**.
3. En "Source" selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda. En un par de minutos el sitio queda disponible en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

## 🛠️ Subir este proyecto a GitHub por primera vez

Desde una terminal, dentro de esta carpeta:

```bash
git init
git add .
git commit -m "Primera versión: Evaluación Formativa 5.° E"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/NOMBRE-DEL-REPO.git
git push -u origin main
```

## 📄 Licencia

Uso educativo. Ver [LICENSE](LICENSE).
