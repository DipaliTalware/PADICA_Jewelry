import { createClient } from 'contentful';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const SingleProductPage = () => {
	const { id } = useParams();

	const [singleProduct, setSingleProduct] = useState(null);

	const client = createClient({
		space: import.meta.env.VITE_SPACE_ID,
		accessToken: import.meta.env.VITE_ACCESS_TOKEN,
	});

	const fetchData = () =>
		client
			.getEntry(id)
			.then((response) => {
				setSingleProduct(response);
				console.log(response);
			})
			.catch(console.error);

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div>
			{singleProduct ? (
				<div>
					<p>This product is from bestseller: {id}</p>
				</div>
			) : (
				<p>Loading</p>
			)}
		</div>
	);
};

export default SingleProductPage;
