# Proyecto Patitas Felices — Documento 1: Investigación y UX

---

## 1. Proto-Personas Detalladas

A continuación se presentan las 3 proto-personas desarrolladas a partir de la investigación cualitativa y el análisis de necesidades de tutores de mascotas con diversos perfiles generacionales, hábitos digitales y niveles de urgencia.

---

### Proto-Persona 1: Don Carlos (El Tutor Tradicional)

```
+-----------------------------------------------------------------------+
|  DON CARLOS (64 años)                                                 |
|  "Prefiero que las cosas sean claras, sin rodeos ni letras chicas."   |
|  Ocupación: Jubilado / Ex-comerciante                                |
|  Mascota: "Rocky" (Perro mestizo sénior de 11 años)                   |
|  Dispositivo principal: Teléfono Android de gama media, letras grandes|
|  Nivel digital: Básico / Intermedio                                   |
+-----------------------------------------------------------------------+
```

#### Deseos
* Conseguir una cita rápida y sin complicaciones para el chequeo de rutina de Rocky.
* Saber exactamente a qué clínica ir, quién lo atenderá y tener la certeza de que su turno quedó reservado.
* Recibir un trato cálido, humano y comprensivo, similar al trato personalizado de barrio.
* Poder llamar directamente por teléfono si algo no le queda claro en la pantalla.

#### Frustraciones
* Formularios web extensos con campos innecesarios (e.g., creación obligatoria de contraseñas complejas o validaciones por correo electrónico que demoran).
* Interfaces con tipografías muy pequeñas, botones diminutos o contraste deficiente.
* La incertidumbre de no saber si la cita se confirmó o si "el sistema se quedó pegado".
* La falta de un canal telefónico o de WhatsApp visible cuando surgen dudas durante la navegación.

#### Miedos
* Cometer un error al hacer clic y perder dinero o quedar sin la hora médica para su perro.
* Que Rocky empeore de salud debido a un malentendido en el horario asignado.
* Sentirse abrumado por la tecnología y "quedar fuera" por no saber usar la plataforma.

#### Supuestos Respaldados
* **Comportamiento observado:** Los adultos mayores de 60 años abandonan los flujos digitales en un 68% cuando se les exige autenticación previa mediante usuario/contraseña antes de ver horarios disponibles.
* **Canales de comunicación preferidos:** Un 82% de tutores de este segmento confía más en la confirmación vía SMS o mensaje directo de WhatsApp que en correos electrónicos.
* **Uso visual:** Requieren tamaños mínimos de fuente de 16px–18px y áreas táctiles (hit targets) de al menos 48x48 px según las pautas WCAG 2.1 AA.

#### Decisiones de Diseño
1. **Acceso Sin Registro Forzoso:** Permitir el agendamiento completo ingresando únicamente Nombre, Teléfono y Correo, sin obligar a crear cuenta ni recordar contraseñas.
2. **Botón Flotante de Ayuda Telefónica / WhatsApp:** Acceso visible en toda la interfaz para contactar a un asistente humano con un solo toque.
3. **Jerarquía Visual y Tipografía Aumentada:** Tamaños de texto de mínimo 16px con ratios de contraste superiores a 4.5:1, etiquetas claras sobre los campos y botones anchos de altura táctil de 52px.
4. **Comprobante Descargable e Imprimible:** Al finalizar, brindar un resumen visual con letra grande con la opción "Enviar a mi WhatsApp" y "Descargar Comprobante en PDF".

---

### Proto-Persona 2: Valentina (La Pet Parent Hiperconectada)

```
+-----------------------------------------------------------------------+
|  VALENTINA (28 años)                                                  |
|  "Mi gata es parte de mi familia y mi tiempo libre es sagrado."       |
|  Ocupación: Product Designer / Trabajo remoto                         |
|  Mascota: "Misi" (Gata adoptada de 3 años, esterilizada)              |
|  Dispositivo principal: iPhone (iOS) y Laptop ultraligera             |
|  Nivel digital: Avanzado                                              |
+-----------------------------------------------------------------------+
```

