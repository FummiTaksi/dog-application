/**
 * Generated by orval v6.6.0 🍺
 * Do not edit manually.
 * Dog API
 * The Dog API description
 * OpenAPI spec version: 1.0
 */
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey,
} from "react-query";
import type {
  Dog,
  CreateDogDto,
  AddOwnerDto,
  Human,
  CreateHumanDto,
} from ".././model";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any;

export const appControllerGetHello = (
  options?: AxiosRequestConfig
): Promise<AxiosResponse<string>> => {
  return axios.get(`/`, options);
};

export const getAppControllerGetHelloQueryKey = () => [`/`];

export const useAppControllerGetHello = <
  TData = AsyncReturnType<typeof appControllerGetHello>,
  TError = AxiosError<unknown>
>(options?: {
  query?: UseQueryOptions<
    AsyncReturnType<typeof appControllerGetHello>,
    TError,
    TData
  >;
  axios?: AxiosRequestConfig;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options || {};

  const queryKey = queryOptions?.queryKey ?? getAppControllerGetHelloQueryKey();

  const queryFn: QueryFunction<
    AsyncReturnType<typeof appControllerGetHello>
  > = () => appControllerGetHello(axiosOptions);

  const query = useQuery<
    AsyncReturnType<typeof appControllerGetHello>,
    TError,
    TData
  >(queryKey, queryFn, queryOptions);

  return {
    queryKey,
    ...query,
  };
};

/**
 * Creates a Dog entity
 */
export const dogControllerCreate = (
  createDogDto: CreateDogDto,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<Dog>> => {
  return axios.post(`/dogs`, createDogDto, options);
};

export const useDogControllerCreate = <
  TError = AxiosError<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    AsyncReturnType<typeof dogControllerCreate>,
    TError,
    { data: CreateDogDto },
    TContext
  >;
  axios?: AxiosRequestConfig;
}) => {
  const { mutation: mutationOptions, axios: axiosOptions } = options || {};

  const mutationFn: MutationFunction<
    AsyncReturnType<typeof dogControllerCreate>,
    { data: CreateDogDto }
  > = (props) => {
    const { data } = props || {};
    console.log("hook: ", data);
    return dogControllerCreate(data, axiosOptions);
  };

  return useMutation<
    AsyncReturnType<typeof dogControllerCreate>,
    TError,
    { data: CreateDogDto },
    TContext
  >(mutationFn, mutationOptions);
};
export const dogControllerAddOwner = (
  addOwnerDto: AddOwnerDto,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<Dog>> => {
  return axios.put(`/dogs`, addOwnerDto, options);
};

export const useDogControllerAddOwner = <
  TError = AxiosError<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    AsyncReturnType<typeof dogControllerAddOwner>,
    TError,
    { data: AddOwnerDto },
    TContext
  >;
  axios?: AxiosRequestConfig;
}) => {
  const { mutation: mutationOptions, axios: axiosOptions } = options || {};

  const mutationFn: MutationFunction<
    AsyncReturnType<typeof dogControllerAddOwner>,
    { data: AddOwnerDto }
  > = (props) => {
    const { data } = props || {};

    return dogControllerAddOwner(data, axiosOptions);
  };

  return useMutation<
    AsyncReturnType<typeof dogControllerAddOwner>,
    TError,
    { data: AddOwnerDto },
    TContext
  >(mutationFn, mutationOptions);
};
export const humanControllerCreate = (
  createHumanDto: CreateHumanDto,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<Human>> => {
  return axios.post(`/humans`, createHumanDto, options);
};

export const useHumanControllerCreate = <
  TError = AxiosError<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    AsyncReturnType<typeof humanControllerCreate>,
    TError,
    { data: CreateHumanDto },
    TContext
  >;
  axios?: AxiosRequestConfig;
}) => {
  const { mutation: mutationOptions, axios: axiosOptions } = options || {};

  const mutationFn: MutationFunction<
    AsyncReturnType<typeof humanControllerCreate>,
    { data: CreateHumanDto }
  > = (props) => {
    const { data } = props || {};

    return humanControllerCreate(data, axiosOptions);
  };

  return useMutation<
    AsyncReturnType<typeof humanControllerCreate>,
    TError,
    { data: CreateHumanDto },
    TContext
  >(mutationFn, mutationOptions);
};
