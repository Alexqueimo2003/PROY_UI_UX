# Guía de Layout y Componentes para Wireframes en Figma — Proyecto Patitas Felices

Esta guía establece el estándar para construir los prototipos de **baja fidelidad (Low-Fidelity Wireframes)** en Figma. El objetivo es estructurar la jerarquía visual, la distribución espacial y la navegación del flujo de agendamiento sin distraerse con colores definitivos, tipografías finales o fotografías reales.

---

## 1. Filosofía y Estilo de Wireframing en Bloques (Lo-Fi Blocks)

El estilo de bloques permite validar usabilidad y arquitectura de información con usuarios y partes interesadas (*stakeholders*) de forma ágil y objetiva.

### Reglas Fundamentales del Estilo:
1. **Abstracción Visual:** Reemplazar imágenes complejas por cajas contenedoras con una "X" diagonal de extremo a extremo.
2. **Jerarquía Tipográfica Simulada:** Usar barras horizontales redondeadas (*skeleton bars*) o tipografía neutra en escala de grises con pesos contrastados para representar encabezados y párrafos.
3. **Bordes Suaves y Amigables:** Emplear radios de esquina redondeados (*corner radius* de 8px a 999px) para transmitir la calidez de una clínica veterinaria desde la etapa de alambre.
4. **Cero Color Decorativo:** Todo el diseño se realiza exclusivamente en escala de grises neutra. El color se reserva únicamente para pruebas posteriores de UI de alta fidelidad.

### Tokens de Color en Escala de Grises (Figma Color Styles)

| Nombre del Estilo en Figma | Código Hex | Uso Específico |
| :--- | :--- | :--- |
| `Wireframe/Canvas` | `#F4F4F6` | Fondo del artboard o frame general de la pantalla. |
| `Wireframe/Surface` | `#FFFFFF` | Fondo de tarjetas, modales, hojas de diálogo e inputs. |
| `Wireframe/Border-Light` | `#E5E7EB` | Líneas divisorias, bordes de cards y estados inactivos. |
| `Wireframe/Placeholder` | `#D1D5DB` | Relleno de cajas de imagen y aspas de la "X". |
| `Wireframe/Text-Secondary`| `#9CA3AF` | Barras de texto simulado de párrafos y etiquetas secundarias. |
| `Wireframe/Text-Primary` | `#4B5563` | Barras de subtítulos y bordes de botones secundarios. |
| `Wireframe/Dark-Accent` | `#111827` | Botones primarios, barras de títulos H1 y bordes activos. |

---

## 2. Especificación de Cuadrículas de Diseño (Layout Grids)

Para asegurar consistencia visual y adaptabilidad responsiva, se definen dos grillas maestras en Figma utilizando el sistema de espaciado base de **8 puntos (8-pt Grid System)**:

```
[ 8px ]  [ 16px ]  [ 24px ]  [ 32px ]  [ 40px ]  [ 48px ]  [ 64px ]
  ·        ··        ···       ····      ·····     ······    ········
```

---

### Cuadrícula de Escritorio (Desktop — Frame 1440 x 1024 px)

* **Ancho de Contenedor Máximo (*Max-Width*):** 1200 px (centrado en el frame de 1440 px).
* **Tipo de Grid en Figma:** Columns.
* **Número de Columnas (*Count*):** `12`
* **Color de Guía (*Color*):** `rgba(255, 0, 0, 0.05)` o `rgba(0, 0, 0, 0.04)`.
* **Comportamiento (*Type*):** `Stretch` (con margen lateral) o `Center` con ancho fijo:
  * Si es **Stretch:**
    * Margen Lateral (*Margin*): `120 px`
    * Medianil (*Gutter*): `24 px`
  * Si es **Center:**
    * Ancho de Columna (*Width*): `78 px`
    * Medianil (*Gutter*): `24 px`
* **Distribución de Columnas en Secciones Clave:**
  * **Header:** Logo (3 cols), Menú de navegación (6 cols), Botón CTA Agendar (3 cols).
  * **Hero Section:** Bloque de texto y llamada a la acción (6 cols), Caja de imagen con X (6 cols).
  * **Catálogo de Servicios:** 3 tarjetas de 4 columnas cada una, o 4 tarjetas de 3 columnas cada una.
  * **Formulario de Agendamiento:** Contenedor centralizado de 8 columnas (dejando 2 columnas libres a cada lado) o 7 columnas de formulario + 5 columnas de resumen lateral (*sticky summary*).

---

