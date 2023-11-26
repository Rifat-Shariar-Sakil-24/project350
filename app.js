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



app.get('/', (req, res) => {
  res.render('index', { title: 'Node.js App with HBS' });
});

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

app.get('/bookfrom-ntcb-entry', (req, res) => {
  res.render('entry/nctb-entry', { title: 'Node.js App with HBS' });
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









// rifat
app.get('/http://127.0.0.1:5500/main-menu.html', (req, res) => {
  res.render('main-menu/main-menu', { title: 'Node.js App with HBS' });
});


// api to load class1 to class 5 student information pages
// app.get('/http://127.0.0.1:5500/page1.html', (req, res) => {
//   res.render('pages/page1', { title: 'Node.js App with HBS' });
// });
// app.get('/http://127.0.0.1:5500/page2.html', (req, res) => {
//   res.render('pages/page2', { title: 'Node.js App with HBS' });
// });
// app.get('/http://127.0.0.1:5500/page3.html', (req, res) => {
//   res.render('pages/page3', { title: 'Node.js App with HBS' });
// });

// app.get('/http://127.0.0.1:5500/page4.html', (req, res) => {
//   res.render('pages/page4', { title: 'Node.js App with HBS' });
// });

// app.get('/http://127.0.0.1:5500/page5.html', (req, res) => {
//   res.render('pages/page5', { title: 'Node.js App with HBS' });
// });



// api to load login page
app.get('/http://127.0.0.1:5500/login.html', (req, res) => {
  res.render('login/login', { title: 'Node.js App with HBS' });
});


//api to load distributed books of each class
//clas1
// app.get('/http://127.0.0.1:5500/dist-page1.html', (req, res) => {
//   res.render('dist-page/dist-page1', { title: 'Node.js App with HBS' });
// });
//class2
// app.get('/http://127.0.0.1:5500/dist-page2.html', (req, res) => {
//   res.render('dist-page/dist-page2', { title: 'Node.js App with HBS' });
// });
// app.get('/http://127.0.0.1:5500/dist-page3.html', (req, res) => {
//   res.render('dist-page/dist-page3', { title: 'Node.js App with HBS' });
// });
// app.get('/http://127.0.0.1:5500/dist-page4.html', (req, res) => {
//   res.render('dist-page/dist-page4', { title: 'Node.js App with HBS' });
// });
// app.get('/http://127.0.0.1:5500/dist-page5.html', (req, res) => {
//   res.render('dist-page/dist-page5', { title: 'Node.js App with HBS' });
// });



// api to load see and edit distributed books of each class
// view student api which was made below
//clas1
app.get('/http://127.0.0.1:5500/std-page1.html', (req, res) => {
  res.render('std-page/std-page1', { title: 'Node.js App with HBS' });
});
app.get('/http://127.0.0.1:5500/std-page2.html', (req, res) => {
  res.render('std-page/std-page2', { title: 'Node.js App with HBS' });
});
app.get('/http://127.0.0.1:5500/std-page3.html', (req, res) => {
  res.render('std-page/std-page4', { title: 'Node.js App with HBS' });
});
app.get('/http://127.0.0.1:5500/std-page4.html', (req, res) => {
  res.render('std-page/std-page4', { title: 'Node.js App with HBS' });
});
app.get('/http://127.0.0.1:5500/std-page5.html', (req, res) => {
  res.render('std-page/std-page5', { title: 'Node.js App with HBS' });
});




// app.post('/save-student-info', (req, res) => {
  
//   try {
//     // Extract data from req.body
//     const {classNo, first_name, last_name, roll, father_name, mother_name, phone, address, comment } = req.body;

//     // Perform the query
//     const query = `INSERT INTO students (class, first_name, last_name, roll, father_name, mother_name, phone, address, comment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
//     db.query(query, [classNo, first_name, last_name, roll, father_name, mother_name, phone, address, comment]);

//     // res.send('Data saved successfully!');

    
//     res.redirect('/std-entry'); 
// } catch (error) {
//     console.error('Error saving data to the database:', error);
//     res.status(500).send('Internal Server Error');
// }
//   console.log(req.body);
// });


// save student info for each class updated
app.post('/save-student-info', (req, res) => {
  
  try {
    // Extract data from req.body
    const {classNo, first_name, last_name, roll, studyyear, father_name, mother_name, phone, address, comment } = req.body;

    // Perform the query
    const query = `INSERT INTO students (class, first_name, last_name, roll, year, father_name, mother_name, phone, address, comment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?)`;
    db.query(query, [classNo, first_name, last_name, roll, studyyear, father_name, mother_name, phone, address, comment]);

    // res.send('Data saved successfully!');

    if(classNo==1)res.redirect('/std-entry-class1'); 
    else if(classNo==2)res.redirect('/std-entry-class2'); 
    else if(classNo==3)res.redirect('/std-entry-class3'); 
    else if(classNo==4)res.redirect('/std-entry-class4'); 
    else if(classNo==5)res.redirect('/std-entry-class5'); 

    
} catch (error) {
    console.error('Error saving data to the database:', error);
    res.status(500).send('Internal Server Error');
}
  console.log(req.body);
});







// similarlarly jokhon distribution entry er form submit korbo tokhon oi data gula save korbo
 app.post('/save-distributed-book-info', (req, res) => {  
    try {
      // Extract data from req.body
      const { classNo, roll, bangla, english, math, science, social_science, religion, comment } = req.body;
  
      // Perform the query
      const query = `INSERT INTO distributed_books (class, roll, bangla, english, math, science, social_science, religion, comment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      db.query(query, [classNo, roll, bangla, english, math, science, social_science, religion, comment]);
    //alert("successfully data entered");
      // res.send('Data saved successfully!');
      res.redirect('/distributed-book-entry');

  } catch (error) {
      console.error('Error saving data to the database:', error);
      res.status(500).send('Internal Server Error');
  }
    console.log(req.body);
  }
);





app.post('/save-distributed-book-info-class1', (req, res) => {
  const { classNo, roll, year, subjects, comment } = req.body;

  console.log('Received Data:', req.body); // Log the received data

  // Validate the received data (you can customize this based on your requirements)
  if (!classNo || !roll || !year || !Array.isArray(subjects) || subjects.length !== 3) {
    return res.status(400).json({ error: 'Invalid data received' });
  }

  // Your database insertion logic here
  const insertQuery = `
    INSERT INTO distributed_books (class, roll, year, subjects, comment)
    VALUES (?, ?, ?, ?, ?)
  `;

  const values = [classNo, roll, year, JSON.stringify(subjects), comment];

  db.query(insertQuery, values, (error, results) => {
    if (error) {
      console.error('Error inserting distributed book information: ' + error.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    res.status(200).json({ message: 'Distributed book information saved successfully.' });
  });
});

// similarlarly jokhon nctb entry er form submit korbo tokhon oi data gula save korbo

app.post('/save-bookfrom-ntcb-info', (req, res) => {
      
    try {
     
      const {date,classNo,subject,booknumber } = req.body;
  
   
      const query = `INSERT INTO books (book_date, class, subject_name, number_of_books) VALUES (?, ?, ?, ?)`;
      db.query(query, [date,classNo,subject,booknumber]);
      res.redirect('/bookfrom-ntcb-entry');
  
  } catch (error) {
      console.error('Error saving data to the database:', error);
      res.status(500).send('Internal Server Error');
  }
    console.log(req.body);
  }
);


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


app.put('/update-book-distribution-to-students', (req, res) => {
  
  const { classNo, roll, studyyear, subjects, comment } = req.body;

  console.log('Received Data:', req.body); // Log the received data

  // Validate the received data (you can customize this based on your requirements)
  if (!classNo || !roll || !studyyear || !Array.isArray(subjects) || subjects.length !== 3) {
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






app.get('/login', (req, res) => {
  res.render('auth/login');
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







// check 

// app.get('/std-entry-new', (req, res) => {
//   res.render('entry/student-entry-new', { title: 'Node.js App with HBS' });
// });
// app.post('/save-student-info-new', (req, res) => {
  
//   try {
//     // Extract data from req.body
//     const { id, class_no, student_name, roll, phone, father_name, mother_name, year, birthdate, religion, address, comment } = req.body;

//     // Perform the query
//     const query = `INSERT INTO studentsnew (id, class_no, student_name, roll, phone, father_name, mother_name, year, birthdate, religion, address, comment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    
//     db.query(query, [id, class_no, student_name, roll, phone, father_name, mother_name, year, birthdate, religion, address, comment]);

//     res.send('Data saved successfully!');
//     res.redirect('/std-entry-new'); 
//   } catch (error) {
//     console.error('Error saving data to the database:', error);
//     res.status(500).send('Internal Server Error');
//   }
//   console.log(req.body);
// });




// Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });



// app.post('/insertClass1StudentInfo', (req, res) => {
//   const {
//       roll_number,
//       student_first_name,
//       student_last_name,
//       class_name,
//       fathers_name,
//       mothers_name,
//       address,
//       phone_number,
//       birthdate,
//   } = req.body;

//   const sql = `INSERT INTO class1studentinfo VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
//   const values = [
//       roll_number,
//       student_first_name,
//       student_last_name,
//       class_name,
//       fathers_name,
//       mothers_name,
//       address,
//       phone_number,
//       birthdate,
//   ];

//   db.query(sql, values, (err, result) => {
//       if (err) {
//           console.error('Error inserting student information: ', err);
//           res.status(500).send('Internal Server Error');
//       } else {
//           console.log('Student information inserted successfully');
//           res.status(200).send('Student information inserted successfully');
//       }
//   });
// });


// // Endpoint to insert student information into class 2
// app.post('/insertClass2StudentInfo', (req, res) => {
//   const {
//       roll_number,
//       student_first_name,
//       student_last_name,
//       class_name,
//       fathers_name,
//       mothers_name,
//       address,
//       phone_number,
//       birthdate,
//   } = req.body;

//   const sql = `INSERT INTO class2studentinfo VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
//   const values = [
//       roll_number,
//       student_first_name,
//       student_last_name,
//       class_name,
//       fathers_name,
//       mothers_name,
//       address,
//       phone_number,
//       birthdate,
//   ];

//   db.query(sql, values, (err, result) => {
//       if (err) {
//           console.error('Error inserting student information: ', err);
//           res.status(500).send('Internal Server Error');
//       } else {
//           console.log('Student information inserted successfully');
//           res.status(200).send('Student information inserted successfully');
//       }
//   });
// });

// // Endpoint to insert student information into class 3
// app.post('/insertClass3StudentInfo', (req, res) => {
//   const {
//       roll_number,
//       student_first_name,
//       student_last_name,
//       class_name,
//       fathers_name,
//       mothers_name,
//       address,
//       phone_number,
//       birthdate,
//   } = req.body;

//   const sql = `INSERT INTO class3studentinfo VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
//   const values = [
//       roll_number,
//       student_first_name,
//       student_last_name,
//       class_name,
//       fathers_name,
//       mothers_name,
//       address,
//       phone_number,
//       birthdate,
//   ];

//   db.query(sql, values, (err, result) => {
//       if (err) {
//           console.error('Error inserting student information: ', err);
//           res.status(500).send('Internal Server Error');
//       } else {
//           console.log('Student information inserted successfully');
//           res.status(200).send('Student information inserted successfully');
//       }
//   });
// });

// // Endpoint to insert student information into class 4
// app.post('/insertClass4StudentInfo', (req, res) => {
//   const {
//       roll_number,
//       student_first_name,
//       student_last_name,
//       class_name,
//       fathers_name,
//       mothers_name,
//       address,
//       phone_number,
//       birthdate,
//   } = req.body;

//   const sql = `INSERT INTO class4studentinfo VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
//   const values = [
//       roll_number,
//       student_first_name,
//       student_last_name,
//       class_name,
//       fathers_name,
//       mothers_name,
//       address,
//       phone_number,
//       birthdate,
//   ];

//   db.query(sql, values, (err, result) => {
//       if (err) {
//           console.error('Error inserting student information: ', err);
//           res.status(500).send('Internal Server Error');
//       } else {
//           console.log('Student information inserted successfully');
//           res.status(200).send('Student information inserted successfully');
//       }
//   });
// });

// // Endpoint to insert student information into class 5
// app.post('/insertClass5StudentInfo', (req, res) => {
//   const {
//       roll_number,
//       student_first_name,
//       student_last_name,
//       class_name,
//       fathers_name,
//       mothers_name,
//       address,
//       phone_number,
//       birthdate,
//   } = req.body;

//   const sql = `INSERT INTO class5studentinfo VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
//   const values = [
//       roll_number,
//       student_first_name,
//       student_last_name,
//       class_name,
//       fathers_name,
//       mothers_name,
//       address,
//       phone_number,
//       birthdate,
//   ];

//   db.query(sql, values, (err, result) => {
//       if (err) {
//           console.error('Error inserting student information: ', err);
//           res.status(500).send('Internal Server Error');
//       } else {
//           console.log('Student information inserted successfully');
//           res.status(200).send('Student information inserted successfully');
//       }
//   });
// });




// // Endpoint to get class 1 student information by roll number
// app.get('/getClass1StudentInfo/:roll_number', (req, res) => {
//   const roll_number = req.params.roll_number;

//   const sql = `SELECT * FROM class1studentinfo WHERE roll_number = ?`;

//   db.query(sql, [roll_number], (err, result) => {
//     if (err) {
//       console.error('Error fetching student information: ', err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       if (result.length === 0) {
//         res.status(404).send('Student not found');
//       } else {
//         res.status(200).json(result[0]);
//       }
//     }
//   });
// });
 
// // Endpoint to get class 2 student information by roll number
// app.get('/getClass2StudentInfo/:roll_number', (req, res) => {
//   const roll_number = req.params.roll_number;

//   const sql = `SELECT * FROM class2studentinfo WHERE roll_number = ?`;

//   db.query(sql, [roll_number], (err, result) => {
//     if (err) {
//       console.error('Error fetching student information: ', err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       if (result.length === 0) {
//         res.status(404).send('Student not found');
//       } else {
//         res.status(200).json(result[0]);
//       }
//     }
//   });
// });


// // Endpoint to get class 3 student information by roll number
// app.get('/getClass3StudentInfo/:roll_number', (req, res) => {
//   const roll_number = req.params.roll_number;

//   const sql = `SELECT * FROM class3studentinfo WHERE roll_number = ?`;

//   db.query(sql, [roll_number], (err, result) => {
//     if (err) {
//       console.error('Error fetching student information: ', err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       if (result.length === 0) {
//         res.status(404).send('Student not found');
//       } else {
//         res.status(200).json(result[0]);
//       }
//     }
//   });
// });


// // Endpoint to get class 4 student information by roll number
// app.get('/getClass4StudentInfo/:roll_number', (req, res) => {
//   const roll_number = req.params.roll_number;

//   const sql = `SELECT * FROM class4studentinfo WHERE roll_number = ?`;

//   db.query(sql, [roll_number], (err, result) => {
//     if (err) {
//       console.error('Error fetching student information: ', err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       if (result.length === 0) {
//         res.status(404).send('Student not found');
//       } else {
//         res.status(200).json(result[0]);
//       }
//     }
//   });
// });


// // Endpoint to get class 5 student information by roll number
// app.get('/getClass5StudentInfo/:roll_number', (req, res) => {
//   const roll_number = req.params.roll_number;

//   const sql = `SELECT * FROM class5studentinfo WHERE roll_number = ?`;

//   db.query(sql, [roll_number], (err, result) => {
//     if (err) {
//       console.error('Error fetching student information: ', err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       if (result.length === 0) {
//         res.status(404).send('Student not found');
//       } else {
//         res.status(200).json(result[0]);
//       }
//     }
//   });
// });




// // Endpoint to get all student information for class 1
// app.get('/getClass1StudentInfo', (req, res) => {
//   const sql = 'SELECT * FROM class1studentinfo';

//   db.query(sql, (err, result) => {
//     if (err) {
//       console.error('Error retrieving student information for class 1: ', err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       console.log('Student information for class 1 retrieved successfully');
//       res.status(200).json(result);
//     }
//   });
// });

// // Endpoint to get all student information for class 2
// app.get('/getClass2StudentInfo', (req, res) => {
//   const sql = 'SELECT * FROM class2studentinfo';

//   db.query(sql, (err, result) => {
//     if (err) {
//       console.error('Error retrieving student information for class 2: ', err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       console.log('Student information for class 2 retrieved successfully');
//       res.status(200).json(result);
//     }
//   });
// });



// // Endpoint to get all student information for class 3
// app.get('/getClass3StudentInfo', (req, res) => {
//   const sql = 'SELECT * FROM class3studentinfo';

//   db.query(sql, (err, result) => {
//     if (err) {
//       console.error('Error retrieving student information for class 3: ', err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       console.log('Student information for class 3 retrieved successfully');
//       res.status(200).json(result);
//     }
//   });
// });

// // Endpoint to get all student information for class 4
// app.get('/getClass4StudentInfo', (req, res) => {
//   const sql = 'SELECT * FROM class4studentinfo';

//   db.query(sql, (err, result) => {
//     if (err) {
//       console.error('Error retrieving student information for class 4: ', err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       console.log('Student information for class 4 retrieved successfully');
//       res.status(200).json(result);
//     }
//   });
// });

// // Endpoint to get all student information for class 5
// app.get('/getClass5StudentInfo', (req, res) => {
//   const sql = 'SELECT * FROM class5studentinfo';

//   db.query(sql, (err, result) => {
//     if (err) {
//       console.error('Error retrieving student information for class 5: ', err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       console.log('Student information for class 5 retrieved successfully');
//       res.status(200).json(result);
//     }
//   });
// });

















// app.post('/assignBookClass1Student', (req, res) => {
//   const {
//       roll_number,
//       bangla,
//       english,
//       math,
//       given_dates,
//   } = req.body;

//   const sql = `INSERT INTO assignedbookclass1student (roll_number, bangla, english, math, given_dates) VALUES (?, ?, ?, ?, ?)`;
  
//   const values = [
//       roll_number,
//       bangla,
//       english,
//       math,
//       JSON.stringify(given_dates),
//   ];

//   db.query(sql, values, (err, result) => {
//       if (err) {
//           console.error('Error assigning books: ', err);
//           res.status(500).send('Internal Server Error');
//       } else {
//           console.log('Books assigned successfully');
//           res.status(200).send('Books assigned successfully');
//       }
//   });
// });


// // Endpoint to assign books to Class 2 students
// app.post('/assignBookClass2Student', (req, res) => {
//   const {
//       roll_number,
//       bangla,
//       english,
//       math,
//       given_dates,
//   } = req.body;

//   const sql = `INSERT INTO assignedbookclass2student (roll_number, bangla, english, math, given_dates) VALUES (?, ?, ?, ?, ?)`;
//   const values = [
//       roll_number,
//       bangla,
//       english,
//       math,
//       JSON.stringify(given_dates),
//   ];

//   db.query(sql, values, (err, result) => {
//       if (err) {
//           console.error('Error assigning books: ', err);
//           res.status(500).send('Internal Server Error');
//       } else {
//           console.log('Books assigned successfully');
//           res.status(200).send('Books assigned successfully');
//       }
//   });
// });

// // Endpoint to assign books to Class 3 students
// app.post('/assignBookClass3Student', (req, res) => {
//   const {
//       roll_number,
//       bangla,
//       english,
//       math,
//       science,
//       social_science,
//       religion,
//       given_dates,
//   } = req.body;

//   const sql = `INSERT INTO assignedbookclass3student (roll_number, bangla, english, math, science, social_science, religion, given_dates) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
//   const values = [
//       roll_number,
//       bangla,
//       english,
//       math,
//       science,
//       social_science,
//       religion,
//       JSON.stringify(given_dates),
//   ];

//   db.query(sql, values, (err, result) => {
//       if (err) {
//           console.error('Error assigning books: ', err);
//           res.status(500).send('Internal Server Error');
//       } else {
//           console.log('Books assigned successfully');
//           res.status(200).send('Books assigned successfully');
//       }
//   });
// });

// // Endpoint to assign books to Class 4 students
// app.post('/assignBookClass4Student', (req, res) => {
//   const {
//       roll_number,
//       bangla,
//       english,
//       math,
//       science,
//       social_science,
//       religion,
//       given_dates,
//   } = req.body;

//   const sql = `INSERT INTO assignedbookclass4student (roll_number, bangla, english, math, science, social_science, religion, given_dates) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
//   const values = [
//       roll_number,
//       bangla,
//       english,
//       math,
//       science,
//       social_science,
//       religion,
//       JSON.stringify(given_dates),
//   ];

//   db.query(sql, values, (err, result) => {
//       if (err) {
//           console.error('Error assigning books: ', err);
//           res.status(500).send('Internal Server Error');
//       } else {
//           console.log('Books assigned successfully');
//           res.status(200).send('Books assigned successfully');
//       }
//   });
// });

// // Endpoint to assign books to Class 5 students

// app.post('/assignBookClass5Student', (req, res) => {
//   const {
//       roll_number,
//       bangla,
//       english,
//       math,
//       science,
//       social_science,
//       religion,
//       given_dates,
//   } = req.body;

//   const sql = `INSERT INTO assignedbookclass5student (roll_number, bangla, english, math, science, social_science, religion, given_dates) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
//   const values = [
//       roll_number,
//       bangla,
//       english,
//       math,
//       science,
//       social_science,
//       religion,
//       JSON.stringify(given_dates),
//   ];

//   db.query(sql, values, (err, result) => {
//       if (err) {
//           console.error('Error assigning books: ', err);
//           res.status(500).send('Internal Server Error');
//       } else {
//           console.log('Books assigned successfully');
//           res.status(200).send('Books assigned successfully');
//       }
//   });
// });



// app.get('/getAssignedBookClass1Student/:roll_number', (req, res) => {
//   const roll_number = req.params.roll_number;

//   const sql = `SELECT * FROM assignedbookclass1student WHERE roll_number = ?`;

//   db.query(sql, [roll_number], (err, result) => {
//     if (err) {
//       console.error('Error fetching assigned books for class 1: ', err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       res.status(200).json(result);
//     }
//   });
// });


// // Endpoint to get assigned books of a student in class 2 by roll number
// app.get('/getAssignedBookClass2Student/:roll_number', (req, res) => {
//   const roll_number = req.params.roll_number;

//   const sql = `SELECT * FROM assignedbookclass2student WHERE roll_number = ?`;

//   db.query(sql, [roll_number], (err, result) => {
//     if (err) {
//       console.error('Error fetching assigned books for class 2: ', err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       res.status(200).json(result);
//     }
//   });
// });



// // Endpoint to get assigned books of a student in class 3 by roll number
// app.get('/getAssignedBookClass3Student/:roll_number', (req, res) => {
//   const roll_number = req.params.roll_number;

//   const sql = `SELECT * FROM assignedbookclass3student WHERE roll_number = ?`;

//   db.query(sql, [roll_number], (err, result) => {
//     if (err) {
//       console.error('Error fetching assigned books for class 3: ', err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       res.status(200).json(result);
//     }
//   });
// });

// // Endpoint to get assigned books of a student in class 4 by roll number
// app.get('/getAssignedBookClass4Student/:roll_number', (req, res) => {
//   const roll_number = req.params.roll_number;

//   const sql = `SELECT * FROM assignedbookclass4student WHERE roll_number = ?`;

//   db.query(sql, [roll_number], (err, result) => {
//     if (err) {
//       console.error('Error fetching assigned books for class 4: ', err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       res.status(200).json(result);
//     }
//   });
// });

// // Endpoint to get assigned books of a student in class 5 by roll number
// app.get('/getAssignedBookClass5Student/:roll_number', (req, res) => {
//   const roll_number = req.params.roll_number;

//   const sql = `SELECT * FROM assignedbookclass5student WHERE roll_number = ?`;

//   db.query(sql, [roll_number], (err, result) => {
//     if (err) {
//       console.error('Error fetching assigned books for class 5: ', err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       res.status(200).json(result);
//     }
//   });
// });





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
