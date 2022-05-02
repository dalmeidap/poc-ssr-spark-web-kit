# Example app with styled-components using babel

This serve the required styles for the first render within the HTML and then load the rest in the client. In this case we are using [styled-components](https://github.com/styled-components/styled-components).

For this purpose we are extending the `<Document />` and injecting the server side rendered styles into the `<head>`, and also adding the `babel-plugin-styled-components` (which is required for server side rendering).

## How to run

First `yarn install`, then `yarn dev` and open your browser on `localhost:3000`.
