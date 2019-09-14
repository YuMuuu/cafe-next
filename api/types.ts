type Response<T> =
  | { status: 200, json: T }
  | { status: 404 }
  | { status: 500, error: string };

export default Response;

export function response<T>(res): Response<T> {
  switch (res.status) {
    case 200:
      return { status: 200, json: res.json() };
    case 500:
      return { status: 500, error: res.error };
    default:
      return { status: 404 };
  }
}

