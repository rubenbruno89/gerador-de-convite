import html2canvas from "html2canvas";

const $ = sel => document.querySelector(sel);
const form = $('#form');
const preview = $('#preview');

const fields = {
  CONCURSO: form.CONCURSO,
  LOCAL: form.LOCAL,
  COORDENADOR: form.COORDENADOR,
  ENDERECO: form.ENDERECO,
  DATA: form.DATA,
  DETALHES: form.DETALHES,
  HORARIO_CHEGADA: form.HORARIO_CHEGADA,
  HORARIO: form.HORARIO,
  INTERESSE: form.INTERESSE,
  OBSERVACAO: form.OBSERVACAO,
  LINK: form.LINK
};

function safe(text, fallback){
  if(!text) return fallback;
  return text.replaceAll('\n','\n');
}

function updatePreview(){
  $('#preview').style.transform = 'scale(0.995)';
  setTimeout(()=>$('#preview').style.transform='scale(1)',80);

  $('#preview .big').textContent = safe(fields.CONCURSO.value, '#CONCURSO#');
  $('#preview .muted').textContent = safe(fields.LOCAL.value, '#LOCAL#');
  $('#p-coord').textContent = safe(fields.COORDENADOR.value, '#COORDENADOR#');
  $('#p-end').textContent = safe(fields.ENDERECO.value, '#ENDERECO#');
  $('#p-data').textContent = safe(fields.DATA.value, '#DATA#');
  $('#p-detalhes').textContent = safe(fields.DETALHES.value, '#DETALHES DA FUNCAO#');
  $('#p-chegada').textContent = safe(fields.HORARIO_CHEGADA.value, '#HORARIO DA CHEGADA#');
  $('#p-horario').textContent = safe(fields.HORARIO.value, '#HORARIO#');
  $('#p-interesse').textContent = safe(fields.INTERESSE.value, '#INTERESSE#');
  $('#p-obs').textContent = safe(fields.OBSERVACAO.value, '#OBSERVACAO#');
  const linkVal = fields.LINK.value.trim();
  const linkEl = $('#p-link');
  if(linkVal){
    linkEl.textContent = linkVal;
    linkEl.href = linkVal.startsWith('http') ? linkVal : 'https://' + linkVal;
  } else {
    linkEl.textContent = '#LINK#';
    linkEl.href = '#';
  }
}

document.getElementById('previewBtn').addEventListener('click', updatePreview);

// live small updates on input for quick UX
Object.values(fields).forEach(el => {
  el.addEventListener('input', () => {
    // debounce via rAF
    window.requestAnimationFrame(updatePreview);
  });
});

// initial populate
updatePreview();

document.getElementById('downloadBtn').addEventListener('click', async () => {
  // render at higher scale for better quality
  const scale = 2;
  const originalBg = preview.style.backgroundColor;
  preview.style.backgroundColor = window.getComputedStyle(document.body).getPropertyValue('background-color');
  const canvas = await html2canvas(preview, {
    scale,
    backgroundColor: null,
    useCORS: true,
    logging: false
  });
  preview.style.backgroundColor = originalBg;
  canvas.toBlob(blob => {
    const a = document.createElement('a');
    a.download = (fields.CONCURSO.value || 'convite') + '.png';
    a.href = URL.createObjectURL(blob);
    a.click();
    URL.revokeObjectURL(a.href);
  }, 'image/png');
});

document.getElementById('printBtn').addEventListener('click', () => {
  // open printable window with cloned content
  const w = window.open('', '_blank');
  const html = `
    <html><head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <style>
      body{margin:0;padding:20px;font-family:Inter,system-ui,Arial;background:#fff}
      .card{box-shadow:none;border-radius:0}
    </style>
    </head><body>${preview.outerHTML}</body></html>
  `;
  w.document.write(html);
  w.document.close();
  w.focus();
  setTimeout(()=>{ w.print(); w.close(); }, 500);
});