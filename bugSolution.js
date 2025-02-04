const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  //Check if userId is a valid number
  if (isNaN(userId) || userId <=0){
    return res.status(400).json({ error: 'Invalid user ID' }); 
  }
  // ...rest of the code, now with error handling
  //Example
  res.json({ id: userId });
});