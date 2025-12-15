# Fatima Chatbot

An AI-powered chatbot for the Sanctuary of Fátima (Santuário de Fátima) website at [www.fatima.pt](https://www.fatima.pt), built with n8n and OpenAI.

## Overview

This chatbot serves as a virtual assistant for pilgrims and visitors to the Shrine of Fátima, providing information about:

- Mass schedules (winter and summer programs)
- Sacraments (baptism, marriage, confessions)
- Wedding anniversary blessings (25, 50, 60, 70, 75 years)
- Vehicle blessings
- Candle processions
- International anniversary pilgrimages (days 12-13, May to October)
- Museum and archive information
- Visitor services and accessibility
- How to organize pilgrimages

## Architecture

The chatbot uses a RAG (Retrieval-Augmented Generation) architecture:

- **LLM**: OpenAI GPT-4.1-mini
- **Vector Store**: Supabase with pgvector
- **Embeddings**: OpenAI text-embedding-3-large (3072 dimensions)
- **Workflow Engine**: n8n
- **Frontend**: @n8n/chat widget

## Project Structure

```
├── n8n-chat/
│   └── chat-snippet.js      # Embeddable chat widget code
├── n8n-workflow/
│   ├── ChatbotFátima.json   # n8n workflow configuration
│   └── faq_embeddings_optimized.md  # FAQ knowledge base for RAG
└── README.md
```

## Features

- **Multilingual Support**: Portuguese (European), English, French, Italian, Spanish, Polish, and Dutch
- **RAG-powered Responses**: Queries the official FAQ database before generating responses
- **Conversation Memory**: Maintains context with a 10-message sliding window
- **24/7 Availability**: Always available to assist pilgrims
- **Respectful Tone**: Designed to represent the institution with cordiality and respect

## Setup

### Prerequisites

- n8n instance (self-hosted or cloud)
- OpenAI API key
- Supabase project with pgvector extension

### Configuration

1. **Import the workflow**: Import `n8n-workflow/ChatbotFátima.json` into your n8n instance

2. **Configure credentials**:
   - OpenAI API credentials
   - Supabase API credentials
   - Google Drive OAuth (for FAQ document ingestion)

3. **Set up the vector store**:
   - Create a `chatbot_answers` table in Supabase
   - Create the `match_chatbot_answers` function for similarity search

4. **Embed the chat widget**: Add the contents of `n8n-chat/chat-snippet.js` to your website and configure the `webhookUrl`

## Chat Widget Configuration

The chat widget can be customized in `chat-snippet.js`:

```javascript
createChat({
    webhookUrl: 'YOUR_WEBHOOK_URL',  // Required: n8n webhook URL
    target: '#n8n-chat',
    mode: 'window',
    defaultLanguage: 'pt',
    // ... other options
});
```

## License

Proprietary - Sanctuary of Fátima
