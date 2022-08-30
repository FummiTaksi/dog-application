import {NextPage} from "next";
import {useQuery} from "react-query";


const Hello: NextPage = () => {
  const { isLoading, error, data: ok } = useQuery('hello',async () => {
    if (!process.env.NEXT_PUBLIC_BACKEND_HOST) {
      throw Error('No backend host set!')
    }
    const apiResponse = await fetch(process.env.NEXT_PUBLIC_BACKEND_HOST)
    const ok = await apiResponse.statusText
    return ok
  })

  if (isLoading) {
    return <p>Latautuu</p>
  }
  if (error) {
    <p>älä</p>
  }
  return (
    <h1>{ok}</h1>
  )
}

export default Hello
