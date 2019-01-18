// Turn duration of the movies from hours to minutes

// Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  var total = movies.reduce(function(acc, curr) {
    return Number(acc) + Number(curr.rate);
  }, 0);

  var average = total / movies.length;
  return Number(average.toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  var dramas = movies.filter(function(oneMovie) {
    return oneMovie.genre.indexOf("Drama") !== -1;
  });

  if (dramas.length === 0) {
    return undefined;
  }

  return ratesAverage(dramas);
}

// Order by time duration, in growing order
function orderByDuration(movies) {
  var timeSorted = movies.sort(function(a, b) {
    if (a.duration === b.duration) {
      return a.title.localeCompare(b.title);
    }

    return a.duration - b.duration;
  });
  return timeSorted;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
  if (movies.length === 0) {
    return undefined;
  }

  var filtered = movies.filter(function(oneMovie) {
    return (
      oneMovie.genre.includes("Drama") &&
      oneMovie.director === "Steven Spielberg"
    );
  });
  return "Steven Spielberg directed " + filtered.length + " drama movies!";
  // return `Steven Spielberg directed ${filtered.length} drama movies!"`;
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  var sorted = movies.sort(function(a, b) {
    return a.title.localeCompare(b.title);
  });

  var top20 = [];
  var limit = 20;

  if (sorted.length < 20) {
    limit = sorted.length;
  }

  for (var i = 0; i < limit; i++) {
    top20.push(sorted[i].title);
  }
  return top20;
}

// Best yearly rate average
