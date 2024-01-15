import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import LocalStorage from '../../services/LocalStorage';
let local = new LocalStorage();
import {API} from '../../services/Api';

// procedureConfigrations Api 8
export const movieList = createAsyncThunk(
  'users/movieList',
  async (body, thunkAPI) => {
    try {
      const data = await API.movieList();
      if (data.status == 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  },
);


const initialState = {
  //For Getting Movie List
  ismovieListFetching: false,
  ismovieListSuccess: false,
  ismovieListFail: false,
  ismovieListMessage: '',
  movieListPayload:[]
};

export const movieListSlice = createSlice({
  name: 'moive',
  initialState: initialState,
  reducers: {
    clearUserState: (state, actions) => {
      return {...initialState};
    },
  },
  

  extraReducers: (builder) => {
    // ************ procedureConfigurations ******************
    builder
      .addCase(movieList.fulfilled, (state, { payload }) => {
        console.log("payload234534", payload?.data?.results)
        state.movieListPayload = payload.data;
        state.ismovieListFetching = false;
        state.ismovieListSuccess = true;
        state.ismovieListFail = false;
      })
      .addCase(movieList.rejected, (state, { payload }) => {
        state.ismovieListFetching = false;
        state.ismovieListSuccess = false;
        state.ismovieListFail = true;
      })
      .addCase(movieList.pending, (state) => {
        state.ismovieListFetching = true;
        state.ismovieListSuccess = false;
        state.ismovieListFail = false;
      });
  },
});

export const movieSelector = state => state.moive;

export const {clearUserState} = movieListSlice.actions;
