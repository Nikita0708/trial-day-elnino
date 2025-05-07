# El Niño Trial Day Project

## Project setup

### Start up the backend server

1. cd backend
2. npm install
3. npm run dev
4. use the api on http://localhost:4000/

Simple Swagger Documentation can be accessed at http://localhost:4000/api-docs

### Start up front-end page

1. cd front-end
2. npm install
3. npm run dev
4. use the website on http://localhost:5173/

## Tech Stack

- front-end: Vite, React, TS, heroUI, Redux toolkit.
- backend: Node, TS, express, MongoDB, Joi.

## Architecture

- backend: simple module architecture
- front-end: FSD [(Feature-sliced design)](https://medium.com@dtgasparyanfeature-sliced-design-the-ideal-frontend-architecture-84d701ad44ba)

## Functionality

- [x] User can create tasks with at least the following details: title, description, done (yes/no)
- [x] User can toggle tasks between done/not done
- [x] User can delete tasks
- [x] User can view tasks in a list
- [x] User can edit a task's title and/or description

## Optional extra functionality

These are ideas for additional functionality you could add to your application, but don't have to. Feel free to come up with your own ideas.

- [x] Tasks are stored persistently
- [x] User can search tasks by their title and/or description using a search box
- [ ] User can re-order the tasks in the list based on priority
- [x] User can add a deadline to a task
- [x] User can export tasks as CSV, JSON, ...
- [ ] User can add tags to a task and filter tasks based on these tags
- [ ] Unit or integration tests for (some of) the functionality
