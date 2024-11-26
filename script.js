document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    const testQueries = [
        'youtube cute cats',
        'example.com',
        'how to code',
        'github javascript',
        'stackoverflow python error',
        'twitter latest news',
        'is example.com real?'
    ];

    let typingTimeout;

    function typePlaceholder(text, index = 0) {
        if (index < text.length) {
            searchInput.placeholder = text.slice(0, index + 1);
            typingTimeout = setTimeout(() => typePlaceholder(text, index + 1), 100);
        }
    }

    function getRandomPlaceholder() {
        return testQueries[Math.floor(Math.random() * testQueries.length)];
    }

    function startTypingPlaceholder() {
        clearTimeout(typingTimeout);
        const newPlaceholder = getRandomPlaceholder();
        typePlaceholder(newPlaceholder);
    }

    startTypingPlaceholder();

    const intervalId = setInterval(() => {
        if (document.activeElement !== searchInput) {
            startTypingPlaceholder();
        }
    }, 
