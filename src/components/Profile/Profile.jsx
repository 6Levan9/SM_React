import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsContainer';





const Profile = (props) => {
    return <div>
        <ProfileInfo />
        <MyPostsContainer />
    </div>

}
export default Profile;
