import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";

const Details = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [details, setDetails] = useState();
	const { id } = useParams();

	useEffect(async () => {
		const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
		const json = await res.json();
		setDetails(json.pets[0]);
		setIsLoading(false);
	}, []);

	return (
		<div className="details">
			{isLoading ? (
				<h2>loading...</h2>
			) : (
				<div>
					<Carousel images={details.images} />
					<h1>{details.name}</h1>
					<h2>
						{details.animal} - {details.breed} - {details.city},{" "}
						{details.state}
					</h2>
					<button> Adopt {details.name} </button>
					<p>{details.description}</p>
				</div>
			)}
		</div>
	);
};

export default Details;
