import { useFetchData } from "../hooks/useFetchData";

const DisplayCharacters = () => {

    const { data, isLoading, error } = useFetchData("https://rickandmortyapi.com/api/character")

    if(isLoading) {
        return <h2>Loading...</h2>
    }

    if(error) {
        return <h2>{error}</h2>
    }
  return (
    <div>
        {
           data.results &&
           data.results.map((item, index) => {
            return <div key={index}>
                <img src={item.image} alt={item.name + " image"} />
                <p>{item.name}</p>
            </div>
           }) 
        }
    </div>
  )
}

export default DisplayCharacters