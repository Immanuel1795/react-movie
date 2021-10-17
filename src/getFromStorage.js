export const getStorage = (key)=> JSON.parse(localStorage.getItem(key));
export const updateStoredMovies = (updatedMovies) => localStorage.setItem("movies", JSON.stringify(updatedMovies));