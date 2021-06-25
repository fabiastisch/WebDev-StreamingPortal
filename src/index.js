function Movie(name,imageUrl,erscheinungsjahr,regissuer,darsteller) {
    const self = this;
    self.name = name;
    self.imageUrl = imageUrl || 'https://www.carlsen.de/sites/default/files/produkt/cover/harry-potter-und-der-halbblutprinz--28harry-potter-6-29.jpg';
    self.regissuer = regissuer;
    self.erscheinungsjahr = erscheinungsjahr;
    self.darsteller = darsteller;
    self.showDetails = ko.observable(false);
    self.toggleShowDetails = ()=> this.showDetails(!this.showDetails());

}

function Category(name, movieList) {
    const self = this;
    self.name = name;
    self.movies = movieList;
}

const newMovies = [
    new Movie('Matrix','https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaAH0z2TBGfYQ1SSyEviGRqz0k3ga7kKmazBPzDNkAVwtt70F3KXB0Ub1O2Akn08ANdcI55Fuaafb9kbvFdSx4-aKKs.webp?r=3c7'),
    new Movie('Jumanji: Willkommen im Dschungel', 'https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRjVuvJiO3XrSoEcxr-c1Z9OA4BHFc5jAObF34S8K5BVn8XQmFGUmSzMdxJ2GTa0eaxuWmza-DSG_q1wq48LhalHopw.webp?r=f91'),
    new Movie('Spiderman', 'https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRvaoNK3u4OYoJiGvi-lgBk8UvP_AX-wRydFR6JPlzGtsKbq2cEgfgQjjLn8cxzsitAy21mOUfhVgimQP3i0xkvRwl8.webp?r=b15'),
    new Movie('Joker', 'https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR2nSiCtQ3GReBLQXDLBAcOHLVNK-0HrI--JXgJAiNcxWKyYZfGu1A-YV8JOB4o_PaExFc6QeAsylpMPsuR2um27j9a2KTLMX2Zn1CjdXWrGCytPEZ9ZDOGOM7xHyZSXtSEnwYhK8lEXCMATnwrrANKVj7c.webp?r=e68'),
    new Movie('Kingsman', 'https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVtuR2bY26OwBOWABUphXPZKZ84lOEoPDWJqRdEW5t29tLVii0ctf2DZyqBK8g52XbKMS2pxaen0OAr50frMEVx5rIc.webp?r=5be'),
    new Movie('Maze Runner', 'https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSIXkJdhZMQk5b5pJCDZz8HCTFYO1P_dQXQBzk7Od7hLh9WOVu6G4JOyEacy7_DEVGqECvXbL8OdLd8NCdBtViXmybM.webp?r=a01'),

];

const watchAgainMovies = [
    new Movie('Avengers Endgame'),
    new Movie('Avengers Infinity War'),
    new Movie('Deadpool'),
    new Movie('Deadpool 2'),
    new Movie('Matrix'),
    new Movie('Spiderman'),
    new Movie('Spiderman 2'),
];

const trendyMovies = [
    new Movie('Joker',"https://m.media-amazon.com/images/I/514c0f7PX6L.jpg"),
    new Movie('The Forest',"https://m.media-amazon.com/images/I/514c0f7PX6L.jpg"),
    new Movie('Forrest Gump',"https://m.media-amazon.com/images/I/514c0f7PX6L.jpg"),
    new Movie('Iron Man',"https://m.media-amazon.com/images/I/514c0f7PX6L.jpg"),
    new Movie('Shrek Der tollkühne Held',"https://m.media-amazon.com/images/I/514c0f7PX6L.jpg"),
    new Movie('The Wolf of Wall Street',"https://m.media-amazon.com/images/I/514c0f7PX6L.jpg"),
    new Movie('Harry Potter und der Stein der Weisen',"https://m.media-amazon.com/images/I/514c0f7PX6L.jpg"),
];

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

/*

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
            const minPerSlide = 7
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
*/
