CREATE DATABASE sales_db;
CREATE USER sales_user WITH ENCRYPTED PASSWORD 'sales_password';
GRANT ALL PRIVILEGES ON DATABASE sales_db TO sales_user; 