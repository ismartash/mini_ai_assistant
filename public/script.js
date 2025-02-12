let currentChatId = null;
const chatContainer = document.getElementById('chat-container');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const submitBtn = document.getElementById('submit-btn');
const loading = document.getElementById('loading');
const chatHistory = document.getElementById('chat-history');

chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const message = userInput.value.trim();
    if (!message) return;

    addMessage('user', message);
    userInput.value = '';
    submitBtn.disabled = true;
    loading.style.display = 'block';

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                message: message,
                chatId: currentChatId 
            })
        });

        if (!response.ok) {
            throw new Error('Failed to get response');
        }

        const data = await response.json();
        addMessage('assistant', data.message);
        currentChatId = data.chatId;
        await loadChatHistory();
    } catch (error) {
        console.error('Error:', error);
        addMessage('error', 'Sorry, there was an error. Please try again.');
    } finally {
        submitBtn.disabled = false;
        loading.style.display = 'none';
    }
});

function addMessage(type, content) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type);
    
    if (type === 'assistant') {
        messageDiv.innerHTML = formatMessage(content);
        
        const copyBtn = document.createElement('button');
        copyBtn.innerHTML = '📋';
        copyBtn.title = 'Copy to clipboard';
        copyBtn.classList.add('copy-btn');
        copyBtn.addEventListener('click', () => copyToClipboard(content));
        messageDiv.appendChild(copyBtn);
    } else {
        messageDiv.textContent = content;
    }

    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function formatMessage(message) {
    let formattedMessage = message.replace(/\n/g, '<br>');
    
    formattedMessage = formattedMessage.replace(/```([\s\S]*?)```/g, (match, code) => {
        return `<pre><code>${code.trim()}</code></pre>`;
    });
    
    return formattedMessage;
}

async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        alert('Copied to clipboard!');
    } catch (err) {
        console.error('Failed to copy:', err);
    }
}

async function loadChatHistory() {
    try {
        const response = await fetch('/api/chat-history');
        if (!response.ok) throw new Error('Failed to load chat history');
        
        const history = await response.json();
        displayChatHistory(history);
    } catch (error) {
        console.error('Error loading chat history:', error);
    }
}

function displayChatHistory(history) {
    chatHistory.innerHTML = '';
    history.forEach(chat => {
        const historyItem = document.createElement('div');
        historyItem.classList.add('history-item');
        historyItem.innerHTML = `
            <span>${chat.title}</span>
            <button class="delete-btn" data-id="${chat._id}">&times;</button>
        `;
        
        historyItem.addEventListener('click', (e) => {
            if (!e.target.classList.contains('delete-btn')) {
                loadChat(chat._id);
            }
        });
        
        chatHistory.appendChild(historyItem);
    });

    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.stopPropagation();
            const chatId = btn.getAttribute('data-id');
            await deleteChat(chatId);
        });
    });
}

async function loadChat(chatId) {
    try {
        const response = await fetch(`/api/chat/${chatId}`);
        if (!response.ok) throw new Error('Failed to load chat');
        
        const chat = await response.json();
        chatContainer.innerHTML = '';
        currentChatId = chatId;
        
        chat.messages.forEach(message => {
            addMessage(message.role, message.content);
        });
    } catch (error) {
        console.error('Error loading chat:', error);
    }
}

async function deleteChat(chatId) {
    try {
        const response = await fetch(`/api/chat/${chatId}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) throw new Error('Failed to delete chat');
        
        await loadChatHistory();
        if (currentChatId === chatId) {
            currentChatId = null;
            chatContainer.innerHTML = '';
        }
    } catch (error) {
        console.error('Error deleting chat:', error);
    }
}

loadChatHistory();