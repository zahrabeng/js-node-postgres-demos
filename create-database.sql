DROP TABLE WORDS;
DROP TABLE CATEGORIES;
CREATE TABLE categories (id SERIAL PRIMARY KEY, name text not null);
CREATE TABLE words (
    id serial primary key,
    category_id integer,
    word text not null,
    CONSTRAINT fk_category FOREIGN KEY(category_id) REFERENCES categories(id)
);
-- Insert some data, too.  Not part of the schema.
insert into categories (name)
values ('cities'),
    ('sports'),
    ('continents'),
    ('colours'),
    ('coding language');
insert into words (word, category_id)
values ('liverpool', 1),
    ('birmingham', 1),
    ('london', 1);
insert into words (word, category_id)
values ('football', 2),
    ('swimming', 2),
    ('rugby', 2),
    ('hockey', 2);
insert into words (word, category_id)
values ('africa', 3),
    ('asia', 3),
    ('europe', 3),
    ('antartica', 3),
    ('north america', 3),
    ('south america', 3),
    ('oceania', 3);
insert into words (word, category_id)
values ('red', 4),
    ('blue', 4),
    ('green', 4),
    ('pink', 4),
    ('purple', 4);
insert into words (word, category_id)
values ('typescript', 5),
    ('javascript', 5),
    ('haskell', 5),
    ('python', 5),
    ('ruby', 5),
    ('scala', 5),
    ('c sharp', 5);