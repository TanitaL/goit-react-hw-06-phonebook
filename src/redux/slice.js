import { createSlice } from "@reduxjs/toolkit";


const contactsSlice = createSlice({
    name: "phonebook",
    initialState: {contacts: [], filter: ''},
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload);
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
        },
        filterContact: (state, action) => {
            state.filter = action.payload;
        },
    }

})

export const { addContact, deleteContact, filterContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const getContacts = state => state.contacts;
export const getFilterValue = state => state.filter;