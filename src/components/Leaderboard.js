import React from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

import FontAwesome from 'react-fontawesome';

import '../styles/css/Leaderboard.css';
import Campers from './Campers';


export default class Leaderboard extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			recentPoints: '',
			alltimePoints: '',
			sortBy: 'alltime'
		}
		
		this.sortBy = this.sortBy.bind(this);
		this.updateSortBy = this.updateSortBy.bind(this);
	}
	
	componentDidMount() {
		axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
			.then(response => {
				this.setState({recentPoints: response.data});
			});
		
		axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
			.then(response => {
				this.setState({alltimePoints: response.data});
			});
	}
	
	
	sortBy() {
		if (this.state.sortBy === 'recent')
			return this.state.recentPoints;
		else
			return this.state.alltimePoints;
	}
	
	updateSortBy(e) {
		this.setState({sortBy: e.target.id});
	}
	
	isActiveSortBy(id) {
		if (this.state.sortBy === id)
			return <FontAwesome name="long-arrow-down" />;
	}
	
	
	render () {
		return (
			<div className="Leaderboard">
				<Table bordered responsive striped>
					<thead>
						<tr>
							<th>#</th>
							<th>Camper Name</th>
							<th id="recent" onClick={this.updateSortBy}>
								Past 30 Days Points {' '}
								{this.isActiveSortBy('recent')}
							</th>
							<th id="alltime" onClick={this.updateSortBy}>
								All Time Points {' '}
								{this.isActiveSortBy('alltime')}
							</th>
						</tr>
					</thead>
					<tbody>
						<Campers campers={this.sortBy()} />
					</tbody>
				</Table>
			</div>
		);
	}
}
