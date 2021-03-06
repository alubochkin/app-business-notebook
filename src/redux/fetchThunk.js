export async function fetchPOST({ path, body }) {
  const response = await fetch(path, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(body),
    credentials: "include",
  });

  if (!response.ok) {
    const message = await response.json();
    return ({
      error: `Error ${response.status}: ${response.statusText}`,
      status: response.status,
      message,
    });
  }
  const result = await response.json();
  return result;
}