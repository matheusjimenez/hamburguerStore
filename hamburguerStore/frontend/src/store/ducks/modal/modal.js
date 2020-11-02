import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

export const modal_modal = createAction('MODAL_MODAL')


export default createReducer(INITIAL_STATE,{
    [modal_modal.type]: (state, action) => [state, action.payload]
})