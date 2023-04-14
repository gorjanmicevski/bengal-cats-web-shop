drop table if exists cats;
create table if not exists cats(
    id bigserial primary key,
    name text not null,
    description text,
    age text not null,
    price float not null,
    status text not null
)