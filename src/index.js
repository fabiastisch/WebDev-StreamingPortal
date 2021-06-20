function Movie(name) {
    const self = this;
    self.name = name;
}

function Category(name, movieList) {
    const self = this;
    self.name = name;
    self.movies = movieList;
}

const movies = [
    new Movie('Harry Potter 1'),
    new Movie('Harry Potter 2'),
    new Movie('Harry Potter 3'),
    new Movie('Harry Potter 4'),
    new Movie('Harry Potter 5'),
    new Movie('Harry Potter 6'),
    new Movie('Harry Potter 7'),
]

function ViewModel() {
    const self = this;
    self.categories = [
        new Category('Test1',movies),
        new Category('Test1',movies),
        new Category('Test1',movies),
    ]
}

ko.applyBindings(new ViewModel());