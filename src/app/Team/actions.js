export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const ADD_ROW = 'ADD_ROW';
export const SET_COLUMN_FILTER = 'SET_COLUMN_FILTER';
export const columnFilters = {
    ALL: 'ALL',
    USERNAME: 'USERNAME',
    FIRSTNAME: 'FIRSTNAME',
    LASTNAME: 'LASTNAME'
};

export function addFilter (filter, column) {
    return {
        type: ADD_FILTER,
        filter: filter,
        column: columnFilters[column]
    };
};

export function removeFilter (filter, column) {
    return {
        type: REMOVE_FILTER,
        filter: filter
    };
};

export function addRow (data) {
    return {
        type: ADD_ROW,
        data: data
    };
};

export function setColumnFilter (filter) {
    return {
        type: SET_COLUMN_FILTER,
        filter: columnFilters[filter]
    };
};