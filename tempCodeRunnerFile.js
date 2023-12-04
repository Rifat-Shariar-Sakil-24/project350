// app.js

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const exphbs = require('hbs');
const path = require('path');
// const methodOverride = require('method-override');
// app.use(methodOverride('_method'));
const axios = require('axios');

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bookdistribution',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ', err);
  } else {
    console.log('Connected to MySQL database');
  }
});


// landing page load
app.get('/', (req, res) => {
  res.render('index', { title: 'Node.js App with HBS' });
});


//all info entry page load
app.get('/data-entry', (req, res) => {
  res.render('data-entry', { title: 'Node.js App with HBS' });
});

app.get('/std-entry', (req, res) => {
  res.render('entry/student-entry', { title: 'Node.js App with HBS' });
});

app.get('/distributed-book-entry', (req, res) => {
  res.render('entry/distribution-entry', { title: 'Node.js App with HBS' });
});

app.get('/distributed-book-entry-class1', (req, res) => {
  res.render('entry/distribution-entry-class1', { title: 'Node.js App with HBS' });
});
app.get('/distributed-book-entry-class2', (req, res) => {
  res.render('entry/distribution-entry-class2', { title: 'Node.js App with HBS' });
});
app.get('/distributed-book-entry-class3', (req, res) => {
  res.render('entry/distribution-entry-class3', { title: 'Node.js App with HBS' });
});
app.get('/distributed-book-entry-class4', (req, res) => {
  res.render('entry/distribution-entry-class4', { title: 'Node.js App with HBS' });
});
app.get('/distributed-book-entry-class5', (req, res) => {
  res.render('entry/distribution-entry-class5', { title: 'Node.js App with HBS' });
});

app.get('/bookfrom-ntcb-entry', (req, res) => {
  res.render('entry/nctb-entry', { title: 'Node.js App with HBS' });
});
app.get('/bookfrom-ntcb-entry-class1', (req, res) => {
  res.render('entry/nctb-entry-class1', { title: 'Node.js App with HBS' });
});
app.get('/bookfrom-ntcb-entry-class2', (req, res) => {
  res.render('entry/nctb-entry-class2', { title: 'Node.js App with HBS' });
});
app.get('/bookfrom-ntcb-entry-class3', (req, res) => {
  res.render('entry/nctb-entry-class3', { title: 'Node.js App with HBS' });
});
app.get('/bookfrom-ntcb-entry-class4', (req, res) => {
  res.render('entry/nctb-entry-class4', { title: 'Node.js App with HBS' });
});
app.get('/bookfrom-ntcb-entry-class5', (req, res) => {
  res.render('entry/nctb-entry-class5', { title: 'Node.js App with HBS' });
});



// student info entry for each class
app.get('/std-entry-class1', (req, res) => {
  res.render('entry/student-entry-class1', { title: 'Node.js App with HBS' });
});
app.get('/std-entry-class2', (req, res) => {
  res.render('entry/student-entry-class2', { title: 'Node.js App with HBS' });
});
app.get('/std-entry-class3', (req, res) => {
  res.render('entry/student-entry-class3', { title: 'Node.js App with HBS' });
});
app.get('/std-entry-class4', (req, res) => {
  res.render('entry/student-entry-class4', { title: 'Node.js App with HBS' });
});
app.get('/std-entry-class5', (req, res) => {
  res.render('entry/student-entry-class5', { title: 'Node.js App with HBS' });
});









// main menu page load
app.get('/http://127.0.0.1:5500/main-menu.html', (req, res) => {
  res.render('main-menu/main-menu', { title: 'Node.js App with HBS' });
});




// login page load
app.get('/http://127.0.0.1:5500/login.html', (req, res) => {
  res.render('login/login', { title: 'Node.js App with HBS' });
});



