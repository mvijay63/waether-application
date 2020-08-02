const hbs = require("hbs")
const path = require("path")
const express = require("express")
const location = require("./utils/location")
const forecast = require("./utils/forecast")
const app = express()
const publicDir = path.join(__dirname , "../public")
app.use(express.static(publicDir))
app.set('view engine' , 'hbs')

const partialsDir = path.join(__dirname , "../views/partials")
hbs.registerPartials(partialsDir)

app.get('' , (req , res) => {
   res.render('index' , {title : "Home"}) 
})

app.get('/about' , (req , res) => {
   res.render('about' , {title : "About"}) 
 })

 app.get('/weather' , (req , res) => {
   res.render('weather' , {title : "Weather"}) 
 })

 app.get('/portfolio' , (req , res) => {
  res.render('portfolio' , {title : "Portfolio"}) 
})

app.get('/contact' , (req , res) => {
  res.render('contact' , {title : "Contact"}) 
})

app.get('/forecast' , (req , res) => {
  if(!req.query.location){
    res.send({message : "Please enter a location"})
  }else{
    location(req.query.location , (data) => {
      forecast(data , ({current , location} = {}) => {
        if(location !== undefined){
          res.send({forecast : current , location : location})
        }else{
          res.send({message : "Location not found. Try another location !!"})
        }
      })
  })
  }
})

app.get('*' , (req , res) => {
  res.render('404' , {title : "Not Found"}) 
})

app.listen(3000 , () => {
    console.log("working")
})