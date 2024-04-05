import { createClient } from 'contentful';
import React from 'react';
import { useState, useEffect } from 'react';
// import axios from 'axios';

const Bestseller = () => {
	const [data, setData] = useState([]);
	const client = createClient({
		space: import.meta.env.VITE_SPACE_ID,
		accessToken: import.meta.env.VITE_ACCESS_TOKEN,
	});

	const fetchData = () =>
		client
			.getEntries()
			.then((response) => {
				setData(response.items);
				console.log(response.items);
			})
			.catch(console.error);

	useEffect(() => {
		fetchData();
	}, []);

	return data.map((eachData) => (
		<div key={eachData.sys.id}>
			<img
				className='h-20'
				src={eachData.fields.heroImage.fields.file.url}
				alt={eachData.fields.heroImage.fields.file.fileName}
			/>
			<p>{eachData.fields.name}</p>
			<p>{eachData.fields.description}</p>
		</div>
	));
};

export default Bestseller;
