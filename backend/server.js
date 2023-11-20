const express = require('express');
const app = express();
const cors = require('cors');
const receipt = require('./bill');// schema of the document. old schema was 'bills'
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors()); // Use the cors middleware

// mongoose.connect('mongodb://127.0.0.1:27017/monthbill'); // via LocalHost



// Replace '<password>' with your actual database user password
const connectionURL = 'mongodb+srv://danielowusu1759:ct2203@code-cluster.zdowcz5.mongodb.net/utility?retryWrites=true&w=majority';

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((error) => {
  console.error('Error connecting to MongoDB Atlas:', error);
});





// Define your routes here

// Route to create a new bill
app.post('/postbill', async (req, res) => {
    try {
        const { month, electricity, water, action, actionDate } = req.body;
        const bill = await receipt.create({
            month,
            electricity,
            water,
            action,
            actionDate,
        });

        // Log the entire bill object, including the generated _id
        console.log('Newly created bill:', bill);

        res.json(bill); // Return the newly created bill in the response
    } catch (error) {
        console.error('Error creating bill', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});




// Route to get all bills
app.get('/getbill', async (req, res) => {
    try {
        const allBills = await receipt.find();
        res.json(allBills);
        console.log('Got bill:', allBills);
    } catch (error) {
        console.error('Error fetching bills', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


//Route to update a bill by ID
app.put('/editbill/:id', async (req, res) => {
    console.log(req.params);
    try {
        const { id } = req.params;
        const{month,water,electricity,actionDate}=req.body
      const updatedBill = await receipt.findByIdAndUpdate(id ,{month,actionDate,water,electricity}); // Use req.body directly
      res.json(updatedBill);
    } catch (error) {
      console.error('Error updating bill', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

//Route to delete a bill by ID
app.delete('/delete/:id', async (req, res) => {

    try {
        const { id } = req.params;
        const deletedBill = await receipt.findByIdAndDelete(id);
        res.json(deletedBill);
    } catch (error) {
        console.error('Error deleting bill', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});


 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  const { ObjectId } = require('mongodb');
//  const { MongoClient } = require('mongodb');

// // Database connection
// let db;


// MongoClient.connect('mongodb://127.0.0.1:27017/monthbill')
//   .then((client) => {
//     db = client.db();
//     console.log('Connected to the database');

//     // Start the server after the database connection is established
//     app.listen(5000, () => {
//       console.log('Server is running on port 5000');
//     });
//   })
//   .catch((err) => {
//     console.error('Failed to connect to the database', err);
//   });

// // Routes


// app.post('/bills', (req, res) => {
//     const newData = req.body; // Assuming the data sent by the client is in the request body
//     db.collection('bills')
//       .insertOne(newData)
//       .then((result) => {
//           res.json(result); // Respond with the newly added data
//       })
//       .catch((error) => {
//         console.error('Error adding data', error);
//         res.status(500).json({ error: 'Internal server error' });
//       });
//   });
  


// app.get('/bills', (req, res) => {
//   db.collection('bills')
//     .find()
//     .toArray()
//     .then((result) => {
//       res.json(result);
//     })
//     .catch((error) => {
//       console.error('Error retrieving data', error);
//       res.status(500).json({ error: 'Internal server error' });
//     });
// });



// app.delete('/bills/:id', (req, res) => {
//     const documentId = req.params.id; // Get the document's _id from the request parameters
//     const objectId = ObjectId.createFromHexString(documentId); // Convert the string to ObjectId
//     console.log('Document ID to be deleted:', documentId); // Log the document ID to the console

//     db.collection('bills')
//       .deleteOne({ _id:objectId  }) // Use _id as the field name
//       .then((result) => {
//         res.json(result);
//       })
//       .catch((error) => {
//         console.error('Error retrieving data', error);
//         res.status(500).json({ error: 'Internal server error' });
//       });
//   });
  

// // api/server.js
// const express = require('express');
// const cors = require('cors');
// const receipt = require('./bill');
// const mongoose = require('mongoose');

// const app = express();

// app.use(express.json());
// app.use(cors());

// const connectionURL = 'mongodb+srv://danielowusu1759:ct2203@code-cluster.zdowcz5.mongodb.net/utility?retryWrites=true&w=majority';

// mongoose.connect(connectionURL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('Connected to MongoDB Atlas');
// }).catch((error) => {
//   console.error('Error connecting to MongoDB Atlas:', error);
// });

// // Define your routes here

// // Route to create a new bill
// app.post('/api/postbill', async (req, res) => {
//   try {
//     const { month, electricity, water, action, actionDate } = req.body;
//     const bill = await receipt.create({
//       month,
//       electricity,
//       water,
//       action,
//       actionDate,
//     });

//     // Log the entire bill object, including the generated _id
//     console.log('Newly created bill:', bill);

//     res.json(bill); // Return the newly created bill in the response
//   } catch (error) {
//     console.error('Error creating bill', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Route to get all bills
// app.get('/api/getbill', async (req, res) => {
//   try {
//     const allBills = await receipt.find();
//     res.json(allBills);
//     console.log('Got bill:', allBills);
//   } catch (error) {
//     console.error('Error fetching bills', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Route to update a bill by ID
// app.put('/api/editbill/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { month, water, electricity, actionDate } = req.body;
//     const updatedBill = await receipt.findByIdAndUpdate(id, { month, actionDate, water, electricity });
//     res.json(updatedBill);
//   } catch (error) {
//     console.error('Error updating bill', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Route to delete a bill by ID
// app.delete('/api/delete/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedBill = await receipt.findByIdAndDelete(id);
//     res.json(deletedBill);
//   } catch (error) {
//     console.error('Error deleting bill', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Example serverless function
// module.exports = async (req, res) => {
//   try {
//     const allBills = await receipt.find();
//     res.json(allBills);
//     console.log('Got bill:', allBills);
//   } catch (error) {
//     console.error('Error fetching bills', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };
