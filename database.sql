-- Database Name: sponsorship_hub

------------------------------
------- CREATE TABLES --------
------------------------------

-- USERS --
CREATE TABLE "users"
(
    "id" serial PRIMARY KEY NOT NULL,
    "name" varchar NOT NULL,
    "title" varchar NOT NULL,
    "password" varchar NOT NULL,
    "username" varchar (255) UNIQUE NOT NULL, -- username IS email
    "phone" varchar (255) NOT NULL,
    "access_level" varchar (255) DEFAULT 0
);

-- EVENTS --
CREATE TABLE "events"
(
    "id" serial PRIMARY KEY NOT NULL,
    "event_name" varchar(255) NOT NULL,
    "year_established" int,
    "start_date" TIMESTAMP NOT NULL,
    "end_date" TIMESTAMP NOT NULL,
    "event_image_url" varchar(2000),
    "event_website" varchar(2000),
    "event_status" BOOLEAN,
    -- Stretch
    "estimated_attendance" integer NOT NULL,
    "event_notes" varchar(5000) ,
    "contact_name" varchar(255) ,
    "contact_title" varchar(255) ,
    "contact_email" varchar(255) ,
    "contact_phone" varchar(30) ,
    "event_facebook" varchar(2000) ,
    "event_twitter" varchar(2000) ,
    "event_instagram" varchar(2000) ,
    "event_description" varchar(2000)
);

-- VENUES --
CREATE TABLE "venues"
(
    "id" serial PRIMARY KEY NOT NULL,
    "name" varchar(255) NOT NULL,
    "address" varchar (255) NOT NULL,
    "city" varchar(255) ,
    "state" varchar(255) NOT NULL,
    "zipcode" varchar(255) ,
    "venue_notes" varchar(5000) ,
    "venue_capacity" integer
);

CREATE TABLE "junction_event_venue"
(
    "id" serial PRIMARY KEY NOT NULL,
    "venues_id" integer NOT NULL,
    "events_id" integer NOT NULL,
    FOREIGN KEY ("venues_id") REFERENCES venues ("id"),
    FOREIGN KEY ("events_id") REFERENCES events ("id")
);

-- EVENT TYPES --
CREATE TABLE "event_type"
(
    "id" serial PRIMARY KEY NOT NULL,
    "type" VARCHAR NOT NULL
);

CREATE TABLE "junction_event_type"
(
    "id" serial PRIMARY KEY NOT NULL,
    "type_id" integer NOT NULL,
    "events_id" integer NOT NULL,
    FOREIGN KEY ("type_id") REFERENCES event_type ("id"),
    FOREIGN KEY ("events_id") REFERENCES events ("id")
);

INSERT INTO event_type
    (type)
VALUES
    ('Art Festival'),
    ('Auto Show'),
    ('Beer Festival'),
    ('City Festival'),
    ('Cultural Festival'),
    ('Film 	Festival'),
    ('Food & Wine Festival'),
    ('Motorcycle Rally'),
    ('Music Festival'),
    ('Street Market Fest');

-- DEMOGRAPHIC AGE --
CREATE TABLE "age_range"
(
    "id" serial PRIMARY KEY NOT NULL,
    "age_range" varchar NOT NULL
);

CREATE TABLE "junction_event_age"
(
    "id" serial PRIMARY KEY NOT NULL,
    "event_id" int NOT NULL,
    "age_range_id" int NOT NULL,
    "percentage" int NOT NULL DEFAULT 0,
    FOREIGN KEY ("event_id") REFERENCES events ("id"),
    FOREIGN KEY ("age_range_id") REFERENCES age_range ("id")
);

INSERT INTO age_range
    (age_range)
VALUES
    ('0-17'),
    ('18-24'),
    ('25-34'),
    ('35-44'),
    ('45-54'),
    ('55-64'),
    ('65+');

-- DEMOGRAPHIC INCOME --
CREATE TABLE "income_range"
(
    "id" serial PRIMARY KEY NOT NULL,
    "income_range" VARCHAR NOT NULL
);

CREATE TABLE "junction_event_income"
(
    "id" serial PRIMARY KEY NOT NULL,
    "event_id" int NOT NULL,
    "income_range_id" int NOT NULL,
    "percentage" int NOT NULL DEFAULT 0,
    FOREIGN KEY ("event_id") REFERENCES events ("id"),
    FOREIGN KEY ("income_range_id") REFERENCES income_range ("id")
);

INSERT INTO income_range
    (income_range)
VALUES
    ('0-25000'),
    ('25001-49999'),
    ('50000-75999'),
    ('76000-99999'),
    ('100000-149999'),
    ('150000-200000'),
    ('200001+');

-- DEMOGRAPHIC RESIDENCY --
CREATE TABLE "residency"
(
    "id" serial PRIMARY KEY NOT NULL,
    "residency" VARCHAR
);

CREATE TABLE "junction_event_residency"
(
    "id" serial PRIMARY KEY NOT NULL,
    "event_id" int NOT NULL,
    "residency_id" int NOT NULL,
    "percentage" int DEFAULT 0,
    FOREIGN KEY ("event_id") REFERENCES events ("id"),
    FOREIGN KEY ("residency_id") REFERENCES residency ("id")
);

