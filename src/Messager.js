import React from 'react';

const Message = ({chat, user}) => (
	<li className={`chat ${user === chat.username ? "right" : "left"}`} 
		style={{ background: `${user === chat.username ? "#2729FF" : "#f3f3f3"}`, color: `${user === chat.username ? "white" : "black"}` }}>
        {user !== chat.username
            && <img src={chat.img} alt={`${chat.username}'s profile pic`} />
        }
        {chat.content}
    </li>
);

export default Message;