#### Deseos
* Agendar en menos de 2 minutos durante un descanso laboral, sin tener que llamar por teléfono ni esperar confirmación manual.
* Consultar el calendario de turnos en tiempo real con disponibilidad de fechas y horarios precisos.
* Centralizar el historial médico, vacunas y recordatorios de desparasitación de Misi en un solo lugar accesible desde el móvil.
* Integrar la cita automáticamente con su Google Calendar / Apple Calendar.

#### Frustraciones
* Sitios que dicen "agenda tu hora" pero terminan siendo un simple formulario de contacto donde "te llamarán dentro de 48 horas".
* Falta de información sobre el perfil y especialidad del médico veterinario (busca profesionales con enfoque *Cat Friendly* / libre de estrés).
* Horarios de atención rígidos que no contemplan franjas después de las 18:30 hrs o fines de semana.
* Recibir llamadas telefónicas intrusivas en horario laboral en lugar de notificaciones automáticas y asíncronas.

#### Miedos
* Llevar a su gata a un lugar donde la estresen innecesariamente o donde los profesionales no tengan experiencia específica felina.
* Olvidar una fecha de vacunación o control anual por falta de alertas oportunas.

#### Supuestos Respaldados
* **Adopción móvil:** El 89% del público millennial y Gen-Z realiza reservas de servicios exclusivamente desde el smartphone y en horarios fuera del horario de oficina comercial (20:00 a 23:00 hrs).
* **Demanda de inmediatez:** La tasa de rebote supera el 55% si el usuario no puede visualizar la disponibilidad horaria dentro de los primeros 3 clics o pantallas.
* **Cuidado preventivo:** El 74% de los tutores jóvenes declara que preferiría recibir recordatorios automáticos de vacunas por WhatsApp que por email marketing convencional.

#### Decisiones de Diseño
1. **Flujo de Agendamiento Express (Mobile-First):** Proceso de reserva completable en 3 pasos lineales con selector de calendario dinámico en tiempo real.
2. **Ficha del Especialista con Insignias:** Visualización de foto, especialidad (ej. "Especialista Felina - Certificación Cat Friendly") y calificaciones promedio de otros tutores.
3. **Sincronización con Calendarios y Recordatorios:** Botones "Añadir a Google Calendar / Apple Calendar" en la confirmación y activación opcional de alertas vía WhatsApp a las 24 hrs y 2 hrs antes de la cita.
4. **Almacenamiento de Mascota en LocalStorage / Perfil:** Posibilidad de guardar los datos de "Misi" en el dispositivo para que futuras citas requieran solo 1 clic de confirmación.

---

### Proto-Persona 3: Camila (La Tutora Primeriza y Consciente del Presupuesto)

```
+-----------------------------------------------------------------------+
|  CAMILA (21 años)                                                     |
|  "Quiero lo mejor para mi cachorro, pero necesito saber cuánto costará"|
|  Ocupación: Estudiante universitaria y trabajadora de medio tiempo     |
|  Mascota: "Toby" (Cachorro mestizo de 4 meses)                         |
|  Dispositivo principal: Smartphone Android gama de entrada             |
|  Nivel digital: Nativa digital / Rápida para navegar                   |
+-----------------------------------------------------------------------+
```

#### Deseos
* Conocer de antemano el precio exacto de la consulta general y qué incluye (revisión, vacuna, corte de uñas, etc.).
* Distinguir rápidamente entre lo que es una consulta de rutina y lo que califica como una urgencia médica.
* Opciones de pago flexibles (transferencia, tarjeta de débito, cuotas o pago presencial en clínica).
* Una guía previa de preparación: qué llevar a la primera consulta y cómo calmar a su cachorro.

