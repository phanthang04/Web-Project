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

create table products(
	id int, 
    category_id int,
    foreign key (category_id) references category(id),
    tittle varchar(50),
    image1 varchar(100),
    image2 varchar(100),
    image3 varchar(100),
    video varchar(100)
);

insert into products values 
(1, 1, "iPhone 16", "../assets/image/iPhone/iPhone16 series/iPhone 16/16-shared-1.jpeg","../assets/image/iPhone/iPhone16 series/iPhone 16/16-shared-2.jpeg","../assets/image/iPhone/iPhone16 series/iPhone 16/16-shared-3.jpeg","../assets/image/iPhone/iPhone16 series/iPhone 16/16-shared-4.jpeg");

create table product_colors(
	category_id int,
    product_id int,
    color nvarchar(20),
    color_image varchar(100),
    image4 varchar(100),
    image5 varchar(100),
    image6 varchar(100)
);

insert into product_colors values
(1, 1, "Đen", "../assets/image/iPhone/iPhone16 series/iPhone 16/Black/black-color.png","../assets/image/iPhone/iPhone16 series/iPhone 16/Black/black-16.jpeg","../assets/image/iPhone/iPhone16 series/iPhone 16/Black/black-16-1.jpeg","../assets/image/iPhone/iPhone16 series/iPhone 16/Black/black-16-2.jpeg");

create table product_storages(
	category_id int,
    product_id int,
    storage varchar(10),
    price int
);

insert into product_storages values
(1, 1,"128 GB", 19790000),
(1, 1,"256 GB", 22990000),
(1, 1, "512 GB",28990000);