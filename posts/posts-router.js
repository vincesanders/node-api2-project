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
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: "The posts information could not be retrieved." });
    });
});

//Returns the post object with the specified id.
router.get('/:id', (req, res) => {
    database.findById(req.params.id).then(post => {
        //returns an array
        if (post.length > 0) {
            res.status(200).json(post[0]);
        } else {
            res.status(404).json({ message: "The post with the specified ID does not exist." });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: "The post information could not be retrieved." });
    });
});

//Creates a post using the information sent inside the request body.
router.post('/', (req, res) => {
    if (!req.body.title || !req.body.contents) {
        res.status(404).json({ errorMessage: "Please provide title and contents for the post." });
    } else {
        database.insert(req.body).then(({ id }) => {
            //return the newly created post.
            database.findById(id).then(post => {
                //returns an array
                if (post.length > 0) {
                    res.status(201).json(post);
                } else {
                    res.status(404).json({ message: "Something went wrong when trying to retrieve the new post by id." });
                }
            }).catch(err => {
                console.log(err);
                res.status(500).json({ error: "The new post's information could not be retrieved." });
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json({ error: "There was an error while saving the post to the database" });
        });
    }
});

//Updates the post with the specified id using data from the request body. Returns the modified document, NOT the original.
router.put('/:id', (req, res) => {
    if (!req.body.title || !req.body.contents) {
        res.status(400).json({ errorMessage: "Please provide title and contents for the post." });
    } else {
        database.update(req.params.id, req.body).then(() => {
            //returns 1 if successful

            //check there is a post with this id and return it
            database.findById(req.params.id).then(post => {
                //returns an array
                if (post.length > 0) {
                    //return the modified post.
                    res.status(201).json(post);
                } else {
                    res.status(404).json({ message: "The post with the specified ID does not exist." });
                }
            }).catch(err => {
                console.log(err);
                res.status(500).json({ message: "Something went wrong. There was an error when trying to find a post with the specified ID." });
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json({ error: "The post information could not be modified." });
        });
    }
});

//Removes the post with the specified id and returns the deleted post object.
//You may need to make additional calls to the database in order to satisfy this requirement.
router.delete('/:id', (req, res) => {
    //check if there is a post with this id
    database.findById(req.params.id).then(post => {
        //returns an array
        if (post.length > 0) {
            //post found
            database.remove(req.params.id).then(() => {
                //returns number of items deleted
                res.status(200).json(post[0]);
            }).catch(err => {
                console.log(err);
                res.status(500).json({ error: "The post could not be removed" });
            });
        } else {
            res.status(404).json({ message: "The post with the specified ID does not exist." });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: "The post could not be removed" });
    });
});

/* ############### COMMENTS ############### */

//Returns an array of all the comment objects associated with the post with the specified id.
router.get('/:id/comments', (req, res) => {
    database.findById(req.params.id).then(post => {
        //returns an array
        if (post.length > 0) {
            //the post exists
            database.findPostComments(req.params.id).then(comments => {
                res.status(200).json(comments);
            }).catch(err => {
                console.log(err);
                res.status(500).json({ error: "The comments information could not be retrieved." });
            });
        } else {
            res.status(404).json({ message: "The post with the specified ID does not exist." });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: "The post information could not be retrieved." });
    });
});

//Creates a comment for the post with the specified id using information sent inside of the request body.
router.post('/:id/comments', (req, res) => {
    if (!req.body.text) {
        res.status(400).json({ errorMessage: "Please provide text for the comment." });
    } else {
        database.findById(req.params.id).then(post => {
            //returns an array
            if (post.length > 0) {
                //the post exists
                //make sure the comment includes the post id
                const commentToAdd = {...req.body, post_id: parseInt(req.params.id)}
                database.insertComment(commentToAdd).then(({ id }) => {
                    database.findCommentById(id).then(commentArr => {
                        res.status(201).json(commentArr[0]);
                    }).catch(err => {
                        console.log(err);
                        res.status(500).json({ error: "The comment information could not be retrieved." })
                    });
                }).catch(err => {
                    console.log(err);
                    res.status(500).json({ error: "There was an error while saving the comment to the database" });
                });
            } else {
                res.status(404).json({ message: "The post with the specified ID does not exist." });
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json({ error: "The post information could not be retrieved." });
        });
    }
});

module.exports = router;