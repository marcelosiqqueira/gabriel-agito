import { apiUrl as baseUrl } from "../const/const";
import { GenericBody } from "../Interfaces/GenericObject";

export function getGreaterDate(date_0: string, date_1: string): number {
  const arrayDate_0 = date_0.split("/");
  const arrayDate_1 = date_1.split("/");
  if (arrayDate_0[2] > arrayDate_1[2]) return -1;
  if (arrayDate_0[2] < arrayDate_1[2]) return 1;
  if (arrayDate_0[1] > arrayDate_1[1]) return -1;
  if (arrayDate_0[1] < arrayDate_1[1]) return 1;
  if (arrayDate_0[0] > arrayDate_1[0]) return -1;
  if (arrayDate_0[0] < arrayDate_1[0]) return 1;
  return 0;
}

export async function fetchData<Type>(path: string, body?: GenericBody): Promise<Type> {
  const bodyString = body ? JSON.stringify(body) : undefined;
  const res = await fetch(baseUrl + path, { body: bodyString })
  const data = await res.json()
  return data
}


function blobToJson (blob: Blob) {
  
}
 
