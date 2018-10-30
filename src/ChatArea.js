import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Message from './Messager';

class ChatArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chats: [{
                username: "Johan",
                content: <p>Hello TimeEdit, I need support !</p>,
                img: "https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-0/p206x206/40513617_2170866359837249_7362655860490764288_n.jpg?_nc_cat=111&_nc_ht=scontent-sin6-1.xx&oh=71811fb0294ffcf444b0490c348db101&oe=5C8A6B08",
            }, {
                username: "Dat Pham",
                content: <p>Yes, Can I help you ?</p>,
                img: "https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-0/p206x206/36351989_2108269522763600_6850692271294119936_n.jpg?_nc_cat=107&_nc_ht=scontent.fsgn5-2.fna&oh=099d613984aac948fd3dbf09bde36c7f&oe=5C4D2E86",
            }, {
                username: "Johan",
                content: <p>I have appointment with client on Thursday this week and need to planing a meeting !</p>,
                img: "https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-0/p206x206/40513617_2170866359837249_7362655860490764288_n.jpg?_nc_cat=111&_nc_ht=scontent-sin6-1.xx&oh=71811fb0294ffcf444b0490c348db101&oe=5C8A6B08",
            }, {
                username: "Dat Pham",
                content: <p>How many participants do we have? and what time will it begin ?</p>,
                img: "https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-0/p206x206/36351989_2108269522763600_6850692271294119936_n.jpg?_nc_cat=107&_nc_ht=scontent.fsgn5-2.fna&oh=099d613984aac948fd3dbf09bde36c7f&oe=5C4D2E86",
            }, {
                username: "Johan",
                content: <p>Yes, We will have 4 people and will start at 4:00 PM - first day of november</p>,
                img: "https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-0/p206x206/40513617_2170866359837249_7362655860490764288_n.jpg?_nc_cat=111&_nc_ht=scontent-sin6-1.xx&oh=71811fb0294ffcf444b0490c348db101&oe=5C8A6B08",
            }, {
                username: "Johan",
                content: <p>And I want to remind people before start 1 hour early. Is it possible ?</p>,
                img: "https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-0/p206x206/40513617_2170866359837249_7362655860490764288_n.jpg?_nc_cat=111&_nc_ht=scontent-sin6-1.xx&oh=71811fb0294ffcf444b0490c348db101&oe=5C8A6B08",
            }]
        };

        this.submitMessage = this.submitMessage.bind(this);
    }

    componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }

    submitMessage(e) {
        e.preventDefault();

        this.setState({
            chats: this.state.chats.concat([{
                username: "Dat Pham",
                content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
                img: "https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/40504683_2170866303170588_483742712009326592_n.jpg?_nc_cat=107&_nc_ht=scontent.fsgn5-2.fna&oh=619339b7e2e2d2a238939abdecc50a5c&oe=5C88750F",
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        });
    }

    render() {
        const username = "Dat Pham";
        const { chats } = this.state;

        return (
            <div className="chatroom">
			<p className="titleHeader">TimeEdit Chatbox</p>
                <ul className="chats" ref="chats">
                    {
                        chats.map((chat, i) => 
                            <Message key={i} chat={chat} user={username} />
                        )
                    }
                </ul>
                <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                    <input type="text" ref="msg" placeholder="Type a message ..."/>
                    <input type="submit" value="Send" />
                </form>
            </div>
        );
    }
}

export default ChatArea;
