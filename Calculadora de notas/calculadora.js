document.getElementById('calcularBtn').addEventListener('click', calcularNota);

function calcularNota() {
  // Obtener los valores ingresados y convertir a número (si no se ingresa nada, se toma 0)
  const p1 = parseFloat(document.getElementById('p1').value) || 0;
  const p2 = parseFloat(document.getElementById('p2').value) || 0;
  const p3 = parseFloat(document.getElementById('p3').value) || 0;
  const p4 = parseFloat(document.getElementById('p4').value) || 0;
  const ep = parseFloat(document.getElementById('ep').value) || 0;
  const ef = parseFloat(document.getElementById('ef').value) || 0;
  
  // Validar que ninguna nota sea mayor a 20
  if (p1 > 20 || p2 > 20 || p3 > 20 || p4 > 20 || ep > 20 || ef > 20) {
    alert("Las notas no pueden ser mayores a 20.");
    return;
  }
  
  // Calcular el Promedio de Evaluación Permanente (PEP)
  const pep = (p1 + p2 + p3 + p4) / 4;
  
  // Calcular la nota final (PF) según la fórmula:
  // PF = (PEP * 0.40) + (EP * 0.30) + (EF * 0.30)
  const pf = (pep * 0.40) + (ep * 0.30) + (ef * 0.30);
  
  // Redondear el PF a dos decimales
  const pfRedondeado = parseFloat(pf.toFixed(2));
  
  // Umbral de aprobación: se considera aprobado a partir de 10.5 (redondeado a 11)
  const notaAprobatoria = 10.5;
  const resultadoEl = document.getElementById('resultado');
  
  if (pfRedondeado >= notaAprobatoria) {
    resultadoEl.textContent = `Tu nota final es ${pfRedondeado}. ¡Felicidades, estás aprobado!`;
    resultadoEl.style.color = "#2E8B57"; // verde
  } else {
    // Calcular la nota mínima necesaria en el EF para aprobar (manteniendo las otras notas)
    // Fórmula: 11 = (pep * 0.40) + (EP * 0.30) + (EF_necesario * 0.30)
    const EF_necesario = ((11 - (pep * 0.40) - (ep * 0.30)) / 0.30).toFixed(2);
    
    resultadoEl.textContent = `Tu nota final es ${pfRedondeado}. No alcanzaste la nota aprobatoria.
Necesitarías sacar al menos ${EF_necesario} en el Examen Final para aprobar.`;
    resultadoEl.style.color = "#B22222"; // rojo
  }
}
