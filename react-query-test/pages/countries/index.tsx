import {NextPage} from "next";
import {useQuery} from "react-query";


const Countries: NextPage = () => {

  const { isLoading, error, data: countries } = useQuery('countries',async () => {
    const apiResponse = await fetch('https://restcountries.com/v3.1/all')
    const countries = await apiResponse.json()
    return countries
  })

  if (isLoading) {
    return <p>Loading</p>
  }

  if (error) {
    return <p>Hirvittävä tilanne</p>
  }
  return (
    <div>
      <h1>Countries</h1>
      <div>
        {
          countries.map((country: any) => <p key={country.name.common}>{country.name.common}</p>)
        }
      </div>
    </div>

  )
}

export default Countries
