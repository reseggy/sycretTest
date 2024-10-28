import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCertificatesApi } from '../utils/sertificates-api';

const initialState = {
  sertificatesList: [],
  isLoading: false,
  error: null
};

export const getSertificates = createAsyncThunk('feed/get', async () => {
  const response = await getCertificatesApi();
  return response;
});

const sertificatesSlice = createSlice({
  name: 'sertificates',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSertificates.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getSertificates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.sertificatesList = action.payload.data;
      })
      .addCase(getSertificates.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
});

export default sertificatesSlice.reducer;
