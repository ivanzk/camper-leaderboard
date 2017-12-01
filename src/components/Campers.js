import React from 'react';
import ReactLoading from 'react-loading';


export default function Campers(props) {
	let campers = props.campers;
	
	const reactLoading = 
				<tr><td colSpan="4" className="reactLoadingTd">
					<ReactLoading type='bars' delay={0} color='#338435' />
				</td></tr>;
	
	if (campers) {
		campers = campers.map((camper, i) => {
			return (
				<tr key={i}>
					<th scope="row">{i + 1}</th>
					<td>
						<a 
							href={`https://www.freecodecamp.org/${camper.username}`} 
							target="_blank"
							rel="noopener"
						>
							<img src={camper.img} alt="camper"/>
							{camper.username}
						</a>
					</td>
					<td>{camper.recent}</td>
					<td>{camper.alltime}</td>
				</tr>
			);
		});
	}
	
	return campers ? campers : reactLoading;
}
