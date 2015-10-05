import * as Actions from './actions';
import { combineReducers } from 'redux';

// export const ADD_FILTER = 'ADD_FILTER';
// export const REMOVE_FILTER = 'REMOVE_FILTER';
// export const ADD_ROW = 'ADD_ROW';
// export const SET_COLUMN_FILTER = 'SET_COLUMN_FILTER';
// export const columnFilters = {
//     ALL: 'ALL',
//     USERNAME: 'USERNAME',
//     FIRSTNAME: 'FIRSTNAME',
//     LASTNAME: 'LASTNAME'
// };
//
//
// let state = {
//     filters: [{
//         column: 'all',
//         filter: 'u',
//         index: 0
//     }, {
//         column: 'username',
//         filter: 'mdo',
//         index: 1
//     }],
//     table: {
//         rows: [{
//             firstName: 'brandon',
//             lastName: 'thomas',
//             username: 'yukine',
//             index: 0
//         }],
//     },
//     columnFilter: 'All'
// }

function columnFilter (state = Actions.columnFilters.ALL, action) {
    switch (action.type) {
        case Actions.SET_COLUMN_FILTER:
            return action.filter;

        default:
            return state;
    }
}

function filters (state = [], action) {
    switch (action.type) {
        case Actions.ADD_FILTER:
            return [...state, {
                filter: action.filter,
                column: action.column,
                index: state.length
            }];

        case Actions.REMOVE_FILTER:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];

        default:
            return state
    }
}

function table (state = {}, action) {
    switch (action.type) {
        case Actions.ADD_ROW:
            return [...state.rows, {
                firstName: action.data.firstName,
                lastName: action.data.lastName,
                username: action.data.username,
                index: state.length
            }];

        default:
            return state;
    }
}

const teamApp = combineReducers({
    columnFilter,
    table,
    filters
})


export default teamApp;


