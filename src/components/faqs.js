import React from 'react';
import IntroModal from './intro-modal';

export default class Faqs extends React.Component {
	constructor(props) {
		super(props);
			this.state = {
				showModal: false
			};
	}

	toggleModal() {
		this.setState({
			showModal: !this.state.showModal
		});
	}

	render() {
		let introModal;
		if (this.state.showModal) {
			introModal = <IntroModal onClose={() => this.toggleModal() } />;
		}

		return (
			<div>
				<button className="info left" onClick={ () => this.toggleModal() }>FAQ</button>
				{introModal}
			</div>
		);
	}
}