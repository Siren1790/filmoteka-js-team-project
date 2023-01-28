/**
 *
 * @param {*} array
 * @returns an object contains key=id & value=genre
 */
function createGenresObject(array) {
  const genres = {};

  array.forEach(({ id, name }) => {
    genres[id] = name;
  });
  console.log('Genres created Object: ', genres);
  return genres;
}

/**
 *
 * @param {*} genres key
 * @returns an object {id: genre} saved in the Local Storage
 */
function saveStorageGenres(genres) {
  try {
    const key = 'genres';
    const genresState = JSON.stringify(genres);
    return localStorage.setItem(key, genresState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

export { saveStorageGenres, createGenresObject };
