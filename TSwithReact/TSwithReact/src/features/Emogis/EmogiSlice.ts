import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const emogisAsync = createAsyncThunk(
    "emogis/async",
    async () => {
      try {
        const response = await fetch('https://emojihub.yurace.pro/api/all');
        const data = await response.json();
        console.log(data);
        return data; // Assuming the response is JSON and you want to use the data
      } catch (error) {
        console.log(error);
        throw error; // Rethrow the error to mark the async thunk as rejected
      }
    }
  );

  
  interface Emoji {
    name:string,
    category: string;
    group:string,
    htmlCode:string[],
    unicode:string[]
  }
  
  interface EmogiState {
    value: Emoji[];
  }
  
  const initialState: EmogiState = {
    value: [],
  };
  
  export const emogiSlice = createSlice({
    name: 'Emogis',
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder.addCase(emogisAsync.fulfilled, (state, action) => {
        state.value = action.payload as Emoji[];
      });
    },
  });

  export default emogiSlice.reducer;


  