// books distributed to students page load
app.get('/http://127.0.0.1:5500/std-page1.html', (req, res) => {
  res.render('std-page/std-page1', { title: 'Node.js App with HBS' });
});
app.get('/http://127.0.0.1:5500/std-page2.html', (req, res) => {
  res.render('std-page/std-page2', { title: 'Node.js App with HBS' });
});
app.get('/http://127.0.0.1:5500/std-page3.html', (req, res) => {
  res.render('std-page/std-page3', { title: 'Node.js App with HBS' });
});
app.get('/http://127.0.0.1:5500/std-page4.html', (req, res) => {
  res.render('std-page/std-page4', { title: 'Node.js App with HBS' });
});
app.get('/http://127.0.0.1:5500/std-page5.html', (req, res) => {
  res.render('std-page/std-page5', { title: 'Node.js App with HBS' });
});




// student info 
app.get('/view-student-info', (req, res) => {
  const query = `SELECT * FROM students`;
  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching student information: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.render('allstudentinfo/all-student-info', { title: 'Node.js App with HBS', students: result });
    }
  });

}
);


// student info by class load
app.get('/view-student-info/:class', (req, res) => {
  const requestedClass = req.params.class;

  // Using parameterized query to prevent SQL injection
  const query = 'SELECT * FROM students WHERE class = ?';
  db.query(query, [requestedClass], (err, result) => {
    if (err) {
      console.error('Error fetching student information: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.render('allstudentinfo/all-student-info', { title: 'Node.js App with HBS', students: result });
    }
  });
});


// student info page by class and year load
app.get('/view-student-info/:class/:year', (req, res) => {
  const requestedClass = req.params.class;
  const requestedYear = req.params.year;

  // Using parameterized query to prevent SQL injection
  const query = 'SELECT * FROM students WHERE class = ? AND year = ?';
  db.query(query, [requestedClass, requestedYear], (err, result) => {
    if (err) {
      console.error('Error fetching student information: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.render('allstudentinfo/all-student-info', { title: 'Node.js App with HBS', students: result });
    }
  });
});




// student info page for each class load when year is submitted
app.get('/class1-year-submit', (req, res) => {
  const selectedYear = req.query.selectedYear;
  const requestedClass = 1;

  const requestedYear = parseInt(selectedYear, 10);
  
  const query = 'SELECT * FROM students WHERE class = ? AND year = ?';

  db.query(query, [requestedClass, requestedYear], (err, result) => {
    if (err) {
      console.error('Error fetching student information: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(result);
    }
  });
});


app.get('/class2-year-submit', (req, res) => {
  const selectedYear = req.query.selectedYear;
  const requestedClass = 2;

  const requestedYear = parseInt(selectedYear, 10);
  
  const query = 'SELECT * FROM students WHERE class = ? AND year = ?';

  db.query(query, [requestedClass, requestedYear], (err, result) => {
    if (err) {
      console.error('Error fetching student information: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(result);
    }
  });
});

app.get('/class3-year-submit', (req, res) => {
  const selectedYear = req.query.selectedYear;
  const requestedClass = 3;

  const requestedYear = parseInt(selectedYear, 10);
  
  const query = 'SELECT * FROM students WHERE class = ? AND year = ?';

  db.query(query, [requestedClass, requestedYear], (err, result) => {
    if (err) {
      console.error('Error fetching student information: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(result);
    }
  });
});



app.get('/class4-year-submit', (req, res) => {
  const selectedYear = req.query.selectedYear;
  const requestedClass = 4;

  const requestedYear = parseInt(selectedYear, 10);
  
  const query = 'SELECT * FROM students WHERE class = ? AND year = ?';

  db.query(query, [requestedClass, requestedYear], (err, result) => {
    if (err) {
      console.error('Error fetching student information: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(result);
    }
  });
});

app.get('/class5-year-submit', (req, res) => {
  const selectedYear = req.query.selectedYear;
  const requestedClass = 5;

  const requestedYear = parseInt(selectedYear, 10);
  
  const query = 'SELECT * FROM students WHERE class = ? AND year = ?';

  db.query(query, [requestedClass, requestedYear], (err, result) => {
    if (err) {
      console.error('Error fetching student information: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(result);
    }
  });
});





// books of each classes to student
app.get('/class1-year-submit-books-distributed-to-students', (req, res) => {
  const selectedYear = req.query.selectedYear;
  const requestedClass = 1;

  const requestedYear = parseInt(selectedYear, 10);
  
  const query = 'SELECT * FROM distributed_books WHERE class = ? AND year = ?';

  db.query(query, [requestedClass, requestedYear], (err, result) => {
    if (err) {
      console.error('Error fetching student information: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(result);
    }
  });
});

app.get('/class2-year-submit-books-distributed-to-students', (req, res) => {
  const selectedYear = req.query.selectedYear;
  const requestedClass = 2;

  const requestedYear = parseInt(selectedYear, 10);
  
  const query = 'SELECT * FROM distributed_books WHERE class = ? AND year = ?';

  db.query(query, [requestedClass, requestedYear], (err, result) => {
    if (err) {
      console.error('Error fetching student information: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(result);
    }
  });
});
app.get('/class3-year-submit-books-distributed-to-students', (req, res) => {
  const selectedYear = req.query.selectedYear;
  const requestedClass = 3;

  const requestedYear = parseInt(selectedYear, 10);
  
  const query = 'SELECT * FROM distributed_books WHERE class = ? AND year = ?';

  db.query(query, [requestedClass, requestedYear], (err, result) => {
    if (err) {
      console.error('Error fetching student information: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(result);
    }
  });
});

app.get('/class4-year-submit-books-distributed-to-students', (req, res) => {
  const selectedYear = req.query.selectedYear;
  const requestedClass = 4;

  const requestedYear = parseInt(selectedYear, 10);
  
  const query = 'SELECT * FROM distributed_books WHERE class = ? AND year = ?';

  db.query(query, [requestedClass, requestedYear], (err, result) => {
    if (err) {
      console.error('Error fetching student information: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(result);
    }
  });
});

app.get('/class5-year-submit-books-distributed-to-students', (req, res) => {
  const selectedYear = req.query.selectedYear;
  const requestedClass = 5;

  const requestedYear = parseInt(selectedYear, 10);
  
  const query = 'SELECT * FROM distributed_books WHERE class = ? AND year = ?';

  db.query(query, [requestedClass, requestedYear], (err, result) => {
    if (err) {
      console.error('Error fetching student information: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(result);
    }
  });
});



// // nctb book info
// app.get('/class1-year-submit-book', (req, res) => {
//   const selectedYear = req.query.selectedYear;
//   const requestedClass = 1;

//   const requestedYear = parseInt(selectedYear, 10);
  
//   const query = 'SELECT * FROM books WHERE class = ? AND year = ?';

//   db.query(query, [requestedClass, requestedYear], (err, result) => {
//     if (err) {
//       console.error('Error fetching student information: ', err);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       res.json(result);
//     }
//   });
// });
// nctb book info
app.get('/class1-year-book-submit', (req, res) => {
  const selectedYear = req.query.selectedYear;
  const selectedBook = req.query.selectedBook;
  const requestedClass = 1;

  const requestedYear = parseInt(selectedYear, 10);
  
  // Modify the SQL query to include the book name
  const query = 'SELECT * FROM books WHERE class = ? AND year = ? AND subject_name = ?';

  db.query(query, [requestedClass, requestedYear, selectedBook], (err, result) => {
    if (err) {
      console.error('Error fetching book information: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(result);
    }
  });
});
app.get('/class2-year-book-submit', (req, res) => {
  const selectedYear = req.query.selectedYear;
  const selectedBook = req.query.selectedBook;
  const requestedClass = 2;

  const requestedYear = parseInt(selectedYear, 10);
  
  // Modify the SQL query to include the book name
  const query = 'SELECT * FROM books WHERE class = ? AND year = ? AND subject_name = ?';

  db.query(query, [requestedClass, requestedYear, selectedBook], (err, result) => {
    if (err) {
      console.error('Error fetching book information: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(result);
    }
  });
});

app.get('/class3-year-book-submit', (req, res) => {
  const selectedYear = req.query.selectedYear;
  const selectedBook = req.query.selectedBook;
  const requestedClass = 3;

  const requestedYear = parseInt(selectedYear, 10);
  
  // Modify the SQL query to include the book name
  const query = 'SELECT * FROM books WHERE class = ? AND year = ? AND subject_name = ?';

  db.query(query, [requestedClass, requestedYear, selectedBook], (err, result) => {
    if (err) {
      console.error('Error fetching book information: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(result);
    }
  });
});

app.get('/class4-year-book-submit', (req, res) => {
  const selectedYear = req.query.selectedYear;
  const selectedBook = req.query.selectedBook;
  const requestedClass = 4;

  const requestedYear = parseInt(selectedYear, 10);
  
  // Modify the SQL query to include the book name
  const query = 'SELECT * FROM books WHERE class = ? AND year = ? AND subject_name = ?';

  db.query(query, [requestedClass, requestedYear, selectedBook], (err, result) => {
    if (err) {
      console.error('Error fetching book information: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(result);
    }
  });
});

app.get('/class5-year-book-submit', (req, res) => {
  const selectedYear = req.query.selectedYear;
  const selectedBook = req.query.selectedBook;
  const requestedClass = 5;

  const requestedYear = parseInt(selectedYear, 10);
  
  // Modify the SQL query to include the book name
  const query = 'SELECT * FROM books WHERE class = ? AND year = ? AND subject_name = ?';

  db.query(query, [requestedClass, requestedYear, selectedBook], (err, result) => {
    if (err) {
      console.error('Error fetching book information: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(result);
    }
  });
});








// student info page load

app.get('/http://127.0.0.1:5500/page1.html', (req, res) => {
  const requestedClass = req.params.class;

  // Using parameterized query to prevent SQL injection
  const query = 'SELECT * FROM students WHERE class = 1';
  db.query(query, [requestedClass], (err, result) => {
    if (err) {
      console.error('Error fetching student information: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.render('pages/page1', { title: 'Node.js App with HBS', students: result });
    }
  });
});

app.get('/http://127.0.0.1:5500/page2.html', (req, res) => {
  const requestedClass = req.params.class;

  // Using parameterized query to prevent SQL injection
  const query = 'SELECT * FROM students WHERE class = 2';
  db.query(query, [requestedClass], (err, result) => {
    if (err) {
      console.error('Error fetching student information: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.render('pages/page2', { title: 'Node.js App with HBS', students: result });
    }
  });
});
app.get('/http://127.0.0.1:5500/page3.html', (req, res) => {
  const requestedClass = req.params.class;

  // Using parameterized query to prevent SQL injection
  const query = 'SELECT * FROM students WHERE class = 3';
  db.query(query, [requestedClass], (err, result) => {
    if (err) {
      console.error('Error fetching student information: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.render('pages/page3', { title: 'Node.js App with HBS', students: result });
    }
  });
});
app.get('/http://127.0.0.1:5500/page4.html', (req, res) => {
  const requestedClass = req.params.class;

  // Using parameterized query to prevent SQL injection
  const query = 'SELECT * FROM students WHERE class = 4';
  db.query(query, [requestedClass], (err, result) => {
    if (err) {
      console.error('Error fetching student information: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.render('pages/page4', { title: 'Node.js App with HBS', students: result });
    }
  });
});
app.get('/http://127.0.0.1:5500/page5.html', (req, res) => {
  const requestedClass = req.params.class;

  // Using parameterized query to prevent SQL injection
  const query = 'SELECT * FROM students WHERE class = 5';
  db.query(query, [requestedClass], (err, result) => {
    if (err) {
      console.error('Error fetching student information: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.render('pages/page5', { title: 'Node.js App with HBS', students: result });
    }
  });
});





// login logout
app.get('/login', (req, res) => {
  res.render('auth/login');
});


app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
    }
    res.redirect('/login');
  });
});




// view distributed book info by class
app.get('/http://127.0.0.1:5500/dist-page1.html', (req, res) => {
  const requestedClass = req.params.class;

  // Using parameterized query to prevent SQL injection
  const query = 'SELECT * FROM distributed_books WHERE class = 1';
  db.query(query, [requestedClass], (err, result) => {
    if (err) {
      console.error('Error fetching student information: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log("hello");
      res.render('dist-page/dist-page1', { title: 'Node.js App with HBS', distributed_books: result });
     // res.render('allstudentinfo/bookinfo', { title: 'Node.js App with HBS', distributed_books: result });
    }
  });
});
app.get('/http://127.0.0.1:5500/dist-page2.html', (req, res) => {
  const requestedClass = req.params.class;

  // Using parameterized query to prevent SQL injection
  const query = 'SELECT * FROM distributed_books WHERE class = 2';
  db.query(query, [requestedClass], (err, result) => {
    if (err) {
      console.error('Error fetching student information: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.render('dist-page/dist-page2', { title: 'Node.js App with HBS', distributed_books: result });
    }
  });
});
app.get('/http://127.0.0.1:5500/dist-page3.html', (req, res) => {
  const requestedClass = req.params.class;

  // Using parameterized query to prevent SQL injection
  const query = 'SELECT * FROM distributed_books WHERE class = 3';
  db.query(query, [requestedClass], (err, result) => {
    if (err) {
      console.error('Error fetching student information: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.render('dist-page/dist-page3', { title: 'Node.js App with HBS', distributed_books: result });
    }
  });
});
app.get('/http://127.0.0.1:5500/dist-page4.html', (req, res) => {
  const requestedClass = req.params.class;

  // Using parameterized query to prevent SQL injection
  const query = 'SELECT * FROM distributed_books WHERE class = 4';
  db.query(query, [requestedClass], (err, result) => {
    if (err) {
      console.error('Error fetching student information: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.render('dist-page/dist-page4', { title: 'Node.js App with HBS', distributed_books: result });
    }
  });
});
app.get('/http://127.0.0.1:5500/dist-page5.html', (req, res) => {
  const requestedClass = req.params.class;

  // Using parameterized query to prevent SQL injection
  const query = 'SELECT * FROM distributed_books WHERE class = 5';
  db.query(query, [requestedClass], (err, result) => {
    if (err) {
      console.error('Error fetching student information: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.render('dist-page/dist-page5', { title: 'Node.js App with HBS', distributed_books: result });
    }
  });
});





app.get('/getStudentData', (req, res) => {
  const { classNo, roll, year } = req.query; // Use req.query to get query parameters

  // Query the database to fetch student data based on class, roll, and year
  const query = `
    SELECT * FROM students
    WHERE class = ? AND roll = ? AND year = ?
  `;

  db.query(query, [classNo, roll, year], (err, results) => {
    if (err) {
      console.error('Database query error:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ data: results });
    }
  });
});





































//submit
// student information save
// app.post('/save-student-info', (req, res) => {
  
//   try {
//     // Extract data from req.body
//     const {classNo, first_name, last_name, roll, studyyear, father_name, mother_name, phone, address, comment } = req.body;

//     // Perform the query
//     const query = `INSERT INTO students (class, first_name, last_name, roll, year, father_name, mother_name, phone, address, comment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?)`;
//     db.query(query, [classNo, first_name, last_name, roll, studyyear, father_name, mother_name, phone, address, comment]);

//     // res.send('Data saved successfully!');

//     if(classNo==1)res.redirect('/std-entry-class1'); 
//     else if(classNo==2)res.redirect('/std-entry-class2'); 
//     else if(classNo==3)res.redirect('/std-entry-class3'); 
//     else if(classNo==4)res.redirect('/std-entry-class4'); 
//     else if(classNo==5)res.redirect('/std-entry-class5'); 

    
// } catch (error) {
//     console.error('Error saving data to the database:', error);
//     res.status(500).send('Internal Server Error');
// }
//   console.log(req.body);
// });







// // similarlarly jokhon distribution entry er form submit korbo tokhon oi data gula save korbo
//  app.post('/save-distributed-book-info', (req, res) => {  
//     try {
//       // Extract data from req.body
//       const { classNo, roll, bangla, english, math, science, social_science, religion, comment } = req.body;
  
//       // Perform the query
//       const query = `INSERT INTO distributed_books (class, roll, bangla, english, math, science, social_science, religion, comment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
//       db.query(query, [classNo, roll, bangla, english, math, science, social_science, religion, comment]);
//     //alert("successfully data entered");
//       // res.send('Data saved successfully!');
//       res.redirect('/distributed-book-entry');

//   } catch (error) {
//       console.error('Error saving data to the database:', error);
//       res.status(500).send('Internal Server Error');
//   }
//     console.log(req.body);
//   }
// );




// app.post('/save-student-info', (req, res) => {
  
//   try {
//     // Extract data from req.body
//     const {classNo, first_name, last_name, roll, studyyear, father_name, mother_name, phone, address, comment } = req.body;

//     // Perform the query
//     const query = `INSERT INTO students (class, first_name, last_name, roll, year, father_name, mother_name, phone, address, comment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?)`;
//     db.query(query, [classNo, first_name, last_name, roll, studyyear, father_name, mother_name, phone, address, comment]);

//     // res.send('Data saved successfully!');
//     res.status(200).json({ message: 'student information saved successfully.' });
    
// } catch (error) {
//     console.error('Error saving data to the database:', error);
//     res.status(500).send('Internal Server Error');
// }
//   console.log(req.body);
// });




app.post('/save-student-info', (req, res) => {
  try {
      // Extract data from req.body
      const { classNo, first_name, last_name, roll, studyyear, father_name, mother_name, phone, address, comment } = req.body;

      // Perform the query
      const query = `INSERT INTO students (class, first_name, last_name, roll, year, father_name, mother_name, phone, address, comment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      db.query(query, [classNo, first_name, last_name, roll, studyyear, father_name, mother_name, phone, address, comment], (error, results) => {
          if (error) {
              // Check for duplicate entry error
              if (error.code === 'ER_DUP_ENTRY') {
                  return res.status(400).json({ message: 'Student already exists' });
              } else {
                  console.error('Error saving data to the database:', error);
                  return res.status(500).json({ message: 'Internal Server Error' });
              }
          }

          // Successfully saved data to the database
          console.log('Data saved successfully!');
          return res.status(200).json({ message: 'Student information saved successfully.' });
      });
  } catch (error) {
      console.error('Error handling form submission:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
  }
});






// app.post('/save-distributed-book-info-class1&2', (req, res) => {
//   const { classNo, roll, year, subjects, comment } = req.body;

//   console.log('Received Data:', req.body); // Log the received data

//   // Validate the received data (you can customize this based on your requirements)
//   if (!classNo || !roll || !year || !Array.isArray(subjects) ) {
//     return res.status(400).json({ error: 'Invalid data received' });
//   }

//   // Your database insertion logic here
//   const insertQuery = `
//     INSERT INTO distributed_books (class, roll, year, subjects, comment)
//     VALUES (?, ?, ?, ?, ?)
//   `;

//   const values = [classNo, roll, year, JSON.stringify(subjects), comment];

//   db.query(insertQuery, values, (error, results) => {
//     if (error) {
//       console.error('Error inserting distributed book information: ' + error.message);
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }

//     res.status(200).json({ message: 'Distributed book information saved successfully.' });
//   });
// });

// app.post('/save-distributed-book-info-class1&2', (req, res) => {
//   const { classNo, roll, year, subjects, comment } = req.body;

//   console.log('Received Data:', req.body); // Log the received data

//   // Validate the received data (you can customize this based on your requirements)
//   if (!classNo || !roll || !year || !Array.isArray(subjects)) {
//     return res.status(400).json({ error: 'Invalid data received' });
//   }

//   // Check if the student already exists in the database
//   const checkQuery = `
//     SELECT * FROM distributed_books
//     WHERE class = ? AND roll = ? AND year = ?
//   `;

//   const checkValues = [classNo, roll, year];

//   db.query(checkQuery, checkValues, (checkError, checkResults) => {
//     if (checkError) {
//       console.error('Error checking student existence: ' + checkError.message);
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }

//     if (checkResults.length > 0) {
//       // Student already exists, books may have already been distributed
//       return res.status(409).json({ error: 'Already books are distributed.' });
//     }

//     // Student doesn't exist, proceed with insertion
//     const insertQuery = `
//       INSERT INTO distributed_books (class, roll, year, subjects, comment)
//       VALUES (?, ?, ?, ?, ?)
//     `;

//     const values = [classNo, roll, year, JSON.stringify(subjects), comment];

//     db.query(insertQuery, values, (insertError, insertResults) => {
//       if (insertError) {
//         console.error('Error inserting distributed book information: ' + insertError.message);
//         return res.status(500).json({ error: 'Internal Server Error' });
//       }

//       res.status(200).json({ message: 'Distributed book information saved successfully.' });
//     });
//   });
// });
app.post('/save-distributed-book-info-class1&2', (req, res) => {
  const { classNo, roll, year, subjects, comment } = req.body;

  console.log('Received Data:', req.body); // Log the received data

  // Validate the received data (you can customize this based on your requirements)
  if (!classNo || !roll || !year || !Array.isArray(subjects)) {
    return res.status(400).json({ error: 'Invalid data received' });
  }

  // Check if the student already exists in the students table
  const checkStudentQuery = `
    SELECT * FROM students
    WHERE class = ? AND roll = ? AND year = ?
  `;

  const checkStudentValues = [classNo, roll, year];

  db.query(checkStudentQuery, checkStudentValues, (checkStudentError, checkStudentResults) => {
    if (checkStudentError) {
      console.error('Error checking student existence: ' + checkStudentError.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (checkStudentResults.length === 0) {
      // Student doesn't exist in the students table
      return res.status(404).json({ error: 'No such student exists.' });
    }

    // Student exists, proceed with checking distributed_books table
    const checkDistributedBooksQuery = `
      SELECT * FROM distributed_books
      WHERE class = ? AND roll = ? AND year = ?
    `;

    const checkDistributedBooksValues = [classNo, roll, year];

    db.query(checkDistributedBooksQuery, checkDistributedBooksValues, (checkBooksError, checkBooksResults) => {
      if (checkBooksError) {
        console.error('Error checking distributed books: ' + checkBooksError.message);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      if (checkBooksResults.length > 0) {
        // Books may have already been distributed
        return res.status(409).json({ error: 'Already books are distributed.' });
      }

      // Student exists and books haven't been distributed, proceed with insertion
      const insertQuery = `
        INSERT INTO distributed_books (class, roll, year, subjects, comment)
        VALUES (?, ?, ?, ?, ?)
      `;

      const insertValues = [classNo, roll, year, JSON.stringify(subjects), comment];

      db.query(insertQuery, insertValues, (insertError, insertResults) => {
        if (insertError) {
          console.error('Error inserting distributed book information: ' + insertError.message);
          return res.status(500).json({ error: 'Internal Server Error' });
        }

        res.status(200).json({ message: 'Distributed book information saved successfully.' });
      });
    });
  });
});


// similarlarly jokhon nctb entry er form submit korbo tokhon oi data gula save korbo

// app.post('/save-bookfrom-ntcb-info', (req, res) => {
      
//     try {
     
//       const {date,classNo,subject,booknumber } = req.body;
  
   
//       const query = `INSERT INTO books2 (book_date, class, subject_name, number_of_books) VALUES (?, ?, ?, ?)`;
//       db.query(query, [date,classNo,subject,booknumber]);
//       res.redirect('/bookfrom-ntcb-entry');
  
//   } catch (error) {
//       console.error('Error saving data to the database:', error);
//       res.status(500).send('Internal Server Error');
//   }
//     console.log(req.body);
//   }
// );

// app.post('/save-bookfrom-ntcb-info', (req, res) => {
      
//   try {
   
//     const {date,studyyear,classNo,subject,booknumber } = req.body;

 
//     const query = `INSERT INTO books (book_date, year, class, subject_name, number_of_books) VALUES (?, ?, ?, ?, ?)`;
//     db.query(query, [date,studyyear,classNo,subject,booknumber]);
//     if(classNo==1) res.redirect('/bookfrom-ntcb-entry-class1');
//     else if (classNo==2) res.redirect('/bookfrom-ntcb-entry-class2');
//     else if (classNo==3) res.redirect('/bookfrom-ntcb-entry-class3');
//     else if (classNo==4) res.redirect('/bookfrom-ntcb-entry-class4');
//     else if (classNo==5) res.redirect('/bookfrom-ntcb-entry-class5');

// } catch (error) {
//     console.error('Error saving data to the database:', error);
//     res.status(500).send('Internal Server Error');
// }
//   console.log(req.body);
// }
// );

app.post('/save-bookfrom-ntcb-info', (req, res) => {
 console.log("herr");
  try {
    const { date, studyyear, classNo, subject, booknumber } = req.body;

    const query = `INSERT INTO books (book_date, year, class, subject_name, number_of_books) VALUES (?, ?, ?, ?, ?)`;
    db.query(query, [date, studyyear, classNo, subject, booknumber]);

    // Send a JSON response for success
    res.json({ success: true, message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving data to the database:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, result) => {
      if (result.length > 0) {
        // User found, set user ID in the session
      //  req.session.userId = result[0].id;  
          console.log("right");
        res.redirect('/http://127.0.0.1:5500/main-menu.html');
      } else {
        console.log("incorrect");
        res.send('Incorrect email or password');
      }
    });
  } catch (error) {
    console.log("here");
    console.error('Error logging in:', error);
    res.status(500).send('Internal Server Error');
  }
});


function authenticate(req, res, next) {
  if (req.session && req.session.userId) {
    return next();
  } else {
    res.redirect('/login');
  }
}

















/// update
app.put('/update-student-info', (req, res) => {
  const {
    classNo,
    rollNo,
    yearNo,
    firstName,
    lastName,
    fatherName,
    motherName,
    phoneNo,
    address,
    comment,
  } = req.body;

  const updateQuery = `
    UPDATE students
    SET
      first_name = ?,
      last_name = ?,
      father_name = ?,
      mother_name = ?,
      phone = ?,
      address = ?,
      comment = ?
    WHERE
      class = ? AND
      roll = ? AND
      year = ?
  `;

  const values = [
    firstName,
    lastName,
    fatherName,
    motherName,
    phoneNo,
    address,
    comment,
    classNo,
    rollNo,
    yearNo,
  ];

  db.query(updateQuery, values, async (error, results) => {
    if (error) {
      console.error('Error updating record: ' + error.message);
      res.status(500).json({ error: 'Error updating record' });
      return;
    }
 
    
    console.log("record done");
    //console.log(classNo,rollNo,studyyear);

    // Send a JSON response with the updated data
    res.json({ success: true, message: 'Record updated successfully', yearNo });
  });
});


app.put('/update-book-distribution-to-students-class1&2', (req, res) => {
  
  const { classNo, roll, studyyear, subjects, comment } = req.body;

  console.log('Received Data:', req.body); // Log the received data

  // Validate the received data (you can customize this based on your requirements)
  if (!classNo || !roll || !studyyear || !Array.isArray(subjects) ) {
    return res.status(400).json({ error: 'Invalid data received' });
  }

  // Your database update logic here
  const updateQuery = `
    UPDATE distributed_books
    SET subjects = ?, comment = ?
    WHERE class = ? AND roll = ? AND year = ?
  `;

  const values = [JSON.stringify(subjects), comment, classNo, roll, studyyear];

  db.query(updateQuery, values, (error, results) => {
    if (error) {
      console.error('Error updating distributed book information: ' + error.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    res.status(200).json({ message: 'Distributed book information updated successfully.' });
  });
});



























// delete
app.delete('/delete-student/:class/:roll/:year', async (req, res) => {
  const { class: classNo, roll, year } = req.params;

  // Delete from distributed_books table first due to foreign key constraint
  const deleteBooksQuery = 'DELETE FROM distributed_books WHERE class = ? AND roll = ? AND year = ?';

  try {
    // Delete books
    await new Promise((resolve, reject) => {
      db.query(deleteBooksQuery, [classNo, roll, year], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });

    // Now, delete from the students table
    const deleteStudentQuery = 'DELETE FROM students WHERE class = ? AND roll = ? AND year = ?';
    await new Promise((resolve, reject) => {
      db.query(deleteStudentQuery, [classNo, roll, year], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });

    // Send a 204 response indicating successful deletion
    res.status(204).send();

  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});























app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
