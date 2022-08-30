import {NextPage} from "next";
import {MenuItem, Select} from "@material-ui/core"
import {useState} from "react";
import {DogSize} from "../../types/dog";
import {useMutation} from "react-query";
import axios from "axios";

const createDog = async (dogSize: DogSize) => {
  const { data: response } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/dogs`, { dogSize })

  return response
}

const CreateDog: NextPage = () => {

  const [dogSize, setDogSize] = useState(DogSize.Small)

  const {data, isLoading, error, mutate, isSuccess } = useMutation(createDog)

  const dogSizes: DogSize[] = [DogSize.Small, DogSize.Medium, DogSize.Large]

  const clickSubmit = () => {
    mutate(dogSize)
  }

  if (isLoading) {
    return <p>Creating a dog.</p>
  }

  if (error) {
    return <p>Error while creating dog</p>
  }

  if (isSuccess)  {
    return <p>Dog created with size {data.size}</p>
  }

    return (
    <div>
      <h1>Create a dog.</h1>
      <div>
        <Select
          value={dogSize ?? DogSize.Small}
          label={"size"}
          onChange={(e) => setDogSize(e.target.value  ?? DogSize.Small as DogSize)}
        >
          { dogSizes.map((dogSize) => {
            return (
              <MenuItem key={dogSize} value={dogSize}>
                {dogSize}
              </MenuItem>
            )
          })}
        </Select>
        <button onClick={() => clickSubmit()}>SUBMIT</button>
      </div>

    </div>
  )
}

export default CreateDog
