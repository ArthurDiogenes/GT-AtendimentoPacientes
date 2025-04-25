
const state = {
    patientQueue: [],
    currentPatient: null,
    history: []
};

const patientNameInput = document.getElementById('patient-name');
const addPatientButton = document.getElementById('add-patient');
const callNextButton = document.getElementById('call-next');
const currentPatientContainer = document.getElementById('current-patient-container');
const queueContainer = document.getElementById('queue-container');
const queueCountElement = document.getElementById('queue-count');
const attendedCountElement = document.getElementById('attended-count');
const historySection = document.getElementById('history-section');
const historyList = document.getElementById('history-list');

function addPatient() {
    const patientName = patientNameInput.value.trim();
    if (patientName === '') return;

    state.patientQueue.push(patientName);
    patientNameInput.value = '';

    updateUI();

    const successToast = document.createElement('div');
    successToast.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center';
    successToast.innerHTML = `
          <i class="fas fa-check-circle mr-2"></i>
          <span>Paciente adicionado com sucesso!</span>
        `;
    document.body.appendChild(successToast);

    setTimeout(() => {
        successToast.style.opacity = '0';
        successToast.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            document.body.removeChild(successToast);
        }, 500);
    }, 2000);
}

function callNextPatient() {
    if (state.patientQueue.length === 0) return;

    const nextPatient = state.patientQueue.shift();

    if (state.currentPatient) {
        state.history.push(state.currentPatient);
    }

    state.currentPatient = nextPatient;

    updateUI();
}

function updateUI() {
    queueCountElement.textContent = state.patientQueue.length;
    attendedCountElement.textContent = state.history.length;

    if (state.currentPatient) {
        currentPatientContainer.innerHTML = `
              <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg animate-pulse">
                <div class="flex items-center">
                  <div class="bg-blue-100 rounded-full p-3 mr-4">
                    <i class="fas fa-user text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <p class="text-2xl font-bold text-blue-700">${state.currentPatient}</p>
                    <p class="text-sm text-blue-600 mt-1 flex items-center">
                      <i class="fas fa-door-open mr-2"></i>
                      Por favor, dirija-se ao consultório
                    </p>
                  </div>
                </div>
              </div>
            `;
    } else {
        currentPatientContainer.innerHTML = `
              <div class="flex items-center justify-center text-gray-500 italic py-8">
                <i class="fas fa-user-clock text-gray-300 text-4xl mr-3"></i>
                <p>Nenhum paciente sendo atendido</p>
              </div>
            `;
    }

    if (state.patientQueue.length > 0) {
        let queueHTML = '<ul class="space-y-3">';
        state.patientQueue.forEach((patient, index) => {
            queueHTML += `
                <li class="bg-gray-50 p-4 rounded-lg border-l-4 ${index === 0 ? 'border-blue-500' : 'border-gray-300'} patient-card">
                  <div class="flex justify-between items-center">
                    <div class="flex items-center">
                      <span class="queue-number bg-${index === 0 ? 'blue' : 'gray'}-100 text-${index === 0 ? 'blue' : 'gray'}-600 font-medium mr-3">${index + 1}</span>
                      <span class="font-medium text-gray-700">${patient}</span>
                    </div>
                    <span class="text-xs px-2 py-1 rounded-full ${index === 0 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}">${index === 0 ? 'Próximo' : 'Em espera'}</span>
                  </div>
                </li>
              `;
        });
        queueHTML += '</ul>';
        queueContainer.innerHTML = queueHTML;
    } else {
        queueContainer.innerHTML = `
              <div class="flex items-center justify-center text-gray-500 italic py-8">
                <i class="fas fa-inbox text-gray-300 text-4xl mr-3"></i>
                <p>Fila vazia</p>
              </div>
            `;
    }

    if (state.history.length > 0) {
        historySection.classList.remove('hidden');
        historyList.innerHTML = '';
        state.history.forEach((patient, index) => {
            const li = document.createElement('li');
            li.className = 'py-2 border-b border-gray-100 flex items-center';
            li.innerHTML = `
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  <span class="text-gray-700">${patient}</span>
                  <span class="text-xs text-gray-400 ml-auto">${formatTimeAgo(index)}</span>
                `;
            historyList.appendChild(li);
        });
    } else {
        historySection.classList.add('hidden');
    }

    callNextButton.disabled = state.patientQueue.length === 0;
}

function formatTimeAgo(index) {
    const times = ['agora mesmo', 'há 2 min', 'há 5 min', 'há 8 min', 'há 12 min', 'há 15 min'];
    return times[index % times.length] || 'hoje';
}

addPatientButton.addEventListener('click', addPatient);
callNextButton.addEventListener('click', callNextPatient);
patientNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addPatient();
});

updateUI();