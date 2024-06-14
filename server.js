const express = require('express');
const app = express();
const port = 3000;

const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
  { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com' },
  { id: 5, name: 'Charlie Davis', email: 'charlie.davis@example.com' },
  { id: 6, name: 'Dana Evans', email: 'dana.evans@example.com' },
  { id: 7, name: 'Evan Foster', email: 'evan.foster@example.com' },
  { id: 8, name: 'Fiona Green', email: 'fiona.green@example.com' },
  { id: 9, name: 'George Hill', email: 'george.hill@example.com' },
  { id: 10, name: 'Hannah Ivy', email: 'hannah.ivy@example.com' },
];

const USERS_PER_PAGE = 2;

app.set('view engine', 'ejs');

// Route for the root URL
app.get('/', (req, res) => {
  res.redirect('/users');
});

app.get('/users', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const startIndex = (page - 1) * USERS_PER_PAGE;
  const endIndex = page * USERS_PER_PAGE;

  const paginatedUsers = users.slice(startIndex, endIndex);

  res.render('users', {
    users: paginatedUsers,
    currentPage: page,
    hasNextPage: endIndex < users.length,
    hasPrevPage: startIndex > 0
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
