import React from 'react';
import './style.css';
import { connect } from 'react-redux'
//connect isliye import krraha hain kyu ka hm is component ko redux ka sth connect krraha hain.

import set_data from '../../store/action'

class Home extends React.Component {
    render() {
        console.log('Home Props==>', this.props); //mapStateToProps mai js state ko get kia hai yaha hmna usko props ka through uski property ko is component mai use krraha hain.
        return (
            <div>
                <h1>HOME</h1>
                <button onClick={()=>this.props.set_data()}>SET DATA</button>
            </div>
        )
    }
}

// mapStateToProps ==> Hm ye component properties ka liye use krta hain.
// mapDispatchToProp ==> Hm ye component Function ka liye use krta hain.

//mapStateToProps ==> Hm is component mai sirf redux ki global state ko get kararai ga.
const mapStateToProps = (state) => ({
    users_name: state.users
})

const mapDispatchToProps = (dispatch) => ({
    set_data: () => dispatch(set_data())

})

export default connect(mapStateToProps, mapDispatchToProps)(Home);