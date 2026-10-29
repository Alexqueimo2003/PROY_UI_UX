/**
 * Patitas Felices v2 — Sistema de Agendamiento UI/UX
 * Responsive + Dark/Light Mode
 */

// ─── Estado Global ──────────────────────────────────────────────────────────
const state = {
  currentStep: 1,
  booking: {
    species: 'Perro',
    serviceId: 'preventiva',
    serviceName: 'Consulta General Preventiva',
    servicePrice: 18000,
    serviceDuration: '30 min',
    date: '',
    time: '',
    tutorName: '',
    tutorPhone: '',
    tutorEmail: '',
    petName: '',
    notes: '',
    code: ''
  }
};

// ─── Base de datos de servicios ─────────────────────────────────────────────
const SERVICES_DATA = {
  preventiva:  { name: 'Consulta General Preventiva',       price: 18000, duration: '30 min',   badge: 'PREVENTIVA' },
  vacunacion:  { name: 'Vacunación y Carnet Digital',        price: 15000, duration: '20 min',   badge: 'PREVENTIVA' },
  felina:      { name: 'Atención Felina Cat Friendly',       price: 22000, duration: '40 min',   badge: 'CAT FRIENDLY' },
  especialidad:{ name: 'Especialidad / Control Crónico',     price: 35000, duration: '45 min',   badge: 'ESPECIALISTA' },
  urgencia:    { name: 'Triage de Urgencia 24/7',            price: 30000, duration: 'Inmediata', badge: 'URGENCIAS' }
};

// ─── Init ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initEventListeners();
  generateCalendarDates();
  initStorage();
  updateServiceSelectionUI('preventiva');
});

/* ============================================================================
   DARK / LIGHT MODE
   ============================================================================ */

/**
 * Lee el tema guardado o la preferencia del sistema y lo aplica.
 */
