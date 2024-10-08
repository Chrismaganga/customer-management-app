import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  username: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

// Async thunk for login
export const login = createAsyncThunk<User, { username: string; password: string }>(
  'auth/login',
  async (credentials) => {
    // Replace this mock API with your actual API call
    const response = await new Promise<User>((resolve, reject) => {
      setTimeout(() => {
        if (credentials.username === 'user' && credentials.password === 'password') {
          resolve({ id: 1, username: 'user' });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
    return response;
  }
);

// Async thunk for registration
export const register = createAsyncThunk<User, { username: string; password: string }>(
  'auth/register',
  async (userData) => {
    // Replace this mock API with your actual API call
    const response = await new Promise<User>((resolve, reject) => {
      setTimeout(() => {
        if (userData.username && userData.password) {
          resolve({ id: 2, username: userData.username });
        } else {
          reject(new Error('Registration failed'));
        }
      }, 1000);
    });
    return response;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.error = action.error.message || 'Login failed';
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<User>) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.error = action.error.message || 'Registration failed';
      });
  },
});

// Export actions and reducer
export const { logout } = authSlice.actions;
