import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow, setCurrentPage, toggleIsFollowing, getUsersTC, unFollowTC, followTC } from '../../redux/usersReduser';
import Preloader from '../common/Preloader/Preloader';



class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (page) => {
        this.props.getUsersTC(page, this.props.pageSize);
    };

    render() {
        return(
            <>
                {this.props.isLoading ? <Preloader/> : null }
                <Users 
                    onPageChanged = {this.onPageChanged} 
                    users = {this.props.users}
                    totalUsersCount = {this.props.totalUsersCount}
                    pageSize = {this.props.pageSize}
                    currentPage = {this.props.currentPage}
                    isFollowing = {this.props.isFollowing}
                    unFollowTC = {this.props.unFollowTC}
                    followTC = {this.props.followTC} />
            </>
            ) 
    }
}

let mapStateToProps = (state) => {
     return {
         users: state.usersPage.users,
         pageSize: state.usersPage.pageSize,
         totalUsersCount: state.usersPage.totalUsersCount,
         currentPage: state.usersPage.currentPage,
         isLoading: state.usersPage.isLoading,
         isFollowing: state.usersPage.isFollowing,
     }
};

export default connect (mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowing,
    getUsersTC,
    unFollowTC,
    followTC
}) (UsersAPIComponent);