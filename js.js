document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const paragraph = btn.previousElementSibling;
        paragraph.classList.toggle('expanded');

        btn.textContent = paragraph.classList.contains('expanded') 
            ? "Lire moins ▲" 
            : "Lire plus ▼";
    });
});