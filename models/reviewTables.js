const reviewsTableQuery = `CREATE TABLE IF NOT EXISTS reviews.review (
  product_id int PRIMARY KEY,
  review_id int,
  rating int,
  summary text,
  recommend boolean,
  response text,
  body text,
  date date,
  revier_name text,
  helpfulness int,
)`;

const reviewMetaTableQuery = `CREATE TABLE IF NOT EXISTS reviews.reviewMeta (
  product_id int PRIMARY KEY,
  ratings_count_1 int,
  ratings_count_2 int,
  ratings_count_3 int,
  ratings_count_4 int,
  ratings_count_5 int,
  recommended_true int,
  recommended_false int,
)`;

const reviewPhotosTableQuery = `CREATE TABLE IF NOT EXISTS reviews.photos (
  photo_id int PRIMARY KEY,
  review_id int,
  url text,
)`;

const reviewCharacteristics = `CREATE TABLE IF NOT EXISTS reviews.characteristics (
  characteristics_id int PRIMARY KEY,
  product_id int,
  title_id int,
  value int,
)`;

const reviewscharacteristicTitle = `CREATE TABLE IF NOT EXISTS reviews.characteristicTitle (
  title_id int PRIMARY KEY,
  title text,
)`;

const allQueries = [
  reviewsTableQuery,
  reviewMetaTableQuery,
  reviewPhotosTableQuery,
  reviewCharacteristics,
  reviewscharacteristicTitle,
];

module.exports = allQueries;
