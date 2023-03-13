create table if not exists cats(
    id bigserial primary key,
    name text not null,
    age text not null
)