import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
<div>
    <div>
    <img src='data:image/jpeg;base64,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'></img>
    </div>
    <div className={s.descriptionBlock}>
    ava + description
  </div>
  </div>
  
  )


}

export default ProfileInfo;