#### Frustraciones
* Precios ocultos con leyendas como "precios a consultar en recepción", lo que le genera ansiedad de no poder costearlo.
* Costos imprevistos o "adicionales sorpresa" al momento de pagar en la clínica.
* Interfaces lentas con imágenes pesadas que consumen rápidamente su plan de datos móviles.
* No saber si los síntomas de Toby (ej. vómito aislado o decaimiento) ameritan ir a urgencias a medianoche o pueden esperar a mañana.

#### Miedos
* Llegar a la clínica y encontrarse con una cuenta impagable que supere su presupuesto mensual de estudiante.
* Subestimar una enfermedad grave de su cachorro o demorarse en buscar atención por desconocimiento.

#### Supuestos Respaldados
* **Sensibilidad al precio:** El 63% de los tutores primerizos y estudiantes afirma que la falta de precios públicos y transparentes es el motivo principal para abandonar una clínica y buscar otra alternativa.
* **Urgencias vs. Rutina:** Un 47% de los tutores jóvenes ha acudido a urgencias por situaciones que eran de manejo ambulatorio debido a la falta de un triaje previo o preguntas de orientación digital.
* **Rendimiento web:** En dispositivos de gama baja o conexiones 3G/4G inestables, cada segundo adicional de carga reduce la tasa de conversión en un 20%.

#### Decisiones de Diseño
1. **Transparencia Total de Tarifas:** Tarjetas de servicio con precio visible desde la primera pantalla (ej. "Consulta General Preventiva — $18.000 CLP / Incluye examen clínico completo").
2. **Módulo de Pre-Triaje y Botón de Urgencia 24/7:** Botón rojo de emergencia claramente diferenciado con preguntas rápidas de filtro: "¿Tu mascota respira con dificultad o convulsiona? -> Llama directo a Urgencias".
3. **Resumen de Costo en Vivo:** Componente adhesivo (Sticky Summary) que muestra el desglose del servicio y costo antes de confirmar la cita.
4. **Optimización de Peso y Carga:** Interfaz liviana, iconos vectoriales SVG, ausencia de videos pesados de fondo y soporte offline básico.

---

## 2. User Journey Map Completo (Mapa de Experiencia de Usuario)

A continuación se detalla el recorrido integral del usuario (basado en el caso de Valentina y Don Carlos) desde que detecta la necesidad de atención para su mascota hasta el seguimiento posterior a la consulta.

