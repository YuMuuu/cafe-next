import Response from './types';
import fetch from 'isomorphic-unfetch';
import qs from 'query-string';

function response<T>(res): Response<T> {
  switch (res.status) {
    case 200:
      return { status: 200, json: res.json() };
    case 500:
      return { status: 500, error: res.error };
    default:
      return { status: 404 };
  }
}

export default async function get<U>(url: string, query: {}, token: string): Response<U> {
  return await fetch(url + qs.stringify(query), {
    headers: { 'Authorization': token }
  }).then(res => response(res));
}

export default async function post<U>(url: string, form: {}, token: string): Response<U> {
  return await fetch(url, {
    headers: { 'Authorization': token }
  })
}

export default async function patch<U>(url: string, params: {}): Response<U> {
  return await fetch(url, {

  })
}