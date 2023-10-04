// export const getTasks = createAsyncThunk(
//   'tasks/getAll',
//   async ({ day }, { rejectWithValue }) => {
//     try {
//       const { data } = await privateApi.get(`/getByDay/${day}`);
//       return data;
//     } catch (error) {
//       return rejectWithValue({ message: 'error' });
//     }
//   }
// );
