import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../common/Header';
import ActionArea from '../common/ActionArea';
import Footer from '../common/Footer';

class PageContainer extends Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
		this.state = {
			key: false,
		};
	}
	componentDidMount = () => {
		// myRef only has a current property
		console.log('this.myRef: ', this.myRef);
		// myRef.current is what we are interested in
		console.log('this.myRef.current: ', this.myRef.current);
		// focus our input automatically when component mounts
		this.myRef.current.focus();
	};

	render() {
		console.log('this: ', this);
		const { key } = this.state;
		return (
			<div>
				<Header />
				<input name="email" ref={this.myRef} type="text"></input>
				<ActionArea key={'key'} />
				<Footer />
			</div>
		);
	}
}

export default PageContainer;
