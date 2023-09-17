# ChatApp Made in Collaboration with Khawar
Practice Project using React + NodeJs/Express + Socket.io <br>
 
Landing Page of App![ChatApp](/UI design/LandingPage.PNG)

## Tool
VS Code
## Languages
- HTML
* Socket.io
+ Tailwind
- React
* Node
+ Express

## Project was Created Via
React + Vite

## Use the Following Command to run the project on VS code
`npm run dev`
## Use the Following Command to run the Server
`npm start` <br>
`nodemon index` <br>
Make sure that package.json file has <br>
`"start": "node your_node_file"`<br>
Use `Nodemon` for auto restart your server <br>

## Points to Ponder
1. http request will be handle by express.
2.  When this command in backend was executed
 `import { Server } from 'socket.io';` 
    then a file or resource was created which is then also  connected with front-end manually.
## Express
1. A Express server is created inside socket.io instance.
2. To connect frontEnd(.html file) with backend we can either use cors or 
 `res.sendFile(new URL('./index.html', import.meta.url).pathname);`
 
