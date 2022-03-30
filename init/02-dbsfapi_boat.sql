create table boat
(
    id             int auto_increment
        primary key,
    name           varchar(255) not null,
    details        longtext     null,
    lauch_year     date         not null,
    owner_name     varchar(255) not null,
    length         int          not null,
    materials      varchar(255) null,
    type           varchar(255) not null,
    restoration    date         null,
    nb_max_visitor int          not null,
    is_bookable    tinyint(1)   not null,
    longitude      int          not null,
    latitude       int          not null
)
    collate = utf8mb4_unicode_ci;

INSERT INTO dbsfapi.boat (id, name, details, lauch_year, owner_name, length, materials, type, restoration, nb_max_visitor, is_bookable, longitude, latitude) VALUES (4, 'France 1', 'Ultime navire météorologique stationnaire français, classé Monument Historique le 24 02 04', '2022-03-28', 'ville de La Rochelle', 76.2, 'Acier', 'Navires météorologique stationnaire', '2022-03-28', 20, 1, 46.154694, -1.151519);
INSERT INTO dbsfapi.boat (id, name, details, lauch_year, owner_name, length, materials, type, restoration, nb_max_visitor, is_bookable, longitude, latitude) VALUES (5, 'Saint Gilles', 'Dernier remorqueur portuaire et de haute mer à moteur réversible. Il fut à moteur réversible. Il fut lané par les Ateliers et Chantiers de La Rochelle-Palice. Classé Monument Historique', '1959-03-21', 'ville de La Rochelle', 30.3, 'Acier', 'Remorqueur portuaire et de haute mer', '2013-03-15', 21, 1, -6.754712, 39.272075);
INSERT INTO dbsfapi.boat (id, name, details, lauch_year, owner_name, length, materials, type, restoration, nb_max_visitor, is_bookable, longitude, latitude) VALUES (6, 'TD6', 'La vielle drague à vapuer de La Rochelle, témoin de la lutte contre l''envasement que mènent avec acharnement depuis des siècles les hommes de nos ports. Classée Monument Historique ', '2022-03-16', 'ville de La Rochelle', 35.8, 'Bois', 'Remorqueur portuaire et de haute mer', '2016-03-24', 12, 1, 46.158766, -1.210711);
INSERT INTO dbsfapi.boat (id, name, details, lauch_year, owner_name, length, materials, type, restoration, nb_max_visitor, is_bookable, longitude, latitude) VALUES (7, 'Joshua', 'Joshua est le ketch du navigateur Bernard Moitessier, construit en 1962 au chantier Meta, avec lequel il participe au Golden Globe Challenge et fait le tour du monde.', '1962-03-08', '	Bernard Moitessier', 16, 'Acier', 'Plaisance/voilier/ketch
', '2015-03-20', 12, 1, 43.314114, 5.359007);
INSERT INTO dbsfapi.boat (id, name, details, lauch_year, owner_name, length, materials, type, restoration, nb_max_visitor, is_bookable, longitude, latitude) VALUES (8, 'Capitaine de frégate Leverger
', 'Cet ancien canot "tous temps" de la SNSM identique à celui de la Rochelle est un don de la glorieuse société de sauvetage en mer', '1954-03-13', 'SNSM', 14, 'Acajou/cuivre
', 'Canot de sauvetage tous temps
', '2012-03-21', 7, 0, 44.65341, -1.138208);
INSERT INTO dbsfapi.boat (id, name, details, lauch_year, owner_name, length, materials, type, restoration, nb_max_visitor, is_bookable, longitude, latitude) VALUES (9, 'Angoumois', 'Premier et ultime chalutier pêche arrière à rampe et pont couvert de la pêche industrielle rochelaise. Ce navire fut construit pour le grand armement des ARPV', '1969-03-14', 'ARPV, Association Rochelaise de Pêche à Vapeur', 38, 'Acier', 'Chalutier pêche arrière à pont couvert', '2019-03-28', 10, 1, 46.147472, -1.165138);
INSERT INTO dbsfapi.boat (id, name, details, lauch_year, owner_name, length, materials, type, restoration, nb_max_visitor, is_bookable, longitude, latitude) VALUES (10, 'Manuel Joël', 'Amarré au quai du Musée maritime de La Rochelle, le Manuel Joël est un bateau en bois et l''un des derniers témoins des chalutiers pêche latérale, dits « classiques ».', '1954-03-11', 'Armement Henri Teillet
', 19.3, 'Bois chêne', 'Chalutier classique
', '2011-03-11', 2, 1, 46.151562, -1.152285);
INSERT INTO dbsfapi.boat (id, name, details, lauch_year, owner_name, length, materials, type, restoration, nb_max_visitor, is_bookable, longitude, latitude) VALUES (11, 'Vedette Duperré', 'Ce joli canot symbolise les liens de La Rochelle avec l''ex-escorteur d''escadre Duperré dont la ville était marraine. Confié au Musée maritime en 1994, il est classé au titre des monuments historiques depuis le 6 décembre 2012. Il profite actuellement d''une restauration complète.', '1954-03-04', 'Marine Nationale', 8.53, 'Bois', '« Canot Major Duperré » Type Vedette', null, 4, 1, 46.150697, -1.151575);
