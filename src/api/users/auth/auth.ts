import { useMutation } from "@tanstack/react-query";


export const loginApi = (data: ISignRequest): Promise<IAuthResponse> => {
  return fetchApi.post(authEndpoints.login, data).then((res: any) => res.data);
}