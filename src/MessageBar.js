import React, { Component } from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";
import SendButton from "./SendButton";
import moment from 'moment';

class MessageBar extends Component {
    static propTypes = {
      onSendMessage: PropTypes.func
	}
	
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            disabled: false
        };
	}
	
	fetchSWAPI = async (characterName) => {
        try {

            const res = await fetch(
                `https://swapi.co/api/people/?search=${characterName}`
			);

			const response = await res.json();

			if (!res.ok) {
				this.props.onSendMessage && this.props.onSendMessage('No result found !');
			} else {
				if(response.count === 0) {
					this.props.onSendMessage && this.props.onSendMessage(`Starwars character "${ characterName }" not found !`);
				} else {
					this.props.onSendMessage && this.props.onSendMessage(`/starwars "${ characterName }"`);
					this.props.onSendMessage && this.props.onSendMessage(`Fullname: ${response.results[0].name}`);
					this.props.onSendMessage && this.props.onSendMessage(`Gender: ${response.results[0].gender}`);
					this.props.onSendMessage && this.props.onSendMessage(`Height: ${response.results[0].height}`);
					this.props.onSendMessage && this.props.onSendMessage(`Mass: ${response.results[0].mass}`);
				}
			}

        } catch (e) {
			this.props.onSendMessage && this.props.onSendMessage("Sorry, Something went wrong !");
			throw e;
		}
	};
	
    async sendMessageHandler () {

		const starwarsCommand = new RegExp(/^\s*\/starwars\s*(.*)$/g);

        if (this.state.disabled) {
            return;
        }
        if (/^\s*\/time\s*$/g.test(this.state.message)) {
			this.props.onSendMessage && this.props.onSendMessage(`/time`);
            this.props.onSendMessage && this.props.onSendMessage(moment(new Date()).format('lll'));
        } else if (/^\s*\/goodbye\s*$/g.test(this.state.message)) {
			this.props.onSendMessage && this.props.onSendMessage(`/goodbye`);
			this.props.onSendMessage && this.props.onSendMessage('Goodbye, Have a nice day !');
            this.setState({
				disabled: true
            });
        } else if (starwarsCommand.test(this.state.message)) {
			starwarsCommand.lastIndex = 0;
            const matches = starwarsCommand.exec(this.state.message);

            if (matches && matches[1]) {
                const characterName = matches[1];
				this.fetchSWAPI(characterName);
            } else {
				this.props.onSendMessage && this.props.onSendMessage(`Starwars character "${ matches[1] }" not found !`);
			}
        } else if (this.state.message.startsWith('/')) {
            this.props.onSendMessage && this.props.onSendMessage('Sorry, This command still not supported yet !');
        } else {
            !!this.state.message && this.props.onSendMessage && this.props.onSendMessage(this.state.message);
		}
		
        this.setState({
            message: ''
		});
		
        this.refs.textInput.cleanUp();
	}
	
    onChangeHandler (e) {
        this.setState({
            message: e.target.value
        });
	}
	
    render() {
        return (
            <div className="messageBar">
				<TextInput ref="textInput" 
						   onChange={this.onChangeHandler.bind(this)}
						   onSendMessage={this.sendMessageHandler.bind(this)}/>

				<SendButton onSendMessage={this.sendMessageHandler.bind(this)} 
							disabled={this.state.disabled}/>
            </div>
        );
    }
}

export default MessageBar;
