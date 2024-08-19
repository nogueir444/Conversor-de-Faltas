function calculateAbsences() {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;

    const totalMinutes = hours * 60 + minutes;
    const absences = Math.ceil(totalMinutes / 50);

    const totalDays = Math.floor(absences / 6);
    const remainingAbsences = absences % 6;

    let result = `Total de faltas: ${absences} (${totalDays} dias e ${remainingAbsences} horários)`;
    document.getElementById('result').innerText = result;
}
