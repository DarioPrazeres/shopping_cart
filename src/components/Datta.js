import redDress from "../img/redDress.jpg";
//import bag_2 from "../img/bag-2.jpg";
import blackStyle_1 from "../img/blackStyle-1.jpg";
import blackStyle from "../img/blackStyle.jpg";
import blue from "../img/blue.jpg";
import clock from "../img/clock.jpg";
//import glass_1 from "../img/glass-1.jpg";
import glass_2 from "../img/glass-2.jpg";
import glass_3 from "../img/glass-3.jpg";
import glass_4 from "../img/glass-4.jpg";
import golden from "../img/golden.jpg";
//import model_4 from "../img/model-4.jpg";
import pink from "../img/pink.jpg";
import redDress_1 from "../img/redDress-1.jpg";
import shoe_1 from "../img/shoe-1.jpg";
import shoe_2 from "../img/shoe-2.jpg";
//import shoe_3 from "../img/shoe-3.jpg";
const colections = [];
const colection_1 =[];
const colection_2 =[];

const product_1 = {
    id: 1, name: "Mila dual pocket", price: 74.99, srcImage: pink, qtd:0
}
const product_2 = {
    id: 2, name: "Claire high heels shoes", price: 64.99, srcImage: shoe_2, qtd:0
}
const product_3 = {
    id: 3, name: "Donna gold frame", price: 40.00, srcImage: glass_3, qtd:0
}
const product_4 = {
    id: 4, name: "Dora black gradient eyewear", price: 48.99, srcImage: glass_2, qtd:0
}
const product_5 = {
    id: 5, name: "Alnih night dress navy", price: 199.99, srcImage: blue, qtd:0
}
const product_6 = {
    id: 7, name: "Gold night party dress", price: 74.99, srcImage: golden, qtd:0
}
const product_7 = {
    id: 8, name: "Noorin gold ring wacth", price: 99.99, srcImage: clock, qtd:0
}
const product_8 = {
    id: 9, name: "Solla outdoor sunglasses", price: 64.99, srcImage: glass_4, qtd:0
}
const product_9 = {
    id: 10, name: "Claire high heels shoes", price: 64.99, srcImage: shoe_2, qtd:0
}
const product_10 = {
    id: 11, name: "Scarlett red long dress", price: 119.99, srcImage: redDress_1, qtd:0
}
const product_11 = {
    id: 12, name: "Benne long sleeve shirt black", price: 87.99, srcImage: blackStyle_1, qtd:0
}
const product_12 = {
    id: 13, name: "Black high heels shoes", price: 69.99, srcImage: shoe_1, qtd:0
}
colection_1.push(product_1);
colection_1.push(product_2);
colection_1.push(product_3);
colection_1.push(product_4);
colection_1.push(product_5);
colection_1.push(product_6);
colection_2.push(product_7);
colection_2.push(product_8);
colection_2.push(product_9);
colection_2.push(product_10);
colection_2.push(product_11);
colection_2.push(product_12);
colections.push(colection_1);
colections.push(colection_2);

export {colections, redDress, blackStyle};