# Open JSON API

## Abstract

> Any sufficiently complicated REST API contains an ad-hoc, informally-specified, bug-ridden, slow implementation of half of JSON API.

Open API (née Swagger) and JSON API are two growing, powerful standards for REST API documentation and design. With the recent release of Open API 3, these standards became simultaneously more compatible in theory and more confusing in practice. Let's walk through the standards in question, and how we can integrate the two to create highly specified, consistent REST APIs: Open JSON APIs.

Samples are in Node.js.

## Description

Open API and JSON API are two sides of the same coin: one provides a robust specification for _documenting_ REST APIs, and the other provides a robust specification for _designing_ them. Unfortunately, too many developers leave one or the other behind because of the occasionally awkward ways they interact. Instead, teams forge their own standards, rehashing the same discussions—and often coming to the same conclusions—as the editors of these specifications.

With the release of Open API 3 comes a renewed opportunity to examine these two standards in detail and showcase a method to use them in tandem, creating both a highly specified and consistent REST API in the process. In the process, we'll reduce interoperatibililty issues, alleviate developer support, and promote API productization.

During the talk, samples will be provided using Node.js and Express, with higher-level examples in Sway, a documentation-driven routing library.

## Additional Notes

I've designed and implemented several Open-and-JSON-API-compliant REST APIs for clients as a consultant and product developer. I've followed and used Swagger since it's early releases, and continue to promote the latest versions as improvements continue to be made by the Open API Initiative. Every REST API I've worked on trends toward the same decisions laid out ahead-of-time by JSON API, so any greenfield API today on should start with those decisions baked into the specification.
