function Movie(name,erscheinungsjahr,regissuer,darsteller,imageUrl) {
    const self = this;
    self.name = name;
    self.imageUrl = imageUrl || 'https://www.carlsen.de/sites/default/files/produkt/cover/harry-potter-und-der-halbblutprinz--28harry-potter-6-29.jpg';
    self.regissuer = regissuer;
    self.erscheinungsjahr = erscheinungsjahr;
    self.darsteller = darsteller;
    self.showDetails = ko.observable(false);
    self.toggleShowDetails = () => this.showDetails(!this.showDetails());

}

function Category(name, movieList) {
    const self = this;
    self.name = name;
    self.movies = movieList;
}

const newMovies = [
        new Movie('Matrix', '1999', 'Die Wachowskis', [
                'Keanu Reeves: Thomas A. „Neo“ Anderson/Neo',
                'Laurence Fishburne: Morpheus',
                'Carrie-Anne Moss: Trinity',
                'Hugo Weaving: Agent Smith',
                'Gloria Foster: Das Orakel',
                'Paul Goddard: Agent Brown',
                'Robert Taylor: Agent Jones',
                'Joe Pantoliano: Cypher',
                'Marcus Chong: Tank',
                'Belinda McClory: Switch',
            ],
            'https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaAH0z2TBGfYQ1SSyEviGRqz0k3ga7kKmazBPzDNkAVwtt70F3KXB0Ub1O2Akn08ANdcI55Fuaafb9kbvFdSx4-aKKs.webp?r=3c7'
        ),
        new Movie('Jumanji: Willkommen im Dschungel', '2017', 'Jake Kasdan',
            [
                'Dwayne Johnson: Dr. Smolder Bravestone',
                'Jack Black: Prof. Sheldon „Shelly“ Oberon',
                'Kevin Hart: Franklin „Mouse“ Finbar',
                'Karen Gillan: Ruby Roundhouse',
                'Nick Jonas: Jefferson „Seaplane“ McDonough',
                'Bobby Cannavale: Russel Van Pelt',
                'Alex Wolff: Spencer',
                'Madison Iseman: Bethany Walker',
                'Ser’Darius Blain: Anthony „Fridge“ Johnson',
                'Morgan Turner: Martha',
                'Missi Pyle: Coach Webb',
                'Rhys Darby: Nigel Billingsley',
                'Colin Hanks: Alex Vreeke',
                'Marin Hinkle: Spencers Mutter'
            ],
            'https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRjVuvJiO3XrSoEcxr-c1Z9OA4BHFc5jAObF34S8K5BVn8XQmFGUmSzMdxJ2GTa0eaxuWmza-DSG_q1wq48LhalHopw.webp?r=f91'),
        new Movie('Spider-Man: Far From Home', '2019', 'Jon Watts', [
            'Tom Holland: Peter Parker / Spider-Man',
            'Jake Gyllenhaal: Quentin Beck / Mysterio',
            'Jacob Batalon: Ned Leeds',
            'Zendaya: Michelle „MJ“ Jones',
            'Tony Revolori: Flash Thompson',
            'Angourie Rice: Betty Brant',
            'Marisa Tomei: Tante May',
            'Samuel L. Jackson: Nick Fury',
            'Cobie Smulders: Maria Hill',
            'Martin Starr: Mr. Harrington',
            'Jon Favreau: Harold „Happy“ Hogan',
            'Numan Acar: Dimitri',
            'J. B. Smoove: Mr. Dell',
            'Remy Hii: Brad Davis',
            'J. K. Simmons: J. Jonah Jameson',
            'Ben Mendelsohn: Talos',
            'Sharon Blynn: Soren'
        ], 'https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRvaoNK3u4OYoJiGvi-lgBk8UvP_AX-wRydFR6JPlzGtsKbq2cEgfgQjjLn8cxzsitAy21mOUfhVgimQP3i0xkvRwl8.webp?r=b15'),
        new Movie('Joker','2019', 'Todd Phillips',[
            'Joaquin Phoenix: Arthur Fleck / Joker',
            'Robert De Niro: Murray Franklin',
            'Zazie Beetz: Sophie Dumond',
            'Brett Cullen: Thomas Wayne',
            'Frances Conroy: Penny Fleck',
            'Josh Pais: Hoyt Vaughn',
            'Brian Tyree Henry: Carl',
            'Sharon Washington: Sozialarbeiterin',
            'Douglas Hodge: Alfred Pennyworth',
            'Dante Pereira-Olson: Bruce Wayne',
            'Bill Camp: Detective Garrity',
            'Shea Whigham: Detective Burke',
            'Glenn Fleshler: Randall',
            'Leigh Gill: Gary',
            'Marc Maron: Gene Ufland',
            'Hannah Gross: Penny Fleck (jung)'
        ],'https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR2nSiCtQ3GReBLQXDLBAcOHLVNK-0HrI--JXgJAiNcxWKyYZfGu1A-YV8JOB4o_PaExFc6QeAsylpMPsuR2um27j9a2KTLMX2Zn1CjdXWrGCytPEZ9ZDOGOM7xHyZSXtSEnwYhK8lEXCMATnwrrANKVj7c.webp?r=e68'),
        new Movie('Kingsman','2014','Matthew Vaughn',[
          'Colin Firth: Harry „Galahad“ Hart',
          'Taron Egerton: Gary „Eggsy“ Unwin',
          'Samuel L. Jackson: Richmond Valentine',
          'Mark Strong: Merlin',
          'Mark Hamill: Professor James Arnold',
          'Sofia Boutella: Gazelle',
          'Michael Caine: Chester „Arthur“ King',
          'Sophie Cookson: Roxanne „Roxy“ Morton, „Lancelot“',
          'Jack Davenport: Lancelot',
          'Samantha Womack: Michelle Unwin',
          'Tom Prior: Hugo',
          'Richard Brake: Vernehmungsbeamter',
          'Hanna Alström: Prinzessin Tilde von Schweden',
          'Bjørn Floberg: Premierminister'
        ], 'https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVtuR2bY26OwBOWABUphXPZKZ84lOEoPDWJqRdEW5t29tLVii0ctf2DZyqBK8g52XbKMS2pxaen0OAr50frMEVx5rIc.webp?r=5be'),
        new Movie('Maze Runner','2014','Wes Ball',[
            'Dylan O’Brien: Thomas',
            'Kaya Scodelario: Teresa',
            'Thomas Brodie-Sangster: Newt',
            'Will Poulter: Gally',
            'Aml Ameen: Alby',
            'Ki Hong Lee: Minho',
            'Blake Cooper: Chuck',
            'Dexter Darden: Pfanne',
            'Patricia Clarkson: Ava Paige'
        ], 'https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSIXkJdhZMQk5b5pJCDZz8HCTFYO1P_dQXQBzk7Od7hLh9WOVu6G4JOyEacy7_DEVGqECvXbL8OdLd8NCdBtViXmybM.webp?r=a01'),

    ]
