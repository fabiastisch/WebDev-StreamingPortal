function Movie(name,imageUrl,erscheinungsjahr,regissuer,darsteller) {
    const self = this;
    self.name = name;
    self.imageUrl = imageUrl || 'https://www.carlsen.de/sites/default/files/produkt/cover/harry-potter-und-der-halbblutprinz--28harry-potter-6-29.jpg';
    self.regissuer = regissuer;
    self.erscheinungsjahr = erscheinungsjahr;
    self.darsteller = darsteller;
}

function Category(name, movieList) {
    const self = this;
    self.name = name;
    self.movies = movieList;
}

const newMovies = [
    new Movie('Luca',"https://lumiere-a.akamaihd.net/v1/images/image_2ff75a5c.jpeg?region=0%2C0%2C540%2C810"),
    new Movie('A Family',"https://www.whats-on-netflix.com/wp-content/uploads/2021/06/Japanese-Crime-Drama-Movie-A-Family-Everything-We-Know-So-Far-poster.png"),
    new Movie('Fatherhood'),
    new Movie('Twist'),
    new Movie('Life in a Year'),
    new Movie('Awake'),
    new Movie('Playhouse'),
]

const watchAgainMovies = [
    new Movie('Avengers Endgame'),
    new Movie('Avengers Infinity War'),
    new Movie('Deadpool'),
    new Movie('Deadpool 2'),
    new Movie('Matrix'),
    new Movie('Spiderman'),
    new Movie('Spiderman 2'),
]

const trendyMovies = [
    new Movie('Joker',"https://m.media-amazon.com/images/I/514c0f7PX6L.jpg"),
    new Movie('The Forest',"https://m.media-amazon.com/images/I/514c0f7PX6L.jpg"),
    new Movie('Forrest Gump',"https://m.media-amazon.com/images/I/514c0f7PX6L.jpg"),
    new Movie('Iron Man',"https://m.media-amazon.com/images/I/514c0f7PX6L.jpg"),
    new Movie('Shrek Der tollkühne Held',"https://m.media-amazon.com/images/I/514c0f7PX6L.jpg"),
    new Movie('The Wolf of Wall Street',"https://m.media-amazon.com/images/I/514c0f7PX6L.jpg"),
    new Movie('Harry Potter und der Stein der Weisen',"https://m.media-amazon.com/images/I/514c0f7PX6L.jpg"),
]

function ViewModel() {
    const self = this;
    self.categories = [
        new Category('Neue Filme',newMovies),
        new Category('Derzeit beliebt',trendyMovies),
        new Category('Nochmal ansehen',watchAgainMovies),
    ]
}

const viewModel = new ViewModel();
ko.applyBindings(viewModel);


viewModel.categories.forEach((value, index) => {
    let elements = document.getElementById('carouselrow' + index);
    //console.log(items)
    let items = [];
    elements.childNodes.forEach(el=> {
        if (el.className == 'carousel-item' ||el.className == 'carousel-item active' ) {
            items.push(el)
        }
    });

    items.forEach(el => {
            const minPerSlide = 6
            let next = el.nextElementSibling
            for (var i = 1; i < minPerSlide; i++) {
                if (!next) {
                    // wrap carousel by using first child
                    next = items[0]

                }
                let cloneChild = next.cloneNode(true)
                //  console.log(el);
                el.appendChild(cloneChild.children[0])
                next = next.nextElementSibling
            }
    });
});


/*
let items = document.querySelectorAll('.carousel .carousel-item')


items.forEach((el) => {
    const minPerSlide = 6
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
*/
