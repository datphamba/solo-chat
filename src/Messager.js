import React from 'react';

const Message = ({chat, user}) => (
	<li className="chat left" 
		style={{ background: `${user === chat.username ? "#2729FF" : "#f3f3f3"}`, color: `${user === chat.username ? "white" : "black"}` }}>
		<img src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/40504683_2170866303170588_483742712009326592_n.jpg?_nc_cat=107&_nc_ht=scontent.fsgn5-2.fna&oh=619339b7e2e2d2a238939abdecc50a5c&oe=5C88750F" alt={`${chat.username}'s profile pic`} />
        {chat}
    </li>
);

export default Message;
