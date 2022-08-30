import {NextPage} from "next";
import {useQuery} from "react-query";


const Dogs: NextPage = () => {



  const { isLoading, error, data: dogs } = useQuery('countries',async () => {
    const apiResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/dogs`)
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
      <h1>Dogs are best.</h1>

      <div>
        {
          dogs.map((dog: any) => <p key={dog.id} id={`dog-${dog.id}`}>{dog.id}</p>)
        }
      </div>
    </div>




  )
}

export default Dogs
