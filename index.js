import express from "express";

const app = express();

const port = 3000;
// app.get("/", (req, res) => {
//     res.send("Hello Neha you won cookies 🍪");
// });


// app.get("/choki", (req,res) => {
//     res.send("You won choki 🍫");
// })

// app.get("/chips", (req,res) => {
//     res.send("You won chips 🍟");
// })
app.use(express.json())

let chipsData = [];
let nextId = 1;


//add a new chips
app.post("/chips", (req,res) => {
     const {name, price} = req.body
    const newChips = {id: nextId++, name, price}
    chipsData.push(newChips)
    res.status(201).send(newChips)
})


//route to get all chips
app.get("/chips", (req,res) => {
    res.status(200).send(chipsData)

})


//get a chips with id
app.get('/chips/:id', (req,res) => {
    const chips = chipsData.find(c => this.id === parseInt(req.params.id))
    if(!chips){
        return res.status(404).send("Chips not found")
    }
    res.status(200).send(chips)
})

//update chips
app.put('/chips/:id', (req,res) => {
    const chips = chipsData.find(c => this.id === parseInt(req.params.id)) 
    if(!chips){
        return res.status(404).send("Chips not found")
    }
    const {name, price} = req.body
    chips.name = name
    chips.price = price
    res.status(200).send(chips)
})

//delete chips
app.delete('/chips/:id', (req,res) => {
    const chips = chipsData.find(c => this.id === parseInt(req.params.id)) 
    if(index === -1){
        return res.status(404).send("Chips not found")
    }
    chipsData.splice(index, 1)
    // chipsData = chipsData.filter(c => c.id !== req.params.id)
    return res.status(204).send("Chips deleted")
})

app.listen(port, () =>{
    console.log(`Server is running at port: ${port}`);
})