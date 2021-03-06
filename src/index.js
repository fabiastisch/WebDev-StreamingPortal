function Movie(name,erscheinungsjahr,regissuer,darsteller,imageUrl,beschreibung) {
    const self = this;
    self.name = name;
    self.imageUrl = imageUrl;
    self.regissuer = regissuer;
    self.erscheinungsjahr = erscheinungsjahr;
    self.darsteller = darsteller;
    self.beschreibung = beschreibung;
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
            ,"Die Matrix ist eine virtuelle Welt, die von Maschinen mit künstlicher Intelligenz erschaffen wurde. Die Menschen \"leben\" in dieser Welt, die sich für sie real anfühlt. In Wirklichkeit werden aber die Menschen von Maschinen gezüchtet und dienen als Energiequelle."
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
            'https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRjVuvJiO3XrSoEcxr-c1Z9OA4BHFc5jAObF34S8K5BVn8XQmFGUmSzMdxJ2GTa0eaxuWmza-DSG_q1wq48LhalHopw.webp?r=f91',
    "Dieses Dschungelabenteuer steckt voller Herausforderungen. Vier Teenager in Gestalt ihrer Avatare müssen es mit Nilpferden, Nashörnern, Jaguaren aufnehmen, im Hubschrauber durch einen Canyon fliegen und mit ihren Spieler-Leben sparsam haushalten, denn jeder hat nur drei."),
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
        ], 'https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRvaoNK3u4OYoJiGvi-lgBk8UvP_AX-wRydFR6JPlzGtsKbq2cEgfgQjjLn8cxzsitAy21mOUfhVgimQP3i0xkvRwl8.webp?r=b15',
        "Spider-Man: Far From Home ist ein Superhelden-Film von Jon Watts mit Tom Holland, Zendaya und Jake Gyllenhaal. Spider-Man: Far From Home führt Tom Holland für einen Schulausflug nach Europa, wo er sich mit Jake Gyllenhaal einem Kampf gegen die Elemente stellen muss."),
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
        ],'https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR2nSiCtQ3GReBLQXDLBAcOHLVNK-0HrI--JXgJAiNcxWKyYZfGu1A-YV8JOB4o_PaExFc6QeAsylpMPsuR2um27j9a2KTLMX2Zn1CjdXWrGCytPEZ9ZDOGOM7xHyZSXtSEnwYhK8lEXCMATnwrrANKVj7c.webp?r=e68',
            "Joker ist eine US-amerikanische Comicverfilmung von Todd Phillips aus dem Jahr 2019, basierend auf Figuren aus dem DC-Universum. Der Film erzählt die Ursprungsgeschichte von Arthur Fleck, dargestellt von Joaquin Phoenix, der unter dem Namen Joker später der notorische Gegenspieler von Batman wird."),
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
        ], 'https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVtuR2bY26OwBOWABUphXPZKZ84lOEoPDWJqRdEW5t29tLVii0ctf2DZyqBK8g52XbKMS2pxaen0OAr50frMEVx5rIc.webp?r=5be',
            "Handlung. Kingsman ist eine geheime, regierungsunabhängige Organisation, die nach dem Ersten Weltkrieg von Englands Adelshäusern gegründet wurde, um das Land vor Gefahren zu schützen. Ihre Mitglieder genießen eine Ausbildung zum Gentleman-Spion und tragen die Namen von Personen der Artussage."),
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
        ], 'https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSIXkJdhZMQk5b5pJCDZz8HCTFYO1P_dQXQBzk7Od7hLh9WOVu6G4JOyEacy7_DEVGqECvXbL8OdLd8NCdBtViXmybM.webp?r=a01',
            "2018 folgte der abschließende Teil Maze Runner – Die Auserwählten in der Todeszone. Der Film erzählt die Geschichte des Jungen Thomas, der ohne Erinnerungen auf einer Lichtung erwacht und fortan zusammen mit einer Gruppe anderer Jungen versucht, dem umgebenden Labyrinth und den dort lauernden Gefahren zu entrinnen."),

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
    ],"https://occ-0-4416-4415.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZavr2MjdiAB5yp8UwCjRgvmZ41kZ0kfs_yPpHGHzxf4l_uuB4v6652QWCYjxgBr-Axb8FJXFWURtpZQySuv6CboHOI.webp?r=534",
        "Der 14-jährige Billy Batson (Asher Angel) ist ein Waisenjunge und lebt bei einer Pflegefamilie. Doch als er eines Tages auf einen jahrhundertealten Magier (Djimon Hounsou) trifft, verleiht ihm dieser eine mysteriöse Macht. Fortan kann sich Billy, wenn er das Wort SHAZAM!"),
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
    ],"https://occ-0-4416-4415.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXpSNKa6bc_6Kzj4GzMy6hF3vtr9T1XbFIK7DcfWvWLkV3cKb1UrlaMOjICTy3rRWI2lVISO63oJLGvw6xJDd6O40ds.webp?r=9d1",
        "„Happy“ Hogan (Jon Favreau) ist ein ehemaliger Boxer und der Chauffeur und Leibwächter Tony Starks. In Iron Man 2 trägt er in Monaco die „Aktentasche“, in der sich Tonys „Mark V“-Rüstung verbirgt, mit sich und bringt diese seinem Arbeitgeber, als dieser auf der Rennstrecke von Ivan Vanko angegriffen wird."),
    new Movie('The Forest',"2016","Jason Zada",[
        "Natalie Dormer: Sara/Jess Price",
        "Taylor Kinney: Aiden",
        "Yukiyoshi Ozawa: Michi",
        "Eoin Macken: Rob",
        "Stephanie Vogt: Valerie",
        "Noriko Sak: Mayumi",
        "Gen Seto: Narusawa Barkeeper",
        "Rina Takasaki: Hoshiko"
    ],"https://occ-0-4416-4415.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ1VZjictLM4o-Xu9HieVq4S0Ds-__bs2T2V61XXEEkph3sGM-I1N2rew-HmTivaH-ux2t2YiGZYxJ_2ItKk0ftWLhM.webp?r=aad",
        "Die Amerikanerin Sara Price erhält einen Anruf aus Japan, wonach ihre Zwillingsschwester Jess den Aokigahara-Wald am Rande des Fuji betreten haben und nicht wieder herausgekommen sein soll. ... Gegen den Willen ihres Verlobten fliegt Sara nach Japan, da sie nicht an Jess' Tod glaubt."),
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
        ],"https://occ-0-4416-4415.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZefmD2oL1KdFtyzLaD-hbrNrhDe9rRwc_wrbCdpBtJO_6l6Q_vzukl7c3OkO6-HDDp-n1olTXEgXkHsQg-liMv-BZA.jpg?r=e70",
        "The Dark Knight ist ein Actionfilm aus dem Jahr 2008 von Christopher Nolan mit Christian Bale, Heath Ledger und Aaron Eckhart. Im zweiten Teil von Christopher Nolans Batman-Trilogie, The Dark Knight, versucht Heath Ledger als Joker Gotham City ins Chaos zu stürzen und Batmans Pläne zu vereiteln."),
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
    ],"https://occ-0-4416-4415.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWSCe9HDKdTzu9R3_KKQQyWafidk7DrlCPjQdkYfTkyBmiXimAsN-1gcBxGepxWWVUDXgx7bs9MLI1JYCiGfg_xJ3-I.jpg?r=6ee",
        "Forrest geht durch Vietnam, wie er durch seine Kindheit gegangen ist, wie er Football oder Tischtennis gespielt hat, wie er in einer TV-Show auftritt, wie er anderen sein Leben erzählt. Er stellt sich. Manchmal wirkt er wie eine Art Stehaufmännchen, das sich durch nichts unterkriegen lässt."),
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
    ],"https://occ-0-4416-4415.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVmiUSI-4dMzbZKASVGw0edwpC1wRttIjXE3RbuIZMOR7XXmKBdNon2dUawOlIr8NbY5CaQuIXESd8XEQdl1PV6h4HM.jpg?r=772",
        "Milliardär, Lebemann und Superheld Tony Stark (Robert Downey Jr.) hat sich in den vergangenen Monaten immer mehr in sein Luxusdomizil über der Küste Miamis zurückgezogen. ... Nun muss Tony Stark beweisen, dass er nicht erst durch den Anzug zum „Iron Man“ wird, sondern auch so das Zeug zum Helden hat."),
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
    ],"https://occ-0-4416-4415.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbJpC21jeJPsH8cGAQTx-ijtJsdeXfoZD4mMkuqzDGW421Sx5R_YITSCyOcqmP1h8T6EGBqsUr0pHVIUl526afu7PyA.webp?r=98a",
        "Spider-Man: Homecoming erzählt die Geschichte des fünfzehn jährigen Schülers und Superhelden Peter Parker alias Spider-Man nach dem Zwist der Avengers weiter. In den Hauptrollen sind unter anderem Tom Holland, Marisa Tomei,Michael Keaton, Zendaya, Jacob Batalon, Tony Revolori und Laura Harrier zu sehen."),
];

const trendyMovies = [
    new Movie("Angry Birds","2016","Clay Kaytis, Fergal Reilly",[
        "Jason Sudeikis",
        "Josh Gad",
        "Danny McBride",
        "Maya Rudolph",
        "Kate McKinnon",
        "Sean Penn",
        "Tony Hale",
        "Keegan-Michael Key",
        "Bill Hader",
        "Peter Dinklage"
    ],"https://occ-0-4416-4415.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdqahlR-g0n6Z66HJezEBgXSnJvQzecvQb_xIQfKs5kzxLJm7anPjzjebmQBUfG4d6Oc2_C7sgjo1oRad99YOUT_eYA.webp?r=acb",
        "In dem Abenteuerfilm ANGRY BIRDS geht es um einen grimmigen Vogel namens Red, der schon früher als Außenseiter galt. Da Red aggressiv ist, wird er zu einer Anti-Aggressions-Therapie geschickt. Dabei lernt er zwei weitere Vögel kennen: Chuck und Bombe."),
    new Movie("Your Name","2017","Makoto Shinkai",[
        "Taki Tachibana: Maximilian Belle",
        "Mitsuha Miyamizu: Laura Jenni",
        "Miki Okudera: Laura Maire",
        "Hitoha Miyamizu: Eva-Maria Lahl",
        "Katsuhiko Teshigawara: Tobias John von Freyend",
        "Sayaka Natori: Janne Wetzel",
        "Tsukasa Fujii: Benjamin Levent Krause",
        "Shinta Takagi: Tobias Kern",
        "Yotsuha Miyamizu: Carla Reiter",
        "Toshiki Miyamizu: Jo Vossenkuhl",
        "Futaba Miyamizu: Vanessa Eckart",
        "Yukari Yukino: Shandra Schadt",
        "Katsuhikos Vater: Erich Ludwig",
        "Kazuhiko Tachibana (Takis Vater): Manou Lubowski",
        "Tanaka: Felix Mayer",
        "Dorfmädchen: Livia Reiter",
        "Saitō: Nino Kerl",
        "Sakura: Kerstin Dietrich"
    ],"https://occ-0-4416-4415.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcZ9UfBBjB0eWm8bbn8k8mAao0oGxXU8GK2-wHVO2XqU1oHWqHA3Hc6VyU8tkq8wNLzF0Ql5mi0iFmNO34V1-08f87I.webp?r=4bd",
        "Ein Junge aus der Großstadt und ein gleichaltriges Mädchen vom Lande tauschen ihre Körper, sie sehen und erleben am eigenen Leib, was es heißt, in einer vollkommen anderen Lebenswirklichkeit zu stecken."),
    new Movie("A Million Ways To Die In The West","2014","Seth MacFarlane",[
        "Seth MacFarlane: Albert Stark",
        "Charlize Theron: Anna",
        "Amanda Seyfried: Louise",
        "Liam Neeson: Clinch Leatherwood",
        "Giovanni Ribisi: Edward",
        "Neil Patrick Harris: Foy",
        "Sarah Silverman: Ruth",
        "Evan Jones: Lewis",
        "Jamie Foxx: Django (Cameo)",
        "Christopher Lloyd: Dr. Emmett Brown (Cameo)",
        "Ryan Reynolds: Cowboy, im Saloon erschossen durch Clinch (Cameo)",
        "Ewan McGregor: Cowboy, lacht über den Witz von Foy (Cameo)",
        "Wes Studi: Indianerhäuptling"
    ],"https://occ-0-4416-4415.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZPeqQeIxA83Q1jTWtYkJhzF4yIR-PcAC7NEmrFZ3rDXBQtvFjvrRjPz3MY9mf2bl__5fVP7eor06usk3uycS5al5lI.jpg?r=488",
        "Erzählt wird vom schluffigen Schaffarmer Albert Stark (Seth MacFarlane), der seine hübsche Freundin Louise (Amanda Seyfried) an den arroganten Schnauzbart-Träger Foy (Neil Patrick Harris) verliert. Der Grund für das Ende der Beziehung: Albert ist ein Weichei."),
    new Movie("John Wick","2014","Chad Stahelski, David Leitch",[
        "Keanu Reeves: Jonathan „John“ Wick",
        "Mikael Nyqvist: Viggo Tarasov",
        "Alfie Allen: Iosef Tarasov",
        "Adrianne Palicki: Ms. Perkins",
        "Bridget Moynahan: Helen Wick",
        "Dean Winters: Avi",
        "Ian McShane: Winston (Hotelmanager)",
        "John Leguizamo: Aurelio",
        "Willem Dafoe: Marcus",
        "Kevin Nash: Francis",
        "Lance Reddick: Charon",
        "Clarke Peters: Harry",
        "Bridget Regan: Addy",
        "Toby Leonard Moore: Victor",
        "Daniel Bernhardt: Kirill"
    ],"https://occ-0-4416-4415.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABePBa7hXoaNSpvJ7PYwDtez_t4X0LxAnkiUkMVODx6dnyqYyNnyPliKMSzpCd6eGpXhC4EwWuZqZzcOE7c1vGbPSR2I.webp?r=b70",
        "John Wick: Atemloser Rachethriller über einen gefürchteten Killer, der vom durchgeknallten Sohn eines russischen Mafiapaten aus dem Ruhestand gerissen wird. Nach fünf glücklichen Ehejahren, die mit dem Tod seiner Frau tragisch endeten, zieht sich John Wick (Keanu Reeves) in seine Trauer und seine Luxusvilla zurück."),
    new Movie("ES","2017","Andrés Muschietti",[
        "Jaeden Lieberher: Bill Denbrough",
        "Sophia Lillis: Beverly Marsh",
        "Jeremy Ray Taylor: Ben Hanscom",
        "Finn Wolfhard: Richie Tozier",
        "Jack Dylan Grazer: Eddie Kaspbrak",
        "Chosen Jacobs: Mike Hanlon",
        "Wyatt Oleff: Stanley Uris",
        "Bill Skarsgård: Pennywise/Es",
        "Jackson Robert Scott: Georgie Denbrough",
        "Nicholas Hamilton: Henry Bowers",
        "Jake Sim: Belch Huggins",
        "Logan Thompson: Victor Criss",
        "Owen Teague: Patrick Hockstetter",
        "Stephen Bogaert: Al Marsh",
        "Megan Charpentier: Gretta Bowie",
        "Mollie Jane Atkinson: Sonia Kaspbrak",
        "Stuart Hughes: Officer Bowers",
        "Steven Williams: Leroy Hanlon",
        "Ari Cohen: Rabbi Uris",
        "Elizabeth Saunders: Mrs. Starret",
        "Joe Bostick: Mr. Keene",
        "Geoffrey Pounsett: Zack Denbrough",
        "Pip Dwyer: Sharon Denbrough",
        "Anthony Ulc: Metzger Joe",
        "Javier Botet: Hobo",
        "Tatum Lee: Judith",
        "Carter Musselman: Kopfloser Junge",
        "Katie Lunman: Betty Ripsom",
        "Neil Crone: Chief Borton",
        "Sonia Gascón: Mrs. Ripsom",
        "Janet Porter: Mrs. Uris"
    ],"https://occ-0-4416-4415.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYgkMZUAZmgpoZzMhrEc6KYYBR_XlY7LzVZTZznS3SatiN4E3LRJlb8GKKtJYMo40nsOD4rWBXPdSoBWdhNdFcXnaes.webp?r=e89",
        "Im Laufe eines Sommers erfahren die Kinder schließlich von einer monströsen Kreatur, die Jagd auf Menschen macht und sich in die schlimmsten Alpträume ihrer Opfer verwandeln kann. Meistens tritt das Biest jedoch in Form des sadistischen Clowns Pennywise (Bill Skarsgård) auf."),
    new Movie("Deadpool 2","2018","David Leitch",[
        "Ryan Reynolds: Wade Wilson / Deadpool, Cain Marko / Juggernaut (Facial Capture & Stimme)",
        "Josh Brolin: Nathan Summers / Cable",
        "Julian Dennison: Russell Collins / Firefist" ,
        "Zazie Beetz: Neena Thurman / Domino",
        "Stefan Kapičić: Peter Rasputin / Colossus (Stimme)",
        "Brianna Hildebrand: Ellie Phimister / Negasonic Teenage Warhead" ,
        "Morena Baccarin: Vanessa Carlysle",
        "Karan Soni: Dopinder",
        "T. J. Miller: Jack „Weasel“ Hammer",
        "Leslie Uggams: Blind Al",
        "Eddie Marsan: Waisenhaus-Direktor",
        "Terry Crews: Jesse Aaronson / Bedlam",
        "Lewis Tan: Gaveedra Seven / Shatterstar",
        "Bill Skarsgård: Axel Cluney / Zeitgeist",
        "Rob Delaney: Peter W." ,
        "Brad Pitt: Telford Porter / Vanisher",
        "Shiori Kutsuna: Yukio",
        "Jack Kesy: Thomas Cassidy / Black Tom Cassidy",
        "James McAvoy: Professor Charles Xavier",
        "Tye Sheridan: Scott Summers / Cyclops",
        "Evan Peters: Peter Maximoff / Quicksilver" ,
        "Nicholas Hoult: Dr. Hank McCoy / Beast" ,
        "Alexandra Shipp: Ororo Munroe / Storm",
        "Kodi Smit-McPhee: Kurt Wagner / Nightcrawler" ,
        "Alan Tudyk: Luke (Redneck #1)",
        "Matt Damon: Redneck #2",
        "David Leitch: gefangener Mutant"
    ],"https://occ-0-4416-4415.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfyvenM0-uIqRAUmxSW3EeWYLUqHKlvQZUn8KLcmgQarYPMjhAkup8_liAwkewB89iGjtxAau6mJ1yRV86dAYidxIlk.webp?r=0c7",
        "Zwei Jahre nach den Ereignissen des ersten Films ist Wade Wilson alias Deadpool ein Auftragsmörder geworden, der weltweit arbeitet und verschiedene Kriminelle tötet. ... Später in der Nacht greift der Drogenboss Wade zu Hause an und erschießt dort Vanessa. Wade jagt den Boss und tötet ihn."),
    new Movie("American Psycho","2000","Mary Harron",[
        "Christian Bale: Patrick Bateman",
        "Justin Theroux: Timothy Bryce",
        "Josh Lucas: Craig McDermott",
        "Bill Sage: David Van Patten",
        "Chloë Sevigny: Jean",
        "Reese Witherspoon: Evelyn Williams",
        "Samantha Mathis: Courtney Rawlinson",
        "Matt Ross: Luis Carruthers",
        "Jared Leto: Paul Allen",
        "Willem Dafoe: Det. Donald Kimball",
        "Cara Seymour: Christie",
        "Guinevere Turner: Elizabeth" ,
        "Krista Sutton: Sabrina",
        "Stephen Bogaert: Harold Carnes"
    ],"https://occ-0-4416-4415.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf-17uvLkL7G_YkhqsGAOSUW1Zi5R1dCeo_WrzJscY-WMA9fXQgVAyv39MtBjTofAmtoLF2uRKRp0vg372v5F8qP7TU.webp?r=b5a",
        "Der Film schildert Episoden aus dem Leben des New Yorker Investmentbankers Patrick Bateman in den späten 1980er Jahren. Sein Leben ist bestimmt von Luxusgütern, Äußerlichkeiten und dem Wunsch nach Zugehörigkeit zur Elite."),
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