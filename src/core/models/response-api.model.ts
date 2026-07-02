export interface ResponseApi<T> {
  status: boolean;
  value: T;
  msg: string | null;
}