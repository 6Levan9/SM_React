import React from "react";
import s from'./Post.module.css';

const Post = (props) => {
    return <div className={s.item}>
        <img src='https://user-images.githubusercontent.com/12670730/113008567-6ebdcb80-9177-11eb-91bd-6863196d9cd3.png' />
        { props.message }
        <div>
        <span> likes </span> {props.likes}
        </div>
        </div>
        
            
        
}
export default Post;
