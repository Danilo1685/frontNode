# Frontend Node con React + Vite

Este proyecto es el frontend de una aplicación desarrollada con **React** y **Vite**, utilizando una arquitectura modular para manejar productos y usuarios. Es parte de un sistema fullstack que se conecta con un backend hecho en Node.js.

🔗 Repositorio: [https://github.com/Danilo1685/frontNode](https://github.com/Danilo1685/frontNode)

---

## 🚀 Tecnologías utilizadas

- ⚛️ React 19
- ⚡ Vite 6
- 🎨 Tailwind CSS
- 📄 jsPDF y @react-pdf/renderer para generación de PDF
- 📡 Axios para consumo de APIs
- 🧰 Modularización por componentes y vistas
- 🔧 ESLint + PostCSS

---

## 📁 Estructura del proyecto

```
📁 public/images       # Imágenes públicas accesibles desde el navegador
📁 src
 ├── 📁 assets         # Recursos estáticos personalizados
 ├── 📁 components     # Componentes reutilizables
 │    ├── 📁 Productos  # Componentes relacionados a productos
 │    ├── 📁 User       # Componentes relacionados a usuarios
 │    └── ExportPdfButton.jsx
 ├── 📁 services       # Servicios que manejan la lógica de conexión con APIs
 ├── 📁 views          # Vistas principales para navegación
 ├── App.jsx           # Componente raíz
 ├── main.jsx          # Punto de entrada de React
 ├── index.css         # Estilos globales
 └── App.css           # Estilos del componente principal
```

---

## 🛠 Instalación y ejecución

1. Clona el repositorio:

```bash
git clone https://github.com/Danilo1685/frontNode.git
```

2. Instala las dependencias:

```bash
cd frontNode
npm install
```

3. Inicia la aplicación:

```bash
npm run dev
```

La aplicación estará disponible en:  
👉 `http://localhost:5173/`

---

## 📜 Scripts disponibles

| Comando         | Descripción                            |
|----------------|----------------------------------------|
| `npm run dev`  | Inicia el servidor de desarrollo       |
| `npm run build`| Compila para producción                |
| `npm run preview` | Previsualiza la app compilada       |
| `npm run lint` | Ejecuta el linter                      |

---

## 📦 Funcionalidades

- ✅ ABM de productos y usuarios
- 📄 Exportación de datos a PDF (con jsPDF y react-pdf)
- 🔗 Consumo de servicios externos vía Axios
- 🧩 Modularización clara por funcionalidad
- 🎨 Estilos con Tailwind CSS

---

## 📌 Notas

Este frontend está pensado para ser consumido junto a un backend Node.js que provee las APIs necesarias para los módulos de usuarios y productos. Asegurate de tener el backend en ejecución y configurado correctamente.

---

