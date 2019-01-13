# Trinagle Type Determiner

A simple application to determine type of a triangle based on
its sides.  
This program comes with three ways to retrive information needed
to do the determination :

- WebUI
- An intercative CLI
- An Endpoint

## Requirements

you need to have
[Node](https://nodejs.org/en/ "NodeJS's Homepage")
and
[Yarn](https://yarnpkg.com/en/docs/install "Yarn's Homepage")
installed.

## How to run locally

Clone the project First then run

```bash
yarn
```

> This will intsall all the dependencies required

<br>

## Available Scripts

### `Running Web Application`

```bash
yarn run-app
```

Runs the WebUI in the development mode & the endpoint server module <br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `Interactive CLI`

```bash
yarn cli
```

Launches the CLI; It will ask sides of the triangle one by one and returns the result<br>

### `Endpoint` (server module)

```bash
yarn back-end
```

Only starts the server module which is responsible for handling get and post requests
it will be listening on <code>http://localhost:5002/typeDeterminer</code> and expects
three parameters as query-string <br>

```powershell
http://localhost:5002/typeDeterminer?side1=7&side2=4&side3=6
```

and returns a json as a successful response or (400) bad request if parameters are invalid

```json
{
  "isTraingle": true,
  "description": "A scalene triangle"
}
```

<br>

## Running Tests

### `Unit tests`

```
yarn test
```

### `Intergation test`

> to run integration tests you need to run Web Application first by   `yarn run-app`

```bash
yarn cypress:open
```

<br>

## Contributing

This repo doesn't solve any real world problem nor do anything really useful
which sounds like there is no need to contribute. By the way if you still would like
to contribute (:|) your welcomed here; just make sure you didn't break anything by running
all tests and prettify your code using prettier global style before sending pull request. peace :)

### License

TriangleTypeDeterminer is a [MIT licensed](https://opensource.org/licenses/MIT) project.
