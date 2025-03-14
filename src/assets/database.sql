create database TAT_AppleStore;

use TAT_AppleStore;

create table role(
	id int AUTO_INCREMENT primary key  ,
    name varchar(20)
);

insert into role(name) values('admin'), ('user'), ('delivery man');

create table account(
	id int primary key auto_increment,
    username varchar(50),
    password varchar(32),
    email varchar(150) unique,
    role_id int,
    FOREIGN KEY (role_id) REFERENCES role(id)
);
insert into account(username, password, email)
values ('admin', 'admin', 'admin@gmail.com');

create table category(
	id int primary key auto_increment,
    name varchar(30),
    banner varchar(50)
);


insert into category(name, banner) values
("iPhone", "../assets/image/Banner/Banner-iPhone.png"), ("iPad", "../assets/image/Banner/Banner-iPad.jpeg"), 
("Apple Watch", "../assets/image/Banner/Banner-AW.png"), ("Macbook", "../assets/image/Banner/Banner-MB.png"), 
("Âm Thanh", "../assets/image/Banner/Banner-AP.jpeg"), ("Phụ Kiện", "../assets/image/Banner/Banner-PK.png");

-- create table products(
-- 	category_id int,
--     foreign key (category_id) references category(id),
-- );