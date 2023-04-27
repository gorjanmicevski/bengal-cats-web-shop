drop table if exists clients;
create table if not exists clients(
   id bigserial primary key,
   first_name text not null,
   last_name text not null,
   country text not null,
   email text not null
)