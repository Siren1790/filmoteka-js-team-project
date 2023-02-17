/**
 *
 * @param {*} array
 * @returns an object contains key=id & value=genre
 */
function createGenresObject(array) {
  const genres = {};

  array.genres.forEach(({ id, name }) => {
    genres[id] = name;
  });
  return genres;
}

/**
 *
 * @param {*} genres key
 * @returns an object {id: genre} saved in the Local Storage
 */
function saveStorageGenres(genres) {
    const key = 'genres';
    const genresState = JSON.stringify(genres);
    localStorage.setItem(key, genresState);
}



/**
 *
 * @param {*} genre_ids
 * @param {*} loadGenres
 * @returns array of genres and can use for modal
 */
export {saveStorageGenres, createGenresObject}