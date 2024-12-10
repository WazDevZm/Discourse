# Task Tracker Frontend Documentation

This documentation provides a detailed guide for the development team working on the **Task Tracker** project. It includes coding best practices, branch management in version control, and a streamlined workflow to ensure efficiency and collaboration. 

The frontend is developed using **React** with styling via **React Bootstrap** and communicates with a Django backend through RESTful APIs.

---

## Table of Contents
1. [Development Workflow](#development-workflow)
   - Branching Strategy
   - GitHub Workflow
2. [Coding Standards](#coding-standards)
   - Folder Structure
   - Naming Conventions
   - Code Quality and Consistency
   - Documentation and Comments
3. [Environment and Tools](#environment-and-tools)
   - Development Tools
   - IDE Setup and Linters
4. [React and Bootstrap Guidelines](#react-and-bootstrap-guidelines)
   - Component Structure
   - Styling with React Bootstrap
   - State Management
5. [API Integration with Axios](#api-integration-with-axios)
6. [Pull Requests and Code Reviews](#pull-requests-and-code-reviews)
7. [Feature Documentation](#feature-documentation)
   - [Login Page](#login-page)
   - [Registration Page](#registration-page)
   - [Edit Task](#edit-task)
8. [Conclusion](#conclusion)

---

## Development Workflow

### Branching Strategy
We use **Git** for version control, following a feature-based branch workflow to maintain project structure.

- **Main Branch (`main`)**: Contains the production-ready code; it must remain stable.
- **Development Branch (`develop`)**: Holds the latest code for testing before deployment.
- **Feature Branches (`feature/<feature-name>`)**: Each new feature should be developed on its own branch, created from `develop`. Use descriptive names for features.
  - Example branch names:
    - `feature/login-page`
    - `feature/task-creation`
    - `feature/task-list-styling`

#### Workflow Steps
1. **Create a new branch**:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/<branch-name>
   ```
2. **Commit changes** frequently with descriptive messages:
   ```bash
   git add .
   git commit -m "Implement feature X"
   ```
3. **Push the branch to the repository**:
   ```bash
   git push origin feature/<branch-name>
   ```
4. **Create a Pull Request (PR)** from the feature branch to `develop`, including:
   - A clear description of the feature
   - Links to any related issues
   - Passing checks (e.g., linters)
5. **Code Review and Merge**: A senior developer will review the PR and, once approved, merge it into `develop`.

---

## Coding Standards

### Folder Structure
Organize code by feature to improve navigability and maintainability.

### Naming Conventions
- **Files**: Use **PascalCase** for React component filenames, e.g., `Login.js`, `TaskList.js`.
- **Variables/Functions**: Use **camelCase** for JavaScript variable and function names.
- **Constants**: Use **UPPERCASE_SNAKE_CASE** for constant values.

### Code Quality and Consistency
- **DRY (Don’t Repeat Yourself)**: Abstract common logic into reusable components or utility functions.
- **Single Responsibility Principle (SRP)**: Each function or component should have a single, clear purpose.
- **Indentation**: Use 2 spaces for indentation.
- **Semicolons**: Always end lines with semicolons.

### Documentation and Comments
- Comment only as needed; code should be self-explanatory.
- For complex logic, use JSDoc format to document functions:
   ```javascript
   /**
    * Fetches the task list from the server.
    * @param {string} token - Authorization token.
    * @returns {Promise} - Returns a promise with task data.
    */
   const fetchTasks = (token) => { ... }
   ```

---

## Environment and Tools

### Development Tools
- **Node.js and npm**: Install for React environment setup.
- **Git** and **GitHub**: Version control and collaboration.

### IDE Setup and Linters
- Recommended Editor: **VSCode**.
- Extensions:
  - **ESLint** for JavaScript linting.
  - **Prettier** for code formatting.

**Sample ESLint Configuration**:
```json
{
  "extends": ["react-app", "eslint:recommended"],
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "single"]
  }
}
```

---

## React and Bootstrap Guidelines

### Component Structure
Each component should:
- **Use functional components** with hooks like `useState`, `useEffect`, etc.
- **Be modular**: Break down large components.
- **Use PropTypes** for prop validation.

### Styling with React Bootstrap
- **Container**: Use `Container` for layout.
- **Grid**: Use `Row` and `Col` for responsiveness.
- **Buttons**: Use the `Button` component for uniform styling.

---

## API Integration with Axios

API requests in every component `<name_of_component>.js` file.

Example API call:
```javascript
import axios from 'axios';

export const fetchTasks = async (token) => {
   try {
    // API from the .env file
       const response = await axios.get(`${API_URL}/tasks/`, {
           headers: { Authorization: `Bearer ${token}` }
       });
       return response.data;
   } catch (error) {
       console.error('Error fetching tasks', error);
       throw error;
   }
};
```

---

## Pull Requests and Code Reviews



## Feature Documentation

### Login Page
**Overview**: The Login page allows users to authenticate with their username and password, providing secure access to their accounts. Upon successful login, a session token is generated and stored in local storage to maintain the user's session. 

**Setup Instructions**:
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies and create a virtual environment for the backend.
3. Configure environment variables in `.env`.
4. Run migrations and start both backend and frontend servers.

**Usage**:
1. Navigate to the login page.
2. Enter credentials and submit.
3. Access the dashboard upon successful login.

### Registration Page
**Overview**: The Registration page handles user input validation and integrates the backend API for user creation. 

**Key Files**:
- `Registration.js`: Manages client-side logic for registration.

**Functionality**:
- Validates username, email, and password fields.
- Displays error or success messages.
- Implements password strength requirements.

**Usage**:
1. Open the registration page.
2. Enter registration details and submit.
3. Redirects to the login page upon success.

### Edit Task
**Overview**: The Edit Task feature allows users to update existing task details (title, description, due date).

**Key Files**:
- `TaskCreationForm.js`: Contains methods for fetching and updating task data.

**Configuration**:
- Ensure local storage contains a valid token.
- API Endpoints:
   - **GET** `/api/tasks/<id>`: Fetches task details.
   - **PUT** `/api/tasks/<id>`: Updates task details.

**Usage**:
- Navigate to the task creation page by clicking the edit button on a task.

=======

---

## Feature Documentation

### Login Page
**Overview**: The Login page allows users to authenticate with their username and password, providing secure access to their accounts. Upon successful login, a session token is generated and stored in local storage to maintain the user's session. 

**Setup Instructions**:
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies and create a virtual environment for the backend.
3. Configure environment variables in `.env`.
4. Run migrations and start both backend and frontend servers.

**Usage**:
1. Navigate to the login page.
2. Enter credentials and submit.
3. Access the dashboard upon successful login.

### Registration Page
**Overview**: The Registration page handles user input validation and integrates the backend API for user creation. 

**Key Files**:
- `Registration.js`: Manages client-side logic for registration.

**Functionality**:
- Validates username, email, and password fields.
- Displays error or success messages.
- Implements password strength requirements.

**Usage**:
1. Open the registration page.
2. Enter registration details and submit.
3. Redirects to the login page upon success.

### Create Task 

**Development**:
**overview**: Implements a form for creating new tasks, with validation for required fields i.e title, description, due date. Uses Axios to submit tasks to the backend API.
**Key Files**:
`TaskCreationForm.js`: The main component for the task creation form.
**Configuration**:
-Requires `REACT_APP_API_URL` set in the `.env` file to communicate with the backend.
**Endpoints**:
-GET /api/tasks/: Retrieves a list of tasks.
-POST /api/tasks/: Creates a new task.

**user**:
-Allows users to create new tasks with a title, description, and due date.
  **Usage Instructions**:
  -go to the Create Task page.
  -Fill in the task title, description, and select a due date.
  -Click "Create Task" to submit.
  
### Edit Task
**Overview**: The Edit Task feature allows users to update existing task details (title, description, due date).

**Key Files**:
- `TaskCreationForm.js`: Contains methods for fetching and updating task data.

**Configuration**:
- Ensure local storage contains a valid token.
- API Endpoints:
   - **GET** `/api/tasks/<id>`: Fetches task details.
   - **PUT** `/api/tasks/<id>`: Updates task details.

**Usage**:
- Navigate to the task creation page by clicking the edit button on a task.


  
 ### 2. Code Review Process
- Every PR must be reviewed by at least one senior team member before merging.
- **Look for clean code**, proper naming conventions, and logical component separation.
- Ensure that the PR adheres to the **best coding practices** outlined above.


