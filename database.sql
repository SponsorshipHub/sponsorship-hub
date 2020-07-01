-- LAST UPDATED: Jun 30, 2020

-- Database Name: sponsorship_hub

------------------------------
------- CREATE TABLES --------
------------------------------

-- USERS --
CREATE TABLE "user"
(
    "id" serial PRIMARY KEY,
    "username" varchar (255) UNIQUE NOT NULL,
    -- username IS email
    "password" varchar NOT NULL,
    "name" varchar,
    "title" varchar,
    "company" varchar,
    "phone" varchar (255),
    "access_level" INT DEFAULT 0
);

-- EVENT --
CREATE TABLE "event"
(
    "id" serial PRIMARY KEY NOT NULL,
    "event_name" varchar(255) NOT NULL,
    "year_established" int,
    "start_date" TIMESTAMP NOT NULL,
    "end_date" TIMESTAMP NOT NULL,
    "event_image_url" varchar DEFAULT 'https://unsplash.com/photos/ZhQCZjr9fHo/download?force=true&w=1920',
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
    "event_description" varchar(5000),
    "event_sponsorship_kit" varchar(2000),
    "venue_id" int
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
    "event_id" integer NOT NULL,
    FOREIGN KEY ("type_id") REFERENCES event_type ("id") ON DELETE CASCADE,
    FOREIGN KEY ("event_id") REFERENCES "event" ("id") ON DELETE CASCADE
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
    FOREIGN KEY ("event_id") REFERENCES "event" ("id") ON DELETE CASCADE,
    FOREIGN KEY ("age_range_id") REFERENCES age_range ("id") ON DELETE CASCADE
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
    FOREIGN KEY ("event_id") REFERENCES "event" ("id") ON DELETE CASCADE,
    FOREIGN KEY ("income_range_id") REFERENCES income_range ("id") ON DELETE CASCADE
);

INSERT INTO income_range
    (income_range)
VALUES
    ('0-24999'),
    ('25000-49999'),
    ('50000-74999'),
    ('75000-99999'),
    ('100000-149999'),
    ('150000-199999'),
    ('200000+');

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
    FOREIGN KEY ("event_id") REFERENCES "event" ("id") ON DELETE CASCADE,
    FOREIGN KEY ("residency_id") REFERENCES residency ("id") ON DELETE CASCADE
);

INSERT INTO "residency"
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
    FOREIGN KEY ("event_id") REFERENCES "event" ("id") ON DELETE CASCADE,
    FOREIGN KEY ("gender_id") REFERENCES gender ("id") ON DELETE CASCADE
);

INSERT INTO "gender"
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
    FOREIGN KEY ("event_id") REFERENCES "event" ("id") ON DELETE CASCADE
);

------------------------------
------ INSERT TEST DATA ------
------------------------------

-- USERS --
INSERT INTO "user"
    (name, title, company, password, username, phone, access_level)
VALUES
    ('Heather Braid', 'FizzBuzz Rep', 'Fizzbuzz', '$2a$10$3UXnDy01r8nA8H.Z9EN0IOoMCSYAdWdzGeol9yXLCLZC910lEua5C', 'fizzbuzz@gmail.com', '612-500-5030', 0),
    ('Alan Hemsworth', 'Owner', 'Henderson Business Solutions', '$2a$10$3UXnDy01r8nA8H.Z9EN0IOoMCSYAdWdzGeol9yXLCLZC910lEua5C', 'grillydough@gmail.com', '612-505-5050', 1),
    ('Tan Nugent', 'Expert Researcher', 'Research Co.', '$2a$10$3UXnDy01r8nA8H.Z9EN0IOoMCSYAdWdzGeol9yXLCLZC910lEua5C', 'lamportkn@gmail.com', '612-500-5001', 2),
    ('Shaokee Moolah', 'Coding Engineer', 'Sponsorship Hub', '$2a$10$3UXnDy01r8nA8H.Z9EN0IOoMCSYAdWdzGeol9yXLCLZC910lEua5C', 'sshub@gmail.com', '612-505-5003', 3),
    ('Karl N.', 'Founder', 'Sponsorship Hub', '$2a$10$3UXnDy01r8nA8H.Z9EN0IOoMCSYAdWdzGeol9yXLCLZC910lEua5C', 'sponsorshiphub@gmail.com', '612-100-1000', 3);

