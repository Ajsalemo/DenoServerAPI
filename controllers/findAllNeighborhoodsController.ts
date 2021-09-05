export const findAllNeighborhoodsController = async (
  requestEvent: any,
  neighborhoods: any
) => {
  /* 
    The empty object for the first argument equates to 'find all'
    'projection' specifies to include the name field and exclude the _id field in the response
    'noCursorTimeout' on the FindOptions method is for this issue: https://github.com/denodrivers/deno_mongo/issues/179
  */
  const getAllNeighborhoods = await neighborhoods
    .find({}, { projection: { name: 1 }, noCursorTimeout: false })
    .toArray();

  const jsonConvertedGetAllNeighborhoods = JSON.stringify(getAllNeighborhoods);

  requestEvent.respondWith(
    new Response(jsonConvertedGetAllNeighborhoods, {
      status: 200,
    })
  );
};
