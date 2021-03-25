SELECT user_name, country_name FROM users, countries WHERE country_id = countries.id;

same as

SELECT user_name, country_name FROM users INNER JOIN countries ON (country_id = countries.id);

same as

SELECT user_name, country_name FROM users JOIN countries ON (country_id = countries.id);


SELECT user_name, country_name FROM users LEFT OUTER JOIN countries ON (country_id = countries.id);

same as

SELECT user_name, country_name FROM users LEFT JOIN countries ON (country_id = countries.id);


SELECT user_name, country_name FROM users RIGHT OUTER JOIN countries ON (country_id = countries.id);

same as

SELECT user_name, country_name FROM users RIGHT JOIN countries ON (country_id = countries.id);
