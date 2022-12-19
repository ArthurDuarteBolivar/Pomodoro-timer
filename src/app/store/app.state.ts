import { createAction, createReducer, on, props } from "@ngrx/store";

export interface IAppState {
  minutes: number;
  seconds1: number;
  seconds2: number;
}

export const appInitalState: IAppState = {
  minutes: 25,
  seconds1: 0,
  seconds2: 0
}

export const decreaseMinutes = createAction('[App] Decrease Hora');
export const decreaseSeconds1 = createAction('[App] Decrease Seconds1');
export const decreaseSeconds2 = createAction('[App] Decrease Seconds2');
export const setSeconds1 = createAction('[App] Set Seconds1');
export const setSeconds2 = createAction('[App] Set Seconds2');
export const setChronometer = createAction('[App] Set Chronometer');
export const setShort = createAction('[App] Set Short');
export const setLong = createAction('[App] Set Long');
export const reset = createAction('[App] Set All', props<{payload: number}>());


export const appReducer = createReducer(
    appInitalState,
    on(decreaseMinutes, (state) => {
        state = {
            ...state,
            minutes: state.minutes - 1
        }
        return state;
    }),
    on(decreaseSeconds1, (state) => {
        state = {
            ...state,
            seconds1: state.seconds1 - 1
        }
        return state;
    }),
    on(decreaseSeconds2, (state) => {
        state = {
            ...state,
            seconds2: state.seconds2 - 1
        }
        return state;
    }),
    on(setSeconds1, (state) => {
        state = {
            ...state,
            seconds1: 5
        }
        return state;
    }),
    on(setSeconds2, (state) => {
        state = {
            ...state,
            seconds2: 9
        }
        return state;
    }),
    on(setChronometer, (state) => {
        state = {
            ...state,
            minutes: 25
        }
        return state;
    }),
    on(setShort, (state) => {
        state = {
            ...state,
            minutes: 5
        }
        return state;
    }),
    on(setLong, (state) => {
        state = {
            ...state,
            minutes: 15
        }
        return state;
    }),
    on(reset, (state, action) => {
        state = {
            ...state,
            seconds1: 0,
            seconds2: 0,
            minutes: action.payload
        }
        return state;
    }),

)
