function Movie(name, imageUrl) {
    const self = this;
    self.name = name;
    self.imageUrl = imageUrl || 'https://www.carlsen.de/sites/default/files/produkt/cover/harry-potter-und-der-halbblutprinz--28harry-potter-6-29.jpg';
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
        new Category('Neue Filme',movies),
        new Category('Derzeit beliebt',movies),
        new Category('Nochmal ansehen',movies),
    ]
}

ko.applyBindings(new ViewModel());

let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})