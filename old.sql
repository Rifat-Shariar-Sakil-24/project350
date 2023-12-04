

CREATE TABLE users (
  id int(11) NOT NULL,
  email varchar(20) NOT NULL,
  password varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO users (id, email, password) VALUES
(1, 'admin@gmail.com', 'password');

-- CREATE TABLE books (
--     book_date DATE NOT NULL,
--     class VARCHAR(50) NOT NULL,
--     `year` int(4) NOT NULL,
--     subject_name VARCHAR(100) NOT NULL,
--     number_of_books INT NOT NULL
-- );
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    book_date DATE NOT NULL,
    `year` INT(4) NOT NULL,
    class VARCHAR(50) NOT NULL,
    
    subject_name VARCHAR(100) NOT NULL,
    number_of_books INT NOT NULL
);


-- CREATE TABLE `students` (
--   `class` int(11) NOT NULL,
--   `first_name` varchar(20) NOT NULL,
--   `last_name` varchar(20) NOT NULL,
--   `roll` int(11) NOT NULL,
--   `phone` int(11) NOT NULL,
--   `father_name` varchar(20) NOT NULL,
--   `mother_name` varchar(25) NOT NULL,
--   `address` varchar(255) NOT NULL,
--   `comment` varchar(255) NOT NULL,
--   PRIMARY KEY (`roll`, `class`)
-- );


-- CREATE TABLE `distributed_books` (

--   `class` int(11) NOT NULL,
--   `roll` int(11) NOT NULL,
--   `bangla` tinyint(1) NOT NULL,
--   `english` tinyint(1) NOT NULL,
--   `math` tinyint(1) NOT NULL,
--   `science` tinyint(1) NOT NULL,
--   `social_science` tinyint(1) NOT NULL,
--   `religion` tinyint(1) DEFAULT NULL,
--   `comment` varchar(255) DEFAULT NULL,
--   PRIMARY KEY (`roll`, `class`),

--   CONSTRAINT `fk_distributed_books_students`
--     FOREIGN KEY (`roll`, `class`)
--     REFERENCES `students` (`roll`, `class`)
--     ON UPDATE CASCADE
--     ON DELETE CASCADE
-- );











-- Create the students table with the new year column
CREATE TABLE `students` (
  `class` int(11) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `roll` int(11) NOT NULL,
  `year` int(4) NOT NULL,
  `phone` int(11) NOT NULL,
  `father_name` varchar(20) NOT NULL,
  `mother_name` varchar(25) NOT NULL,
  `address` varchar(255) NOT NULL,
  `comment` varchar(255) NOT NULL,
  PRIMARY KEY (`roll`, `class`, `year`)
);

-- -- Create the distributed_books table with the new year column and foreign key
-- CREATE TABLE `distributed_books` (
--   `class` int(11) NOT NULL,
--   `roll` int(11) NOT NULL,
--   `year` int(4) NOT NULL,
--   `bangla` tinyint(1) NOT NULL,
--   `english` tinyint(1) NOT NULL,
--   `math` tinyint(1) NOT NULL,
--   `science` tinyint(1) NOT NULL,
--   `social_science` tinyint(1) NOT NULL,
--   `religion` tinyint(1) DEFAULT NULL,
--   `comment` varchar(255) DEFAULT NULL,
--   PRIMARY KEY (`roll`, `class`, `year`),
--   CONSTRAINT `fk_distributed_books_students`
--     FOREIGN KEY (`roll`, `class`, `year`)
--     REFERENCES `students` (`roll`, `class`, `year`)
--     ON UPDATE CASCADE
--     ON DELETE CASCADE
-- );

-- CREATE TABLE `distributed_books` (
--   `class` INT(11) NOT NULL,
--   `roll` INT(11) NOT NULL,
--   `year` INT(4) NOT NULL,
--   `subjects` JSON NOT NULL,
--   `comment` VARCHAR(255) DEFAULT NULL,
--   PRIMARY KEY (`roll`, `class`, `year`),
--   CONSTRAINT `fk_distributed_books_students`
--     FOREIGN KEY (`roll`, `class`, `year`)
--     REFERENCES `students` (`roll`, `class`, `year`)
--     ON UPDATE CASCADE
--     ON DELETE CASCADE
-- );
CREATE TABLE `distributed_books` (
  `class` INT(11) NOT NULL,
  `roll` INT(11) NOT NULL,
  `year` INT(4) NOT NULL,
  `subjects` JSON NOT NULL,
  `comment` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (`roll`, `class`, `year`),
  CONSTRAINT `fk_distributed_books_students`
    FOREIGN KEY (`roll`, `class`, `year`)
    REFERENCES `students` (`roll`, `class`, `year`)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);