function initTheme() {
  const saved = localStorage.getItem('pf_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  applyTheme(theme);

  // Escuchar cambios del sistema operativo si no hay preferencia guardada
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('pf_theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}

/**
 * Aplica el tema al <html> y actualiza el botón toggle.
 * @param {'light'|'dark'} theme
 */
function applyTheme(theme) {
  const html = document.documentElement;
  html.setAttribute('data-theme', theme);

  const btn   = document.getElementById('themeToggle');
  const icon  = document.getElementById('themeIcon');
  const label = document.getElementById('themeLabel');

  if (theme === 'dark') {
    if (icon)  icon.textContent  = '☀️';
    if (label) label.textContent = 'Modo Claro';
    if (btn)   btn.setAttribute('aria-pressed', 'true');
  } else {
    if (icon)  icon.textContent  = '🌙';
    if (label) label.textContent = 'Modo Oscuro';
    if (btn)   btn.setAttribute('aria-pressed', 'false');
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem('pf_theme', next);
  applyTheme(next);
}

/* ============================================================================
   LOCAL STORAGE
   ============================================================================ */
function initStorage() {
  if (!localStorage.getItem('patitas_citas')) {
    const mockAppointments = [
      {
        code: 'PF-20491',
        species: 'Gato',
        petName: 'Preciosa',
        serviceName: 'Atención Felina Cat Friendly',
        price: 22000,
        date: 'Jue 29 Oct',
        time: '10:00 AM',
        tutorName: 'Carlos Mendoza',
        tutorPhone: '+56 9 9876 5432',
        status: 'Confirmada'
      }
    ];
    localStorage.setItem('patitas_citas', JSON.stringify(mockAppointments));
  }
}

function getStoredAppointments() {
  try {
    return JSON.parse(localStorage.getItem('patitas_citas')) || [];
  } catch (e) {
    return [];
  }
}

function saveAppointmentToStorage(appointment) {
  const appointments = getStoredAppointments();
  appointments.unshift(appointment);
  localStorage.setItem('patitas_citas', JSON.stringify(appointments));
}

/* ============================================================================
   EVENT LISTENERS
   ============================================================================ */
function initEventListeners() {
  // ── Tema toggle ──
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);

  // ── Menú Móvil ──
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navLinks     = document.getElementById('navLinks');
  const navCloseBtn  = document.getElementById('navCloseBtn');

  function openNav() {
    navLinks.classList.add('mobile-open');
    mobileToggle.setAttribute('aria-expanded', 'true');
    // Evitar scroll del fondo
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    navLinks.classList.remove('mobile-open');
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', openNav);
  }

  if (navCloseBtn) {
    navCloseBtn.addEventListener('click', closeNav);
  }

  // Cerrar menú al hacer clic en un enlace de nav
  navLinks && navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  // Cerrar menú al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (
      navLinks &&
      navLinks.classList.contains('mobile-open') &&
      !navLinks.contains(e.target) &&
      e.target !== mobileToggle
    ) {
      closeNav();
    }
  });

  // Cerrar menú con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeNav();
      closeEmergencyModal();
      closeMisCitasModal();
    }
  });

  // ── Selección de Especie ──
  document.querySelectorAll('.species-card').forEach(card => {
    card.addEventListener('click', () => selectSpecies(card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectSpecies(card);
      }
    });
  });

  // ── Selección de Servicio (Paso 1) ──
  document.querySelectorAll('.service-select-item').forEach(item => {
    item.addEventListener('click', () => {
      const serviceId = item.getAttribute('data-service');
      selectService(serviceId);
    });
  });

  // ── Navegación del Wizard ──
  const btnStep1Next = document.getElementById('btnStep1Next');
  if (btnStep1Next) btnStep1Next.addEventListener('click', () => goToStep(2));

  const btnStep2Back = document.getElementById('btnStep2Back');
  if (btnStep2Back) btnStep2Back.addEventListener('click', () => goToStep(1));

  const btnStep2Next = document.getElementById('btnStep2Next');
  if (btnStep2Next) btnStep2Next.addEventListener('click', validateAndGoToStep3);

  const btnStep3Back = document.getElementById('btnStep3Back');
  if (btnStep3Back) btnStep3Back.addEventListener('click', () => goToStep(2));

  // ── Formulario Paso 3 ──
  const bookingForm = document.getElementById('step3Form');
  if (bookingForm) bookingForm.addEventListener('submit', handleBookingSubmit);

  // ── Modal Urgencias ──
  document.querySelectorAll('.trigger-emergency-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openEmergencyModal();
    });
  });

  const closeEmergency = document.getElementById('closeEmergencyModal');
  if (closeEmergency) closeEmergency.addEventListener('click', closeEmergencyModal);

  // Cerrar modal al hacer clic en overlay
  document.getElementById('emergencyModal')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeEmergencyModal();
  });

  // ── Modal Mis Citas ──
  document.querySelectorAll('.trigger-mis-citas').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openMisCitasModal();
    });
  });

  const closeMisCitas = document.getElementById('closeMisCitasModal');
  if (closeMisCitas) closeMisCitas.addEventListener('click', closeMisCitasModal);

  document.getElementById('misCitasModal')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeMisCitasModal();
  });

  // Buscar Cita
  const btnBuscarCita = document.getElementById('btnBuscarCita');
  if (btnBuscarCita) btnBuscarCita.addEventListener('click', searchAppointments);

  // Buscar al presionar Enter en el input
  const lookupQuery = document.getElementById('lookupQuery');
  if (lookupQuery) {
    lookupQuery.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') searchAppointments();
    });
  }

  // ── Active nav link on scroll ──
  initScrollSpy();
}

/* ============================================================================
   SCROLL SPY — Resaltar enlace activo según sección visible
   ============================================================================ */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a[href^="#"]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === '#' + entry.target.id
            );
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(sec => observer.observe(sec));
}

