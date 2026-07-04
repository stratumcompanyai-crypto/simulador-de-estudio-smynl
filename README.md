# 🛡️ Simulador Examen Cédula A1 - Agente de Seguros

Simulador de práctica para el examen de certificación **Cédula A1** de la **CNSF** (Comisión Nacional de Seguros y Fianzas) de México.

## ✨ Características

- **88 reactivos únicos** organizados en 3 módulos
- **Sistema de temporizador** independiente por módulo (40, 60 y 32 minutos)
- **Calificación automática** con explicaciones detalladas
- **Retroalimentación por tema** — identifica tus áreas de oportunidad
- **Diseño responsive** — funciona en desktop y móvil
- **Interfaz premium** — dark mode con glassmorphism

## 📋 Módulos

| Módulo | Preguntas | Tiempo | Temas |
|--------|-----------|--------|-------|
| 1 | 40 | 40 min | Conceptos de Riesgo, Primas, Contratos, Agentes, Regulación |
| 2 | 28 | 60 min | Vida, AP, GMM, Salud |
| 3 | 20 | 32 min | Sistema Financiero, Matemáticas, Ética |

## 🚀 Ejecución local

```bash
npm run dev
```

Luego abre `http://localhost:3000` en tu navegador.

## 📦 Deploy en Vercel

1. Conecta tu repositorio de GitHub a [Vercel](https://vercel.com)
2. Selecciona el proyecto y haz deploy
3. ¡Listo! Tu simulador estará en `tu-proyecto.vercel.app`

## 🗂️ Estructura

```
simulador/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos (dark premium theme)
├── js/
│   ├── questions.js    # Banco de preguntas
│   └── app.js          # Lógica del simulador
├── vercel.json         # Configuración Vercel
├── package.json        # Metadata del proyecto
└── README.md           # Este archivo
```

## ⚠️ Disclaimer

Este es un simulador de **práctica** y no representa un examen oficial de la CNSF. Las preguntas están basadas en el temario oficial pero pueden no reflejar exactamente las preguntas del examen real.

## 📄 Licencia

MIT
