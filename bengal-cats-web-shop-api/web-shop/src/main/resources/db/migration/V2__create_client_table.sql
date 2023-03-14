create table if not exists clients(
   id bigserial primary key,
   firstName text not null,
   lastName text not null,
   nationality text not null,
   email text not null
)