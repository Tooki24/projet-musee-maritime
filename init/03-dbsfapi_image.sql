create table image
(
    id      int auto_increment
        primary key,
    name    varchar(255) not null,
    boat_id int          null,
    file    varchar(255) not null,
    constraint FK_C53D045FA1E84A29
        foreign key (boat_id) references boat (id)
)
    collate = utf8mb4_unicode_ci;

create index IDX_C53D045FA1E84A29
    on image (boat_id);

INSERT INTO dbsfapi.image (id, name, boat_id, file) VALUES (8, 'France 1', 4, 'gallery/navires/france1.jpg');
INSERT INTO dbsfapi.image (id, name, boat_id, file) VALUES (9, 'Saint Gilles', 5, 'gallery/navires/saint-gilles.jpg');
INSERT INTO dbsfapi.image (id, name, boat_id, file) VALUES (10, 'TD6', 6, 'gallery/navires/td6.jpg');
INSERT INTO dbsfapi.image (id, name, boat_id, file) VALUES (11, 'Joshua', 7, 'gallery/navires/joshua.jpg');
INSERT INTO dbsfapi.image (id, name, boat_id, file) VALUES (12, 'Capitaine de frégate Leverger
', 8, 'gallery/navires/capitaine_de_fregate.jpg');
INSERT INTO dbsfapi.image (id, name, boat_id, file) VALUES (13, 'Angoumois', 9, 'gallery/navires/angoumois.jpg');
INSERT INTO dbsfapi.image (id, name, boat_id, file) VALUES (14, 'Manuel Joël', 10, 'gallery/navires/manuel-Joel.jpg');
INSERT INTO dbsfapi.image (id, name, boat_id, file) VALUES (15, 'Vedette Duperré', 11, 'gallery/navires/vedette_duperre.jpg');
