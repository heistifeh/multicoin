import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    signUpStart: (state) => {
      state.loading = true;
    },
    signUpSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signUpFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    verifyEmailStart: (state) => {
      state.loading = true;
    },
    verifyEmailSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    verifyEmailFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateVerificationStatus: (state, action) => {
      // Update the user's verification status (isIdVerified)
      if (state.currentUser) {
        state.currentUser.isIdVerified = action.payload; // Update the verification status
      }
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  signUpStart,
  signUpSuccess,
  signUpFailure,
  verifyEmailStart,
  verifyEmailSuccess,
  verifyEmailFailure,
  updateVerificationStatus,  // New action for updating verification status
} = userSlice.actions;
export default userSlice.reducer;
