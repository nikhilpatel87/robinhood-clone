import React, { useEffect, useState } from 'react';
import './Stats.css';
import axios from 'axios';
import StatsRow from './StatsRow';

const TOKEN = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://finnhub.io/api/v1/quote';

function Stats() {
	const [stocksData, setStocksData] = useState([]);

	const getStocksData = (stock) => {
		return axios
			.get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
			.catch((error) => {
				console.error('ERROR', error.message);
			});
	};

	useEffect(() => {
		let tempStocksData = [];
		const stocksList = [
			'AAPL',
			'TSLA',
			'CCIV',
			'NIO',
			'BIDU',
			'ARKK',
			'ARKG',
			'ARKQ',
			'ARKF',
			'BNGO',
		];

		let promises = [];
		stocksList.map((stock) => {
			promises.push(
				getStocksData(stock).then((res) => {
					tempStocksData.push({
						name: stock,
						...res.data,
					});
				})
			);
		});

		Promise.all(promises).then(() => {
			setStocksData(tempStocksData);
		});
	}, []);

	return (
		<div className="stats">
			<div className="stats__container">
				<div className="stats__header">
					<p>Stocks</p>
				</div>

				<div className="stats__content">
					<div className="stats__rows">
						{stocksData.map((stock) => (
							<StatsRow
								key={stock.data.ticker}
								name={stock.data.ticker}
								openPrice={stock.info.o}
								volume={stock.data.shares}
								price={stock.info.c}
							/>
						))}
					</div>
				</div>

				<div className="stats__header">
					<p>Lists</p>
				</div>

				<div className="stats__content">
					<div className="stats__rows">{/* watchlist */}</div>
				</div>
			</div>
		</div>
	);
}

export default Stats;
