import Pet from "./Pet";

const Results = ({ pets }) => {
	return (
		<div className="search">
			{!pets.length ? (
				<h2>No Pet found!</h2>
			) : (
				pets.map((pet) => (
					<Pet
						name={pet.name}
						key={pet.id}
						animal={pet.animal}
						breed={pet.breed}
						location={`${pet.city} - ${pet.state}`}
						images={pet.images}
						id={pet.id}
					/>
				))
			)}
		</div>
	);
};

export default Results;