### Cuadrícula Móvil (Mobile — Frame 390 x 844 px / iPhone 13/14)

* **Tipo de Grid en Figma:** Columns.
* **Número de Columnas (*Count*):** `4`
* **Comportamiento (*Type*):** `Stretch`
* **Margen Lateral (*Margin*):** `16 px` (o `20 px` para mayor aire en bordes).
* **Medianil (*Gutter*):** `16 px`
* **Reglas Táctiles en Móvil:**
  * **Zona de Toque Mínima (*Touch Target*):** Mínimo `48 x 48 px` en cualquier botón o chip interactivo (accesibilidad móvil).
  * **Elementos de Ancho Completo:** Botones de acción principales ocupan las 4 columnas (ancho = `358 px` con márgenes de 16 px).

---

## 3. Biblioteca de Componentes de Bloques en Figma

Construye estos componentes como variantes con **Auto Layout** activado para garantizar escalabilidad.

---

### 3.1 Cajas con "X" (Placeholders de Imágenes y Medios)

Representan fotos de mascotas, retratos de veterinarios o mapas de ubicación.

```
+───────────────────────────+
│ \                       / │
│   \                   /   │
│     \               /     │
│       \           /       │
│         \       /         │
│           \   /           │
│             X             │
│           /   \           │
│         /       \         │
│       /           \       │
│     /               \     │
│   /                   \   │
│ /                       \ │
+───────────────────────────+
```

#### Cómo crearlo en Figma:
1. Crea un rectángulo con esquinas redondeadas (`Corner radius: 8px` o `12px`).
2. Relleno (*Fill*): `#F4F4F6` o `#FFFFFF`. Borde (*Stroke*): `1.5px` en `#D1D5DB`.
3. Dibuja dos líneas diagonales vectoriales cruzadas de vértice a vértice con trazo de `1.5px` en `#D1D5DB`.
4. Agrupa en un Frame y añade una restricción de escala (*Constraints: Scale / Scale*) para que la "X" mantenga la proporción al redimensionar.
5. **Variantes Clave:**
   * `AspectRatio-16:9`: Para el Hero principal de escritorio (ej. 580 x 326 px).
   * `AspectRatio-1:1`: Para avatares médicos y fotos de especies (ej. 80 x 80 px o 120 x 120 px).
   * `AspectRatio-4:3`: Para tarjetas de catálogo de servicios (ej. 280 x 210 px).

---

### 3.2 Líneas de Texto Simulado (Skeleton Wireframe Text)

Evitan que el usuario se distraiga leyendo textos falsos en latín (*Lorem Ipsum*) y centran la atención en la densidad de información.

```
H1:   ████████████████████████████████████      (32px alto, #111827)
H2:   ████████████████████                      (22px alto, #4B5563)
Body: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            (12px alto, #9CA3AF)
      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                        (12px alto, #9CA3AF)
```

#### Especificaciones de Componente:
* **Titular H1 (Hero Title):** Rectángulo de `Height: 32px`, `Corner radius: 4px`, color `#111827`. Ancho al 70%-80% del contenedor.
* **Subtítulo H2 / H3:** Rectángulo de `Height: 20px`, `Corner radius: 4px`, color `#4B5563`. Ancho al 50%-60%.
* **Párrafo / Texto de Cuerpo:** Pila de rectángulos de `Height: 12px`, `Corner radius: 4px`, color `#9CA3AF` con separación vertical de `8px`.
* *Alternativa con texto real:* Si se usa texto editable, aplicar la fuente del sistema (`Inter` o `Roboto`), peso Regular para cuerpo y Bold para títulos, todo en color `#4B5563` o `#111827`.

---

### 3.3 Botones Redondeados (Pills & Rounded Buttons)

```
BOTÓN PRIMARIO:
+─────────────────────────────────────────+
│        AGENDAR HORA EN 2 MINUTOS        │  Fondo: #111827 | Texto/Barra: #FFFFFF
+─────────────────────────────────────────+  Radius: 999px (Pill) | Alto: 48px

BOTÓN SECUNDARIO (OUTLINE):
┌─────────────────────────────────────────┐
│              URGENCIAS 24/7             │  Fondo: Transparente | Borde: 2px #111827
└─────────────────────────────────────────┘  Radius: 999px | Alto: 48px

CHIP SELECCIONABLE (RADIO PILL):
(•) [ PERRO ]      ( ) [ GATO ]      ( ) [ EXÓTICO ]
```

