export function addToCart(item) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch("http://localhost:8000/api/v1/cart", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchCartItemsByUserId() {
  return new Promise(async (resolve, reject) => {
    const resposne = await fetch("http://localhost:8000/api/v1/cart");
    const data = await resposne.json();
    resolve({ data });
  });
}

export function updateCart(update) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(
      "http://localhost:8000/api/v1/cart/" + update.id,
      {
        method: "PATCH",
        body: JSON.stringify(update),
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}

export function deleteFromCart(itemId) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(
      "http://localhost:8000/api/v1/cart/" + itemId,
      {
        method: "DELETE",
        body: JSON.stringify(),
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}

export function resetCart() {
  return new Promise(async (resolve, reject) => {
    const response = await fetchCartItemsByUserId();
    const items = response.data;

    for (let item of items) {
      await deleteFromCart(item.id);
    }
    resolve({ status: "success" });
  });
}
