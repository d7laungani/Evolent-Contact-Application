
export const initialState = {
    contacts: [{
        id: 1,
        firstName: "Devesh",
        lastName: "Laungani",
        company: "Evolent",
        position: "Software Engineer",
        location: "Dallas, TX",
        number: '469-500-4104',
        email : 'd7laungani@gmail.com',
        active: true,
        image: 'https://deveshlaungani.com/wp-content/uploads/2018/03/me.jpg'
    }],
};


export const UPDATE_CONTACTS_REQUEST = 'UPDATE_CONTACTS_REQUEST'
export const UPDATE_CONTACTS_SUCCESSFUL = 'UPDATE_CONTACTS_SUCCESSFUL'

