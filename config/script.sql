drop schema if exists alistar_milks;
drop user if exists alistar_milks;
CREATE SCHEMA alistar_milks;
USE alistar_milks;

create user 'MILKS_ADMIN'@'%' identified by 'K7$9P#xY&2@zR!sW';

grant all privileges on alistar_milks.* to 'MILKS_ADMIN'@'%';
flush privileges;

-- Tables creation

 