function toggleChat() {
    const chat = document.getElementById('chainlit-chat');
    chat.style.display = chat.style.display === 'none' ? 'block' : 'none';
}

function toggleMenu() {
    const dropdown = document.getElementById('dropdown-menu');
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
}
