# Book Review App

## Description

The goal of this project is to create a full stack web application for avid readers and bookworms! The user should be able to create a review of a book, and other users should be able to comment on the review. The user will need to be logged in to an account in order to create a post/comment, but any user will be able to read reviews and comments.

## Languages and Technologies Used

Front-end: HTML, CSS, JavaScript

Back-end: Node.js, Express.js, MySQL, Handlebars.

This app also uses the following npm dependencies:

![Dependencies](./public/images/dependencies.png)

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contributing-Guidelines](#contributing-guidelines)
- [Future-Development-Goals](#future-development-goals)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

1. Clone the repo into the desired location using the terminal command: `git clone https://github.com/jeffrpar/book-review.git`

2. Open the local repository using VS Code. If you do not have VS Code installed, you can download it here: https://code.visualstudio.com/

3. Use the VS Code terminal and type `npm i` to install the dependencies required by the application.

4. Rename `.env.EXAMPLE` to `.env` and enter your MySQL password into the `DB_PASSWORD` field. You can learn more about setting up MySQL here: https://dev.mysql.com/doc/mysql-getting-started/en/

5. Now that the application can connect to MySQL, you must create database using the schema.sql file. Using the terminal from the app directory, type `mysql -u root -p` which will prompt you for your MySQL password. Once your password is submitted, type `source db/schema.sql;` which will create a database for the app to use. Type `exit` to exit from MySQL in the terminal.

6. Insert data into the database by typing the command `npm run seed` into the terminal, which will run a script to seed data.

7. You can then use the command `npm start` to run the application on a local server.

## Usage

description of usage

## Contributing-Guidelines

We welcome and appreciate contributions from the community! Whether you want to fix a bug, add new features, or improve documentation, your contributions are valuable in making this project better.

To ensure a smooth and collaborative development process, please follow the guidelines below when making contributions:

**Getting Started**

1. Fork the repository on GitHub.

2. Clone your forked repository to your local machine.

**Making Changes**

3. Create a new branch from the main branch to work on your changes.

4. Make your changes, following the code style and guidelines.

5. Commit your changes with a descriptive commit message.

**Code Style and Guidelines**

Please follow our coding conventions and style guidelines when writing code. If unsure, refer to existing code for examples.
Testing

Ensure that your changes pass all existing tests. If you're adding new features, include appropriate test cases.

**Submitting a Pull Request**

6. Push your changes to your forked repository.
7. Submit a pull request (PR) to the main branch of this repository.
8. Provide a detailed description of your changes in the PR. **Ensure your PR's title and description are clear and descriptive.

**Code Review**

Your pull request will be reviewed by the maintainers, who may provide feedback or request changes before merging.

## Future-Development-Goals

Here we will list planned changes for the application given more development time.

## Tests

There are currently no tests written for this app.

## License

![License](https://img.shields.io/badge/License-GPLv3-blue.svg)

Please refer to the GNU General Public License v3.0 information [here](https://www.gnu.org/licenses/gpl-3.0.en.html#license-text).

## Questions

Github profile: [https://github.com/jeffrpar](https://github.com/jeffrpar).

If you have any additional questions about this application, please reach out to me via email at [jeffrpar@gmail.com](jeffrpar@gmail.com).

On the landing page for the app, we would show books that have been reviewed, which the user would be able to interact with to get more info. There will also be a page for a user profile, so that a user can see info about other users such as their reviews and comments. We would also like to include a settings page for the user to update the information such as name or password.

## Goals for project

User Account: Users can register and create their own accounts. They can upload books, manage their book list, 

Book Listing: Users can browse all available books.  users can search for books they want based on the title, author, or other keywords.

Book Details: Each book has a detailed page displaying the book's information, including the title, author, cover image, description, and owner information. Users can request to exchange or purchase the book on this page.

Exchange and Purchase: Users can request to exchange or purchase books from other users. If the request is accepted, the system will handle the exchange or purchase logic, including updating the owner information of the book.

Book Reviews: Users can review the books they exchanged or purchased. Their reviews will be displayed on the book's detail page and providing a reference for other users.

User Profile: Users can view and edit their personal information, including their username, email address, and their book list.