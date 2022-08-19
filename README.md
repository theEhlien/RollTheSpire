# About this project

This project is a really simple web app that allows the user to send [TaleSpire](https://talespire.com/) custom Dice rolls. The app uses [Create React App](https://create-react-app.dev/) for the React.js development server and [Vite](https://vitejs.dev/) for the HTTP development server.

This app is a bit unusual in that it is doing two separate projects that come together into one rather than just picking one framework to handle it all. The TLDR of this is that I wanted to be able to embed my page into another D&D tool I use called 5eTools.
I couldn't get the dev server for react (this uses localhost) to display so I used vite to create a server (also using localhost) that it would happily display.

This is by no means the right way to do this but it was quick and required little extra work or research from me.

# Running the Dev Servers

In order to run the two development servers that display this project, you can just run the `runEhlienSpire.sh` script from the base directory. This just does an `npm start` for the react app and `npm run dev` for Vite.

