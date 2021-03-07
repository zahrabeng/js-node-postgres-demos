-- Drop the tables if they exist. Order matters.
DROP TABLE IF EXISTS WORDS;
DROP TABLE IF EXISTS CATEGORIES;
DROP TABLE IF EXISTS HISCORES;
--
--
-- Create the tables
CREATE TABLE categories (id SERIAL PRIMARY KEY, name text not null);
CREATE TABLE words (
    id serial primary key,
    category_id integer,
    word text not null,
    CONSTRAINT fk_category FOREIGN KEY(category_id) REFERENCES categories(id)
);
CREATE TABLE HISCORES (
    id SERIAL PRIMARY KEY,
    username character varying(255) unique,
    score integer not null,
    time timestamp without time zone
);
--
--
-- Insert some data, too.  Not part of the schema.
--
--
-- Add some quiz categories
insert into categories (name)
values ('cities'),
    ('sports'),
    ('continents'),
    ('colours'),
    ('coding language');
--
--
-- Add some words for each quiz category
insert into words (word, category_id)
values ('liverpool', 1),
    ('birmingham', 1),
    ('london', 1),
    ('football', 2),
    ('swimming', 2),
    ('rugby', 2),
    ('hockey', 2),
    ('africa', 3),
    ('asia', 3),
    ('europe', 3),
    ('antartica', 3),
    ('north america', 3),
    ('south america', 3),
    ('oceania', 3),
    ('red', 4),
    ('blue', 4),
    ('green', 4),
    ('pink', 4),
    ('purple', 4),
    ('typescript', 5),
    ('javascript', 5),
    ('haskell', 5),
    ('python', 5),
    ('c sharp', 5);
--
--
-- Add some hiscores!
insert into hiscores (
        username,
        score,
        time
    )
values ('matt', 650, now()),
    ('emmanuel', 550, now()),
    ('hannah', 700, now());