const urls = {
  "LOGO_TICLINE": "https://ticline.co/firmas/logo-ticline.png",
  "MAIL": "https://ticline.co/firmas/icono-correo.png",
  "LOCATION": "https://ticline.co/firmas/icono-ubicacion.png",
  "PHONE": "https://ticline.co/firmas/icono-telefono.png",
  "WEB": "https://ticline.co/firmas/icono-web.png",
  "linkedin": "https://ticline.co/firmas/icono-linkedin.png",
  "ISO_14001": "https://ticline.co/firmas/iso-14001.png",
  "ISO_9001": "https://ticline.co/firmas/iso-9001.png"
};

// Genera el HTML de la firma basado en los datos de entrada
function generateSignatureHTML(data) {
  // Limpia el número de teléfono para el enlace 'tel:'
  let phoneClean = data.phone.replace(/[^0-9+]/g, '');
  if (data.phone.includes('4489268')) {
    phoneClean = '+576044489268';
  }

  return `
<table width="100%" border="0" cellspacing="0" cellpadding="0" style="font-family: Tahoma, Arial, Gotham, Helvetica, sans-serif;">
  <tbody>
    <tr>
      <td style="font-size: 11pt; color: #000000; font-weight: bold; padding-bottom: 8px;">
        <strong style="font-weight: bold; color: #000000;">Cordialmente,</strong>
      </td>
    </tr>
    <tr>
      <td>
        <table border="0" cellspacing="0" cellpadding="0" style="max-width: 450px;">
          <tbody>
            <tr>
              <td valign="middle" align="center" width="290" style="line-height: 0px;">
                <a href="https://www.ticline.co/" target="_blank">
                  <img src="${urls.LOGO_TICLINE}" width="290" alt="logo" border="0" style="width: 290px; height: auto; max-width: 290px; border: none; display: inline-block;">
                </a>
              </td>
              <td width="10" style="font-size: 1px; line-height: 1px; border: none;"></td>
              <td align="left" valign="middle" style="font-family: Tahoma, Arial, Gotham, Helvetica, sans-serif; font-size: 11pt; line-height: 110%; color: #21409A; text-align: left; padding-left: 10px;">
                <div style="white-space: nowrap;">
                  <strong>${data.name}</strong><br>
                  <span style="font-size: 9pt; line-height: 100%; color: #2E2E2E;">
                    <strong>${data.role}</strong><br>
                    ${data.department}
                  </span>
                  <p style="padding: 0px; margin: 5px 0px 0px 0px; font-family: Tahoma, Arial, Gotham, Helvetica, sans-serif; font-size: 8.5pt; line-height: 150%; color: #2E2E2E; text-align: left;">
                    <img src="${urls.MAIL}" width="11" height="11" alt="Image" style="width: 11px; height: 11px; max-width: 11px; border: none; display: inline-block; vertical-align: middle;" border="0"> &nbsp;<a href="mailto:${data.email}" style="text-decoration: none; color: #2E2E2E;">${data.email}</a><br>
                    <img src="${urls.LOCATION}" width="11" height="11" alt="Image" style="width: 11px; height: 11px; max-width: 11px; border: none; display: inline-block; vertical-align: middle;" border="0"> &nbsp;<a href="${data.addressLink}" style="color: #2E2E2E; text-decoration: none !important;">${data.address}</a><br>
                    <img src="${urls.PHONE}" width="11" height="11" alt="Image" style="width: 11px; height: 11px; max-width: 11px; border: none; display: inline-block; vertical-align: middle;" border="0"> &nbsp;<a href="tel:${phoneClean}" style="color: #2E2E2E; text-decoration: none !important;">${data.phone}</a><br>
                  </p>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td width="50%" style="font-family: Tahoma, Arial, Gotham, Helvetica, sans-serif; font-size: 8.5pt; line-height: 150%; color: #2E2E2E; text-align: left;">
                          <img src="${urls.WEB}" width="11" height="11" alt="Image" style="width: 11px; height: 11px; max-width: 11px; border: none; display: inline-block; vertical-align: middle;" border="0"> &nbsp;<a href="https://www.ticline.co/" target="new" style="text-decoration: none; color: #21409A;">www.ticline.co</a>
                        </td>
                        <td style="line-height: 0px;">
                          <a href="https://www.linkedin.com/company/ticline-co/" target="_blank">
                            <img src="${urls.linkedin}" alt="" width="50" height="13" style="width: 50px; height: 13px; max-width: 50px; border: none; display: inline-block;" border="0">
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td style="font-size: 1px; line-height: 1px; border: none; height: 15px;"></td>
    </tr>
    <tr>
      <td>
        <table border="0" cellspacing="0" cellpadding="0" width="100%">
          <tbody>
            <tr>
              <td style="line-height: 0px; vertical-align: middle; width: 150px;" align="center">
                <a target="_blank" href="https://www.ticline.co/">
                  <img style="width: 150px; max-width: 150px; display: inline-block;" alt="ISO 9001" width="150" src="${urls.ISO_9001}">
                </a>
              </td>
              <td style="font-size: 1px; line-height: 1px; border: none; width: 10px;"></td>
              <td style="line-height: 0px; vertical-align: middle; width: 150px;" align="center">
                <a target="_blank" href="https://www.ticline.co/">
                  <img style="width: 150px; max-width: 150px; display: inline-block;" alt="ISO 14001" width="150" src="${urls.ISO_14001}">
                </a>
              </td>
              <td style="line-height: 1px; width: 15px;"></td>
              <td valign="middle" align="justify" style="font-family: Tahoma, Arial, Gotham, Helvetica, sans-serif; font-size: 7pt; line-height: 120%; color: #4B495D; text-align: justify;">
                El contenido de este mensaje de correo electrónico, incluidos los documentos adjuntos, contiene información confidencial o privileged y es para uso exclusivo de la persona o entidad de destino. Si usted no es el destinatario, tenga en cuenta que cualquier distribución, copia o uso de esta información está strictly prohibida. Si usted no es el destinatario y recibe este mensaje por error, por favor notifíquelos al remitente por esta misma vía y proceda a desecharlo de su sistema. Lo invitamos a solicitar nuestra Política de Privacidad en <a href="mailto:administracion@ticline.co">administracion@ticline.co</a> o ingresar a <a href="https://www.ticline.co">https://www.ticline.co</a>, en la cual podrán conocer cómo ejercer sus derechos de acceder, rectificar, actualizar, suprimir los datos o revocar la autorización.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
  `.trim();
}

