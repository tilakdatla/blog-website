import express from "express";
import bodyParser from "body-parser";
import fs from "fs";


const blogJson = fs.readFileSync('blogData.json', 'utf8');
let blog = JSON.parse(blogJson);

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get('/', (req, res) => 
{
  res.render("index.ejs", { blog: blog });
});

app.get('/home', (req, res) => {
  res.render("index.ejs");
});

app.get('/about', (req, res) => {
  res.render("about.ejs");
});

app.get('/post/:id', (req, res) => {
  const id = req.params.id;
  res.render("post.ejs", { post: blog[id] });
});


app.get('/contact', (req, res) => {
  res.render("contact.ejs");
});

app.get('/add', (req, res) => {
  // console.log(req.body);
  res.render("addBlog.ejs");
});

function todayDate()
{
  const d = new Date();
  const year = d.getFullYear();
  const month = d.toLocaleString('default', { month: 'long' }); // This will give you the name of the month
  const date = d.getDate();
  const formattedDate = month + ' ' + date + ', ' + year;
  return formattedDate;
}

app.post('/submit', (req, res) => 
{
  var name=req.body.name;
  var title=req.body.title;
  var subtitle=req.body.subtitle;
  var imgsrc=req.body.img;
  var data=req.body.data;
  var date=todayDate();
  
  var datas = { 
    id: blog.length,
    title: title,
    subtitle: subtitle,
    data: data,
    name: name,
    imgSrc: imgsrc,
    date: date,
  }
 
  blog.push(datas);
  // After updating the blog data, write it back to the file
  const blogJson = JSON.stringify(blog);
  fs.writeFileSync('blogData.json', blogJson);
  res.render("index.ejs", { blog: blog });
});


app.get('/edit/:id', (req, res) => {
  const id = req.params.id;
  res.render("update.ejs", { post: blog[id], id: id });
});

app.post('/edit/:id', (req, res) => 
{
  const id = req.params.id;

  var dataToupadte=blog[id];
  dataToupadte.title=req.body.title,
  dataToupadte.subtitle=req.body.subtitle;
  dataToupadte.data=req.body.data;


  const blogJson = JSON.stringify(blog);
  fs.writeFileSync('blogData.json', blogJson);

  res.redirect('/post/' + id);
});

app.post('/delete/:id', (req, res) =>
{
  const id =Number(req.params.id);
  var index=-1;
  for(let i=0;i<blog.length;i++)
  {
    if(id===blog[i].id)
    {
      index=i;
      break;
    }
  }

  blog.splice(index,1);
  const blogJson = JSON.stringify(blog);
  fs.writeFileSync('blogData.json', blogJson);
  
  res.redirect('/');

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


