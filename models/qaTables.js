const questionsTableQuery = `CREATE TABLE IF NOT EXISTS qa.questions (
    question_id int PRIMARY KEY,
    product_id int,
    question_body text,
    question_date text,
    asker_name text,
    question_helpfulness int,
    reported boolean, 
    updated_at date,
    created_at date,
  )`;

const answersTableQuery = `CREATE TABLE IF NOT EXISTS qa.answers (
    answers_id int PRIMARY KEY,
    question_id int,
    body text,
    date date,
    answerer_name text,
    helpfulness int
  )`;

const answersPhotosTablesQuery = `CREATE TABLE IF NOT EXISTS qa.answer_photos (
    a_photo_id int PRIMARY KEY,
    answer_id int,
    url text,
  )`;

const questionPhotosTablesQuery = `CREATE TABLE IF NOT EXISTS qa.question_photos (
    q_photo_id int PRIMARY KEY,
    question_id int,
    url text,
  )`;

const allQueries = [
  questionsTableQuery,
  answersTableQuery,
  answersPhotosTablesQuery,
  questionPhotosTablesQuery,
];

module.exports = allQueries;
