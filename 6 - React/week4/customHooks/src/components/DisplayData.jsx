import { useFetchData } from '../hooks/useFetchData';

const DisplayData = () => {

    const { data, isLoading, error } = useFetchData("https://fakestoreapi.com/products");

    if(isLoading){
        return <><h2>Loading...</h2></>
    }

    if(error) {
        return <h2>{error}</h2>
    }

  return (
    <div>
        {
            data.map((item, index) => {
                return <p key={index}>{item.title}</p>
            })
        }
    </div>
  )
}

export default DisplayData