function function(flight_length, movie_lengths) {
    n_movies = len(movie_lengths);
    for (i in range(n_movies)) {
        for (j in range(n_movies)) {
            if (i != j) {
                if (movie_lengths[i] + movie_lengths[j] == flight_length) {
                    return true;
    return false;
                }
movie_lengths = [1, 7, 3, 4];
flight_length = 7;
console.log(function(flight_length, movie_lengths));
            }
        }

    }

}
