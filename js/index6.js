const users = [
  {
    id: "usr_101",                  //users.map((user) => user.address.zip)
    name: "Aria Stark",             //users.map((user)=> user.orders.map((order)=>order.orderId))
    email: "aria@example.com",
    role: "admin",
    active: true,
    address: { city: "Winterfell", country: "Westeros", zip: "10001" },
    orders: [
      { orderId: "ord_1", total: 120.50, status: "delivered" },
      { orderId: "ord_2", total: 45.00, status: "delivered" }
    ],
    tags: ["premium", "early-adopter"]
  },
  {
    id: "usr_102",
    name: "Liam Chen",
    email: "liam.c@example.com",
    role: "customer",
    active: true,
    address: { city: "Toronto", country: "Canada", zip: "M5V 2T6" },
    orders: [
      { orderId: "ord_3", total: 210.00, status: "pending" }
    ],
    tags: ["newsletter-subscriber"]
  },
  {
    id: "usr_103",
    name: "Sophia Martinez",
    email: "sophia@example.com",
    role: "customer",
    active: false,
    address: { city: "Madrid", country: "Spain", zip: "28001" },
    orders: [],
    tags: []
  },
  {
    id: "usr_104",
    name: "Devon Vance",
    email: "devon@example.com",
    role: "editor",
    active: true,
    address: { city: "Austin", country: "USA", zip: "78701" },
    orders: [
      { orderId: "ord_4", total: 15.99, status: "delivered" },
      { orderId: "ord_5", total: 89.00, status: "shipped" },
      { orderId: "ord_6", total: 130.00, status: "delivered" }
    ],
    tags: ["premium", "beta-tester"]
  },
  {
    id: "usr_105",
    name: "Zoya Patel",
    email: "zoya.p@example.com",
    role: "customer",
    active: true,
    address: { city: "London", country: "UK", zip: "EC1A 1BB" },
    orders: [
      { orderId: "ord_7", total: 340.00, status: "delivered" }
    ],
    tags: ["vip"]
  }
];

// console.log("zip codes :", users.map((user) => user.address.zip))

// console.log("order ids", users.map((user) => `${user.name} :${user.orders.map(
//   (order) => (`${order.orderId}`)
// )}`))

// console.log("delivered orders:", users.map((user) => `${user.name} :  ${user.orders.filter((order) => order.status === "delivered").map((order) => order.orderId)}`));


// console.log("Total amount collected", users.map((user) => user.orders.reduce((total, order) => total + order.total, 0)).reduce((total, value) => total + value, 0))

//user.map => user values => user.orders.map => orderIds

// console.log("order ids", users.map((user) => (user.name, ":", user.orders.map((order) => (order.orderId)))))
console.log("Hello, JavaScript!");

const obj1 = [{
  "name": "Shoeb",
  "age": 22,
  "designation": "Frontend",
  "level": "easy"
},
{
  "name": "Saketh",
  "age": 25,
  "designation": "Backend",
  "level": "hard"
},
{
  "name": "Ganesh",
  "age": 22,
  "designation": "Backend",
  "level": "medium"
},
{
  "name": "Charan",
  "age": 21,
  "designation": "BDE 1",
  "level": "easy"
},
{
  "name": "Shoeb",
  "age": 22,
  "designation": "Frontend",
  "level": "easy"
},
{
  "name": "Garima",
  "age": 22,
  "designation": "UI/UX",
  "level": "easy"
}]

const priority = { "easy": 1, "medium": 2, "hard": 3 }
//sort by level
const sorted = [...obj1].sort((a, b) => priority[a.level] - priority[b.level])
const sortedAge = obj1.sort((a, b) => a.age - b.age)
console.log(sorted)
console.log(sortedAge)

