const express = require('express');
const database = require('../data/db');

/* database methods 
    find,
    findById,
    insert,
    update,
    remove,
    findPostComments,
    findCommentById,
    insertComment,
*/
const router = express.Router();

//Returns an array of all the post objects contained in the database.
router.get('/', (req, res) => {
    database.find().then(posts => {
        res.status(200).json(posts);
    }).catch(error => {
        console.log(error);
        res.status(500).json({ message: 'Error retrieving the posts' });
    });
});

//Returns the post object with the specified id.
router.get('/:id', (req, res) => {
    database.findById(req.params.id).then(post => {
        //returns an array
        if (post.length > 0) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    }).catch(error => {
        console.log(error);
        res.status(500).json({ message: 'Error retrieving the post' });
    });
});

//Creates a post using the information sent inside the request body.
router.post('/', (req, res) => {

});

//Updates the post with the specified id using data from the request body. Returns the modified document, NOT the original.
router.put('/:id', (req, res) => {

});

//Removes the post with the specified id and returns the deleted post object.
//You may need to make additional calls to the database in order to satisfy this requirement.
router.delete('/:id', (req, res) => {

});

/* ############### COMMENTS ############### */

//Returns an array of all the comment objects associated with the post with the specified id.
router.get('/:id/comments', (req, res) => {

});

//Creates a comment for the post with the specified id using information sent inside of the request body.
router.post('/:id/comments', (req, res) => {

});

module.exports = router;