// Variables del DOM
const inputName = document.getElementById('input-name');
const inputCity = document.getElementById('input-city');
const inputRole = document.getElementById('input-role');
const inputDepartment = document.getElementById('input-department');
const inputEmail = document.getElementById('input-email');

const toggleCorpPhone = document.getElementById('toggle-corp-phone');
const corpPhoneGroup = document.getElementById('corp-phone-group');
const inputCorpPhone = document.getElementById('input-corp-phone');

const signaturePreview = document.getElementById('signature-preview');
const copyBtn = document.getElementById('copy-btn');
const toast = document.getElementById('toast');

// Función para formatear cada palabra con inicial mayúscula
function formatCapitalizedName(val) {
  if (!val) return '';
  return val.toLowerCase().replace(/(?:^|\s|-|\.)\S/g, (char) => char.toUpperCase());
}

// Función para formatear el número de teléfono colombiano (+57) XXX XXX XXXX (máximo 10 dígitos)
function formatPhoneNumber(val) {
  if (!val) return '(+57) ';
  let digits = val.replace(/\D/g, '');

  // Si comienza con 57 y viene del prefijo (+57) o tiene más de 10 dígitos
  if (digits.startsWith('57') && (digits.length > 10 || val.includes('(+57)'))) {
    digits = digits.slice(2);
  }

  // Limitar a un máximo de 10 dígitos numéricos para celulares
  digits = digits.slice(0, 10);

  if (digits.length === 0) {
    return '(+57) ';
  }

  let formatted = '(+57)';
  if (digits.length > 0) {
    formatted += ' ' + digits.slice(0, 3);
  }
  if (digits.length > 3) {
    formatted += ' ' + digits.slice(3, 6);
  }
  if (digits.length > 6) {
    formatted += ' ' + digits.slice(6, 10);
  }

  return formatted;
}

