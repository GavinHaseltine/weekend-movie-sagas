const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
    let id = req.params.id
    const query = `SELECT movies_genres.movie_id, genres.name
    FROM movies_genres
    JOIN genres ON movies_genres.genre_id = genres.id
    WHERE movies_genres.movie_id = ${id}
    ORDER BY movies_genres.movie_id ASC;`;
    pool.query(query)
      .then( result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all movies', err);
        res.sendStatus(500)
      })
  });

module.exports = router;