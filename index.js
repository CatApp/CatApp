// index.js

/**
 * Required External Modules
 */
/**
 * App Variables
 */

//const app = express();
console.log("test1")
var app = require('./app.js')
const port = process.env.PORT || "8000";
console.log("test2")
/**
 *  App Configuration
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "javascripts")));



/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
    res.render("index", { title: "CatApp" });
  });
app.get("/studentinfo", (req, res) => {
    res.render("studentinfo", { title: "studentinfo", studentProfile: { nickname: "TherapistName" } });
  });  
app.get("/filepond", (req, res) => {
    res.render("filepond", { title: "filepond", filepondProfile: { nickname: "Filepond!" } });
  });
app.get("/login", (req, res) => {
  res.render("login", { title: "login", loginProfile: { nickname: "Login!" } });
});


/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });