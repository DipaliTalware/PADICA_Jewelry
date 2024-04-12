import { createClient } from 'contentful';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CartUpdate from './CartUpdate';
const SingleProductPage = () => {
	const { id } = useParams();

	const [singleProduct, setSingleProduct] = useState(null);
	const [singleImage, setSingleImage] = useState([]);
	const [selected, setSelected] = useState(0);
	const [selectedImageURL, setSelectedImageURL] = useState();
	const [buttonText, setButtonText] = useState('Add To Cart');
	const [showPopUp, setShowPopUp] = useState(false);

	const client = createClient({
		space: import.meta.env.VITE_SPACE_ID,
		accessToken: import.meta.env.VITE_ACCESS_TOKEN,
	});

	const fetchData = () =>
		client
			.getEntry(id)
			.then((response) => {
				setSingleProduct(response.fields);
				console.log(response.fields);
				setSingleImage(response.fields.productDetailsPageImages);
				setSelectedImageURL(
					response.fields.productDetailsPageImages[0].fields.file.url
				);
				console.log(response.fields.productDetailsPageImages);
			})
			.catch(console.error);

	useEffect(() => {
		fetchData();
	}, []);

	function toggleBorder(index, URL) {
		setSelected(index);
		setSelectedImageURL(URL);
	}

	function buttonClicked() {
		setButtonText('add more');
		setShowPopUp(true);
	}
	function closePopUp() {
		setShowPopUp(false);
	}
	return (
		<div>
			{singleProduct ? (
				<div className='wrapper py-14'>
					<div className=' flex m-10 '>
						<div>
							{singleImage ? (
								<div className='flex flex-col mr-6'>
									{singleImage.map((image, index) => (
										<Link>
											<img
												className={`p-2 ${
													selected === index ? 'border-2 border-black ' : ''
												}`}
												onClick={() =>
													toggleBorder(index, image.fields.file.url)
												}
												width={75}
												height={75}
												key={image.sys.id}
												src={image.fields.file.url}
												alt={image.fields.file.fileName}
											/>
										</Link>
									))}
								</div>
							) : (
								<p> Loading...</p>
							)}
						</div>
						<div className='w-2/5'>
							<img
								src={selectedImageURL}
								alt={singleProduct.heroImage.fields.file.url.fileName}
							/>
						</div>
						<div className='p-5 w-1/2 '>
							<span className='font-semibold'>
								{singleProduct.name} - {singleProduct.price} EUR
							</span>
							<br />
							<span></span>
							<br />
							<span className='flex border-2 bg-stone-300 p-3'>
								<svg
									className='h-5 px-2'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 448 512'
								>
									<path d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z' />
								</svg>
								<p>In stock - delivery in 2-3 working days</p>
							</span>

							<button
								onClick={() => buttonClicked()}
								className={`block w-full mt-6 px-14 py-3 bg-black text-white border-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out ${
									showPopUp
										? 'pointer-events-none'
										: ' hover:bg-white hover:text-black '
								}`}
							>
								{buttonText}
							</button>
							{showPopUp && (
								<CartUpdate closeEvent={closePopUp} image={selectedImageURL} />
							)}
							<br />
							<span className='text-balance'>{singleProduct.description}</span>
						</div>
					</div>
				</div>
			) : (
				<p>Loading</p>
			)}
		</div>
	);
};

export default SingleProductPage;
