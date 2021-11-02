import s from './Post.module.css';
import React from 'react';

const Post = (props) => {
  const avatar = props?.avatar || 'https://miro.medium.com/max/888/1*4ZoawGypeCluNqiC5Z_rhA.png'
  return (
    <div className={s.item}>
      <img src={avatar} /> 
      {props.messege}
      <div>
        <span>Like: </span> 
        {props.likesCount}
      </div>
    </div>
  )
}

export default Post