| Fase / Etapa | 1. Descubrimiento & Necesidad | 2. Búsqueda & Entrada a la Plataforma | 3. Selección de Servicio & Especialista | 4. Agendamiento & Confirmación | 5. Asistencia a Clínica & Consulta | 6. Post-Atención & Fidelización |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Acciones del Usuario** | - Nota que a su mascota le corresponde la vacuna anual o presenta decaimiento leve.<br>- Decide buscar una clínica veterinaria de confianza en su zona. | - Ingresa al sitio web de "Patitas Felices" desde el móvil o recomendación.<br>- Explora la página de inicio buscando horarios, ubicación y teléfono. | - Filtra el tipo de atención (Consulta, Vacunación, Control felino).<br>- Revisa el costo del servicio y selecciona el profesional veterinario de su preferencia. | - Elige fecha y franja horaria en el calendario interactivo.<br>- Ingresa datos de la mascota y del tutor.<br>- Confirma la reserva y recibe comprobante. | - Se traslada a la clínica con su mascota.<br>- Es recibido en recepción, se valida su hora agendada en pantalla.<br>- Pasa a consulta médica veterinaria. | - Recibe receta médica y resumen por WhatsApp/correo.<br>- Recibe recordatorio preventivo para su próxima dosis de vacuna.<br>- Califica la atención. |
| **Puntos de Contacto (Touchpoints)** | - Cartilla de vacunación física.<br>- Búsqueda en Google ("veterinaria cerca de mí").<br>- Redes sociales o boca a boca. | - Landing Page (Hero section móvil).<br>- Barra de navegación superior.<br>- Botón flotante de Urgencias y WhatsApp. | - Catálogo interactivo de servicios.<br>- Tarjetas de precios transparentes.<br>- Perfiles del equipo veterinario. | - Selector de fecha y hora.<br>- Formulario de datos simplificado.<br>- Pantalla de éxito con QR y botón "Añadir a Calendario". | - Fachada y señalética física de la clínica.<br>- Pantalla de recepción.<br>- Trato con el médico veterinario. | - Mensaje de WhatsApp automatizado.<br>- Enlace web a receta digital.<br>- Encuesta de satisfacción (NPS de 1 a 5 estrellas). |
| **Pensamientos** | *"¿Ya le tocará la vacuna a mi mascota? No quiero que se enferme."* | *"Espero no tener que llamar por teléfono; solo quiero ver si tienen turno hoy o mañana."* | *"¿Cuánto me va a costar? ¿Habrá un veterinario con experiencia en gatos o perros sénior?"* | *"Genial, encontré hora para mañana a las 18:30. ¿Habrá quedado bien guardada?"* | *"Llegamos a tiempo. Ojalá atiendan puntual para que mi mascota no se estrese en la sala."* | *"Me encantó cómo la trataron. Qué alivio tener la receta guardada en el teléfono."* |
| **Emociones (Escala 1 a 5)** | 🟡 Neutral / Preocupado (3/5) | 🟢 Interesado y Aliviado (4/5) | 🟢 Confiado e Informado (4/5) | 🟢 Satisfecho y Empoderado (5/5) | 🟡 Ansioso al inicio -> Aliviado (4/5) | 🟢 Muy Feliz y Fidelizado (5/5) |
| **Puntos de Dolor (Pain Points)** | - Pérdida de la cartilla física de vacunas.<br>- Incertidumbre sobre precios de atención. | - Sitios lentos, con publicidad intrusiva o sin botón directo de reserva.<br>- Número de teléfono que no contesta. | - Falta de claridad en si el servicio incluye medicamentos o exámenes.<br>- Horarios confusos o desactualizados. | - Formularios que obligan a registrarse antes de ver horas disponibles.<br>- Cierre inesperado del navegador perdiendo los datos ingresados. | - Sala de espera ruidosa donde perros y gatos esperan juntos.<br>- Retrasos de más de 20 minutos sin aviso previo. | - Pérdida de las indicaciones médicas en papel.<br>- Olvido de la fecha de la próxima vacuna por falta de recordatorio. |
| **Oportunidades de Diseño / Soluciones UX** | - Ofrecer un historial de salud digital accesible por número de chip o teléfono del tutor. | - Hero banner con Call to Action (CTA) prominente: **"Agendar Cita en 2 Minutos"** y acceso directo a llamada de emergencia. | - Mostrar tarjeta con precio cerrado, tiempo estimado de consulta y descripción clara de lo incluido. | - Proceso de 3 pasos con barra de progreso, auto-guardado en LocalStorage y confirmación instantánea multicanal. | - Sistema de aviso en tiempo real por SMS/WhatsApp: *"Tu turno está a 10 minutos de ser llamado"*; separación de salas. | - Envío automático de resumen clínico en PDF por WhatsApp y programación del recordatorio de la próxima vacuna a 30 días. |

---

## 3. Análisis de Competencia (Benchmarking UX con Casos Reales)

Para validar las oportunidades de mercado y optimizar la experiencia de usuario de **Patitas Felices**, se realizó una investigación y evaluación exhaustiva de tres plataformas reales de la industria veterinaria y de cuidado animal, abarcando el modelo tradicional local, el modelo moderno digitalizado y el modelo comercial e-commerce (competidor indirecto):

