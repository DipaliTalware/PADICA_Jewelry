import { createClient } from 'contentful';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// Ask Lillian how to put cards in flex

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
		<Link>
			<div
				key={eachData.sys.id}
				className='card card-compact w-96 bg-base-100 shadow-xl'
			>
				<figure>
					<img
						className='h-30'
						src={eachData.fields.heroImage.fields.file.url}
						alt={eachData.fields.heroImage.fields.file.fileName}
					/>
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>{eachData.fields.name}</h2>
					<h3>
						{eachData.fields.price} {''}EUR
					</h3>
				</div>
			</div>
		</Link>
	));
};

{
	/* <div className='card card-compact w-96 bg-base-100 shadow-xl'>
	<figure>
		<img
			src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
			alt='Shoes'
		/>
	</figure>
	<div className='card-body'>
		<h2 className='card-title'>Shoes!</h2>
		<p>If a dog chews shoes whose shoes does he choose?</p>
		<div className='card-actions justify-end'>
			<button className='btn btn-primary'>Buy Now</button>
		</div>
	</div>
</div>; */
}


export default Bestseller;
