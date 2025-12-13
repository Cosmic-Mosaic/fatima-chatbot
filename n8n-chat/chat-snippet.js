<link href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css" rel="stylesheet" />
<script type="module">
	import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
    
    createChat({
        webhookUrl: '',
        webhookConfig: {
            method: 'POST',
            headers: {}
        },
        target: '#n8n-chat',
        mode: 'window',
        chatInputKey: 'chatInput',
        chatSessionKey: 'sessionId',
        loadPreviousSession: true,
        metadata: {},
        showWelcomeScreen: false,
        defaultLanguage: 'pt',
        initialMessages: [
            'Bom dia! 👋',
            'Sou o assistente automático do Santuário de Fátima. Como posso ajudar?'
        ],
        i18n: {
            en: {
                title: 'Hi there! 👋',
                subtitle: "Start a chat. We're here to help you 24/7.",
                footer: '',
                getStarted: 'New Conversation',
                inputPlaceholder: 'Type your question..',
            },
            pt: {
                title: 'Olá bom dia! 👋',
                subtitle: "Comece uma conversa. Estamos disponíveis 24/7.",
                footer: '',
                getStarted: 'Nova Conversa',
                inputPlaceholder: 'Escreva a sua questão..',
            },        
        },
        enableStreaming: false,
    });

</script>
