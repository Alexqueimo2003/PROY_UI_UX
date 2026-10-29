# Proyecto Patitas Felices — Documento 3: Diseño Visual y Mockups de Alta Fidelidad (UI)

Este documento define la fase de **Diseño Visual (UI)** y la especificación detallada de los **Mockups de Alta Fidelidad** a color para la plataforma web y móvil de **Patitas Felices**, conectando los wireframes estructurales con la identidad cromática, tipográfica y los copys oficiales.

---

## 1. Sistema de Diseño Visual y Design Tokens (UI Style Guide)

A diferencia de la fase de wireframing (escala de grises), la interfaz de alta fidelidad introduce una paleta cromática profesional basada en la psicología del color aplicada a la salud animal: **confianza, calidez, higiene y empatía**.

### 1.1 Paleta Cromática Oficial (Tokens de Color)

| Token UI | Código Hex | Rol Semántico y Uso en la Interfaz |
| :--- | :--- | :--- |
| **Primary / Brand** | `#0D9488` (Teal 600) | Identidad de marca, enlaces activos, botones primarios de avance y acentos de navegación. Transmite salud médica, frescura y tranquilidad. |
| **Primary-Hover** | `#0F766E` (Teal 700) | Estado interactivo (*hover / focus*) de botones primarios. |
| **Primary-Light** | `#CCFBF1` (Teal 100) | Fondos de selección activa, badges médicos y chips seleccionados. |
| **Secondary / Warmth** | `#F59E0B` (Amber 500) | Color cálido complementario. Utilizado en estrellas de calificación (4.9/5), badges de descuento y mensajes afectuosos. |
| **Emergency / Alert** | `#DC2626` (Red 600) | Botón flotante de Urgencias 24/7, cintillo superior de guardia y alertas de riesgo vital. |
| **Success / Confirm** | `#16A34A` (Green 600) | Confirmación de cita exitosa, badges de "Cupo Disponible", iconos de validación de formulario. |
| **WhatsApp Accent** | `#25D366` | Botón oficial de respaldo y confirmación instantánea a WhatsApp. |
| **Neutral-900 (Text)** | `#0F172A` (Slate 900) | Títulos principales (H1, H2), textos de alto contraste y etiquetas de precio. |
| **Neutral-600 (Muted)** | `#475569` (Slate 600) | Párrafos descriptivos, bajadas de subtítulo y micro-copys auxiliares. |
| **Neutral-200 (Borders)**| `#E2E8F0` (Slate 200) | Bordes de tarjetas, líneas de separación y campos inactivos. |
| **Surface / Card** | `#FFFFFF` | Fondo de tarjetas de contenido, modales e inputs de formulario. |
| **Background / Canvas** | `#F8FAFC` (Slate 50) | Fondo general de la aplicación (*App Canvas*). |

---

### 1.2 Sistema Tipográfico (Typography Scale)

* **Familia Tipográfica Principal:** `Inter` o `Plus Jakarta Sans` (Sans-Serif geométrica con alta legibilidad en pantallas táctiles y números tabulares claros).
* **Escala de Tamaños y Jerarquía:**
  * **Display H1 (Hero Desktop):** `32px` / Bold (700) / Line-height: `1.2`
  * **H2 (Títulos de Sección):** `24px` / Bold (700) / Line-height: `1.25`
  * **H3 (Títulos de Tarjetas):** `18px` / SemiBold (600) / Line-height: `1.3`
  * **Body Regular (Párrafos):** `16px` / Regular (400) / Line-height: `1.5` *(Cumple WCAG AA para Don Carlos)*
  * **Body Small / Inputs:** `14px` / Medium (500) / Line-height: `1.4`
  * **Caption / Badges:** `12px` / SemiBold (600) / Uppercase

---

### 1.3 Elevaciones, Bordes y Radios (Effects & Corners)

* **Radio de Esquinas (*Corner Radius*):**
  * Botones y Chips (*Pills*): `999px` (Completamente redondeados, accesibles y amigables).
  * Tarjetas y Modales: `12px` (Esquinas suaves que transmiten calidez).
  * Inputs de Formulario: `8px`.
* **Sombras (*Box Shadows*):**
  * `Shadow-SM`: `0 1px 2px 0 rgba(0, 0, 0, 0.05)` (Cards en reposo).
  * `Shadow-MD`: `0 4px 6px -1px rgba(13, 148, 136, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)` (Cards seleccionadas).
  * `Shadow-LG`: `0 10px 15px -3px rgba(0, 0, 0, 0.1)` (Modales y botón flotante de urgencias).

---

## 2. Catálogo de Mockups de Alta Fidelidad (Pantalla por Pantalla)

