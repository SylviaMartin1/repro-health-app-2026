export async function fetchHealthArticles(query) {
  try {
    const searchQuery = `${query} health medicine biology reproductive system`;

    const res = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${searchQuery}&utf8=1&origin=*`
    );

    const data = await res.json();

    return (
      data?.query?.search?.map((item) => ({
        id: item.pageid,
        title: item.title,
        description: item.snippet.replace(/<[^>]+>/g, "") //remove html tags
      })) || []
    );
  } catch (error) {
    console.log("Error fetching articles:", error);
    return [];
  }
}