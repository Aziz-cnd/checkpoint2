// Function to calculate notes distribution
function getNotesDistribution(students) {
    const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    students.forEach(note => {
        if (note >= 1 && note <= 5) {
            distribution[note]++;
        }
    });

    return distribution;
}

// DOM elements
const notesInput = document.getElementById('notes');
const calculateButton = document.getElementById('calculate');
const resultDisplay = document.getElementById('result');

// Event listener for the calculate button
calculateButton.addEventListener('click', () => {
    const input = notesInput.value;
    const notes = input.split(',').map(Number);

    const result = getNotesDistribution(notes);
    resultDisplay.textContent = JSON.stringify(result, null, 2);
});

