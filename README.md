# DenoServerAPI

A containerized [Deno](https://deno.land/) CRUD-based API that connects to a Mongo Atlas database. This sample only implements find and find-by-id operations (although this can be extended on the other parts of CRUD).

This sample can be ran containerized or non-containerized and shows an example of a how implement CI/CD with Azure DevOps pipelines through the azure-pipelines.yml file.

Paths:
- `/api/neighborhood/find/all` - `GET` request for all neighborhoods.
- `/api/neighborhood/find` - `GET` request for a specific neighborhood by name in the form of `/api/neighborhood/find?name=<neighborhood name`. This pulls from Mongo Atlas sample dataset `sample_restaurants` -> `neighbhorhoods` collection.


