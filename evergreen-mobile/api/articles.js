export async function fetchHealthArticles(query) {
  try {
    const res = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${query}&utf8=1&origin=*`
    );

    const data = await res.json();

    return data?.query?.search?.map((item) => ({
      title: item.title,
      description: item.snippet.replace(/<\/?[^>]+(>|$)/g, ""),
      id: item.pageid
    })) || [];
  } catch (error) {
    console.log("API ERROR:", error);
    return [];
  }
}