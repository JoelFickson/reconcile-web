import {createSlice} from "@reduxjs/toolkit";


import NetworkService from "../api/HttpInstance";
import {AppDispatch} from "../store/store";
import any = jasmine.any;

interface ReconcileState {

    matched: [],
    unmatched: [],
    isLoading: boolean
    error: string
}

export interface responseData {
    hasErrors: boolean,
    matched?: [],
    unmatched?: [],
    message?: string
}


export const initialState: ReconcileState = {
    matched: [],
    unmatched: [],
    isLoading: false,
    error: "",
}


const reconcileSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoading: (state) => {

            state.isLoading = !state.isLoading
        },
        setResponseData: (state, action) => {
            const {matched, unmatched} = action.payload
            state.matched = matched
            state.unmatched = unmatched
        },
        setErrorMessage: (state, action) => {
            state.error = action.payload
        }
    },
})
export const {setResponseData, setLoading, setErrorMessage} = reconcileSlice.actions


export const FileUpload = (formData: FormData) => async (dispatch: AppDispatch) => {


    dispatch(setLoading())


    try {
        const {data}: { data: responseData } = await NetworkService().post("/", formData, {
            headers: {'Content-Type': 'multipart/form-data'},
        });


        if (data.hasErrors) {
            dispatch(setLoading())
            dispatch(setErrorMessage(data.message));
        } else {
            dispatch(setLoading())
            const {matched, unmatched} = data;

            dispatch(setResponseData({matched, unmatched}))

        }


    } catch (e) {
        dispatch(setLoading())
        dispatch(setErrorMessage("There was an error"));

        //TODO: Handle specific errors
    }

}


export default reconcileSlice.reducer



