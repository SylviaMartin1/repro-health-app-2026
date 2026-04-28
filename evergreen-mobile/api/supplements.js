export async function fetchSupplements(query = "vitamin") {
  const res = await fetch(
    `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&json=1&page_size=10`
  );

  const data = await res.json();
  return data.products;
}