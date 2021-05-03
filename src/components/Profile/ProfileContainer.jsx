import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setUserProfile, setUserStatus, userProfileTC, userProfileStatusTC} from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount () {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 9528;
        }
        this.props.userProfileTC(userId);
        this.props.userProfileStatusTC(userId);
    }
    render() {
        return (
            <Profile {...this.props} profile= {this.props.profile} status= {this.props.status} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,   
        status: state.profilePage.status
    }
}

const UrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile, setUserStatus, userProfileTC, userProfileStatusTC}) (UrlDataContainer);
