// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { privateApi } from 'api';

// // const privateApi = 'http://localhost:5000';

// export const getReview = createAsyncThunk(
//   'reviews/getReview',
//   async (_, thunkAPI) => {
//     try {
//       const response = await privateApi.get('/api/reviews/own');
//       console.log(response.data.data);

//       return response.data.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue({
//         message: error.response.data.message,
//         code: error.response.status,
//       });
//     }
//   }
// );

// export const addReview = createAsyncThunk(
//   'reviews/addReview',
//   async (review, thunkAPI) => {
//     try {
//       const response = await privateApi.post('/api/reviews/own', { review });
//       console.log(response.data.data);
//       return response.data.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue({
//         message: error.response.data.message,
//         code: error.response.status,
//       });
//     }
//   }
// );