/* ============================================================================
   SPECIES SELECTION
   ============================================================================ */
function selectSpecies(card) {
  document.querySelectorAll('.species-card').forEach(c => {
    c.classList.remove('selected');
    c.setAttribute('aria-checked', 'false');
  });
  card.classList.add('selected');
  card.setAttribute('aria-checked', 'true');
  state.booking.species = card.getAttribute('data-species');

  // Auto-recomendar servicio felino al elegir gato
  if (state.booking.species === 'Gato' && state.booking.serviceId === 'preventiva') {
    selectService('felina');
  }
}

/* ============================================================================
   SERVICE SELECTION
   ============================================================================ */
function selectService(serviceId) {
  if (!SERVICES_DATA[serviceId]) return;

  state.booking.serviceId      = serviceId;
  state.booking.serviceName    = SERVICES_DATA[serviceId].name;
  state.booking.servicePrice   = SERVICES_DATA[serviceId].price;
  state.booking.serviceDuration = SERVICES_DATA[serviceId].duration;

  updateServiceSelectionUI(serviceId);
}

function updateServiceSelectionUI(serviceId) {
  document.querySelectorAll('.service-select-item').forEach(item => {
    item.classList.toggle('selected', item.getAttribute('data-service') === serviceId);
  });
}

/* ============================================================================
   CALENDAR — Próximos 8 días
   ============================================================================ */
function generateCalendarDates() {
  const container = document.getElementById('calendarDaysGrid');
  if (!container) return;
  container.innerHTML = '';

  const dayNames   = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  const today      = new Date();

  for (let i = 0; i < 8; i++) {
    const d       = new Date(today);
    d.setDate(today.getDate() + i);
    const dayName    = dayNames[d.getDay()];
    const dayNum     = d.getDate();
    const month      = monthNames[d.getMonth()];
    const fullDateStr = `${dayName} ${dayNum} ${month}`;

    const dayBtn = document.createElement('button');
    dayBtn.type = 'button';
    dayBtn.className = 'cal-day-btn' + (i === 0 ? ' selected' : '');
    dayBtn.setAttribute('aria-label', `Seleccionar ${fullDateStr}`);
    dayBtn.innerHTML = `
      <span class="day-name">${dayName}</span>
      <span class="day-num">${dayNum}</span>
    `;

    dayBtn.addEventListener('click', () => {
      document.querySelectorAll('.cal-day-btn').forEach(b => b.classList.remove('selected'));
      dayBtn.classList.add('selected');
      state.booking.date = fullDateStr;
      updateTimeSlotsForDate(fullDateStr);
    });

    if (i === 0) state.booking.date = fullDateStr;

    container.appendChild(dayBtn);
  }

  generateTimeSlots();
}

/* ============================================================================
   TIME SLOTS
   ============================================================================ */
