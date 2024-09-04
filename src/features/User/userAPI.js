// A mock function to mimic making an async request for data
export function fetchLoggedInUserOrders(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/api/v1/orders/own/");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchLoggedInUser() {
  return new Promise(async (resolve, reject) => {
    const response = await fetch("http://localhost:8000/api/v1/users/own");
    const data = await response.json();
    resolve({ data });
  });
}

export function updateUser(updateUser) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(
      "http://localhost:8000/api/v1/users/" + updateUser.id,
      {
        method: "PATCH",
        body: JSON.stringify(updateUser),
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    console.log("updatedData", data);
    resolve({ data });
  });
}
