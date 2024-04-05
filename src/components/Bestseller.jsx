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
			.then((response) => setData(response.items))
			.catch(console.error);

	useEffect(() => {
		fetchData();
	}, []);
	console.log(data);
	// console.log(data.fields.name);
	return <div>{data.fields.name}</div>;
};

export default Bestseller;
