create table booking
(
    id           int auto_increment
        primary key,
    boat_id      int          null,
    name         varchar(255) not null,
    phone_number varchar(12)  not null,
    start_date   datetime     not null,
    end_date     datetime     not null,
    nb_person    int          not null,
    constraint FK_E00CEDDEA1E84A29
        foreign key (boat_id) references boat (id)
)
    collate = utf8mb4_unicode_ci;

create index IDX_E00CEDDEA1E84A29
    on booking (boat_id);

