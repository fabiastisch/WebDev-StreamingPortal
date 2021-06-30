Hinzufügen eines neuen Datensatzes:

    Erstellen einer Categorie:

        In der Datei 'index.js' in der function 'ViewModel' (derzeit Zeile 415) gibt es die Property 'self.categories', in welcher die angezeigten Listen erstellt werden.
        Hier kann eine Liste, welche eine neue Categorie representiert anolog zu den anderen erstellen. Als Parameter werden ein String, welcher der Name der Categorie ist,
        zusammen mit einem Array bestehend aus Movie (function Movie (derzeit Zeile 1 in 'index.js')) übergeben.

    Erstellen eines neuen Filmes:

        In der Datei 'index.js' unter z.B. den Konstanten 'newMovies' (derzeit Zeile 20), 'watchAgainMovies' (derzeit Zeile 127) oder 'trendyMovies' (derzeit Zeile 263) werden die Filme erstellt und als Array dem 'ViewModel' übergeben.
        Hierbei kann nach belibigen neue Filme Hinzugefügt (new Movie()) werden. Folgende Parameter sollten aber mitgegeben werden.
        - name (Filmname, string)
        - erscheinungsjahr (number oder string)
        - regissuer (string)
        - darsteller (string array)
        - imageUrl (aspect ratio 341:192 / ca 2:1)
        - beschreibung (string)
