var demoData = {

    neueFilme: [
        {
            title: 'Tuntematon sotilas',
            director: 'Aku Louhimies',
            year: '2017',
            actors: ['Eero Aho', 'Johannes Holopainen', 'Jussi Vatanen'],
            picture: 'css/images/unknown_soldier.png',
            description: 'A film adaptation of Väinö Linnas best selling novel The Unknown Soldier (1954) and the novels unedited manuscript version, Sotaromaani.',
            genre: 'Drama',
            trailerURL: 'https://www.youtube.com/embed/NTYesNj_sBg'
        },
        {
            title: 'Joker',
            director: 'Todd Phillips',
            year: '2019',
            actors: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz'],
            picture: 'css/images/joker.png',
            description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
            genre: 'Crime',
            trailerURL: 'https://www.youtube.com/embed/zAGVQLHvwOY'
        },
        {
            title: 'Fatherhood',
            director: 'Paul Weitz',
            year: '2021',
            actors: ['Kevin Hart', 'Alfre Woodard', 'Lil Rel Howery'],
            picture: 'css/images/fatherhood.png',
            description: 'A father brings up his baby girl as a single dad after the unexpected death of his wife who died a day after their daughters birth.',
            genre: 'Comedy',
            trailerURL: 'https://www.youtube.com/embed/T3mwUEoZdrI'
        },
        {
            title: 'The Tomorrow War',
            director: 'Chris McKay',
            year: '2021',
            actors: ['Chris Pratt', 'Yvonne Strahovski', 'J.K. Simmons'],
            picture: 'css/images/ttw.png',
            description: 'A family man is drafted to fight in a future war where the fate of humanity relies on his ability to confront the past.',
            genre: 'Action',
            trailerURL: 'https://www.youtube.com/embed/RQjEbkV-9ZM'
        },
        {
            title: 'Spider-Man: Far from Home',
            director: 'Jon Watts',
            year: '2019',
            actors: ['Tom Holland', 'Samuel L. Jackson', 'Jake Gyllenhaal'],
            picture: 'css/images/spider_man_ffh.png',
            description: 'Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.',
            genre: 'Adventure',
            trailerURL: 'https://www.youtube.com/embed/Nt9L1jCKGnE'
        }
    ],

    derzeitBeliebt: [
        {
            title: 'Batman: The Dark Knight Rises',
            director: 'Christopher Nolan',
            year: '2012',
            actors: ['Christian Bale', 'Tom Hardy', 'Anne Hathaway'],
            picture: 'css/images/bm.jpg',
            description: 'Eight years after the Jokers reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.',
            genre: 'Action',
            trailerURL: 'https://www.youtube.com/embed/GokKUqLcvD8'
        },
        {
            title: 'Kill Bill: Vol. 1',
            director: 'Quentin Tarantino',
            year: '2003',
            actors: ['Uma Thurman', 'David Carradine', 'Daryl Hannah'],
            picture: 'css/images/kb.jpg',
            description: 'After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.',
            genre: 'Action',
            trailerURL: 'https://www.youtube.com/embed/7kSuas6mRpk'
        },
        {
            title: 'John Wick: Chapter 2',
            director: 'Chad Stahelski',
            year: '2017',
            actors: ['Chris Pratt', 'Yvonne Strahovski', 'J.K. Simmons'],
            picture: 'css/images/jw1.jpg',
            description: 'After returning to the criminal underworld to repay a debt, John Wick discovers that a large bounty has been put on his life.',
            genre: 'Action',
            trailerURL: 'https://www.youtube.com/embed/ChpLV9AMqm4'
        },
        {
            title: 'Sherlock Holmes',
            director: 'Guy Ritchie',
            year: '2009',
            actors: ['Robert Downey Jr.', 'Jude Law', 'Rachel McAdams'],
            picture: 'css/images/sh1.jpg',
            description: 'Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat to all of England.',
            genre: 'Mystery',
            trailerURL: 'https://www.youtube.com/embed/J7nJksXDBWc'
        }
    ],

    nochmalAnsehen: [
        {
            title: 'The Lord of the Rings: The Fellowship of the Ring',
            director: 'Peter Jackson',
            year: '2001',
            actors: ['Elijah Wood', 'Ian McKellen', 'Orlando Bloom'], 
            picture: 'css/images/lotr1.png',
            description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
            genre: 'Fantasy',
            trailerURL: 'https://www.youtube.com/embed/V75dMMIW2B4'
        },
        {
            title: 'Lord of the Rings: The Two Towers',
            director: 'Peter Jackson',
            year: '2002',
            actors: ['Elijah Woods', 'Sean Astin', 'Viggo Mortensen'],
            picture: 'css/images/lotr2.png',
            description: 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Saurons new ally, Saruman, and his hordes of Isengard.',
            genre: 'Fantasy',
            trailerURL: 'https://www.youtube.com/embed/LbfMDwc4azU'
        },

        {
            title: 'The Lord of the Rings: The Return of the King',
            director: 'Peter Jackson',
            year: '2003',
            actors: ['Elijha Wood', 'Viggo Mortensen', 'Ian McKellen'],
            picture: 'css/images/lotr3.png',
            description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
            genre: 'Fantasy',
            trailerURL: 'https://www.youtube.com/embed/r5X-hFf6Bwo'
        },
        {
            title: 'Shrek',
            director: 'Andrew Adamson',
            year: '2001',
            actors: ['Mike Myers (voice)', 'Eddie Murphy (voice)', 'Cameron Diaz (voice)'],
            picture: 'css/images/shrek.jpg',
            description: 'A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.',
            genre: 'Animation',
            trailerURL: 'https://www.youtube.com/embed/CwXOrWvPBPk'
        },
        {
            title: 'Shrek 2',
            director: 'Andrew Adamson',
            year: '2004',
            actors: ['Mike Myers (voice)', 'Eddie Murphy (voice)', 'Cameron Diaz (voice)'],
            picture: 'css/images/shrek2.jpg',
            description: 'Shrek and Fiona travel to the Kingdom of Far Far Away, where Fiona\'s parents are King and Queen, to celebrate their marriage. When they arrive, they find they are not as welcome as they thought they would be.',
            genre: 'Animation',
            trailerURL: 'https://www.youtube.com/embed/xBgSfhp5Fxo'
        },
        {
            title: 'Shrek the Third',
            director: 'Chris Miller',
            year: '2007',
            actors: ['Mike Myers (voice)', 'Eddie Murphy (voice)', 'Cameron Diaz (voice)'],
            picture: 'css/images/shrek3.jpg',
            description: 'Reluctantly designated as the heir to the land of Far, Far Away, Shrek hatches a plan to install the rebellious Artie as the new king while Princess Fiona tries to fend off a coup d\'état by the jilted Prince Charming.',
            genre: 'Animation',
            trailerURL: 'https://www.youtube.com/embed/_MoIr7811Bs'
        },
    ]
}

