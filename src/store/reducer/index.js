const INITIAL_STATE = {
    users: [
        {
            name: "Hassan",
            email: "syedhassan@gmail.com"
        }
    ]
}

// export default (state = INITIAL_STATE, action)=>{
//     console.log('action==>',action);
//     return state;
// }

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'SETDATA':
            return ({
                ...state,
                // users: 'KHALI'
                // users: action.users
                users: [...state.users, action.users]

            })
    }
    return state;
}
