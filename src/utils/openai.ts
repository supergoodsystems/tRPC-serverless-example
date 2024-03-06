import OpenAI from 'openai';

const MODEL = 'gpt-4-1106-preview';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const translateToSpanish = async (text: string) => {
    const messages = [
        {
          role: 'system',
          content:
            'You are a professional english to spanish translator.'
        },
        {
            role: 'user',
            content: 'Translate the following text to spanish: ' + text
        }
      ];

    const completion = await openai.chat.completions.create({
        model: MODEL,
        messages,
    });

    const responseMessage = completion?.choices[0].message.content
    return responseMessage;
};
