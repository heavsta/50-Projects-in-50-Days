const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('') // split into an array
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`) // mapping it to create an array with a span around it
        .join(''); // turn it back into a string
});