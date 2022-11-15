let campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];
console.log(campos);
let tbody = document.querySelector('table tbody');
document.querySelector('form').addEventListener('submit', function(event) {
    // Evita que o formulário seja enviado
    event.preventDefault();
    let tr = document.createElement('tr');

    campos.forEach(function(campo) {
        let td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    })

    let tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    // Init form - Apos inserir os dados no form, limpa os campos
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    // Apos incluir o novo item, o foco volta para o campo data
    campos[0].focus();

})