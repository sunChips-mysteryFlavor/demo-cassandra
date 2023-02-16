const productTableQuery = `CREATE TABLE IF NOT EXISTS products.product (
    product_id int PRIMARY KEY,
    name text,
    slogan text,
    description text,
    category text,
    default_price int,
    updated_at date,
    created_at date,
  )`;

const featuresTableQuery = `CREATE TABLE IF NOT EXISTS products.features (
    features_id int PRIMARY KEY,
    title text,
    product_id text,
    feature text,
    value int,
  )`;

const styleTablesQuery = `CREATE TABLE IF NOT EXISTS products.style (
    style_id int PRIMARY KEY,
    product_id int,
    name text,
    original_price int,
    sale_price int,
  )`;

const photos = `CREATE TABLE IF NOT EXISTS products.photos (
    photo_id int PRIMARY KEY,
    style_id int,
    product_id int,
    name text,
    original_price int,
    sale_price int,
  )`;

const sku = `CREATE TABLE IF NOT EXISTS products.sku (
    sku_id int PRIMARY KEY,
    style_id int,
    quantity int,
    size text,
  )`;

const allQueries = [
  productTableQuery,
  featuresTableQuery,
  styleTablesQuery,
  photos,
  sku,
];

module.exports = allQueries;