function generateTimeSlots() {
  const morningContainer   = document.getElementById('morningSlots');
  const afternoonContainer = document.getElementById('afternoonSlots');
  if (!morningContainer || !afternoonContainer) return;

  const morningHours   = ['09:00 AM', '10:00 AM', '11:00 AM', '11:30 AM'];
  const afternoonHours = ['03:00 PM', '04:00 PM', '05:00 PM', '06:30 PM'];

  morningContainer.innerHTML   = '';
  afternoonContainer.innerHTML = '';

  const renderSlot = (timeStr, container, isFirst = false) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'time-slot-btn' + (isFirst ? ' selected' : '');
    btn.textContent = timeStr;
    btn.setAttribute('aria-pressed', isFirst ? 'true' : 'false');

    btn.addEventListener('click', () => {
      if (btn.classList.contains('disabled')) return;
      document.querySelectorAll('.time-slot-btn').forEach(b => {
        b.classList.remove('selected');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('selected');
      btn.setAttribute('aria-pressed', 'true');
      state.booking.time = timeStr;
    });

    if (isFirst) state.booking.time = timeStr;

    container.appendChild(btn);
  };

  morningHours.forEach((hour, index)   => renderSlot(hour, morningContainer, index === 0));
  afternoonHours.forEach((hour)        => renderSlot(hour, afternoonContainer, false));
}

function updateTimeSlotsForDate(dateStr) {
  document.querySelectorAll('.time-slot-btn').forEach((btn, idx) => {
    btn.classList.remove('disabled');
    if ((idx === 2 || idx === 5) && dateStr.includes('Lun')) {
      btn.classList.add('disabled');
      if (btn.classList.contains('selected')) {
        btn.classList.remove('selected');
        state.booking.time = '';
      }
    }
  });
}

/* ============================================================================
   WIZARD NAVIGATION
   ============================================================================ */
function goToStep(stepNumber) {
  state.currentStep = stepNumber;

  // Actualizar indicadores
  document.querySelectorAll('.step-indicator').forEach((ind, idx) => {
    const num = idx + 1;
    ind.classList.remove('active', 'completed');
    ind.setAttribute('aria-selected', 'false');
    if (num === stepNumber) {
      ind.classList.add('active');
      ind.setAttribute('aria-selected', 'true');
    } else if (num < stepNumber) {
      ind.classList.add('completed');
    }
  });

  // Mostrar pane
  document.querySelectorAll('.step-pane').forEach((pane, idx) => {
    pane.classList.toggle('active', idx + 1 === stepNumber);
  });

  if (stepNumber === 3) updateStep3Summary();

  // Scroll suave al wizard
  const wizard = document.getElementById('agendar');
  if (wizard) wizard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function validateAndGoToStep3() {
  if (!state.booking.date || !state.booking.time) {
    showToast('Por favor selecciona una fecha y una hora disponible para continuar.', 'error');
    return;
  }
  goToStep(3);
}

function updateStep3Summary() {
  const summaryEl = document.getElementById('step3OrderSummary');
  if (!summaryEl) return;

  const formattedPrice = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(state.booking.servicePrice);

  summaryEl.innerHTML = `
    <div style="background:var(--primary-tint); border:1.5px solid var(--primary-light); border-radius:var(--radius-md); padding:16px; margin-bottom:18px;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:6px;">
        <strong style="color:var(--text-main);">🐾 ${state.booking.species}: ${state.booking.serviceName}</strong>
        <span style="color:var(--primary); font-weight:800; font-size:17px;">${formattedPrice}</span>
      </div>
      <div style="color:var(--text-muted); font-size:13.5px;">
        📅 <strong>${state.booking.date}</strong> a las <strong>${state.booking.time}</strong> (${state.booking.serviceDuration})
      </div>
      <div style="color:var(--primary); font-size:11.5px; margin-top:7px;">
        ✓ Tarifa fija sin cobros sorpresa &bull; Pago directo en recepción al finalizar la atención
      </div>
    </div>
  `;
}

/* ============================================================================
   BOOKING SUBMIT → PASO 4
   ============================================================================ */
function handleBookingSubmit(e) {
  e.preventDefault();

  const tutorName  = document.getElementById('tutorName').value.trim();
  const tutorPhone = document.getElementById('tutorPhone').value.trim();
  const tutorEmail = document.getElementById('tutorEmail').value.trim();
  const petName    = document.getElementById('petName').value.trim();
  const notes      = document.getElementById('tutorNotes').value.trim();

  if (!tutorName || !tutorPhone || !petName) {
    showToast('Por favor completa todos los campos obligatorios (*).', 'error');
    return;
  }

  const randomCode = 'PF-' + Math.floor(10000 + Math.random() * 90000);

  Object.assign(state.booking, { tutorName, tutorPhone, tutorEmail, petName, notes, code: randomCode });

  saveAppointmentToStorage({
    code: randomCode,
    species: state.booking.species,
    petName,
    serviceName: state.booking.serviceName,
    price: state.booking.servicePrice,
    date: state.booking.date,
    time: state.booking.time,
    tutorName,
    tutorPhone,
    tutorEmail,
    createdAt: new Date().toISOString(),
    status: 'Confirmada'
  });

  renderSuccessScreen();
  goToStep(4);
}

/* ============================================================================
   SUCCESS SCREEN
   ============================================================================ */
function renderSuccessScreen() {
  const container = document.getElementById('step4SuccessPane');
  if (!container) return;

  const formattedPrice = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(state.booking.servicePrice);

  const waText = encodeURIComponent(
    `🐾 ¡Hola! Tengo una cita agendada en Veterinaria Patitas Felices.\n` +
    `Código: ${state.booking.code}\n` +
    `Paciente: ${state.booking.petName} (${state.booking.species})\n` +
    `Servicio: ${state.booking.serviceName}\n` +
    `Fecha: ${state.booking.date} a las ${state.booking.time}\n` +
    `Tutor: ${state.booking.tutorName}\n` +
    `Dirección: Av. Los Conquistadores 1420, Providencia.`
  );

  container.innerHTML = `
    <div class="success-card">
      <div class="success-badge-icon">✓</div>
      <span class="badge badge-green" style="font-size:13px; margin-bottom:12px;">CITA AGENDADA EXITOSAMENTE</span>
      <h2 style="font-size:clamp(22px,3vw,28px); font-weight:800; color:var(--text-main); margin-bottom:8px;">
        ¡Todo listo, ${escapeHTML(state.booking.tutorName)}!
      </h2>
      <p style="color:var(--text-muted); font-size:14px; max-width:520px; margin:0 auto;">
        Hemos reservado el cupo médico para <strong>${escapeHTML(state.booking.petName)}</strong>. Te enviamos los detalles a tu WhatsApp y correo.
      </p>

      <div class="qr-ticket-container" id="printableTicket">
        <div class="ticket-header">
          <div>
            <span style="font-size:10px; text-transform:uppercase; font-weight:800; color:var(--text-subtle);">Comprobante Digital</span>
            <div class="ticket-code">${state.booking.code}</div>
          </div>
          <span class="badge badge-teal">${state.booking.species}</span>
        </div>

        <div class="ticket-row">
          <span class="t-label">Paciente</span>
          <span class="t-value">${escapeHTML(state.booking.petName)}</span>
        </div>
        <div class="ticket-row">
          <span class="t-label">Servicio</span>
          <span class="t-value">${escapeHTML(state.booking.serviceName)}</span>
        </div>
        <div class="ticket-row">
          <span class="t-label">Fecha y Hora</span>
          <span class="t-value">${state.booking.date} — ${state.booking.time}</span>
        </div>
        <div class="ticket-row">
          <span class="t-label">Tutor a cargo</span>
          <span class="t-value">${escapeHTML(state.booking.tutorName)} (${escapeHTML(state.booking.tutorPhone)})</span>
        </div>
        <div class="ticket-row">
          <span class="t-label">Lugar de Atención</span>
          <span class="t-value">Av. Los Conquistadores 1420, Providencia</span>
        </div>
        <div class="ticket-row" style="border-top:1px dashed var(--border-color); padding-top:10px; margin-top:10px;">
          <span class="t-label" style="font-weight:700;">Total a Pagar en Clínica</span>
          <span class="t-value" style="color:var(--primary); font-size:17px;">${formattedPrice}</span>
        </div>

        <!-- QR SVG decorativo -->
        <div class="qr-code-box">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Código QR de la Cita">
            <rect width="100" height="100" fill="var(--bg-surface)" />
            <rect x="10" y="10" width="24" height="24" fill="var(--primary)" rx="4" />
            <rect x="14" y="14" width="16" height="16" fill="var(--bg-surface)" />
            <rect x="18" y="18" width="8"  height="8"  fill="var(--primary)" />
            <rect x="66" y="10" width="24" height="24" fill="var(--primary)" rx="4" />
            <rect x="70" y="14" width="16" height="16" fill="var(--bg-surface)" />
            <rect x="74" y="18" width="8"  height="8"  fill="var(--primary)" />
            <rect x="10" y="66" width="24" height="24" fill="var(--primary)" rx="4" />
            <rect x="14" y="70" width="16" height="16" fill="var(--bg-surface)" />
            <rect x="18" y="74" width="8"  height="8"  fill="var(--primary)" />
            <rect x="42" y="12" width="6" height="6" fill="var(--text-main)" />
            <rect x="52" y="12" width="6" height="6" fill="var(--text-main)" />
            <rect x="42" y="24" width="6" height="6" fill="var(--primary)" />
            <rect x="52" y="24" width="6" height="6" fill="var(--text-main)" />
            <rect x="12" y="42" width="6" height="6" fill="var(--text-main)" />
            <rect x="24" y="42" width="6" height="6" fill="var(--primary)" />
            <rect x="36" y="42" width="6" height="6" fill="var(--text-main)" />
            <rect x="48" y="42" width="6" height="6" fill="var(--text-main)" />
            <rect x="60" y="42" width="6" height="6" fill="var(--primary)" />
            <rect x="72" y="42" width="6" height="6" fill="var(--text-main)" />
            <rect x="84" y="42" width="6" height="6" fill="var(--text-main)" />
            <rect x="42" y="54" width="6" height="6" fill="var(--primary)" />
            <rect x="54" y="54" width="6" height="6" fill="var(--text-main)" />
            <rect x="66" y="54" width="6" height="6" fill="var(--primary)" />
            <rect x="42" y="66" width="6" height="6" fill="var(--text-main)" />
            <rect x="54" y="66" width="6" height="6" fill="var(--primary)" />
            <rect x="66" y="66" width="6" height="6" fill="var(--text-main)" />
            <rect x="78" y="66" width="6" height="6" fill="var(--primary)" />
            <rect x="42" y="78" width="6" height="6" fill="var(--primary)" />
            <rect x="54" y="78" width="6" height="6" fill="var(--text-main)" />
            <rect x="78" y="78" width="6" height="6" fill="var(--text-main)" />
          </svg>
          <span>Muestra este código al llegar a la recepción de la clínica</span>
        </div>
      </div>

      <div class="success-actions">
        <a href="https://wa.me/?text=${waText}" target="_blank" rel="noopener" class="btn btn-whatsapp">
          📲 Enviar Respaldo a WhatsApp
        </a>
        <button type="button" class="btn btn-secondary" onclick="window.print()">
          🖨️ Imprimir / Guardar PDF
        </button>
        <button type="button" class="btn btn-primary" onclick="resetBookingFlow()">
          🔄 Agendar Otra Cita
        </button>
      </div>
    </div>
  `;
}

function resetBookingFlow() {
  state.currentStep = 1;
  document.getElementById('step3Form')?.reset();
  goToStep(1);
}

/* ============================================================================
   MODALES
   ============================================================================ */
function openEmergencyModal() {
  const modal = document.getElementById('emergencyModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeEmergencyModal() {
  const modal = document.getElementById('emergencyModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function openMisCitasModal() {
  const modal = document.getElementById('misCitasModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    searchAppointments();
  }
}

function closeMisCitasModal() {
  const modal = document.getElementById('misCitasModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ============================================================================
   BÚSQUEDA DE CITAS
   ============================================================================ */
function searchAppointments() {
  const queryInput = document.getElementById('lookupQuery');
  const query = queryInput ? queryInput.value.trim().toLowerCase() : '';
  const container = document.getElementById('appointmentsListContainer');
  if (!container) return;

  const appointments = getStoredAppointments();

  const filtered = appointments.filter(app => {
    if (!query) return true;
    return (
      (app.code      && app.code.toLowerCase().includes(query))      ||
      (app.tutorPhone && app.tutorPhone.toLowerCase().includes(query)) ||
      (app.tutorName  && app.tutorName.toLowerCase().includes(query))  ||
      (app.petName    && app.petName.toLowerCase().includes(query))
    );
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:28px 14px; color:var(--text-muted);">
        <div style="font-size:34px; margin-bottom:8px;">🔍</div>
        <p>No se encontraron citas con el criterio ingresado.</p>
        <small style="color:var(--text-subtle);">Prueba con tu teléfono o código PF-XXXXX.</small>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(app => `
    <div class="appointment-item-card">
      <div style="flex:1; min-width:0;">
        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; margin-bottom:4px;">
          <strong style="color:var(--primary); font-family:monospace;">${app.code}</strong>
          <span class="badge ${app.status === 'Cancelada' ? 'badge-red' : 'badge-green'}">${app.status || 'Confirmada'}</span>
        </div>
        <div style="font-weight:700; color:var(--text-main); font-size:14px; margin-bottom:3px;">
          🐾 ${escapeHTML(app.petName)} — ${escapeHTML(app.serviceName)}
        </div>
        <div style="font-size:12.5px; color:var(--text-muted);">
          📅 ${app.date} a las ${app.time} &bull; Tutor: ${escapeHTML(app.tutorName)}
        </div>
      </div>
      <div style="flex-shrink:0;">
        ${app.status !== 'Cancelada' ? `
          <button type="button" class="btn btn-secondary" style="padding:6px 12px; font-size:12px; min-height:34px; border-color:var(--emergency); color:var(--emergency);" onclick="cancelAppointment('${app.code}')">
            Cancelar Cita
          </button>
        ` : `
          <span style="font-size:12px; color:var(--text-subtle);">Cancelada</span>
        `}
      </div>
    </div>
  `).join('');
}

window.cancelAppointment = function(code) {
  if (!confirm(`¿Estás seguro de que deseas cancelar la cita con código ${code}?`)) return;

  const appointments = getStoredAppointments();
  const updated = appointments.map(app =>
    app.code === code ? { ...app, status: 'Cancelada' } : app
  );

  localStorage.setItem('patitas_citas', JSON.stringify(updated));
  searchAppointments();
  showToast('Cita cancelada correctamente.', 'success');
};

/* ============================================================================
   TOAST NOTIFICATIONS (reemplaza los alert())
   ============================================================================ */
function showToast(message, type = 'info') {
  // Remover toasts anteriores
  document.querySelectorAll('.pf-toast').forEach(t => t.remove());

  const toast = document.createElement('div');
  toast.className = 'pf-toast';

  const colors = {
    success: { bg: 'var(--success)',   icon: '✓' },
    error:   { bg: 'var(--emergency)', icon: '✕' },
    info:    { bg: 'var(--primary)',   icon: 'ℹ' }
  };

  const { bg, icon } = colors[type] || colors.info;

  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%) translateY(80px);
    background: ${bg};
    color: #fff;
    padding: 14px 22px;
    border-radius: var(--radius-pill);
    font-size: 14px;
    font-weight: 600;
    font-family: var(--font-main);
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    z-index: 9999;
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: 90vw;
    text-align: center;
    transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease;
    opacity: 0;
  `;

  toast.innerHTML = `<span>${icon}</span> ${escapeHTML(message)}`;
  document.body.appendChild(toast);

  // Animación de entrada
  requestAnimationFrame(() => {
    toast.style.transform = 'translateX(-50%) translateY(0)';
    toast.style.opacity = '1';
  });

  // Auto-dismiss
  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(80px)';
    toast.style.opacity   = '0';
    setTimeout(() => toast.remove(), 350);
  }, 3500);
}

/* ============================================================================
   UTILITY
   ============================================================================ */
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
    .replace(/'/g,  '&#039;');
}
