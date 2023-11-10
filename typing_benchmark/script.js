document.getElementById('typing-input').addEventListener('input', function(e) {
    const originalText = document.getElementById('text-to-type').innerText;
    const typedText = e.target.value;
    let correctCharacters = 0;

    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === originalText[i]) {
            correctCharacters++;
        } else {
            break;
        }
    }

    const accuracy = (correctCharacters / originalText.length) * 100;

    document.getElementById('results').innerText = `Accuracy: ${accuracy.toFixed(2)}%`;
});
