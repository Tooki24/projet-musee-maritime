create table witness
(
    id      int auto_increment
        primary key,
    file    longtext not null,
    boat_id int      null,
    constraint FK_CFF1AA0EA1E84A29
        foreign key (boat_id) references boat (id)
)
    collate = utf8mb4_unicode_ci;

create index IDX_CFF1AA0EA1E84A29
    on witness (boat_id);

INSERT INTO dbsfapi.witness (id, file, boat_id) VALUES (2, 'test', 5);
