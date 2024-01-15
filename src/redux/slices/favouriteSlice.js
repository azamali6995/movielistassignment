import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouriteMovieList: [],
};

const todoSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addFavouriteMovieList: (state, action) => {
      state.favouriteMovieList.push(...state?.favouriteMovieList, action?.payload);
    },
    // deleteTodo: (state, action) => {
    //   state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    // },
  },
});

export const { addFavouriteMovieList, deleteTodo } = todoSlice.actions;

export const favourite = todoSlice.reducer;