export async function fetchSupplementInfo(query) {
  try {
    const searchQuery = `${query} supplement vitamin health function`;

    const res = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${searchQuery}&utf8=1&origin=*`
    );

    const data = await res.json();

    return (
      data?.query?.search?.map((item) => ({
        id: item.pageid,
        title: item.title,
        description: item.snippet.replace(/<[^>]+>/g, "")
      })) || []
    );
  } catch (error) {
    console.log("SUPPLEMENT API ERROR:", error);
    return [];
  }
}