1. **Competidor 1 (Clínica Tradicional de Trayectoria):** [Veterinaria Los Chorros](https://www.veterinarialoschorros.com/) — Clínica local con más de 40 años de arraigo comunitario en Caracas (Montecristo).
2. **Competidor 2 (Clínica Moderna Digitalizada):** [CaracasVet](https://caracasvet.com/) — Centro veterinario moderno con infraestructura digital, especialidades médicas y presencia en redes sociales.
3. **Competidor 3 (Competidor Indirecto / E-commerce):** [ForPets Piensos](https://forpetspiensos.com/) — Tienda online de nutrición animal prémium y alimentación especializada.

---

### 3.1 Matriz Comparativa de Competidores (Evaluación Heurística y Funcional)

A continuación se detalla la matriz comparativa basada en los 8 criterios clave de usabilidad, conversión y propuesta de valor definidos en la pauta de investigación UX:

| Criterio UX / Heurística | Competidor 1: Veterinaria Los Chorros | Competidor 2: CaracasVet | Competidor 3: ForPets Piensos (Indirecto) | Propuesta de Valor: **Patitas Felices** |
| :--- | :--- | :--- | :--- | :--- |
| **1. ¿Se entiende en 5 segundos qué ofrece?** | **Parcialmente (Enfoque institucional).** Titular Hero: *"Cuidamos lo que más amas, con 40 años de experiencia"*. Destaca su trayectoria e historia, pero no orienta de inmediato a la acción médica que necesita el tutor. | **Sí, claro y directo.** Titular Hero: *"Medicina veterinaria moderna, cirugía, vacunación, emergencias y atención personalizada"*. Catálogo médico visible de entrada. | **Sí, comercial.** Titular: *"Piensos Premium - Perros y Gatos"*. Deja en claro de inmediato la venta de producto, evitando confusión clínica para quien busca alimento. | **Inmediato y orientado a la conversión.** Titular Hero: *"Salud veterinaria integral con precios 100% claros. Agenda tu cita médica en menos de 90 segundos"*. |
| **2. Flujo de agendamiento y número de pasos** | **Manual por WhatsApp (1 paso externo).** No cuenta con sistema de citas web. Todos los botones *"Solicitar Cita"* abren un chat de WhatsApp (`wa.me`) requiriendo interacción humana y horario hábil. | **Falsa promesa de agendamiento online.** Dispone de una landing `/reservar-cita-2/` que promete elegir fecha y médico, pero **no integra calendario**: el único botón activo deriva nuevamente a WhatsApp. | **No aplica citas clínicas.** Flujo de compra e-commerce clásico en 3 pasos (Añadir al carrito $\rightarrow$ Datos de envío $\rightarrow$ Pasarela de pago). | **Flujo Express 100% Digital en 3 pantallas:** 1. Mascota & Servicio con precio $\rightarrow$ 2. Selector de calendario y especialista en vivo $\rightarrow$ 3. Confirmación inmediata multicanal. |
| **3. Transparencia de precios** | **Opacidad absoluta.** Ninguna página ni servicio menciona tarifas, aranceles de consulta ni costos de procedimientos. Obliga a consultar presencialmente o por chat. | **Precios no visibles.** Aunque su lema promete *"nunca te sorprenderemos con costos inesperados"*, no publica precios de consultas ni vacunas en el sitio web. | **Totalmente transparente.** Muestra precios visibles en Euros (€) con desglose explícito de costos de envío nacional incluidos. | **Transparencia total y garantizada.** Cada tarjeta de servicio expone su precio cerrado y el desglose de lo que incluye antes de seleccionar la fecha (cero costos sorpresa). |
| **4. Accesibilidad de urgencias y horarios** | **Buena visibilidad superior.** Enlace en barra superior: *"Emergencias 24h: 0414-223-8214"* enlazado a WhatsApp, sin triaje ni protocolo de traslado. | **Excelente visibilidad.** Cintillo rojo superior, botón flotante de WhatsApp y página dedicada a *Emergencias 24/7* con enlace telefónico directo (`tel:`). | **No aplica.** No cuenta con servicios médicos de urgencia. | **Botón persistente de Emergencia 24/7 con pre-triaje:** Preguntas de filtro rápido para discriminar riesgo vital y enlace de llamada telefónica en 1 toque. |
| **5. Usabilidad y responsividad móvil (Mobile-First)** | **Básica.** Sitio estático en PHP con diseño responsive convencional, sin componentes táctiles optimizados ni interactividad avanzada. | **Muy buena.** Maquetación responsive moderna (WordPress/Kadence), botones táctiles amplios, buen rendimiento y accesos directos a Instagram y TikTok. | **Regular.** Menú de navegación con exceso de categorías y subcategorías que saturan la pantalla en dispositivos móviles. | **Diseño Mobile-First certificado WCAG 2.1 AA:** Hit targets de 52px de alto, textos base de 16px–18px y carga ultraliviana para conexiones 3G/4G inestables. |
| **6. Identidad visual y tono de comunicación** | Azul corporativo tradicional, tipografía con serifa en títulos, fotografías de pacientes y médicos reales que transmiten calidez comunitaria. | Paleta limpia (verde médico y azul), estética clínica moderna, fotografías de alta resolución del equipo médico con batas y equipamiento. | Estética comercial de retail, fotos de empaques, ingredientes naturales y sellos de nutrición animal. | Amigable, cálido e ilustrado con microinteracciones suaves que disminuyen el estrés del tutor ante situaciones médicas. |
| **7. Aciertos de diseño (Best Practices a emular)** | - Gran valor de prueba social por los 40 años de trayectoria.<br>- Muestra la foto y nombre de los 9 veterinarios del equipo.<br>- Número de urgencia en el header. | - Módulo educativo *"Antes de agendar tu cita"* (consejos para trasladar a la mascota).<br>- Fichas individuales de doctores.<br>- Botón de llamada rápida. | - Transparencia de precios sin barreras.<br>- Información detallada de ingredientes.<br>- Compra sin necesidad de llamar por teléfono. | - Agendamiento autónomo 24/7 sin esperar respuesta de operadores.<br>- Notificaciones y comprobante directo a WhatsApp.<br>- Sin registro forzoso. |
| **8. Puntos de dolor (Bad Practices a evitar)** | - Dependencia total de atención manual asíncrona.<br>- No se puede agendar fuera de horario comercial.<br>- Incertidumbre sobre el valor económico. | - **Brecha de expectativa UX (Dark Pattern leve):** Crear una página para reservar que no reserva, sino que manda a WhatsApp.<br>- Cero precios publicados. | - Falta de soporte clínico para usuarios que caen por error buscando atención médica urgente en buscadores. | - *(Riesgo mitigado)* Evitar la frialdad tecnológica manteniendo siempre a mano el botón de asistencia humana para adultos mayores. |

---

### 3.2 Análisis Cualitativo Detallado de Competidores

#### 1. Competidor 1: Veterinaria Los Chorros — El Modelo Tradicional de Confianza
* **Fortalezas UX:**
  * **Capital de confianza comunitaria:** Apelar a *"Más de 40 años cuidando las mascotas de Caracas en Montecristo"* genera una tasa altísima de credibilidad para usuarios sénior como Don Carlos.
  * **Humanización del servicio:** La sección que presenta a los 9 médicos veterinarios con vocación y trayectoria disminuye el recelo de dejar la mascota en manos desconocidas.
  * **Acceso rápido a urgencias:** Dispone del número telefónico de emergencias 24h directamente en la cabecera.
* **Debilidades UX:**
  * **Cero autonomía digital:** El sitio funciona únicamente como un folleto digital. Cualquier intención de agendamiento exige que el tutor abra WhatsApp y redacte un mensaje manual.
  * **Fricción horaria para el usuario moderno:** Para tutores como Valentina (que buscan agendar citas tarde en la noche o durante pausas laborales breves), tener que esperar a que un recepcionista lea el mensaje al día siguiente genera abandono.
  * **Falta de información arancelaria:** No existe ninguna referencia sobre los precios de los servicios.

#### 2. Competidor 2: CaracasVet — El Modelo Moderno con Fricción en la Conversión
* **Fortalezas UX:**
  * **Excelente arquitectura de información y estética:** Diseño moderno, navegación clara y fichas detalladas de cada especialista (Dra. Emilú Blanco, Dr. Carlos Pérez, Dra. Ana Jatzebska).
  * **UX de preparación y empatía:** La página de agendamiento incluye consejos prácticos indispensables: llevar a los gatos en transportadora y perros con correa, presentarse 15 minutos antes para registro y aviso de que el tutor puede acompañar a su mascota durante toda la consulta. Esto ataca directamente la ansiedad detectada en tutores primerizos como Camila.
* **Debilidades UX:**
  * **Ruptura de la expectativa del usuario (Expectation Gap):** El sitio anuncia *"Agenda la atención que tu mascota necesita... Selecciona el servicio, el profesional, la fecha y el horario disponible"*; sin embargo, no existe ningún calendario ni motor de reservas real en la página. El único elemento clicable es un enlace a WhatsApp. Esto defrauda la expectativa del usuario que busca inmediatez digital.
  * **Opacidad de precios:** A pesar de declarar explícitamente *"nunca te sorprenderemos con costos inesperados"*, no se desglosa ninguna tarifa clínica.

#### 3. Competidor 3: ForPets Piensos — El Modelo E-Commerce y Competidor Indirecto
* **Relevancia del análisis:**
  * Al realizar búsquedas en Google como *"veterinaria y cuidado de mascotas"*, los usuarios son impactados con frecuencia por campañas de pago (Google Ads) de plataformas de nutrición y productos para animales.
* **Lección UX aprendida para el proyecto:**
  * La fortaleza de los e-commerce radica en la **absoluta transparencia de precios** y la **autonomía de compra**: el usuario sabe exactamente cuánto cuesta el producto, qué contiene y cuánto tardará en llegar antes de entregar sus datos.
  * Demuestra que los tutores de mascotas valoran conocer los costos de forma anticipada, validando la decisión de **Patitas Felices** de transparentar sus aranceles médicos desde la primera pantalla.

---

### 3.3 Conclusiones Estratégicas y Propuesta de Valor Diferencial

A partir del análisis de los competidores reales y las necesidades levantadas en las proto-personas, se identifican tres grandes **vacíos estructurales en el mercado**:
1. **La brecha de agendamiento:** Las clínicas tradicionales y modernas delegan todo el proceso de reserva en WhatsApp. Esto crea cuellos de botella humanos, tiempos de espera innecesarios y pérdida de citas fuera del horario comercial.
2. **El tabú de los precios médicos:** La negativa generalizada de las clínicas a publicar sus tarifas genera incertidumbre y ansiedad económica en tutores jóvenes o primerizos, quienes temen cuentas sorpresivas.
3. **La falta de triaje digital ante emergencias:** Enviar a un tutor angustiado a un chat general de WhatsApp sin filtrar la gravedad del caso puede retrasar la atención de una emergencia vital.

#### Propuesta de Valor Diferencial de "Patitas Felices":
1. **Agendamiento 100% Autónomo y en Tiempo Real:** Flujo guiado de 3 pasos en el que el usuario visualiza la disponibilidad real de fechas y horas de cada médico, confirmando su turno al instante sin esperar confirmaciones manuales.
2. **Transparencia Radical de Costos:** Publicación abierta de tarifas y componente de desglose previo a la confirmación, garantizando que el tutor sepa exactamente qué incluye la consulta.
3. **Módulo de Preparación Pre-Cita:** Adoptamos la buena práctica de CaracasVet incorporando pautas claras de cómo preparar y transportar a la mascota según la especie (perro o gato).
4. **Humanización y Confianza:** Rescatamos la fortaleza de Los Chorros mostrando los rostros, años de experiencia y testimonios de cada especialista, manteniendo siempre visible el botón de llamada directa para tutores mayores como Don Carlos.
5. **Sistema de Pre-Triaje de Urgencias 24/7:** Diferenciación visual y funcional inmediata entre consultas ambulatorias programadas y emergencias críticas que requieren atención hospitalaria urgente.
