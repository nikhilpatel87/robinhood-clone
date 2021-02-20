import React from 'react';
import './Newsfeed.css';

function Newsfeed() {
	return (
		<div className="newsfeed">
			<div className="newsfeed__container">
				<div className="newsfeed__chartSection">
					<div className="newsfeed__price">
						<h1>$120,789</h1>
						<small>
							<strong>+12,345 (+10.08%)</strong> Today
						</small>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Newsfeed;
