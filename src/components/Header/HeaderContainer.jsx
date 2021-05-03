import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {setAuthUserData, authUserTC} from '../../redux/authReducer';

class HeaderContainer extends React.Component {

    componentWillMount() {
        this.props.authUserTC();
    }

    render(){
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
   return {
       isAuth: state.auth.isAuth,
       login: state.auth.login,
    }
}


export default connect (mapStateToProps,{setAuthUserData, authUserTC})(HeaderContainer);