-- EVENT --
INSERT INTO "event"
    (event_name, year_established, start_date, end_date, event_image_url, event_website, event_status, estimated_attendance, event_description, contact_name, contact_title, contact_email, contact_phone, event_facebook, event_twitter, event_instagram, event_notes, venue_id)
VALUES
    ('Second Sky Festival 2020', '2003', '2020-07-22 13:00:09.250411+00', '2020-08-02 20:30:09.250411+00', 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80', 'https://secretskyfest.com/', FALSE, '12000', 'Second Sky Festival is annual', 'John Doe', '"event" Specialist', 'info.secondskyfest@goldenvoice.com', '855-838-3892', 'secondskyfest', 'secondskyfest', 'secondskyfest', 'Miscellaneous Notes!', 1);

INSERT INTO "event"
    (event_name, year_established, start_date, end_date, event_image_url, event_website, event_status, estimated_attendance, event_description, contact_name, contact_title, contact_email, contact_phone, event_facebook, event_twitter, event_instagram, event_notes, venue_id, event_sponsorship_kit)
VALUES
    ('Minnesota State Fair 2021', '1859', '2021-08-26 13:00:09.250411+00', '2021-09-06 20:30:09.250411+00', 'https://images.unsplash.com/photo-1568264523979-383b59b330c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80', 'https://www.mnstatefair.org/', TRUE, '200000', 'The Great Minnesota Get-Together', 'Jimmy Johnson', 'Event Coordinator', 'fairinfo@mnstatefair.org', '651-288-4306', 'minnesotastatefair', 'mnstatefair', 'mnstatefair', 'Miscellaneous Notes!', 2, 'https://assets.mnstatefair.org/pdf/19-map-color.pdf');

INSERT INTO "event"
    -- Testing Null Data --
    (event_name, year_established, start_date, end_date, event_website, event_status, estimated_attendance, event_description, contact_name, contact_title, contact_email, event_facebook, event_twitter, event_instagram, event_notes, venue_id, event_sponsorship_kit)
VALUES
    ('Spring Jam 2021', '1999', '2021-02-25 17:00:00.250411+00', '2021-03-01 23:00:00.250411+00', 'https://springjam.umn.edu/', true, '15000', 'Spring Jam is a one day music festival that brings the University of Minnesota and greater Twin-Cities communities together with live music, carnival rides, food, games and more!', 'Katie Alvino', 'Marketing Director', 'umn-sua-sponsor@umn.edu', 'umnSUA', 'umnsua', 'umnsua', 'EVENT INFO - Spring Jam brings University of Minnesota students together for a festival experience. Complete with free carnival rides, live music, and food, Spring Jam is the perfect welcome party for warm weather!

WHAT’S IN IT FOR YOU?
The University of Minnesota’s Spring Jam experience offers companies an exclusive opportunity to connect with the University population at one of the largest social events on campus!

OUR CAMPUS AUDIENCE
Total Enrollment: 52,000
Possible Overall Reach: 2,600,000

SPRING JAM REACH
Opportunity to interact with up to 7,000 students at Spring Jam.
Over 198,000 Spring Jam webpage views annually.
30,000 followers across Instagram, Twitter, Facebook, and Snapchat.', 3, 'https://springjam.umn.edu/sponsors/opportunities');

INSERT INTO "event"
    (event_name, year_established, start_date, end_date, event_image_url, event_website, event_status, estimated_attendance, event_description, contact_name, contact_title, contact_email, contact_phone, event_facebook, event_twitter, event_instagram, event_notes, venue_id)
VALUES
    ('Coachella Music Festival 2021', '2011', '2021-04-09 13:00:09.250411+00', '2021-04-18 20:30:09.250411+00', 'https://images.unsplash.com/photo-1505224628533-c4fc42c389e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1192&q=80', 'https://www.coachella.com/', FALSE, '99000', 'Like a barometer always reading a temperature of awesome, the traditional kickoff to the summer festival season is dominated by Coachella. The glitz and glamour of Los Angeles migrates east to the Indio desert for back to back weekends of the biggest names in music. What started as a small electronic festival in the desert has transformed into a cultural touchstone for the festival season.', 'Billy Blaze', 'Event Coordinator', 'sponsorship@coachella.com', '1-855-771-3667', 'coachella', 'coachella', 'coachella', 'Coachella was cancelled in October 2020 and pushed to April 2021.', 4);

INSERT INTO "event"
    (event_name, year_established, start_date, end_date, event_image_url, event_website, event_status, estimated_attendance, event_description, contact_name, contact_title, contact_email, contact_phone, event_facebook, event_twitter, event_instagram, event_notes, venue_id)
VALUES
    ('Minnesota Craft Beer Festival', '2020', '2020-09-19 13:00:09.250411+00', '2020-09-19 17:00:09.250411+00', 'https://images.unsplash.com/photo-1554127959-b04104f23bab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80', 'https://www.minnesotacraftbeerfestival.com/', TRUE, '1000', 'Limited-release beers, world-class breweries, unlimited pours, and live music in Minneapolis-St. Paul on September 19, 2020.', 'Julia S', 'Coordinator', 'steverogers@gmail.com', '612-305-7162', 'craftbeerandbrewing', 'craftbeerbrew', 'NA', 'Event has been pushed from April 25, 2020 to September 19, 2020', 5);

INSERT INTO "event"
    (event_name, year_established, start_date, end_date, event_image_url, event_website, event_status, estimated_attendance, event_description, contact_name, contact_title, contact_email, contact_phone, event_facebook, event_twitter, event_instagram, event_notes, venue_id, event_sponsorship_kit)
VALUES
    ('Boca Fest', '1986', '2021-01-09 10:00:09.250411+00', '2021-01-10 17:00:09.250411+00', 'https://unsplash.com/photos/5MTf9XyVVgM/download?force=true&w=1920', 'https://http://www.artfestival.com/festivals/annual-boca-fest/artist/', TRUE, '1000', 'Boca Fest will be located in the lot at the intersection of St. Andrews Boulevard and Glades Road at The Town Center Mall. The Town Center is one of South Florida''s top luxury shopping destinations and one of Boca''s main attractions. It features a mix of upscale and elite specialty shops, fine dining and plenty of parking.', 'Howard Alan', 'Event Planner', 'info@artfestival.com', '561-746-6615', 'HowardAlanEvents', 'artfestivals', 'artfestivals', 'Howard Alan Events is excited to announce that Boca Fest will now take place at The Town Center Mall at Boca Raton. The Town Center is one of South Florida''s top luxury shopping destinations and one of Boca''s main attractions. The show will be located in the parking lot of The Terrace, a recent expansion near Bloomingdale''s, Pinon Grill, and The Gap. The Town Center is located right off I-95 and Glades Road.  The show offers a convenient location with over 150 national artists and plenty of parking, including valet! This outdoor gallery style juried event will present a variety of handmade art and unique gift items, as well as functional pieces. The eclectic displays, appealing to all tastes and budgets, will offer a wide array of artistic mediums including paintings, sculptures, photography, ceramics, glass, wood, handmade jewelry, and mixed media.', 6, 'https://www.zapplication.org/event-info.php?ID=8564');

INSERT INTO "event"
    (event_name, year_established, start_date, end_date, event_image_url, event_website, event_status, estimated_attendance, event_description, contact_name, contact_title, contact_email, contact_phone, event_facebook, event_twitter, event_instagram, event_notes, venue_id, event_sponsorship_kit)
VALUES
    ('San Diego Comic Con 2021', '2013', '2021-07-22 10:00:09.250411+00', '2021-07-25 17:00:09.250411+00', 'https://unsplash.com/photos/SLrcEdEpbSA/download?force=true&w=1920', 'https://www.comic-con.org/cci', TRUE, '1000', 'The SAN DIEGO COMIC CONVENTION (Comic-Con International) is a California Nonprofit Public Benefit Corporation organized for charitable purposes and dedicated to creating the general public’s awareness of and appreciation for comics and related popular art forms, including participation in and support of public presentations, conventions, exhibits, museums and other public outreach activities which celebrate the historic and ongoing contribution of comics to art and culture.', 'John Howlett Jr.', 'Event Planner', 'info@comiccon.com', '561-746-3615', 'comiccon', 'comic_con', 'comic_con', 'From the beginning, the founders of the show set out to include not only the comic books they loved, but also other aspects of the popular arts that they enjoyed and felt deserved wider recognition, including films and science fiction/fantasy literature. After one more name change (San Diego’s West Coast Comic Convention, in 1972), the show officially became the San Diego Comic-Con (SDCC) in 1973 with the fourth annual event. In 1995, the non-profit event changed its name to Comic-Con International: San Diego (CCI).  The show''s main home in the 1970s was the fondly remembered El Cortez Hotel in downtown San Diego. In 1979, Comic-Con moved to the Convention and Performing Arts Center (CPAC), and stayed there until 1991, when the new San Diego Convention Center opened. Comic-Con has been at home in that facility for over two decades.  With attendance topping 130,000 in recent years—in a convention center facility that has maxed out in space—the event has grown to include satellite locations, including local hotels and outdoor parks. Programming events, games, anime, the Comic-Con International Independent Film Festival, and the Eisner Awards all take place outside of the Convention Center, creating a campus-type feel for the convention in downtown San Diego.  Over the years, Comic-Con has become the focal point for the world of comics conventions. The event continues to offer the complete convention experience: a giant Exhibit Hall (topping over 460,000 square feet in its current incarnation); a massive programming schedule (close to 700 separate events in 2014), featuring comics and all aspects of the popular arts, including hands-on workshops and educational and academic programming such as the Comics Arts Conference; anime and film screenings (including a separate film festival); games; the Will Eisner Comic Industry Awards, the “Oscars” of the comics industry; a Masquerade costume competition with prizes and trophies; an Autograph Area; an Art Show; and Portfolio Reviews, bringing together aspiring artists with major companies.  Comic-Con has presented literally thousands of special guests at its conventions over the years, bringing comics creators, science fiction and fantasy authors, film and television directors, producers, and writers, and creators from all aspects of the popular arts together with their fans for a fun and often times candid discussion of various art forms. The event has seen an amazing array of comics and book publishers in its Exhibit Hall over the years. Over it’s four-and-a-half decade-plus history, Comic-Con International has continually presented comic books and comic art to a growing audience. That love of the comics medium continues to be its guiding factor as the event moves toward its second half-century as the premier comic book and popular arts style convention in the world.', 7, 'https://www.comic-con.org/sites/default/files/forms/cci2020_exhapp_v2_1.pdf');


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
    ('The Armory', '500 South 6th St.', 'Minneapolis', 'Minnesota', '55415', 'The Armory is poised to make a triumphant return. The venue has returned to it''s roots - being the host to a number of social functions: concerts, sporting event, trade shows, and other private celebrations.', '8400');

INSERT INTO venues
    (name, address, city, state, zipcode, venue_notes, venue_capacity)
VALUES
    ('Empire Polo Club', '81-800 Avenue 51', 'Indio', 'California', '92201', 'The location of Coachella.', '200000');

INSERT INTO venues
    (name, address, city, state, zipcode, venue_notes, venue_capacity)
VALUES
    ('Minneapolis Convention Center', '1301 2nd Avenue South', 'Minneapolis', 'Minnesota', '55403', 'Hall E', '2000');

INSERT INTO venues
    (name, address, city, state, zipcode, venue_notes, venue_capacity)
VALUES
    ('Town Center Mall', '5590 Glades Road', 'Boca Raton', 'Florida', '33431', 'The Town Center is one of South Florida''s top luxury shopping destinations and one of Boca''s main attractions. It features a mix of upscale and elite specialty shops, fine dining and plenty of parking.  The Town Center features over 200 stores including Tory Burch, Tiffany & Co, Louis Vuitton, The Apple Store and many more.', '3000');

INSERT INTO venues
    (name, address, city, state, zipcode, venue_notes, venue_capacity)
VALUES
    ('San Diego Convention Center', '111 W Harbor Dr', 'San Diego', 'California', '92101', 'The San Diego Convention Center is the primary convention center in San Diego, California. It is located in the Marina district of downtown San Diego near the Gaslamp Quarter, at 111 West Harbor Drive. The center is managed by the San Diego Convention Center Corporation, a non-profit public benefit corporation created by the City of San Diego.', '125000');

-- SPONSORSHIP PACKAGES --   
INSERT INTO "sponsorships"
    (sponsor_name, sponsor_price, sponsor_image_url, sponsor_description, event_id)
VALUES
    ('Small Booth', '1000', 'https://images.unsplash.com/photo-1563208085-648526fc0a70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 'A small booth, 6 by 6 feet', 1),
    ('Medium Booth', '1500', 'https://images.unsplash.com/photo-1553858117-30fb2c04eaad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80', 'A medium booth, 10 by 10 feet', 1),
    ('Large Booth', '2000', 'https://images.unsplash.com/photo-1581420515590-cee76de451b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80', 'A large booth, 16 by 16 feet', 1),
    ('Small Billboard', '1500', 'https://images.unsplash.com/photo-1559227582-558eeaccd1fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 'A small billboard, 6 by 12 feet', 2),
    ('Large Billboard', '2500', 'https://images.unsplash.com/photo-1561898329-9ad7d76fbb2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 'A large billboard, 20hx40w feet', 2),
    ('Small Booth', '1000', 'https://images.unsplash.com/photo-1573376670774-4427757f7963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80', 'A small booth, 6 by 6 feet', 3),
    ('Medium Booth', '1500', 'https://images.unsplash.com/photo-1553858117-30fb2c04eaad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80', 'A medium booth, 10 by 10 feet', 3),
    ('Large Booth', '2000', 'https://images.unsplash.com/photo-1581420515590-cee76de451b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80', 'A large booth, 16 by 16 feet', 3),
    ('Small Billboard', '1500', 'https://images.unsplash.com/photo-1559227582-558eeaccd1fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 'A small billboard, 6 by 12 feet', 4),
    ('Large Billboard', '2500', 'https://images.unsplash.com/photo-1561898329-9ad7d76fbb2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 'A large billboard, 20hx40w feet', 4),
    ('Small Booth', '1000', 'https://images.unsplash.com/photo-1573376670774-4427757f7963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80', 'A small booth, 6 by 6 feet', 4),
    ('Medium Booth', '1500', 'https://images.unsplash.com/photo-1553858117-30fb2c04eaad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80', 'A medium booth, 10 by 10 feet', 4),
    ('Large Booth', '2000', 'https://images.unsplash.com/photo-1581420515590-cee76de451b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80', 'A large booth, 16 by 16 feet', 4),
    ('Small Booth', '1000', 'https://images.unsplash.com/photo-1563208085-648526fc0a70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 'A small booth, 6 by 6 feet', 5),
    ('Single Booth 10''x10''', '495', 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2017/png/iconmonstr-building-43.png&r=0&g=0&b=0', 'A large booth, 10 by 10 feet', 6),
    ('Double Booth', '990', 'https://cdns.iconmonstr.com/wp-content/assets/preview/2017/96/iconmonstr-building-13.png', 'Limited Quantity', 6);

------------------------------
------ INSERT JUNCTIONS ------
------------------------------

---- VENUE JUNCTIONS --
--
--INSERT INTO junction_event_venue
--    (venues_id, event_id)
--VALUES
--    (1, 1), (2, 2), (3, 3), (4, 4), (5, 5);

-- EVENT TYPE JUNCTION --
INSERT INTO "junction_event_type"
    (type_id, event_id)
VALUES
    (9, 1),
    (10, 2),
    (9, 3),
    (9, 4),
    (3, 5),
    (1, 6),
    (1, 7);

-- DEMO GENDER JUNCTION --
INSERT INTO "junction_event_gender"
    (event_id, gender_id, percentage)
VALUES
    (1, 1, 40),
    (1, 2, 40),
    (1, 3, 20),
    (2, 1, 60),
    (2, 2, 30),
    (2, 3, 10),
    (3, 1, 50),
    (3, 2, 30),
    (3, 3, 20),
    (4, 1, 35),
    (4, 2, 45),
    (4, 3, 20),
    (5, 1, 35),
    (5, 2, 45),
    (5, 3, 20),
    (6, 1, 40),
    (6, 2, 45),
    (6, 3, 25),
    (7, 1, 49),
    (7, 2, 49),
    (7, 3, 2);

-- DEMO RESIDENCY JUNCTION --
INSERT INTO "junction_event_residency"
    (event_id, residency_id, percentage)
VALUES
    (1, 1, 50),
    (1, 2, 50),
    (2, 1, 40),
    (2, 2, 60),
    (3, 1, 25),
    (3, 2, 75),
    (4, 1, 15),
    (4, 2, 85),
    (5, 1, 85),
    (5, 2, 15),
    (6, 1, 75),
    (6, 2, 25),
    (7, 1, 49),
    (7, 2, 51);

-- DEMO INCOME JUNCTION --
INSERT INTO "junction_event_income"
    (event_id, income_range_id, percentage)
VALUES
    (1, 1, 10),
    (1, 2, 15),
    (1, 3, 15),
    (1, 4, 20),
    (1, 5, 20),
    (1, 6, 15),
    (1, 7, 5),
    (2, 1, 5),
    (2, 2, 25),
    (2, 3, 30),
    (2, 4, 20),
    (2, 5, 10),
    (2, 6, 5),
    (2, 7, 5),
    (3, 1, 0),
    (3, 2, 5),
    (3, 3, 5),
    (3, 4, 10),
    (3, 5, 20),
    (3, 6, 35),
    (3, 7, 25),
    (4, 1, 10),
    (4, 2, 45),
    (4, 3, 20),
    (4, 4, 15),
    (4, 5, 6),
    (4, 6, 4),
    (4, 7, 0),
    (5, 1, 10),
    (5, 2, 45),
    (5, 3, 20),
    (5, 4, 15),
    (5, 5, 6),
    (5, 6, 4),
    (5, 7, 0),
    (6, 1, 10),
    (6, 2, 45),
    (6, 3, 20),
    (6, 4, 15),
    (6, 5, 6),
    (6, 6, 4),
    (6, 7, 0),
    (7, 1, 15),
    (7, 2, 40),
    (7, 3, 25),
    (7, 4, 15),
    (7, 5, 4),
    (7, 6, 1),
    (7, 7, 0);

-- DEMO AGE JUNCTION --
INSERT INTO "junction_event_age"
    (event_id, age_range_id, percentage)
VALUES
    (1, 1, 0),
    (1, 2, 25),
    (1, 3, 25),
    (1, 4, 10),
    (1, 5, 20),
    (1, 6, 15),
    (1, 7, 5),
    (2, 1, 5),
    (2, 2, 15),
    (2, 3, 20),
    (2, 4, 20),
    (2, 5, 10),
    (2, 6, 5),
    (2, 7, 5),
    (3, 1, 0),
    (3, 2, 0),
    (3, 3, 10),
    (3, 4, 10),
    (3, 5, 20),
    (3, 6, 35),
    (3, 7, 25),
    (4, 1, 20),
    (4, 2, 45),
    (4, 3, 15),
    (4, 4, 10),
    (4, 5, 5),
    (4, 6, 5),
    (4, 7, 0),
    (5, 1, 25),
    (5, 2, 40),
    (5, 3, 25),
    (5, 4, 10),
    (5, 5, 0),
    (5, 6, 0),
    (5, 7, 0),
    (6, 1, 26),
    (6, 2, 39),
    (6, 3, 25),
    (6, 4, 7),
    (6, 5, 3),
    (6, 6, 0),
    (6, 7, 0),
    (7, 1, 13),
    (7, 2, 42),
    (7, 3, 25),
    (7, 4, 15),
    (7, 5, 4),
    (7, 6, 1),
    (7, 7, 0);

------------------------------
------ SELECT STATEMENTS------
------------------------------

---- GET ALL EVENTS
SELECT *
FROM "event";

---- GET EVENTS with VENUE
SELECT *
FROM "event"
    JOIN venues ON venues.id=event.venue_id;

---- GET EVENTS by Name (SEARCH)
SELECT *
FROM "event"
WHERE event_name
ILIKE '%2021%';

---- GET by State (SEARCH)
SELECT *
FROM "event"
    JOIN venues ON venues.id=event.venue_id
WHERE state
ILIKE '%Minnesota%';

---- GET for Featured EVENTS
SELECT *
FROM "event"
WHERE start_date > NOW()
ORDER BY start_date ASC LIMIT 2;

---- Filter by Date & State
SELECT * FROM "event"
JOIN venues ON venues.id=event.venue_id
WHERE state ILIKE '%Minnesota%'
AND end_date >= '%2021-08-23%'
AND start_date < '%2021-08-28%';

---- Filter by Demo Male > 40% AND city --
SELECT *
FROM junction_event_gender
    JOIN gender AS g ON gender_id = g.id
    JOIN "event" ON "event".id = event_id
    JOIN venues ON venues.id=event.venue_id
WHERE gender='male'
    AND percentage >= 40
    AND city = 'St. Paul';

---- Filter by Demo Female > 30% AND residency out_of_state > 60% --
SELECT *
FROM junction_event_gender
    JOIN gender ON gender_id = gender.id
    JOIN "event" ON "event".id = junction_event_gender.event_id
    JOIN venues ON venues.id=event.venue_id
    JOIN junction_event_residency ON "junction_event_residency".event_id = "event".id
    JOIN residency ON residency.id = residency_id
WHERE gender='female' AND junction_event_gender.percentage >= 30
    AND residency='out_of_state' AND junction_event_residency.percentage >= 60
    AND city = 'St. Paul';

-- Filter by Location, Month, Type, Attendance, Sponsorship Cost, and Household Income -- SUPER FILTER --
SELECT event.id, event_name, start_date, end_date, city, state, event_image_url
FROM "event"
    JOIN venues ON venues.id=event.venue_id
    JOIN sponsorships ON event.id=sponsorships.event_id
    JOIN junction_event_income ON "event".id = junction_event_income.event_id

WHERE state
ILIKE '%Minnesota%' -- State
    
    GROUP BY event.id, venues.city, venues.state;


SELECT event.id, event_name, start_date, end_date, city, state, event_image_url
FROM "event"
    JOIN venues ON venues.id=event.venue_id
    JOIN sponsorships ON event.id=sponsorships.event_id
    JOIN junction_event_income ON "event".id = junction_event_income.event_id
WHERE state ILIKE '%Minnesota%' -- State
    AND end_date >= '%2021-08-01%' -- Date Range Start;
    AND start_date <= '%2021-08-28%' -- Date Range End
    AND estimated_attendance > 500 -- Attendance Start
    AND estimated_attendance < 2000 -- Attendance End
    AND sponsor_price >= 500 -- Sponsorship Start
    AND sponsor_price <= 1500 -- Sponsorship End
    AND income_range_id=3
    AND percentage = 20;
-- Income Range 3(50000-75999) is 20%

---- GET ALL EVENTS
SELECT *
FROM "event";

---- SELECT * WHERE EVENT.ID = $1
SELECT e.*, et.type, v.*,
    json_agg(DISTINCT jsonb_build_object('sponsorship_id', s.id, 'sponsor_name', s.sponsor_name, 'sponsor_price', s.sponsor_price, 'sponsor_image_url', s.sponsor_image_url, 'sponsor_description', s.sponsor_description)) AS sponsorship,
    json_agg(DISTINCT jsonb_build_object('age_range_id', jea.age_range_id, 'age_percentage', jea.percentage, 'age_range', ar.age_range)) AS age,
    json_agg(DISTINCT jsonb_build_object('gender_id', g.id, 'gender', g.gender, 'gender_percentage', jeg.percentage)) AS gender,
    json_agg(DISTINCT jsonb_build_object('income_range_id', ir.id, 'income_range', ir.income_range, 'income_percentage', jei.percentage)) AS income,
    json_agg(DISTINCT jsonb_build_object('residency_id', r.id, 'residency', r.residency, 'residency_percentage', jer.percentage)) AS residency
FROM event AS e
    --TYPE JUNCITON
    JOIN junction_event_type AS jet
    ON e.id = jet.event_id
    --TYPE
    JOIN event_type AS et
    ON jet.type_id = et.id
    --VENUE
    JOIN venues AS v
    ON e.venue_id = v.id
    --AGE RANGE JUNCTION
    JOIN junction_event_age AS jea
    ON e.id = jea.event_id
    --AGE RANGE
    JOIN age_range AS ar
    ON jea.age_range_id = ar.id
    --GENDER JUNCTION
    JOIN junction_event_gender AS jeg
    ON e.id = jeg.event_id
    --GENDER
    JOIN gender AS g
    ON jeg.gender_id = g.id
    --INCOME JUNCTION
    JOIN junction_event_income AS jei
    ON e.id = jei.event_id
    --INCOME RANGE
    JOIN income_range AS ir
    ON jei.income_range_id = ir.id
    --LOCTION JUNCTION
    JOIN junction_event_residency AS jer
    ON e.id = jer.event_id
    --LOCTION
    JOIN residency AS r
    ON jer.residency_id = r.id
    --SPONSORSHIP
    JOIN sponsorships AS s
    ON e.id = s.event_id
WHERE e.id = 1
GROUP BY e.id, v.id, et.type;
SELECT *
FROM "event";

SELECT e.*, et.type, et.id AS type_id, v.*, json_agg(DISTINCT jsonb_build_object('sponsorship_id', s.id, 'sponsor_name', s.sponsor_name, 'sponsor_price', s.sponsor_price, 'sponsor_image_url', s.sponsor_image_url, 'sponsor_description', s.sponsor_description)) AS sponsorship, json_agg(DISTINCT jsonb_build_object('age_range_id', jea.age_range_id, 'age_percentage', jea.percentage, 'age_range', ar.age_range)) AS age, json_agg(DISTINCT jsonb_build_object('gender_id', g.id, 'gender', g.gender, 'gender_percentage', jeg.percentage)) AS gender, json_agg(DISTINCT jsonb_build_object('income_range_id', ir.id, 'income_range', ir.income_range, 'income_percentage', jei.percentage)) AS income, json_agg(DISTINCT jsonb_build_object('residency_id', r.id, 'residency', r.residency, 'residency_percentage', jer.percentage)) AS residency
FROM event AS e
    FULL JOIN junction_event_type AS jet
    ON e.id = jet.event_id
    FULL JOIN event_type AS et
    ON jet.type_id = et.id
    FULL JOIN venues AS v
    ON e.venue_id = v.id
    FULL JOIN junction_event_age AS jea
    ON e.id = jea.event_id
    FULL JOIN age_range AS ar
    ON jea.age_range_id = ar.id
    FULL JOIN junction_event_gender AS jeg
    ON e.id = jeg.event_id
    FULL JOIN gender AS g
    ON jeg.gender_id = g.id
    FULL JOIN junction_event_income AS jei
    ON e.id = jei.event_id
    FULL JOIN income_range AS ir
    ON jei.income_range_id = ir.id
    FULL JOIN junction_event_residency AS jer
    ON e.id = jer.event_id
    FULL JOIN residency AS r
    ON jer.residency_id = r.id
    FULL JOIN sponsorships AS s
    ON e.id = s.event_id
WHERE e.id = 1
GROUP BY e.id, v.id, et.type, et.id;

-- Gets the count of users that need approval
SELECT Count(access_level) as access_lvl_0
FROM "user"
WHERE access_level = 0;

SELECT gender.gender, percentage
FROM junction_event_gender
    JOIN gender on gender_id = gender.id
WHERE event_id = 1;

SELECT junction_event_gender.percentage, gender.gender
from event
    JOIN junction_event_gender
    on junction_event_gender.event_id = event.id
    JOIN gender
    on gender.id = junction_event_gender.gender_id
WHERE event.id = 2;

--INSERT INTO venues
--    (name, address, city, state, zipcode, venue_notes, venue_capacity) VALUES
--    ('Disney World', '1 Mickey', 'Orlando', 'Florida', null, null, null) RETURNING id;

SELECT *
FROM "event"
WHERE event_name
ILIKE '%Minnesota%'
ORDER BY "start_date" DESC;

SELECT event.id, event_name, start_date, end_date, city, state, event_image_url
FROM "event"
    FULL JOIN venues ON venues.id=event.venue_id
    FULL JOIN sponsorships ON event.id=sponsorships.event_id
    FULL JOIN junction_event_income ON "event".id = junction_event_income.event_id
    FULL JOIN junction_event_type ON junction_event_type.event_id = event.id
    FULL JOIN event_type ON junction_event_type.type_id = event_type.id
WHERE state
ILIKE '%%'
    AND
(start_date BETWEEN '2021-01-01' AND '2021-12-31'
    OR '2021-01-01' BETWEEN start_date AND end_date)
    AND estimated_attendance >= 0
    AND estimated_attendance <= 2147483647
    AND
(sponsor_price >= 0 OR sponsor_price ISNULL)
    AND
(sponsor_price <= 2147483647 OR sponsor_price ISNULL)
    AND income_range_id >= 5
    GROUP BY "event".id, venues.city, venues.state, event_type.type
    HAVING SUM
(percentage) >= 20
    ORDER BY start_date DESC
    ;