import React from 'react';

// Function for displaying the menu
function Menu(props) {
	console.log(props);
	const menu = props.list; 
	const heading = props.heading;
	console.log(props.isActive)
	const i = 0;
	return (
		<div className="container">
			<div className="main-menu">
			<h2>{heading()}</h2>
				{
					menu.map((element, index) => (
						<div className={`list-item ${props.isActive === index && 'active'}`}>{element.name}</div>
					))
				}
			</div>
		</div>
		
	)

}

export default Menu;