INSERT INTO residency
    (residency)
VALUES
    ('in_state'),
    ('out_of_state');

-- DEMOGRAPHIC GENDER --
CREATE TABLE "gender"
(
    "id" serial PRIMARY KEY NOT NULL,
    "gender" VARCHAR NOT NULL
);
CREATE TABLE "junction_event_gender"
(
    "id" serial PRIMARY KEY NOT NULL,
    "event_id" int NOT NULL,
    "gender_id" int NOT NULL,
    "percentage" int DEFAULT 0,
    FOREIGN KEY ("event_id") REFERENCES events ("id"),
    FOREIGN KEY ("gender_id") REFERENCES gender ("id")
);

INSERT INTO gender
    (gender)
VALUES
    ('male'),
    ('female'),
    ('other');

-- SPONSORSHIPS --
CREATE TABLE "sponsorships"
(
    "id" serial PRIMARY KEY NOT NULL,
    "sponsor_name" varchar(255) ,
    "sponsor_price" int ,
    "sponsor_image_url" varchar(2000) ,
    "sponsor_description" varchar(2000) ,
    "event_id" int NOT NULL,
    FOREIGN KEY ("event_id") REFERENCES events ("id")
);

------------------------------
------ INSERT TEST DATA ------
------------------------------

-- USERS --
INSERT INTO users
    (name, title, password, username, phone, access_level)
VALUES
    ('Heather B.', 'FizzBuzz Rep', 'Heather', 'fizzbuzz@gmail.com', '612-500-5030', 0),
    ('Alan H.', 'Henderson Business Solutions', 'Alan', 'grillydough@gmail.com', '612-505-5050', 1),
    ('Tan N.', 'Research Co.', 'Tan', 'lamportkn@gmail.com', '612-500-5001', 2),
    ('Shaokee M.', 'Sponsorship Hub', 'Shaokee', 'sshub@gmail.com', '612-505-5003', 3);

-- EVENTS --
INSERT INTO events
    (event_name, year_established, start_date, end_date, event_image_url, event_website, event_status, estimated_attendance, event_notes, contact_name, contact_title, contact_email, contact_phone, event_facebook, event_twitter, event_instagram, event_description)
VALUES
    ('Sky Fest 2020', '2003', '2020-07-22 13:00:09.250411+00', '2020-08-02 20:30:09.250411+00', 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80', 'https://secretskyfest.com/', FALSE, '12000', 'Second Sky Festival is annual', 'John Doe', 'Event Specialist', 'info.secondskyfest@goldenvoice.com', '855-838-3892', 'secondskyfest', 'secondskyfest', 'secondskyfest', 'Miscellaneous Notes!');

INSERT INTO events
    (event_name, year_established, start_date, end_date, event_image_url, event_website, event_status, estimated_attendance, event_notes, contact_name, contact_title, contact_email, contact_phone, event_facebook, event_twitter, event_instagram, event_description)
VALUES
    ('Minnesota State Fair 2021', '1859', '2021-08-26 13:00:09.250411+00', '2021-09-06 20:30:09.250411+00', 'https://images.unsplash.com/photo-1568264523979-383b59b330c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80', 'https://www.mnstatefair.org/', TRUE, '200000', 'The Great Minnesota Get-Together', 'Jimmy Johnson', 'Event Coordinator', 'fairinfo@mnstatefair.org', '651-288-4306', 'minnesotastatefair', 'mnstatefair', 'mnstatefair', 'Miscellaneous Notes!');

-- EVENTS - ONLY NOT NULLS --
INSERT INTO events
    (event_name, start_date, end_date, estimated_attendance)
VALUES
    ('Spring Jam 2021', '2021-02-25 17:00:00.250411+00', '2021-03-01 23:00:00.250411+00', '13000');

-- VENUES --
INSERT INTO venues
    (name, address, city, state, zipcode, venue_notes, venue_capacity)
VALUES
    ('Middle Harbor Shoreline Park', '2777 Middle Harbor Rd', 'Oakland', 'California', '94607', 'Huge Park located by the shoreline', '5000');

INSERT INTO venues
    (name, address, city, state, zipcode, venue_notes, venue_capacity)
VALUES
    ('Minnesota State Fairgrounds', '1265 Snelling Ave N', 'St. Paul', 'Minnesota', '55108', 'The location of the Great Minnesota Get-Together.', '100000');

INSERT INTO venues
    (name, address, city, state, zipcode, venue_notes, venue_capacity)
VALUES
    ('The Armory', '500 South 6th St.', 'Minneapolis', 'Minnesota', '55415', 'The Armory is poised to make a triumphant return. The venue has returned to it''s roots - being the host to a number of social functions: concerts, sporting events, trade shows, and other private celebrations.', '8400');

------------------------------
------ INSERT JUNCTIONS ------
------------------------------

-- VENUE JUNCTIONS --

INSERT INTO junction_event_venue
    (venues_id, events_id)
VALUES
    (1, 1),
    (2, 2),
    (3, 3);

-- EVENT TYPE JUNCTION --
INSERT INTO junction_event_type
    (type_id, events_id)
VALUES
    (9, 1),
    (10, 2),
    (9, 3);