### Pantalla 1: Home de Conversión a Todo Color (`/`)
* **Top Bar Superior:** Fondo Rojo `#DC2626` con texto en Blanco: `🚨 ¿Tu mascota tiene una urgencia médica ahora mismo? Atendemos 24/7 sin cita previa.` + Botón telefónico `tel:+56912345678`.
* **Navbar:** Logotipo con huella verde Teal (`#0D9488`), enlaces a *Servicios y Tarifas*, *Nuestro Equipo*, *Atención Felina* y botón CTA Teal `Agendar Cita Online`.
* **Hero Section:**
  * Badge superior: `🐾 Cuidado veterinario consciente y sin estrés` (Fondo `#CCFBF1`, texto `#0F766E`).
  * Titular H1: `El amor y la salud que tu mejor amigo merece, con la tranquilidad que tú necesitas.`
  * Botón primario: `Agendar Cita en 2 Minutos` con degradado Teal suave y microinteracción.
  * Botón secundario: `Ver Servicios y Precios` en formato outline.
  * Fotografía de alta resolución de médico veterinario interactuando con paciente feliz.
  * Prueba social: 5 estrellas doradas (`#F59E0B`) con leyenda `4.9 de 5 estrellas — Más de 1.400 tutores felices`.
* **Catálogo de Servicios:** 3 tarjetas con precios destacados en verde azulado (`$18.000`, `$15.000`, `$22.000`) y etiqueta transparente de duración.

---

### Pantalla 2: Paso 1 de Agendamiento — Especie y Servicio (`/agendar/paso-1`)
* **Barra de Progreso (Tunnel Flow):**
  * Paso 1 (Activo - Teal `#0D9488`), Paso 2 (Inactivo `#E2E8F0`), Paso 3 (Inactivo `#E2E8F0`).
* **Selector de Especie:** Chips con iconos ilustrados:
  * `[🐕 Perro]` (Seleccionado, borde Teal de 2px, fondo `#CCFBF1`).
  * `[🐈 Gato]` (Estado inactivo, fondo blanco, borde `#E2E8F0`).
  * `[🐰 Otro / Exótico]`.
* **Tarjetas de Servicio:**
  * Tarjeta seleccionada con borde resaltado, checkmark verde y badge de arancel claro (`$18.000 / Incluye examen clínico completo`).
* **Sticky Summary (Módulo Adhesivo):** Resumen lateral que actualiza el total en tiempo real sin recargar página.

---

### Pantalla 3: Paso 2 de Agendamiento — Especialista, Fecha y Hora (`/agendar/paso-2`)
* **Filtro de Médicos Veterinarios:**
  * Avatar 1: *Cualquier profesional disponible* (Recomendado para turnos rápidos).
  * Avatar 2: *Dra. Emilú Soto* (Insignia Cat Friendly).
  * Avatar 3: *Dr. Carlos Pérez* (Cirugía y Traumatología).
* **Calendario Mensual Interactivo:**
  * Días hábiles interactivos, día seleccionado con círculo Teal sólido y texto blanco.
* **Matriz de Franjas Horarias:**
  * Píldoras verdes para horas libres (`16:00 hrs`, `17:30 hrs`).
  * Píldoras tachadas en gris claro para horas ocupadas (`11:15 hrs`).
  * Píldora activa con anillo de foco (*focus ring*).

---

### Pantalla 4: Paso 3 de Agendamiento — Datos del Tutor (`/agendar/paso-3`)
* **Formulario Simplificado (Cero Registro Obligatorio):**
  * Input 1: *Nombre completo del tutor*.
  * Input 2: *WhatsApp para confirmación* con bandera y código de país prellenado (`+56 9`). Icono de validación verde al ingresar 9 dígitos.
  * Input 3: *Nombre de la mascota y edad* (ej. Rocky, 11 años).
  * Input 4: *Motivo breve de consulta*.
* **Tarjeta de Desglose Final:** Resumen con fecha, hora, doctor asignado, precio exacto y texto de garantía: `🔒 No se te cobrará nada online. Pagas directamente en clínica al finalizar la atención`.
* **Botón Primario de Envío:** `Confirmar mi Cita Médica ✓` (Alto táctil de 52px).

---

### Pantalla 5: Pantalla de Éxito — Cita Confirmada (`/agendar/exito`)
* **Icono de Éxito:** Círculo verde esmeralda con check animado.
* **Pase Digital de Recepción:**
  * Código de cita destacado `#PF-8921`.
  * Código QR nítido para escaneo sin contacto en recepción.
* **Botones de Acción Inmediata:**
  * Botón Verde WhatsApp (`#25D366`): `Enviar Respaldo a mi WhatsApp`.
  * Botón Azul Calendario: `Añadir a Google / Apple Calendar`.
  * Botón Gris: `Descargar Comprobante en PDF`.
* **Módulo de Preparación Pre-Cita:**
  * Consejos de transporte seguro (transportadora para gatos, correa para perros, llegar 10 min antes).

---

### Pantalla 6: Módulo y Modal de Pre-Triaje Urgencias 24/7 (`/urgencias`)
* **Header de Alerta Roja:** `🚨 URGENCIAS VETERINARIAS 24/7 — MONTECRISTO`.
* **Preguntas de Triaje de 5 Segundos:** 3 opciones de riesgo vital con casillas interactivas.
* **Botón de Marcación Inmediata:** Botón rojo de alto impacto `📞 LLAMAR AHORA A GUARDIA MÉDICA: +56 9 1234 5678`.
* **Mini-mapa interactivo:** Ruta GPS más rápida hacia la clínica con aviso automático de llegada al equipo médico.
