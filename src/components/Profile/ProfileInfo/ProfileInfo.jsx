import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return <div>
        <div>
            <img src="https://pbs.twimg.com/media/FBTyW4tVQAY8eB0.jpg" />
        </div>
        <div className={s.descriptionBlock}>ava + description</div>
    </div>

}
export default ProfileInfo;
