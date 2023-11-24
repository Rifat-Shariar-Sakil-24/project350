
app.delete('/delete-student/:class/:roll/:year', (req, res) => {
  
  const { class: classNo, roll, year } = req.params;

  // Delete from distributed_books table first due to foreign key constraint
  const deleteBooksQuery = 'DELETE FROM distributed_books WHERE class = ? AND roll = ? AND year = ?';

  db.query(deleteBooksQuery, [classNo, roll, year], (booksError, booksResults) => {
    if (booksError) {
      console.error('Error deleting books record: ' + booksError.message);
      res.status(500).json({ error: 'Error deleting books record' });
      return;
    }

    // Check if any rows were affected in the distributed_books table
    //if (booksResults.affectedRows > 0) {
      // Now, delete from the students table
      const deleteStudentQuery = 'DELETE FROM students WHERE class = ? AND roll = ? AND year = ?';

      db.query(deleteStudentQuery, [classNo, roll, year], (studentError, studentResults) => {
        if (studentError) {
          console.error('Error deleting student record: ' + studentError.message);
          res.status(500).json({ error: 'Error deleting student record' });
          return;
        }
          console.log("here");
        // Check if any rows were affected in the students table
        if (studentResults.affectedRows > 0) {
          console.log('Student record deleted successfully');
          res.status(200).json({ message: 'Student record deleted successfully' });
        } else {
          console.log('Student record not found');
          res.status(404).json({ error: 'Student record not found' });
        }
        const selectedYear = year;
    if(classNo==1) res.redirect(`/class1-year-submit?selectedYear=${selectedYear}`);
    else if(classNo==2) res.redirect(`/class2-year-submit?selectedYear=${selectedYear}`);
    else if(classNo==3) res.redirect(`/class3-year-submit?selectedYear=${selectedYear}`);
    else if(classNo==4) res.redirect(`/class4-year-submit?selectedYear=${selectedYear}`);
    else if(classNo==5) res.redirect(`/class5-year-submit?selectedYear=${selectedYear}`);
      });
   
  });
});