import { ChatMessage } from '@/types';

export const mockChatMessages: ChatMessage[] = [
  {
    id: '1',
    text: 'Hi! I saw your request about the kitchen sink. I can come by this afternoon.',
    senderId: 'pro-1',
    timestamp: '10:32',
    isMine: false,
  },
  {
    id: '2',
    text: 'That would be great. What time works best for you?',
    senderId: 'me',
    timestamp: '10:35',
    isMine: true,
  },
  {
    id: '3',
    text: "I can be there around 4pm. I'll bring my tools and check the pipe connection under the sink.",
    senderId: 'pro-1',
    timestamp: '10:38',
    isMine: false,
  },
  {
    id: '4',
    text: 'Perfect, see you then!',
    senderId: 'me',
    timestamp: '10:40',
    isMine: true,
  },
];

export const mockCustomerPhone = '+34 612 999 888';
