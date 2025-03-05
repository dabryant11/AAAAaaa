import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
  flaggedViolations: string[];
}

interface Filter {
  phi: boolean;
  hipaa: boolean;
}

interface MessagesState {
  messages: Message[];
  filters: Filter;
  loading: boolean;
}

const initialState: MessagesState = {
  messages: [],
  filters: { phi: true, hipaa: true },
  loading: false,
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    toggleFilter: (state, action: PayloadAction<keyof Filter>) => {
      state.filters[action.payload] = !state.filters[action.payload];
    },
  },
});

export const { setMessages, setLoading, toggleFilter } = messagesSlice.actions;

export default messagesSlice.reducer;
