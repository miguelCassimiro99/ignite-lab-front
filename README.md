# Ignite Event Platform

This project was created during the Ignite Lab Event powered by Rocketseat. This project consists on a LP where you can subscribe to access the event and after that you’re redirected to the page with the classes list and videos that you can play directly on the platform.

💻 [Access this link to see the result.](https://ignite-lab-front.vercel.app/) ✅

---

### How does it works 🔍

- The front was created with React using Vite.js. To the API was used the [GraphCMS](https://graphcms.com/) so on this app the API uses GraphQL to send and update data.
The GraphCMS deliver an API of Content using GraphQL, so we didn’t need to create an API to work with this project, all we need is to setup our entities (models) on the GraphCMS and use a token on your Front to can access the data.
- To the style was used Tailwind css that I really enjoy to use and I’ll let the link bellow if you don’t know what this lib is. It’s very productive, beauty and I’m using it on my lasts projects.

🌐 [Tailwind CSS](https://tailwindcss.com/).

Also, the deploy was made using Vercel, were particularly I never used before, but really impress me with the how quickly is the setup and deploy of a project located on github. Also, link bellow

🌐 [Vercel](https://vercel.com/)

Talking now about the videos, we use a player called Vime.js that allow us to set a player on the page passing a default ui config (volume, video settings, play, pause, etc.), and other settings.

🌐 [Vime.js](https://vimejs.com/)

---

## Setup 🏗️

So, to the start you’ll need to create the content on GraphCMS or you can simply clone this project using this [link](https://app.graphcms.com/clone/4153098dc7e6422b803f669270b88f5b?name=Ignite%20Lab%20-%20Miguelman)

After clone this repo:

```jsx
npm install
```

To work as well, create an .env.local file with to variables: 

- VITE_API_URL
- VITE_API_ACCESS_TOKEN

These two data we can find on our GraphCMS project settings, on the Access section.

After that you’re able to run the project

Run on dev environment

```jsx
npm run dev
```

⚠️ **Important:** On this project we’re using [GraphQL Code Generator](https://www.graphql-code-generator.com/). This site can help us to deal with queries and mutations from Graphql. 

When we setup our API Link and that allows the Code Generator to create a file with ALL data’s structure of our project on GraphCMS and it help us to avoid errors on queries construction.

Every time you make changes on the GraphCMS you need to run this command to update the codegen.yml

```jsx
npm run codegen
```

## Features 📜

- [x]  Form send using hooks
- [x]  Integration with GraphCMS
- [x]  Routing
- [x]  Video player
- [x]  Customized css on Tailwind
