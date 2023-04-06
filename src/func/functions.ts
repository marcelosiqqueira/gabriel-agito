import { apiUrl as baseUrl } from "../const/const";
import { GenericBody } from "../Interfaces/GenericObject";

export async function fetchData<Type>(path: string, body?: GenericBody): Promise<Type> {
  const bodyString = body ? JSON.stringify(body) : undefined;
  const res = await fetch(baseUrl + path, { body: bodyString })
  const data = await res.json()
  return data
}


function blobToJson (blob: Blob) {
  
}
 
