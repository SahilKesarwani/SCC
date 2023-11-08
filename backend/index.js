const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Server is running');
})

const port = 4598;
app.listen(port, () => console.log(`App is listening on port ${port}`));
