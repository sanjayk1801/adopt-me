import { useState, useEffect } from "react";
import Results from './Results'
import useBreedList from "../hooks/useBreedList";

const ANIMALS = ["dog", "cat", "bird"]


const SearchBar = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("")
    const [breed, setBreed] = useState("")
    const [pets, setPets] = useState([])
    const [loading, setLoading] = useState(true)

    const [breeds] = useBreedList(animal)

    useEffect(() => {
        setLoading(true)
        requestPets()
    }, []);

    async function requestPets() {
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
        const json = await res.json();
        setPets(json.pets)
        setLoading(false)
    }

    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    requestPets()
            }}
            >
                <label htmlFor="location">
                    Location
                    <input id="location"
                        onChange={e => setLocation(e.target.value)}
                        value={location}
                        placeholder="location"
                    />
                </label>
                <label htmlFor="animal">
                    <select
                        id="animal"
                        value={animal}
                        onChange={e => setAnimal(e.target.value)}
                    >
                         <option />
                        {ANIMALS.map(animal => (
                            <option value={animal} key={animal}>{ animal}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    <select
                        id="breed"
                        value={breed}
                        onChange={e => setBreed(e.target.value)}
                    >
                        <option />
                        {breeds.map(breed => (
                            <option value={breed} key={breed}>{ breed}</option>
                        ))}
                    </select>
                </label>
                <button>submit</button>
            </form>
            {(loading? <h1>Loading...</h1>: (<Results pets={pets}/>))}
        </div>
    )
}
export default SearchBar;