import express from "express";
import axios from "axios"
import bodyParser from "body-parser";

const app = express()

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }));

app
.get("/",(req,res) =>{
    res.render("home.ejs")
})
.get("/about",(req,res) =>{
    res.render("about.ejs")
})
.get("/languages",(req,res) =>{
    res.render("languages.ejs" ,{languagesArray: languagesArray})
})
.get("/projects",(req,res) =>{
    res.render("projects.ejs",{projectsArray : projectsArray})
})
.get("/contact",(req,res) =>{
    res.render("contact.ejs")
})
.get("/certification",(req,res) =>{
    res.render("certification.ejs")
})

app.listen(3000,()=>{
    console.log("Server started on port 3000");
})


//Following is to proccess the "dog-api"

/// Body parser to parse incoming form
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/dog-api", async (req,res) =>{
    // If the home route is targeted,we get the normal index.ejs
    res.render("index.ejs")
})

app.post("/random",async (req,res)=>{
    // To see what we get from the post request
    console.log(req.body.dogs);

    // Axios promise function
    try {
        // API from https://dog.ceo/dog-api/
      const result = await axios.get("https://dog.ceo/api/breed/"+req.body.dogs+"/images/random");
    //   Get image url
      const img = result.data.message
    //   The req.body.dogs is to update the header with Ejs templating
      res.render("index.ejs", { imgUrl: img , header : req.body.dogs});
    } catch (error) {
        // Logs the error
      console.log(error.response.data);
    //   Renders the error for the user so that the know what is going on.
      res.render("index.ejs", { error : error.response.data.message});
    }
})












var languagesArray = [
{
        language:"HyperText Markup Language",
        icon:'<path fill-rule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z"/>',
        rating:"★★★★★",
        className:"html-gradient-background",
}
,
{
    language:"Bootstrap",
    icon:"",
    rating:"★★★★★",
    className:"boot-gradient-background",}
,
{
    language:"Cascading Style Sheet",
    icon:"",
    rating:"★★★★☆",
    className:"css-gradient-background"
}
,{
    language:"Node",
    icon:"",
    rating:"★★★★★",
    className:"node-gradient-background"
}
,{
    language:"React",
    icon:"",
    rating:"★★★★★",
    className:"react-gradient-background"
}
,{
    language:"DOM",
    icon:"",
    rating:"★★★★★",
    className:"dom-gradient-background"
}
,{
    language:"SQL",
    icon:"",
    rating:"★★★★★",
    className:"sql-gradient-background"
}
,{
    language:"Express",
    icon:"",
    rating:"★★★★★",
    className:"express-gradient-background"
},
{
    language:"OAuth",
    icon:"",
    rating:"★★★★★",
    className:"auth-gradient-background"
}
]


var projectsArray = [
    {
        name:"Move It",
        link:"/Move-it/index.html",
        description:"A simple yet eye-catching website for a moving company based in the US.The website has been designed to be responsive for different viewing experiences",
        imgSrc:"./assets/move-with-joy.png"
    },
    {
        name:"TinDog",
        link:"/TinDog/index.html",
        description:"A fun and and intriguing turn on the social app 'TINDER',where you can get a friend or even a soulmate for your dog,WOOF!",
        imgSrc:"./assets/tindog.png"
    },
    {
        name:"Simon Game",
        link:"/Simon/index.html",
        description:"A new iteration of the old-timey game 'Simon',this on is just online :)",
        imgSrc:"assets/simon-game.png"
    },
    {
        name:"Public Dog API",
        link:"/dog-api",
        description:"Get random pictures of a certain dog breed via API!",
        imgSrc:"./assets/dog-breed-api.png"
    },
    {
        name:"Keeper App",
        link:"https://58bxk.csb.app/",
        description:"My own twist on Google's keeper App.This projects uses React and UseState to function and is hosted on Sandbox.io!",
        imgSrc:"./assets/keeper-app.png"
    }
    
    
]