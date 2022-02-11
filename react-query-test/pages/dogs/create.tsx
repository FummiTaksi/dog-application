import { NextPage } from "next";
import { MenuItem, Select } from "@material-ui/core";
import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import {
  dogControllerCreate,
  useDogControllerCreate,
} from "../../generated/default/default";
import {
  CreateDogDto,
  CreateDogDtoDogSize,
  DogSize,
} from "../../generated/model";
import { TransformStreamDefaultController } from "node:stream/web";
import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const createDog = async (dogSize: DogSize) => {
  const { data: response } = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_HOST}/dogs`,
    { dogSize }
  );

  return response;
};

const CreateDog: NextPage = () => {
  const [dogSize, setDogSize] = useState(DogSize.Small);

  const axiosConfig: AxiosRequestConfig = { baseURL: "http://localhost:3000" };

  const {
    data: dogData,
    isLoading,
    error,
    mutate,
    isSuccess,
  } = useDogControllerCreate({ axios: axiosConfig });

  const dogSizes: DogSize[] = [DogSize.Small, DogSize.Medium, DogSize.Large];

  const createDogDto: CreateDogDto = { dogSize: dogSize };

  console.log(createDogDto);
  const clickSubmit = () => {
    mutate({ data: createDogDto });
  };

  // const clickSubmit = async () => {
  //   const res = await dogControllerCreate(createDogDto, axiosConfig);
  //   console.log(res);
  // };

  if (isLoading) {
    return <p>Creating a dog.</p>;
  }

  if (error) {
    return <p>Error while creating dog</p>;
  }

  if (isSuccess) {
    return <p>Dog created with size {dogData?.data.size ?? ":/"}</p>;
  }

  return (
    <div>
      <h1>Create a dog.</h1>
      <div>
        <Select
          value={dogSize}
          label={"size"}
          onChange={(e) => setDogSize(e.target.value as DogSize)}
        >
          {dogSizes.map((dogSize) => {
            return (
              <MenuItem key={dogSize} value={dogSize}>
                {dogSize}
              </MenuItem>
            );
          })}
        </Select>
        <button onClick={() => clickSubmit()}>SUBMIT</button>
      </div>
    </div>
  );
};

export default CreateDog;