// Función principal para actualizar la vista previa
function updatePreview() {
  const isCorpActive = toggleCorpPhone && toggleCorpPhone.checked;
  let phoneDisplay = '(604) 4489268 opc 0';

  if (isCorpActive && inputCorpPhone) {
    const rawCorpDigits = inputCorpPhone.value ? inputCorpPhone.value.replace(/\D/g, '').replace(/^57/, '') : '';
    phoneDisplay = rawCorpDigits.length > 0 ? formatPhoneNumber(inputCorpPhone.value) : '(+57) 313 549 4365';
  }

  const cityAddresses = {
    'Pereira': {
      address: 'Cl. 20 # 6 - 30 Oficina 804 Pereira',
      link: 'https://maps.google.com/?q=Cl.+20+%23+6+-+30+Oficina+804+Pereira'
    },
    'Medellín': {
      address: 'Cl. 29 # 41 - 105 Oficina 1103 Medellín ',
      link: 'https://www.google.com/maps/place/TICLINE/@6.2266076,-75.567809,15z/data=!4m2!3m1!1s0x0:0x27170f65cce96c2f?sa=X&ved=1t:2428&ictx=111'
    }
  };

  const selectedCity = inputCity ? inputCity.value : 'Medellín ';
  const cityInfo = cityAddresses[selectedCity] || cityAddresses['Medellín'];

  const data = {
    name: formatCapitalizedName(inputName.value) || 'Tu Nombre',
    role: inputRole.value || 'Tu Cargo',
    department: inputDepartment.value || 'Tu Departamento',
    email: inputEmail.value || 'correo@ticline.co',
    phone: phoneDisplay,
    address: cityInfo.address,
    addressLink: cityInfo.link
  };

  signaturePreview.innerHTML = generateSignatureHTML(data);
}

// Escuchar cambios en los inputs en tiempo real
inputName.addEventListener('input', () => {
  const start = inputName.selectionStart;
  const end = inputName.selectionEnd;
  inputName.value = formatCapitalizedName(inputName.value);
  if (start !== null && end !== null) {
    inputName.setSelectionRange(start, end);
  }
  updatePreview();
});
if (inputCity) {
  inputCity.addEventListener('change', updatePreview);
}
inputRole.addEventListener('input', updatePreview);
inputDepartment.addEventListener('change', updatePreview);
inputDepartment.addEventListener('input', updatePreview);
inputEmail.addEventListener('input', updatePreview);

if (toggleCorpPhone && corpPhoneGroup && inputCorpPhone) {
  toggleCorpPhone.addEventListener('change', () => {
    if (toggleCorpPhone.checked) {
      corpPhoneGroup.classList.remove('hidden');
      if (!inputCorpPhone.value || inputCorpPhone.value.trim() === '') {
        inputCorpPhone.value = '(+57) ';
      }
    } else {
      corpPhoneGroup.classList.add('hidden');
    }
    updatePreview();
  });

  inputCorpPhone.addEventListener('input', () => {
    inputCorpPhone.value = formatPhoneNumber(inputCorpPhone.value);
    updatePreview();
  });
}

// Función para copiar la firma al portapapeles
function copySignature() {
  const element = document.getElementById('signature-preview');

  // Try using the newer ClipboardItem API for rich text if available
  if (navigator.clipboard && window.ClipboardItem) {
    const html = element.innerHTML;
    const text = element.innerText;

    const data = [new ClipboardItem({
      "text/plain": new Blob([text], { type: "text/plain" }),
      "text/html": new Blob([html], { type: "text/html" })
    })];

    navigator.clipboard.write(data).then(() => {
      showToast();
    }).catch(err => {
      console.error('Error al copiar: ', err);
      fallbackCopyTextToClipboard(element);
    });
  } else {
    // Fallback using document.execCommand
    fallbackCopyTextToClipboard(element);
  }
}

function fallbackCopyTextToClipboard(element) {
  const range = document.createRange();
  const selection = window.getSelection();

  // Evitar errores si no hay selección
  if (selection) {
    selection.removeAllRanges();
    range.selectNodeContents(element);
    selection.addRange(range);

    try {
      document.execCommand('copy');
      showToast();
    } catch (err) {
      console.error('Error al copiar: ', err);
      alert('Error al copiar la firma al portapapeles.');
    }

    selection.removeAllRanges();
  }
}

function showToast() {
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}

// Escuchar el clic del botón de copiar
copyBtn.addEventListener('click', (e) => {
  e.preventDefault();
  copySignature();
});

// Inicializar la vista previa al cargar la página
window.onload = updatePreview;
