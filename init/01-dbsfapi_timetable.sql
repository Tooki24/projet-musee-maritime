create table timetable
(
    id            int auto_increment
        primary key,
    opening_hours time         not null,
    closing_hours time         not null,
    day           varchar(255) not null
)
    collate = utf8mb4_unicode_ci;

INSERT INTO dbsfapi.timetable (id, opening_hours, closing_hours, day) VALUES (7, '09:00:00', '19:00:00', 'Lundi');
INSERT INTO dbsfapi.timetable (id, opening_hours, closing_hours, day) VALUES (8, '09:00:00', '19:00:00', 'Mardi');
INSERT INTO dbsfapi.timetable (id, opening_hours, closing_hours, day) VALUES (9, '09:00:00', '19:00:00', 'Mercredi');
INSERT INTO dbsfapi.timetable (id, opening_hours, closing_hours, day) VALUES (10, '09:00:00', '19:00:00', 'Jeudi');
INSERT INTO dbsfapi.timetable (id, opening_hours, closing_hours, day) VALUES (11, '09:00:00', '19:00:00', 'Vendredi');
INSERT INTO dbsfapi.timetable (id, opening_hours, closing_hours, day) VALUES (12, '09:00:00', '19:00:00', 'Samedi');
INSERT INTO dbsfapi.timetable (id, opening_hours, closing_hours, day) VALUES (13, '08:00:00', '19:00:00', 'Dimanche');