#### Estructura con Auto Layout en Figma:
* **Dirección:** Horizontal.
* **Alineación:** Centro (`Alignment: Center`).
* **Padding Vertical:** `14px` (Desktop) / `16px` (Mobile).
* **Padding Horizontal:** `24px` (Desktop) / `20px` (Mobile).
* **Radio de Curvatura (*Corner Radius*):** `999px` (estilo píldora completo) o `8px` (esquinas suaves).
* **Variantes de Estado:**
  * `Primary`: Relleno `#111827`, texto o barra interna `#FFFFFF`.
  * `Secondary / Outline`: Sin relleno, borde `2px` en `#111827`, texto `#111827`.
  * `Disabled`: Relleno `#E5E7EB`, texto `#9CA3AF`, cursor bloqueado.
  * `Destructive / Emergency`: Borde engrosado `2.5px` en `#111827` con icono de cruz de primeros auxilios.

---

### 3.4 Campos de Formulario e Inputs de Texto

```
Etiqueta superior (12px, #4B5563):
Nombre y Apellido
+───────────────────────────────────────────────────────────+
│ Valentina Arismendi                                   (✓) │
+───────────────────────────────────────────────────────────+
Alto: 48px | Borde: 1.5px #E5E7EB | Fondo: #FFFFFF | Radius: 8px
```

* **Componente Input:**
  * Auto Layout vertical: Etiqueta (Label) arriba con `gap: 6px`.
  * Contenedor de entrada con Auto Layout horizontal: `padding: 12px 16px`, altura total `48px`.
  * Borde `#E5E7EB` (estado normal) o `#111827` (estado enfocado/activo).
  * Icono de validación opcional a la derecha (check de éxito o signo de interrogación de ayuda).

---

## 4. Lista de Verificación Visual (Checklist de Armado en Figma)

Utiliza esta lista paso a paso para construir y auditar visualmente las interfaces en baja fidelidad.

---

### 4.1 Checklist para la Pantalla de Inicio (Home — Desktop y Mobile)

```
[ ] 1. Frame y Cuadrícula
    - [ ] Frame Desktop configurado en 1440x1024 px con 12 columnas (gutter 24px, margin 120px).
    - [ ] Frame Mobile configurado en 390x844 px con 4 columnas (gutter 16px, margin 16px).
    - [ ] Fondo del canvas general establecido en #F4F4F6.

[ ] 2. Top Bar & Header de Navegación
    - [ ] Franja superior con teléfono de urgencias visible (alto 36px, fondo #111827 o #E5E7EB).
    - [ ] Logo simplificado con icono de huella + texto "Patitas Felices".
    - [ ] Enlaces del menú (Servicios, Veterinarios, Nosotros) distribuidos con auto layout horizontal.
    - [ ] Botón CTA destacado "Agendar Cita" alineado a la derecha.
    - [ ] En móvil: Menú colapsado en icono de hamburguesa (tres líneas horizontales en #111827).

[ ] 3. Sección Principal (Hero Section)
    - [ ] Titular principal en barra gruesa H1 (o tipografía 36px bold en #111827).
    - [ ] Párrafo de bajada simulado de 2 líneas (#4B5563).
    - [ ] Grupo de botones: Primario ("Agendar Cita") y Secundario ("Urgencias 24/7").
    - [ ] Indicador de confianza: 5 estrellas simuladas + texto de valoración (ej. "4.9/5").
    - [ ] Caja contenedora con "X" de proporción 16:9 que simula la fotografía del equipo médico.

[ ] 4. Módulo de Servicios Destacados
    - [ ] Encabezado H2 de sección centrado o alineado a la izquierda.
    - [ ] Grilla de 3 a 4 tarjetas con fondo #FFFFFF, borde #E5E7EB y radio de 12px.
    - [ ] Cada tarjeta incluye:
        * Miniatura con "X" (proporción 4:3 o icono cuadrado 48x48 px).
        * Barra de título del servicio (#111827).
        * Barra de descripción corta (#9CA3AF).
        * Etiqueta de precio transparente (ej. "Desde $18.000").
        * Enlace simulado "Ver más >".

[ ] 5. Bloque de Pilares de Valor (Propuesta Diferencial)
    - [ ] 3 columnas con icono circular con "X" o check:
        * 1. Cero sorpresas en tarifas (precios claros).
        * 2. Atención felina y canina separada (Cat Friendly).
        * 3. Recordatorios automáticos por WhatsApp.

[ ] 6. Pie de Página (Footer)
    - [ ] Contenedor de ancho completo con fondo #E5E7EB o #111827 invertido.
    - [ ] 3 columnas de enlaces simulados: Ubicación y sedes, horarios, redes y certificación SAG.
```

