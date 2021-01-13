

const set_data = () => {
    return (dispatch) => {

        console.log('RUNNING...');
        dispatch({
            type: 'SETDATA',
            users: { name: 'Syed Hassan', email: 'hassan@gamil.com' }
        }) //dispatch mai "type" dena lazmi hai.
    }
}

export default set_data;