# Clone the project and then run this command on project directory

npm install

# After installation is done please write this command to start it

npm start

# How i proceeded while working on this project and what i understood from it?

Upon receiving the project brief, my first step was to understand the requirements and goals. The project involved building a user interface with React and Material-UI where users can manage a list of their social media accounts. Key features of the application include the ability to add new entries, edit existing ones, and delete entries.

The application uses a DataGrid component to display the data in a table-like format, and each entry consists of three pieces of information: the social media platform name, a link to the platform, and a description. The project also required the integration of localStorage to persist data between sessions.

The Approach:

My first task was to set up the project structure. I made use of the Material-UI library for UI components and used the DataGrid component for displaying the data. I also set up state management with React's useState hook.

Once the basic structure was in place, I proceeded to develop the feature for adding new entries. I used a modal dialog with form inputs to collect the necessary data from the user. I then validated the input and added the new entry to the data grid.

Next, I worked on the delete feature. I added a delete button to each row in the DataGrid that, when clicked, would remove the corresponding entry.

Lastly, I implemented the data persistence feature using the localStorage API. I created a custom hook to abstract the details of storing and retrieving data from localStorage.

Throughout the development process, I kept my code modular and made use of custom hooks to encapsulate and reuse logic. I also ensured to handle edge cases and potential errors to provide a robust user experience.

Overall, this project was an enriching experience that helped me improve my skills in React, Material-UI, and state management in React. I also learned the importance of planning and structuring my code in a way that enhances its readability and maintainability.

# Live Url

https://rapsite-data-grid.netlify.app/
