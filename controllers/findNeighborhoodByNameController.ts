export const findNeighborhoodByNameController = async (
  requestEvent: any,
  neighborhoods: any,
  name: string | null
) => {
  if (name && name !== "") {
    const findNeighborhoodByName = await neighborhoods.findOne(
      { name },
      { noCursorTimeout: false }
    );

    const jsonConvertedFindNeighborhoodByName = JSON.stringify(
      findNeighborhoodByName
    );

    if (jsonConvertedFindNeighborhoodByName) {
      requestEvent.respondWith(
        new Response(jsonConvertedFindNeighborhoodByName, {
          status: 200,
        })
      );
    } else {
      const neighborhoodNameNotFoundResponse =
        "That neighborhood name does not exist.";
      requestEvent.respondWith(
        new Response(neighborhoodNameNotFoundResponse, {
          status: 404,
        })
      );
    }
  } else {
    console.error("Name parameter is empty or null");
    const emptyParamError = "Name parameter is empty or null";
    requestEvent.respondWith(
      new Response(emptyParamError, {
        status: 500,
      })
    );
  }
};
