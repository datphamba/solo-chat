import React, { Component } from "react";

import PropTypes from 'prop-types';
import Message from './Messager';

class ChatArea extends Component {
	
	static propTypes = {
        messages: PropTypes.array
	}

	render() {
		const username = "Dat Pham";
		const messages = this.props.messages || [];
        return (
			<div className="chatContent">
				<p className="titleHeader">TimeEdit Chatbox</p>
	            <ul className="chats" ref="chats">
	                {
						messages.map((data, i) => 
	                        <Message key={i} chat={data} user={username} />
	                    )
	                }
	            </ul>
            </div>
        );
	}
}

export default ChatArea;

