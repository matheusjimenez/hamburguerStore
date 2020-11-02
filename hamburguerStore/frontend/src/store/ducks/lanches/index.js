import { createAction, createReducer } from '@reduxjs/toolkit';
const INITIAL_STATE = [];

export const loadLanches = createAction('LOAD_LANCHES');

export default createReducer(INITIAL_STATE,{
    [loadLanches.type]: (state,action)=> [...action.payload]
});


