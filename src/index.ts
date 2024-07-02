import app from './app.js';
import { connectionToDatabase } from './db/connection.js';

connectionToDatabase().then(()=>{
  app.listen(5000,()=>console.log("Server conected"));

}).catch(err=>console.log(err));