---

### 4.2 Checklist para el Formulario de Citas (Pasos de Agendamiento)

```
[ ] 1. Encabezado de Agendamiento Simplificado
    - [ ] Header limpio sin menú general para evitar fugas del embudo de reserva.
    - [ ] Botón de retorno "<- Volver" a la izquierda.
    - [ ] Título de sección "Reserva tu Cita Médica".

[ ] 2. Indicador de Progreso (Stepper de 3 Pasos)
    - [ ] Componente visual de 3 círculos numerados interconectados por líneas:
        * Paso 1: Servicio y Mascota.
        * Paso 2: Fecha y Especialista.
        * Paso 3: Datos de Contacto.
    - [ ] Estado visual claro: Paso activo (círculo sólido #111827), pasos futuros (círculo borde #D1D5DB).

[ ] 3. Paso 1: Selección de Mascota y Servicio
    - [ ] Selector de especie: 3 tarjetas/chips redondeados (Perro, Gato, Exótico) con icono con "X".
    - [ ] Campo opcional para ingresar nombre de la mascota.
    - [ ] Lista de servicios en tarjetas tipo radio button con precio destacado a la derecha.
    - [ ] Botón inferior ancho "Continuar a Horarios ->" (deshabilitado hasta seleccionar).

[ ] 4. Paso 2: Calendario y Horarios
    - [ ] Selector de veterinario (Dropdown o tarjetas de perfil con avatar 1:1 con "X").
    - [ ] Calendario interactivo en matriz de 7 días con selector de mes (< Octubre 2026 >).
    - [ ] Estados de los días: Pasados (deshabilitados #E5E7EB), sin cupos, y seleccionado (#111827).
    - [ ] Grilla de franjas horarias separadas por turno:
        * Mañana: Botones píldora de 09:00 a 12:30 hrs.
        * Tarde: Botones píldora de 15:00 a 19:30 hrs.
    - [ ] Botones de navegación: "<- Atrás" (Outline) y "Continuar a Datos ->" (Primario).

[ ] 5. Paso 3: Formulario del Tutor y Resumen de Costo
    - [ ] Inputs verticales con etiquetas: Nombre completo, Teléfono WhatsApp, Correo electrónico.
    - [ ] Área de texto breve: "Motivo de la visita o síntomas".
    - [ ] Tarjeta de resumen adhesiva (*Sticky Card*) en el lateral (Desktop) o antes del CTA (Mobile):
        * Desglose: Mascota, Servicio, Profesional, Día, Hora y Total a pagar en clínica.
        * Nota de tranquilidad: "No se requiere pago por adelantado".
    - [ ] Casilla de verificación (*checkbox*): Acepto recibir comprobante por WhatsApp.
    - [ ] Botón primario de confirmación de máxima jerarquía: "Confirmar mi Cita".

[ ] 6. Pantalla de Cita Confirmada (Estado de Éxito)
    - [ ] Icono circular superior con check de confirmación.
    - [ ] Titular: "¡Cita Reservada con Éxito!".
    - [ ] Ficha digital en tarjeta blanca con bordes definidos:
        * Número de cita (#PF-2026-8941).
        * Caja cuadrada con "X" que representa el código QR para escaneo en mesón.
        * Dirección de la sede y botón "Abrir en Google Maps".
    - [ ] Botones de utilidad: "Guardar en Google/Apple Calendar" y "Reenviar a mi WhatsApp".
```

---

## 5. Buenas Prácticas de Estructuración en Figma

1. **Auto Layout en Todo:** Ningún elemento interactivo debe dibujarse como capa flotante suelta. Utiliza marcos (*Frames*) con Auto Layout vertical u horizontal y modo `Fill container` para que los wireframes se adapten automáticamente a diferentes anchos de pantalla.
2. **Nomenclatura Semántica de Capas:**
   * `Screen / Desktop / 01_Home`
   * `Screen / Mobile / 01_Home`
   * `Screen / Mobile / 02_Agendar_Paso1`
   * `Screen / Mobile / 03_Agendar_Paso2`
   * `Screen / Mobile / 04_Agendar_Paso3`
   * `Screen / Mobile / 05_Cita_Confirmada`
3. **Componentes Atómicos Reutilizables:** Crea un frame independiente llamado `_Tokens & Components` donde residan los componentes maestros de los botones redondeados, las cajas con "X", los inputs y el stepper de progreso antes de ensamblar las pantallas completas.
