import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {Profile} from "../../types/Profile";




export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchByIdStatus',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI;

        try {
            const response = await extra.api.post<Profile>('/profile');
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