;

const watchAgainMovies = [
    new Movie('Shazam!',"2019","David F. Sandberg",[
        'Zachary Levi: Billy Batson als Shazam',
        'Asher Angel: Billy Batson',
        'Jack Dylan Grazer: Freddy Freeman',
        'Mark Strong: Dr. Thaddeus Sivana',
        'Djimon Hounsou: Der Zauberer Shazam',
        'Cooper Andrews: Victor Vasquez',
        'Marta Milans: Rosa Vasquez',
        'Grace Fulton: Mary Bromfield',
        'Faithe Herman: Darla Dudley',
        'Ian Chen: Eugene Choi',
        'Jovan Armand: Pedro Peña',
        'Evan Marsh: Burke Breyer',
        'Carson MacCormac: Brett Breyer',
        'John Glover: Thaddeus’ Vater',
        'Caroline Palmer: Billys Mutter',
        'Lotta Losten: Dr. Lynn Crosby',
        'David Kohlsmith: junger Billy Batson',
        'Ethan Pugiotto junger Thaddeus Sivana',
        'Natalia Safran: Mrs. Sivana',
        'Adam Brody: Freddy Shazam',
        'Ross Butler: Eugene Shazam',
        'Michelle Borth: Mary Shazam',
        'D. J. Cotrona: Pedro Shazam',
        'Meagan Good: Darla Shazam',
        'Ryan Handley: Superman (Cameo)'
    ],"https://occ-0-4416-4415.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZavr2MjdiAB5yp8UwCjRgvmZ41kZ0kfs_yPpHGHzxf4l_uuB4v6652QWCYjxgBr-Axb8FJXFWURtpZQySuv6CboHOI.webp?r=534"),
    new Movie('Iron Man 2',"2010","Jon Favreau",[
        "Robert Downey Jr.: Anthony „Tony“ Stark / Iron Man",
        "Mickey Rourke: Ivan Vanko / Whiplash",
        "Don Cheadle: Lt. Col. James „Rhodey“ Rhodes / War Machine",
        "Sam Rockwell: Justin Hammer" ,
        "Gwyneth Paltrow: Virginia „Pepper“ Potts" ,
        "Scarlett Johansson: Natasha Romanoff / „Natalie Rushman“ / Black Widow",
        "Leslie Bibb: Christine Everhart",
        "Samuel L. Jackson: Nick Fury",
        "Clark Gregg: Agent Phil Coulson",
        "John Slattery: Howard Stark",
        "Garry Shandling: Senator Stern",
        "Jon Favreau: „Happy“ Hogan",
        "Kate Mara: U.S. Marshal (Cameo)",
        "Stan Lee: Stan Lee (Cameo)",
        "Elon Musk: er selbst (Cameo)",
        "Max Favreau: Peter Parker"
    ],"https://occ-0-4416-4415.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXpSNKa6bc_6Kzj4GzMy6hF3vtr9T1XbFIK7DcfWvWLkV3cKb1UrlaMOjICTy3rRWI2lVISO63oJLGvw6xJDd6O40ds.webp?r=9d1"),
    new Movie('The Forrest',"2016","Jason Zada",[
        "Natalie Dormer: Sara/Jess Price",
        "Taylor Kinney: Aiden",
        "Yukiyoshi Ozawa: Michi",
        "Eoin Macken: Rob",
        "Stephanie Vogt: Valerie",
        "Noriko Sak: Mayumi",
        "Gen Seto: Narusawa Barkeeper",
        "Rina Takasaki: Hoshiko"
    ],"https://occ-0-4416-4415.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ1VZjictLM4o-Xu9HieVq4S0Ds-__bs2T2V61XXEEkph3sGM-I1N2rew-HmTivaH-ux2t2YiGZYxJ_2ItKk0ftWLhM.webp?r=aad"),
    new Movie('The Dark Knight',"2008","Christopher Nolan",[
        "Christian Bale: Bruce Wayne / Batman",
        "Heath Ledger: Joker",
        "Gary Oldman: James „Jim“ Gordon",
        "Aaron Eckhart: Harvey Dent / Two-Face",
        "Maggie Gyllenhaal: Rachel Dawes",
        "Michael Caine: Alfred Pennyworth",
        "Morgan Freeman: Lucius Fox",
        "Eric Roberts: Salvatore „Sal“ Maroni",
        "Nestor Carbonell: Bürgermeister Garcia",
        "Chin Han: Yinglain Lau",
        "Joshua Harto: Coleman Reese",
        "Keith Szarabajka: Detective Stephens",
        "Monique Curnen: Det. Anna Ramirez",
        "Ritchie Coster: Tschetschenischer Mafiaboss",
        "Michael Jai White: Gambol",
        "Anthony Michael Hall: Mike Engel",
        "Colin McFarlane: Commissioner Gillian B. Loeb",
        "Cillian Murphy: Jonathan Crane / Scarecrow",
        "Nathan Gamble: Jimmy Gordon",
        "Melinda McGraw: Barbara Gordon",
        "William Fichtner: Bankdirektor",
        "Thomas Lister junior: Fähren-Häftling",
        "Beatrice Rosen: Natascha",
        "Patrick Leahy: Mann auf der Party",
        "David Dastmalchian: Thomas Schiff"
        ],"https://occ-0-4416-4415.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZefmD2oL1KdFtyzLaD-hbrNrhDe9rRwc_wrbCdpBtJO_6l6Q_vzukl7c3OkO6-HDDp-n1olTXEgXkHsQg-liMv-BZA.jpg?r=e70"),
    new Movie('Forrest Gump',"1994","Robert Zemeckis",[
        "Tom Hanks: Forrest Gump",
        "Robin Wright: Jenny Curran" ,
        "Gary Sinise: Lt. Dan Taylor",
        "Sally Field: Mrs. Gump",
        "Mykelti Williamson: Benjamin Buford Blue „Bubba“",
        "Michael Conner Humphreys: Forrest (Kind)",
        "Hanna R. Hall: Jenny (Kind)",
        "Sam Anderson: Mr. Hancock",
        "Dick Cavett: Dick Cavett",
        "Haley Joel Osment: Forrest Gump jr."
    ],"https://occ-0-4416-4415.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWSCe9HDKdTzu9R3_KKQQyWafidk7DrlCPjQdkYfTkyBmiXimAsN-1gcBxGepxWWVUDXgx7bs9MLI1JYCiGfg_xJ3-I.jpg?r=6ee"),
    new Movie('Iron Man 3',"2013","Shane Black",[
        "Robert Downey Jr.: Tony Stark / Iron Man",
        "Guy Pearce: Aldrich Killian",
        "Rebecca Hall: Maya Hansen",
        "Gwyneth Paltrow: Pepper Potts",
        "Jon Favreau: Happy Hogan",
        "Paul Bettany: J.A.R.V.I.S. (Stimme)",
        "Ben Kingsley: Trevor Slattery / Mandarin",
        "Don Cheadle: James Rhodes / War Machine",
        "James Badge Dale: Eric Savin",
        "Stephanie Szostak: Brandt",
        "William Sadler: US-Präsident Ellis",
        "Miguel Ferrer: Vizepräsident Rodriguez",
        "Shaun Toub: Yinsen",
        "Ty Simpkins: Harley Keener",
        "Mark Ruffalo: Bruce Banner (Cameo)"
    ],"https://occ-0-4416-4415.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVmiUSI-4dMzbZKASVGw0edwpC1wRttIjXE3RbuIZMOR7XXmKBdNon2dUawOlIr8NbY5CaQuIXESd8XEQdl1PV6h4HM.jpg?r=772"),
    new Movie('Spider-Man: Homecoming',"2017","Jon Watts",[
        "Tom Holland",
        "Michael Keaton",
        "Jon Favreau",
        "Gwyneth Paltrow",
        "Zendaya",
        "Donald Glover",
        "Jacob Batalon",
        "Laura Harrier",
        "Tony Revolori",
        "Bokeem Woodbine",
        "Tyne Daly",
        "Marisa Tomei",
        "Robert Downey Jr."
    ],"https://occ-0-4416-4415.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbJpC21jeJPsH8cGAQTx-ijtJsdeXfoZD4mMkuqzDGW421Sx5R_YITSCyOcqmP1h8T6EGBqsUr0pHVIUl526afu7PyA.webp?r=98a"),
];

const trendyMovies = [
    new Movie('Joker', "https://m.media-amazon.com/images/I/514c0f7PX6L.jpg"),
    new Movie('The Forest', "https://m.media-amazon.com/images/I/514c0f7PX6L.jpg"),
    new Movie('Forrest Gump', "https://m.media-amazon.com/images/I/514c0f7PX6L.jpg"),
    new Movie('Iron Man', "https://m.media-amazon.com/images/I/514c0f7PX6L.jpg"),
    new Movie('Shrek Der tollkühne Held', "https://m.media-amazon.com/images/I/514c0f7PX6L.jpg"),
    new Movie('The Wolf of Wall Street', "https://m.media-amazon.com/images/I/514c0f7PX6L.jpg"),
    new Movie('Harry Potter und der Stein der Weisen', "https://m.media-amazon.com/images/I/514c0f7PX6L.jpg"),
];

function ViewModel() {
    const self = this;
    self.categories = [
        new Category('Neue Filme', newMovies),
        new Category('Derzeit beliebt', trendyMovies),
        new Category('Nochmal ansehen', watchAgainMovies),
    ]
    self.selectedMovie = ko.observable(null);
}

const viewModel = new ViewModel();
ko.applyBindings(viewModel);