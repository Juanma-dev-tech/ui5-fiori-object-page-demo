# UI5 Fiori Object Page Demo

Demo de una **SAP Fiori Object Page** desarrollada con SAPUI5.  
Muestra el detalle de un **Sales Order** con secciones, tablas, formatters y un badge de estado (“Overall Status”).

> Proyecto de práctica dentro del roadmap hacia la certificación **SAP Certified Development Associate – SAP Fiori Application Developer**.

---

## 🧱 Tecnologías y conceptos usados

- **SAPUI5 / OpenUI5**
- **XML Views** (`App.view.xml`, `ObjectPage.view.xml`)
- **Object Page Layout** (`sap.uxap.ObjectPageLayout` + `ObjectPageHeader`)
- **Modelos JSON** (`JSONModel` + `model/data.json`)
- **Data binding**
  - Property binding
  - Aggregation binding (`Table`, `List`)
- **Formatters personalizados** (`model/formatter.js`)
  - Formateo de fechas
  - Montos con moneda (formato `es-AR`)
  - Cantidad + unidad
  - Mapeo de `Status` → `ObjectStatus.state` (Success, Warning, Error, etc.)

---

## 📂 Estructura del proyecto

```text
ui5-fiori-object-page-demo
├─ webapp
│  ├─ controller
│  │  ├─ App.controller.js
│  │  └─ ObjectPage.controller.js
│  ├─ model
│  │  ├─ data.json          # Datos mock del Sales Order
│  │  └─ models.js          # Creación de JSONModel
│  │  └─ formatter.js       # Formatters usados en la vista
│  ├─ view
│  │  ├─ App.view.xml       # Raíz: contiene el <App id="app"/>
│  │  └─ ObjectPage.view.xml# Vista principal Object Page
│  ├─ Component.js
│  ├─ index.html
│  └─ manifest.json
└─ ui5.yaml
```

---

## ▶ Cómo ejecutar el proyecto

### Requisitos

- Node.js (>= 20.11 recomendado)
- `@ui5/cli` instalada globalmente

```bash
npm install -g @ui5/cli
```

### Instalar dependencias (solo una vez):

```bash
npm install
```

### Levantar el servidor de desarrollo:

```bash
npx ui5 serve -o index.html
```

La app estará disponible en:

**http://localhost:8080/index.html**

---

## 🧾 Funcionalidad

- Muestra el detalle de un **Sales Order**.
- Secciones:
  - **General Information** (`SimpleForm`)
  - **Items** (`m:Table`)
  - **Delivery & Billing**
  - **History** (`m:List`)
- **Overall Status** con estado visual según formatter.
- Formateo:
  - Montos → `Intl.NumberFormat("es-AR")`
  - Fechas ISO → formato local
  - Quantity + Unit

---

## 🎯 Objetivo de aprendizaje

Este proyecto sirve para:

- Practicar el **floorplan Object Page** de Fiori.
- Reforzar:
  - estructura de un proyecto UI5,
  - uso de modelos y binding,
  - creación y uso de formatters,
  - diseño de vistas XML más complejas.

---

