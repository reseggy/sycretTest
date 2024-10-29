import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCertificatesApi, addOrderApi } from '../utils/sertificates-api';

const initialState = {
  sertificatesList: [],
  isLoading: false,
  error: null,
  orderData: null,
  orderReqest: false
};

export const getSertificates = createAsyncThunk(
  'sertificates/get',
  async () => {
    const response = await getCertificatesApi();
    return response;
  }
);

export const postOrder = createAsyncThunk(
  'sertificates/order',
  async (options) => {
    const response = await addOrderApi(options);
    return response;
  }
);

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
      })
      .addCase(postOrder.pending, (state) => {
        state.orderReqest = true;
        state.isLoading = true;
        state.error = null;
        state.orderData = null;
      })
      .addCase(postOrder.fulfilled, (state, action) => {
        state.orderReqest = false;
        state.isLoading = false;
        state.orderData = action.payload.data;
      })
      .addCase(postOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.orderReqest = false;
        state.error = action.error.message;
      });
  }
});

export default sertificatesSlice.reducer;
