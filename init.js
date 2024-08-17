const mongoose=require("mongoose");
const Chat = require("./models/chat.js");

main().then(()=>{console.log("connection successful")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

let allChats =[{
    from:"mlbb",
    to:"comlbb",
    msg:"fix the hero bugs",
    created_at:new Date(),
},
{
    from:"yorn",
    to:"rafeliya",
    msg:"help me ",
    created_at:new Date(),
},
{
    from:"gaggar",
    to:"gar",
    msg:"i am going to finish them",
    created_at:new Date(),
},
{
    from:"harzon",
    to:"armor",
    msg:"coming to hunt you",
    created_at:new Date(),
}];

Chat.insertMany(allChats);