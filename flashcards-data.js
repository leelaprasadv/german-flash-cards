// German Flash Cards Data - Comprehensive Vocabulary Set
const flashcardsData = [
    // Animals
    {
        german: "der Hund",
        english: "the dog",
        pronunciation: "[deːɐ̯ hʊnt]",
        englishPronunciation: "der HOONT",
        meaning: "A domesticated carnivorous mammal, typically kept as a pet or for work",
        gender: "m",
        genderReason: "Living beings are often maskulin, especially animals"
    },
    {
        german: "die Katze",
        english: "the cat",
        pronunciation: "[diː ˈkatsə]",
        englishPronunciation: "dee KAT-suh",
        meaning: "A small domesticated carnivorous mammal with soft fur",
        gender: "f",
        genderReason: "Many small animals are feminin"
    },
    {
        german: "das Pferd",
        english: "the horse",
        pronunciation: "[das pfeːɐ̯t]",
        englishPronunciation: "das PFAYRT",
        meaning: "A large four-legged mammal used for riding and work",
        gender: "n",
        genderReason: "Many animals can be neutrum"
    },
    {
        german: "der Vogel",
        english: "the bird",
        pronunciation: "[deːɐ̯ ˈfoːɡəl]",
        englishPronunciation: "der FOH-gel",
        meaning: "A feathered animal that typically flies",
        gender: "m",
        genderReason: "Most birds are maskulin"
    },
    {
        german: "die Maus",
        english: "the mouse",
        pronunciation: "[diː maʊs]",
        englishPronunciation: "dee MOWS",
        meaning: "A small rodent with a long tail",
        gender: "f",
        genderReason: "Small animals are often feminin"
    },
    {
        german: "der Fisch",
        english: "the fish",
        pronunciation: "[deːɐ̯ fɪʃ]",
        englishPronunciation: "der FISH",
        meaning: "An aquatic animal with gills and fins",
        gender: "m",
        genderReason: "Fish are typically maskulin"
    },
    {
        german: "die Kuh",
        english: "the cow",
        pronunciation: "[diː kuː]",
        englishPronunciation: "dee KOO",
        meaning: "A large domesticated ungulate raised for milk or meat",
        gender: "f",
        genderReason: "Female animals are feminin"
    },
    {
        german: "der Elefant",
        english: "the elephant",
        pronunciation: "[deːɐ̯ eleˈfant]",
        englishPronunciation: "der EL-eh-fant",
        meaning: "A very large mammal with a trunk",
        gender: "m",
        genderReason: "Large animals are often maskulin"
    },

    // Family & People
    {
        german: "der Mann",
        english: "the man",
        pronunciation: "[deːɐ̯ man]",
        englishPronunciation: "der MAHN",
        meaning: "An adult male human being",
        gender: "m",
        genderReason: "Male persons are maskulin"
    },
    {
        german: "die Frau",
        english: "the woman",
        pronunciation: "[diː fraʊ]",
        englishPronunciation: "dee FROW",
        meaning: "An adult female human being",
        gender: "f",
        genderReason: "Female persons are feminin"
    },
    {
        german: "das Kind",
        english: "the child",
        pronunciation: "[das kɪnt]",
        englishPronunciation: "das KINT",
        meaning: "A young human being below the age of puberty",
        gender: "n",
        genderReason: "Young persons are often neutrum"
    },
    {
        german: "der Vater",
        english: "the father",
        pronunciation: "[deːɐ̯ ˈfaːtɐ]",
        englishPronunciation: "der FAH-ter",
        meaning: "A male parent",
        gender: "m",
        genderReason: "Male family members are maskulin"
    },
    {
        german: "die Mutter",
        english: "the mother",
        pronunciation: "[diː ˈmʊtɐ]",
        englishPronunciation: "dee MOO-ter",
        meaning: "A female parent",
        gender: "f",
        genderReason: "Female family members are feminin"
    },
    {
        german: "der Sohn",
        english: "the son",
        pronunciation: "[deːɐ̯ zoːn]",
        englishPronunciation: "der ZOHN",
        meaning: "A male offspring",
        gender: "m",
        genderReason: "Male offspring are maskulin"
    },
    {
        german: "die Tochter",
        english: "the daughter",
        pronunciation: "[diː ˈtɔxtɐ]",
        englishPronunciation: "dee TOKH-ter",
        meaning: "A female offspring",
        gender: "f",
        genderReason: "Female offspring are feminin"
    },
    {
        german: "der Bruder",
        english: "the brother",
        pronunciation: "[deːɐ̯ ˈbruːdɐ]",
        englishPronunciation: "der BROO-der",
        meaning: "A male sibling",
        gender: "m",
        genderReason: "Male relatives are maskulin"
    },
    {
        german: "die Schwester",
        english: "the sister",
        pronunciation: "[diː ˈʃvɛstɐ]",
        englishPronunciation: "dee SHVES-ter",
        meaning: "A female sibling",
        gender: "f",
        genderReason: "Female relatives are feminin"
    },
    {
        german: "der Großvater",
        english: "the grandfather",
        pronunciation: "[deːɐ̯ ˈɡroːsˌfaːtɐ]",
        englishPronunciation: "der GROHS-fah-ter",
        meaning: "The father of one's parent",
        gender: "m",
        genderReason: "Male family members are maskulin"
    },

    // Household & Furniture
    {
        german: "das Haus",
        english: "the house",
        pronunciation: "[das haʊs]",
        englishPronunciation: "das HOWS",
        meaning: "A building for human habitation",
        gender: "n",
        genderReason: "Buildings and structures are often neutrum"
    },
    {
        german: "der Tisch",
        english: "the table",
        pronunciation: "[deːɐ̯ tɪʃ]",
        englishPronunciation: "der TISH",
        meaning: "A piece of furniture with a flat top and legs",
        gender: "m",
        genderReason: "Many furniture items are maskulin"
    },
    {
        german: "der Stuhl",
        english: "the chair",
        pronunciation: "[deːɐ̯ ʃtuːl]",
        englishPronunciation: "der SHTool",
        meaning: "A seat for one person, with a back and four legs",
        gender: "m",
        genderReason: "Furniture items are often maskulin"
    },
    {
        german: "das Bett",
        english: "the bed",
        pronunciation: "[das bɛt]",
        englishPronunciation: "das BET",
        meaning: "A piece of furniture for sleeping",
        gender: "n",
        genderReason: "Some furniture is neutrum"
    },
    {
        german: "die Lampe",
        english: "the lamp",
        pronunciation: "[diː ˈlampə]",
        englishPronunciation: "dee LAHM-puh",
        meaning: "A device for giving light",
        gender: "f",
        genderReason: "Words ending in -e are often feminin"
    },
    {
        german: "der Schrank",
        english: "the wardrobe/cabinet",
        pronunciation: "[deːɐ̯ ʃraŋk]",
        englishPronunciation: "der SHRAHNK",
        meaning: "A tall cupboard for storing clothes",
        gender: "m",
        genderReason: "Large furniture is often maskulin"
    },
    {
        german: "das Fenster",
        english: "the window",
        pronunciation: "[das ˈfɛnstɐ]",
        englishPronunciation: "das FEN-ster",
        meaning: "An opening in a wall to let in light and air",
        gender: "n",
        genderReason: "Building elements are often neutrum"
    },
    {
        german: "die Tür",
        english: "the door",
        pronunciation: "[diː tyːɐ̯]",
        englishPronunciation: "dee TOOR",
        meaning: "A movable barrier used to close an opening",
        gender: "f",
        genderReason: "Some building elements are feminin"
    },

    // Food & Drink
    {
        german: "das Brot",
        english: "the bread",
        pronunciation: "[das broːt]",
        englishPronunciation: "das BROHT",
        meaning: "Food made of flour, water, and yeast",
        gender: "n",
        genderReason: "Food items are often neutrum"
    },
    {
        german: "der Käse",
        english: "the cheese",
        pronunciation: "[deːɐ̯ ˈkɛːzə]",
        englishPronunciation: "der KAY-zuh",
        meaning: "A food made from milk",
        gender: "m",
        genderReason: "Dairy products vary in gender"
    },
    {
        german: "die Milch",
        english: "the milk",
        pronunciation: "[diː mɪlç]",
        englishPronunciation: "dee MILKH",
        meaning: "A white liquid produced by mammals",
        gender: "f",
        genderReason: "Liquids can be feminin"
    },
    {
        german: "der Apfel",
        english: "the apple",
        pronunciation: "[deːɐ̯ ˈapfəl]",
        englishPronunciation: "der AHP-fel",
        meaning: "A round fruit with red or green skin",
        gender: "m",
        genderReason: "Fruits are often maskulin"
    },
    {
        german: "die Banane",
        english: "the banana",
        pronunciation: "[diː baˈnaːnə]",
        englishPronunciation: "dee bah-NAH-nuh",
        meaning: "A long curved fruit with yellow skin",
        gender: "f",
        genderReason: "Words ending in -e are typically feminin"
    },
    {
        german: "das Fleisch",
        english: "the meat",
        pronunciation: "[das flaɪʃ]",
        englishPronunciation: "das FLYSH",
        meaning: "The flesh of an animal used as food",
        gender: "n",
        genderReason: "Food substances are often neutrum"
    },
    {
        german: "der Wein",
        english: "the wine",
        pronunciation: "[deːɐ̯ vaɪn]",
        englishPronunciation: "der VINE",
        meaning: "An alcoholic drink made from grapes",
        gender: "m",
        genderReason: "Alcoholic beverages are often maskulin"
    },
    {
        german: "das Bier",
        english: "the beer",
        pronunciation: "[das biːɐ̯]",
        englishPronunciation: "das BEER",
        meaning: "An alcoholic drink made from hops and malt",
        gender: "n",
        genderReason: "Some beverages are neutrum"
    },

    // Education & Objects
    {
        german: "das Buch",
        english: "the book",
        pronunciation: "[das buːx]",
        englishPronunciation: "das BOOKH",
        meaning: "A written or printed work consisting of pages",
        gender: "n",
        genderReason: "Objects and concepts are often neutrum"
    },
    {
        german: "die Schule",
        english: "the school",
        pronunciation: "[diː ˈʃuːlə]",
        englishPronunciation: "dee SHOO-luh",
        meaning: "An institution for educating children",
        gender: "f",
        genderReason: "Words ending in -e are typically feminin"
    },
    {
        german: "der Lehrer",
        english: "the teacher (male)",
        pronunciation: "[deːɐ̯ ˈleːʁɐ]",
        englishPronunciation: "der LAY-rer",
        meaning: "A person who teaches, especially in a school",
        gender: "m",
        genderReason: "Male professions are maskulin"
    },
    {
        german: "die Lehrerin",
        english: "the teacher (female)",
        pronunciation: "[diː ˈleːʁəʁɪn]",
        englishPronunciation: "dee LAY-rer-in",
        meaning: "A female person who teaches",
        gender: "f",
        genderReason: "Female professions with -in are feminin"
    },
    {
        german: "der Stift",
        english: "the pen/pencil",
        pronunciation: "[deːɐ̯ ʃtɪft]",
        englishPronunciation: "der SHTIFT",
        meaning: "A writing instrument",
        gender: "m",
        genderReason: "Tools and instruments are often maskulin"
    },
    {
        german: "das Papier",
        english: "the paper",
        pronunciation: "[das paˈpiːɐ̯]",
        englishPronunciation: "das pah-PEER",
        meaning: "Material for writing or printing on",
        gender: "n",
        genderReason: "Materials are often neutrum"
    },

    // Transportation
    {
        german: "das Auto",
        english: "the car",
        pronunciation: "[das ˈaʊto]",
        englishPronunciation: "das OW-toh",
        meaning: "A road vehicle powered by an engine",
        gender: "n",
        genderReason: "Vehicles are often neutrum"
    },
    {
        german: "der Zug",
        english: "the train",
        pronunciation: "[deːɐ̯ tsuːk]",
        englishPronunciation: "der TSOOK",
        meaning: "A series of connected railway cars",
        gender: "m",
        genderReason: "Large vehicles are often maskulin"
    },
    {
        german: "das Fahrrad",
        english: "the bicycle",
        pronunciation: "[das ˈfaːɐ̯ʁaːt]",
        englishPronunciation: "das FAHR-raht",
        meaning: "A two-wheeled vehicle powered by pedaling",
        gender: "n",
        genderReason: "Compound vehicles are often neutrum"
    },
    {
        german: "das Flugzeug",
        english: "the airplane",
        pronunciation: "[das ˈfluːktsɔɪk]",
        englishPronunciation: "das FLOOK-tsoyk",
        meaning: "A powered flying vehicle with wings",
        gender: "n",
        genderReason: "Complex vehicles are often neutrum"
    },

    // Nature & Weather
    {
        german: "der Baum",
        english: "the tree",
        pronunciation: "[deːɐ̯ baʊm]",
        englishPronunciation: "der BOWM",
        meaning: "A woody perennial plant with a trunk",
        gender: "m",
        genderReason: "Plants and trees are often maskulin"
    },
    {
        german: "die Blume",
        english: "the flower",
        pronunciation: "[diː ˈbluːmə]",
        englishPronunciation: "dee BLOO-muh",
        meaning: "The reproductive structure of flowering plants",
        gender: "f",
        genderReason: "Words ending in -e are usually feminin"
    },
    {
        german: "das Wasser",
        english: "the water",
        pronunciation: "[das ˈvasɐ]",
        englishPronunciation: "das VAH-ser",
        meaning: "A transparent liquid that forms seas, lakes, and rivers",
        gender: "n",
        genderReason: "Liquids and substances are often neutrum"
    },
    {
        german: "der Regen",
        english: "the rain",
        pronunciation: "[deːɐ̯ ˈreːɡən]",
        englishPronunciation: "der RAY-gen",
        meaning: "Water falling from clouds in drops",
        gender: "m",
        genderReason: "Weather phenomena are often maskulin"
    },
    {
        german: "die Sonne",
        english: "the sun",
        pronunciation: "[diː ˈzɔnə]",
        englishPronunciation: "dee ZON-uh",
        meaning: "The star around which Earth orbits",
        gender: "f",
        genderReason: "Words ending in -e are typically feminin"
    },
    {
        german: "der Mond",
        english: "the moon",
        pronunciation: "[deːɐ̯ moːnt]",
        englishPronunciation: "der MOHNT",
        meaning: "Earth's natural satellite",
        gender: "m",
        genderReason: "Celestial bodies vary in gender"
    },

    // Body Parts
    {
        german: "der Kopf",
        english: "the head",
        pronunciation: "[deːɐ̯ kɔpf]",
        englishPronunciation: "der KOPF",
        meaning: "The upper part of the human body",
        gender: "m",
        genderReason: "Body parts vary in gender"
    },
    {
        german: "die Hand",
        english: "the hand",
        pronunciation: "[diː hant]",
        englishPronunciation: "dee HAHND",
        meaning: "The end part of the arm",
        gender: "f",
        genderReason: "Some body parts are feminin"
    },
    {
        german: "das Auge",
        english: "the eye",
        pronunciation: "[das ˈaʊɡə]",
        englishPronunciation: "das OW-guh",
        meaning: "The organ of sight",
        gender: "n",
        genderReason: "Some body parts are neutrum"
    },
    {
        german: "der Fuß",
        english: "the foot",
        pronunciation: "[deːɐ̯ fuːs]",
        englishPronunciation: "der FOOS",
        meaning: "The lower extremity of the leg",
        gender: "m",
        genderReason: "Extremities are often maskulin"
    },

    // Colors (used as nouns)
    {
        german: "das Rot",
        english: "the red",
        pronunciation: "[das roːt]",
        englishPronunciation: "das ROHT",
        meaning: "The color red",
        gender: "n",
        genderReason: "Colors as nouns are neutrum"
    },
    {
        german: "das Blau",
        english: "the blue",
        pronunciation: "[das blaʊ]",
        englishPronunciation: "das BLOW",
        meaning: "The color blue",
        gender: "n",
        genderReason: "Colors as nouns are neutrum"
    },
    {
        german: "das Grün",
        english: "the green",
        pronunciation: "[das ɡryːn]",
        englishPronunciation: "das GROON",
        meaning: "The color green",
        gender: "n",
        genderReason: "Colors as nouns are neutrum"
    },

    // Time & Numbers
    {
        german: "die Zeit",
        english: "the time",
        pronunciation: "[diː tsaɪt]",
        englishPronunciation: "dee TSYTE",
        meaning: "The indefinite continued progress of existence",
        gender: "f",
        genderReason: "Abstract concepts can be feminin"
    },
    {
        german: "der Tag",
        english: "the day",
        pronunciation: "[deːɐ̯ taːk]",
        englishPronunciation: "der TAHK",
        meaning: "A period of 24 hours",
        gender: "m",
        genderReason: "Time periods are often maskulin"
    },
    {
        german: "die Nacht",
        english: "the night",
        pronunciation: "[diː naxt]",
        englishPronunciation: "dee NAHKHT",
        meaning: "The time from sunset to sunrise",
        gender: "f",
        genderReason: "Some time periods are feminin"
    },
    {
        german: "das Jahr",
        english: "the year",
        pronunciation: "[das jaːɐ̯]",
        englishPronunciation: "das YAHR",
        meaning: "A period of 365 days",
        gender: "n",
        genderReason: "Time units can be neutrum"
    },

    // Professions
    {
        german: "der Arzt",
        english: "the doctor (male)",
        pronunciation: "[deːɐ̯ aːɐ̯tst]",
        englishPronunciation: "der ARTSST",
        meaning: "A medical professional",
        gender: "m",
        genderReason: "Male professions are maskulin"
    },
    {
        german: "die Ärztin",
        english: "the doctor (female)",
        pronunciation: "[diː ˈɛːɐ̯tstɪn]",
        englishPronunciation: "dee ERTS-tin",
        meaning: "A female medical professional",
        gender: "f",
        genderReason: "Female professions with -in are feminin"
    },
    {
        german: "der Koch",
        english: "the cook (male)",
        pronunciation: "[deːɐ̯ kɔx]",
        englishPronunciation: "der KOKH",
        meaning: "A person who prepares food",
        gender: "m",
        genderReason: "Male professions are maskulin"
    },
    {
        german: "die Köchin",
        english: "the cook (female)",
        pronunciation: "[diː ˈkœçɪn]",
        englishPronunciation: "dee KURKH-in",
        meaning: "A female person who prepares food",
        gender: "f",
        genderReason: "Female professions with -in are feminin"
    },

    // Extended Vocabulary
    {
        german: "der Computer",
        english: "the computer",
        pronunciation: "[deːɐ̯ kɔmˈpjuːtɐ]",
        englishPronunciation: "der kom-PYOO-ter",
        meaning: "An electronic device for processing data",
        gender: "m",
        genderReason: "Technical devices are often maskulin"
    },
    {
        german: "das Telefon",
        english: "the telephone",
        pronunciation: "[das teləˈfoːn]",
        englishPronunciation: "das teh-leh-FOHN",
        meaning: "A device for transmitting speech",
        gender: "n",
        genderReason: "Communication devices can be neutrum"
    },
    {
        german: "die Musik",
        english: "the music",
        pronunciation: "[diː muˈziːk]",
        englishPronunciation: "dee moo-ZEEK",
        meaning: "Vocal or instrumental sounds combined harmoniously",
        gender: "f",
        genderReason: "Arts and abstract concepts are often feminin"
    },
    {
        german: "der Sport",
        english: "the sport",
        pronunciation: "[deːɐ̯ ʃpɔʁt]",
        englishPronunciation: "der SHPORT",
        meaning: "Physical activity for competition or recreation",
        gender: "m",
        genderReason: "Activities are often maskulin"
    },
    {
        german: "das Spiel",
        english: "the game",
        pronunciation: "[das ʃpiːl]",
        englishPronunciation: "das SHPEEL",
        meaning: "An activity for entertainment or competition",
        gender: "n",
        genderReason: "Activities can be neutrum"
    },
    {
        german: "die Arbeit",
        english: "the work",
        pronunciation: "[diː ˈaʁbaɪt]",
        englishPronunciation: "dee AR-bite",
        meaning: "Activity involving mental or physical effort",
        gender: "f",
        genderReason: "Abstract concepts are often feminin"
    },
    {
        german: "das Geld",
        english: "the money",
        pronunciation: "[das ɡɛlt]",
        englishPronunciation: "das GELT",
        meaning: "A medium of exchange",
        gender: "n",
        genderReason: "Abstract concepts can be neutrum"
    },
    {
        german: "der Freund",
        english: "the friend (male)",
        pronunciation: "[deːɐ̯ frɔɪnt]",
        englishPronunciation: "der FROYNT",
        meaning: "A person you know well and like",
        gender: "m",
        genderReason: "Male persons are maskulin"
    },
    {
        german: "die Freundin",
        english: "the friend (female)",
        pronunciation: "[diː ˈfrɔɪndɪn]",
        englishPronunciation: "dee FROYND-in",
        meaning: "A female person you know well and like",
        gender: "f",
        genderReason: "Female persons are feminin"
    },
    {
        german: "der Laden",
        english: "the shop",
        pronunciation: "[deːɐ̯ ˈlaːdən]",
        englishPronunciation: "der LAH-den",
        meaning: "A place where goods are sold",
        gender: "m",
        genderReason: "Buildings for commerce are often maskulin"
    },
    {
        german: "die Stadt",
        english: "the city",
        pronunciation: "[diː ʃtat]",
        englishPronunciation: "dee SHTAHT",
        meaning: "A large human settlement",
        gender: "f",
        genderReason: "Places can be feminin"
    },
    {
        german: "das Land",
        english: "the country",
        pronunciation: "[das lant]",
        englishPronunciation: "das LAHNT",
        meaning: "A nation with its own government",
        gender: "n",
        genderReason: "Countries are often neutrum"
    },
    {
        german: "der Berg",
        english: "the mountain",
        pronunciation: "[deːɐ̯ bɛʁk]",
        englishPronunciation: "der BERK",
        meaning: "A large natural elevation of earth",
        gender: "m",
        genderReason: "Geographical features are often maskulin"
    },
    {
        german: "das Meer",
        english: "the sea",
        pronunciation: "[das meːɐ̯]",
        englishPronunciation: "das MAYR",
        meaning: "A large body of salt water",
        gender: "n",
        genderReason: "Bodies of water are often neutrum"
    },
    {
        german: "der Strand",
        english: "the beach",
        pronunciation: "[deːɐ̯ ʃtrant]",
        englishPronunciation: "der SHTRAHT",
        meaning: "A sandy or rocky shore",
        gender: "m",
        genderReason: "Coastal features are often maskulin"
    },
    {
        german: "die Straße",
        english: "the street",
        pronunciation: "[diː ˈʃtraːsə]",
        englishPronunciation: "dee SHTRAH-suh",
        meaning: "A public road in a city or town",
        gender: "f",
        genderReason: "Words ending in -e are typically feminin"
    },
    {
        german: "der Weg",
        english: "the path/way",
        pronunciation: "[deːɐ̯ veːk]",
        englishPronunciation: "der VAYK",
        meaning: "A route or track between two places",
        gender: "m",
        genderReason: "Paths and routes are often maskulin"
    },
    {
        german: "das Zimmer",
        english: "the room",
        pronunciation: "[das ˈtsɪmɐ]",
        englishPronunciation: "das TSIM-mer",
        meaning: "A space within a building",
        gender: "n",
        genderReason: "Rooms and spaces are often neutrum"
    },
    {
        german: "die Küche",
        english: "the kitchen",
        pronunciation: "[diː ˈkʏçə]",
        englishPronunciation: "dee KOO-khuh",
        meaning: "A room for preparing food",
        gender: "f",
        genderReason: "Rooms ending in -e are feminin"
    },
    {
        german: "das Bad",
        english: "the bathroom",
        pronunciation: "[das baːt]",
        englishPronunciation: "das BAHT",
        meaning: "A room containing a bath or shower",
        gender: "n",
        genderReason: "Some rooms are neutrum"
    },
    {
        german: "der Garten",
        english: "the garden",
        pronunciation: "[deːɐ̯ ˈɡaʁtən]",
        englishPronunciation: "der GAR-ten",
        meaning: "A piece of ground for growing plants",
        gender: "m",
        genderReason: "Outdoor spaces are often maskulin"
    },
    {
        german: "die Garage",
        english: "the garage",
        pronunciation: "[diː ɡaˈʁaːʒə]",
        englishPronunciation: "dee gah-RAH-zhuh",
        meaning: "A building for housing vehicles",
        gender: "f",
        genderReason: "Words ending in -e are typically feminin"
    },
    {
        german: "der Keller",
        english: "the basement",
        pronunciation: "[deːɐ̯ ˈkɛlɐ]",
        englishPronunciation: "der KEL-ler",
        meaning: "The floor below the ground floor",
        gender: "m",
        genderReason: "Building parts are often maskulin"
    },
    {
        german: "das Dach",
        english: "the roof",
        pronunciation: "[das dax]",
        englishPronunciation: "das DAHKH",
        meaning: "The covering of a building",
        gender: "n",
        genderReason: "Building elements are often neutrum"
    },
    {
        german: "die Wand",
        english: "the wall",
        pronunciation: "[diː vant]",
        englishPronunciation: "dee VAHNT",
        meaning: "A vertical structure forming an enclosure",
        gender: "f",
        genderReason: "Some structural elements are feminin"
    },
    {
        german: "der Boden",
        english: "the floor/ground",
        pronunciation: "[deːɐ̯ ˈboːdən]",
        englishPronunciation: "der BOH-den",
        meaning: "The lower surface of a room",
        gender: "m",
        genderReason: "Surfaces are often maskulin"
    },
    {
        german: "die Decke",
        english: "the ceiling/blanket",
        pronunciation: "[diː ˈdɛkə]",
        englishPronunciation: "dee DEK-uh",
        meaning: "The upper interior surface of a room",
        gender: "f",
        genderReason: "Words ending in -e are typically feminin"
    },
    {
        german: "der Spiegel",
        english: "the mirror",
        pronunciation: "[deːɐ̯ ˈʃpiːɡəl]",
        englishPronunciation: "der SHPEE-gel",
        meaning: "A reflective surface",
        gender: "m",
        genderReason: "Objects are often maskulin"
    },
    {
        german: "das Bild",
        english: "the picture",
        pronunciation: "[das bɪlt]",
        englishPronunciation: "das BILT",
        meaning: "A visual representation",
        gender: "n",
        genderReason: "Media objects are often neutrum"
    },
    {
        german: "die Uhr",
        english: "the clock/watch",
        pronunciation: "[diː uːɐ̯]",
        englishPronunciation: "dee OOR",
        meaning: "A device for measuring time",
        gender: "f",
        genderReason: "Some instruments are feminin"
    },
    {
        german: "der Kalender",
        english: "the calendar",
        pronunciation: "[deːɐ̯ kaˈlɛndɐ]",
        englishPronunciation: "der kah-LEN-der",
        meaning: "A system for organizing days",
        gender: "m",
        genderReason: "Time systems are often maskulin"
    },
    {
        german: "das Wetter",
        english: "the weather",
        pronunciation: "[das ˈvɛtɐ]",
        englishPronunciation: "das VET-ter",
        meaning: "Atmospheric conditions",
        gender: "n",
        genderReason: "Natural phenomena are often neutrum"
    },
    {
        german: "der Schnee",
        english: "the snow",
        pronunciation: "[deːɐ̯ ʃneː]",
        englishPronunciation: "der SHNAY",
        meaning: "Frozen precipitation",
        gender: "m",
        genderReason: "Weather phenomena are often maskulin"
    },
    {
        german: "das Eis",
        english: "the ice",
        pronunciation: "[das aɪs]",
        englishPronunciation: "das ICE",
        meaning: "Frozen water",
        gender: "n",
        genderReason: "Substances are often neutrum"
    },
    {
        german: "der Wind",
        english: "the wind",
        pronunciation: "[deːɐ̯ vɪnt]",
        englishPronunciation: "der VINT",
        meaning: "Moving air",
        gender: "m",
        genderReason: "Natural forces are often maskulin"
    },
    {
        german: "die Wolke",
        english: "the cloud",
        pronunciation: "[diː ˈvɔlkə]",
        englishPronunciation: "dee VOL-kuh",
        meaning: "A visible mass of water vapor",
        gender: "f",
        genderReason: "Words ending in -e are typically feminin"
    },
    {
        german: "der Himmel",
        english: "the sky/heaven",
        pronunciation: "[deːɐ̯ ˈhɪməl]",
        englishPronunciation: "der HIM-mel",
        meaning: "The space above the earth",
        gender: "m",
        genderReason: "Celestial spaces are often maskulin"
    },
    {
        german: "die Erde",
        english: "the earth",
        pronunciation: "[diː ˈeːɐ̯də]",
        englishPronunciation: "dee AYR-duh",
        meaning: "The planet we live on",
        gender: "f",
        genderReason: "Words ending in -e are typically feminin"
    },
    {
        german: "der Stern",
        english: "the star",
        pronunciation: "[deːɐ̯ ʃtɛʁn]",
        englishPronunciation: "der SHTERN",
        meaning: "A celestial body of hot gas",
        gender: "m",
        genderReason: "Celestial objects are often maskulin"
    },
    {
        german: "das Feuer",
        english: "the fire",
        pronunciation: "[das ˈfɔɪɐ]",
        englishPronunciation: "das FOY-er",
        meaning: "Combustion producing heat and light",
        gender: "n",
        genderReason: "Elements are often neutrum"
    },
    {
        german: "die Luft",
        english: "the air",
        pronunciation: "[diː lʊft]",
        englishPronunciation: "dee LOOFT",
        meaning: "The invisible gaseous substance surrounding earth",
        gender: "f",
        genderReason: "Some elements are feminin"
    },
    {
        german: "der Rauch",
        english: "the smoke",
        pronunciation: "[deːɐ̯ raʊx]",
        englishPronunciation: "der ROWKH",
        meaning: "A visible suspension of particles",
        gender: "m",
        genderReason: "Visible phenomena are often maskulin"
    },
    {
        german: "das Licht",
        english: "the light",
        pronunciation: "[das lɪçt]",
        englishPronunciation: "das LIKHT",
        meaning: "Electromagnetic radiation visible to the eye",
        gender: "n",
        genderReason: "Physical phenomena are often neutrum"
    },
    {
        german: "der Schatten",
        english: "the shadow",
        pronunciation: "[deːɐ̯ ˈʃatən]",
        englishPronunciation: "der SHAH-ten",
        meaning: "A dark area where light is blocked",
        gender: "m",
        genderReason: "Visual phenomena are often maskulin"
    },

    // Technology & Modern Life
    {
        german: "das Handy",
        english: "the mobile phone",
        pronunciation: "[das ˈhɛndi]",
        englishPronunciation: "das HEN-dee",
        meaning: "A portable telephone device",
        gender: "n",
        genderReason: "Modern technology items are often neutrum"
    },
    {
        german: "der Computer",
        english: "the computer",
        pronunciation: "[deːɐ̯ kɔmˈpjuːtɐ]",
        englishPronunciation: "der kom-PYOO-ter",
        meaning: "An electronic device for processing data",
        gender: "m",
        genderReason: "Electronic devices are often maskulin"
    },
    {
        german: "das Internet",
        english: "the internet",
        pronunciation: "[das ˈɪntɐnɛt]",
        englishPronunciation: "das IN-ter-net",
        meaning: "A global network of interconnected computers",
        gender: "n",
        genderReason: "Abstract systems are often neutrum"
    },
    {
        german: "die Website",
        english: "the website",
        pronunciation: "[diː ˈvɛpzaɪt]",
        englishPronunciation: "dee VEB-site",
        meaning: "A collection of web pages",
        gender: "f",
        genderReason: "Digital concepts ending in -e are often feminin"
    },
    {
        german: "der Bildschirm",
        english: "the screen",
        pronunciation: "[deːɐ̯ ˈbɪltʃɪʁm]",
        englishPronunciation: "der BILT-shirm",
        meaning: "A display surface for visual output",
        gender: "m",
        genderReason: "Display devices are often maskulin"
    },

    // Sports & Activities
    {
        german: "der Sport",
        english: "the sport",
        pronunciation: "[deːɐ̯ ʃpɔʁt]",
        englishPronunciation: "der SHPORT",
        meaning: "Physical activity for competition or recreation",
        gender: "m",
        genderReason: "Activities are often maskulin"
    },
    {
        german: "das Spiel",
        english: "the game",
        pronunciation: "[das ʃpiːl]",
        englishPronunciation: "das SHPEEL",
        meaning: "An activity with rules for entertainment",
        gender: "n",
        genderReason: "Abstract activities are often neutrum"
    },
    {
        german: "der Ball",
        english: "the ball",
        pronunciation: "[deːɐ̯ bal]",
        englishPronunciation: "der BALL",
        meaning: "A spherical object used in sports",
        gender: "m",
        genderReason: "Sports equipment is often maskulin"
    },
    {
        german: "das Schwimmen",
        english: "the swimming",
        pronunciation: "[das ˈʃvɪmən]",
        englishPronunciation: "das SHVIM-men",
        meaning: "The activity of moving through water",
        gender: "n",
        genderReason: "Infinitives used as nouns are neutrum"
    },
    {
        german: "das Laufen",
        english: "the running",
        pronunciation: "[das ˈlaʊfən]",
        englishPronunciation: "das LOW-fen",
        meaning: "The activity of moving quickly on foot",
        gender: "n",
        genderReason: "Infinitives used as nouns are neutrum"
    }
];

// Add more words to reach 500
const additionalWords = [
    // Colors
    {
        german: "rot",
        english: "red",
        pronunciation: "[roːt]",
        englishPronunciation: "ROHT",
        meaning: "The color of blood or fire",
        gender: "n",
        genderReason: "Colors are neutrum when used as nouns"
    },
    {
        german: "blau",
        english: "blue",
        pronunciation: "[blaʊ]",
        englishPronunciation: "BLOW",
        meaning: "The color of the sky",
        gender: "n",
        genderReason: "Colors are neutrum when used as nouns"
    },
    {
        german: "gelb",
        english: "yellow",
        pronunciation: "[ɡɛlp]",
        englishPronunciation: "GELP",
        meaning: "The color of lemons",
        gender: "n",
        genderReason: "Colors are neutrum when used as nouns"
    },
    {
        german: "grün",
        english: "green",
        pronunciation: "[ɡryːn]",
        englishPronunciation: "GROON",
        meaning: "The color of grass",
        gender: "n",
        genderReason: "Colors are neutrum when used as nouns"
    },
    {
        german: "schwarz",
        english: "black",
        pronunciation: "[ʃvaʁts]",
        englishPronunciation: "SHVARTS",
        meaning: "The darkest color",
        gender: "n",
        genderReason: "Colors are neutrum when used as nouns"
    },
    {
        german: "weiß",
        english: "white",
        pronunciation: "[vaɪs]",
        englishPronunciation: "VICE",
        meaning: "The lightest color",
        gender: "n",
        genderReason: "Colors are neutrum when used as nouns"
    },
    // Numbers
    {
        german: "eins",
        english: "one",
        pronunciation: "[aɪns]",
        englishPronunciation: "INES",
        meaning: "The number 1",
        gender: "n",
        genderReason: "Numbers are neutrum when used as nouns"
    },
    {
        german: "zwei",
        english: "two",
        pronunciation: "[tsvaɪ]",
        englishPronunciation: "TSVY",
        meaning: "The number 2",
        gender: "n",
        genderReason: "Numbers are neutrum when used as nouns"
    },
    {
        german: "drei",
        english: "three",
        pronunciation: "[dʁaɪ]",
        englishPronunciation: "DRY",
        meaning: "The number 3",
        gender: "n",
        genderReason: "Numbers are neutrum when used as nouns"
    },
    {
        german: "vier",
        english: "four",
        pronunciation: "[fiːɐ̯]",
        englishPronunciation: "FEER",
        meaning: "The number 4",
        gender: "n",
        genderReason: "Numbers are neutrum when used as nouns"
    },
    {
        german: "fünf",
        english: "five",
        pronunciation: "[fʏnf]",
        englishPronunciation: "FOONF",
        meaning: "The number 5",
        gender: "n",
        genderReason: "Numbers are neutrum when used as nouns"
    },
    // Days of the Week
    {
        german: "der Montag",
        english: "Monday",
        pronunciation: "[deːɐ̯ ˈmoːntaːk]",
        englishPronunciation: "der MOHN-tahk",
        meaning: "The first day of the week",
        gender: "m",
        genderReason: "Days of the week are maskulin"
    },
    {
        german: "der Dienstag",
        english: "Tuesday",
        pronunciation: "[deːɐ̯ ˈdiːnstaːk]",
        englishPronunciation: "der DEENS-tahk",
        meaning: "The second day of the week",
        gender: "m",
        genderReason: "Days of the week are maskulin"
    },
    {
        german: "der Mittwoch",
        english: "Wednesday",
        pronunciation: "[deːɐ̯ ˈmɪtvɔx]",
        englishPronunciation: "der MIT-vokh",
        meaning: "The third day of the week",
        gender: "m",
        genderReason: "Days of the week are maskulin"
    },
    {
        german: "der Donnerstag",
        english: "Thursday",
        pronunciation: "[deːɐ̯ ˈdɔnɐstaːk]",
        englishPronunciation: "der DON-er-stahk",
        meaning: "The fourth day of the week",
        gender: "m",
        genderReason: "Days of the week are maskulin"
    },
    {
        german: "der Freitag",
        english: "Friday",
        pronunciation: "[deːɐ̯ ˈfʁaɪtaːk]",
        englishPronunciation: "der FRY-tahk",
        meaning: "The fifth day of the week",
        gender: "m",
        genderReason: "Days of the week are maskulin"
    },
    {
        german: "der Samstag",
        english: "Saturday",
        pronunciation: "[deːɐ̯ ˈzamstaːk]",
        englishPronunciation: "der ZAHMS-tahk",
        meaning: "The sixth day of the week",
        gender: "m",
        genderReason: "Days of the week are maskulin"
    },
    {
        german: "der Sonntag",
        english: "Sunday",
        pronunciation: "[deːɐ̯ ˈzɔntaːk]",
        englishPronunciation: "der ZOHN-tahk",
        meaning: "The seventh day of the week",
        gender: "m",
        genderReason: "Days of the week are maskulin"
    },
    // Months
    {
        german: "der Januar",
        english: "January",
        pronunciation: "[deːɐ̯ ˈjanuaːɐ̯]",
        englishPronunciation: "der YAH-noo-ahr",
        meaning: "The first month of the year",
        gender: "m",
        genderReason: "Months are maskulin"
    },
    {
        german: "der Februar",
        english: "February",
        pronunciation: "[deːɐ̯ ˈfeːbʁuaːɐ̯]",
        englishPronunciation: "der FAY-broo-ahr",
        meaning: "The second month of the year",
        gender: "m",
        genderReason: "Months are maskulin"
    },
    {
        german: "der März",
        english: "March",
        pronunciation: "[deːɐ̯ mɛʁts]",
        englishPronunciation: "der MERTZ",
        meaning: "The third month of the year",
        gender: "m",
        genderReason: "Months are maskulin"
    },
    {
        german: "der April",
        english: "April",
        pronunciation: "[deːɐ̯ aˈpʁɪl]",
        englishPronunciation: "der ah-PRIL",
        meaning: "The fourth month of the year",
        gender: "m",
        genderReason: "Months are maskulin"
    },
    {
        german: "der Mai",
        english: "May",
        pronunciation: "[deːɐ̯ maɪ]",
        englishPronunciation: "der MY",
        meaning: "The fifth month of the year",
        gender: "m",
        genderReason: "Months are maskulin"
    },
    {
        german: "der Juni",
        english: "June",
        pronunciation: "[deːɐ̯ ˈjuːni]",
        englishPronunciation: "der YOO-nee",
        meaning: "The sixth month of the year",
        gender: "m",
        genderReason: "Months are maskulin"
    },
    {
        german: "der Juli",
        english: "July",
        pronunciation: "[deːɐ̯ ˈjuːli]",
        englishPronunciation: "der YOO-lee",
        meaning: "The seventh month of the year",
        gender: "m",
        genderReason: "Months are maskulin"
    },
    {
        german: "der August",
        english: "August",
        pronunciation: "[deːɐ̯ aʊˈɡʊst]",
        englishPronunciation: "der OW-goost",
        meaning: "The eighth month of the year",
        gender: "m",
        genderReason: "Months are maskulin"
    },
    {
        german: "der September",
        english: "September",
        pronunciation: "[deːɐ̯ zɛpˈtɛmbɐ]",
        englishPronunciation: "der zep-TEM-ber",
        meaning: "The ninth month of the year",
        gender: "m",
        genderReason: "Months are maskulin"
    },
    {
        german: "der Oktober",
        english: "October",
        pronunciation: "[deːɐ̯ ɔkˈtoːbɐ]",
        englishPronunciation: "der ok-TOH-ber",
        meaning: "The tenth month of the year",
        gender: "m",
        genderReason: "Months are maskulin"
    },
    {
        german: "der November",
        english: "November",
        pronunciation: "[deːɐ̯ noˈvɛmbɐ]",
        englishPronunciation: "der no-VEM-ber",
        meaning: "The eleventh month of the year",
        gender: "m",
        genderReason: "Months are maskulin"
    },
    {
        german: "der Dezember",
        english: "December",
        pronunciation: "[deːɐ̯ deˈtsɛmbɐ]",
        englishPronunciation: "der day-TSEM-ber",
        meaning: "The twelfth month of the year",
        gender: "m",
        genderReason: "Months are maskulin"
    },
    // Weather
    {
        german: "das Wetter",
        english: "the weather",
        pronunciation: "[das ˈvɛtɐ]",
        englishPronunciation: "das VET-er",
        meaning: "The state of the atmosphere",
        gender: "n",
        genderReason: "Weather-related terms are often neutrum"
    },
    {
        german: "der Regen",
        english: "the rain",
        pronunciation: "[deːɐ̯ ˈʁeːɡn̩]",
        englishPronunciation: "der RAY-gen",
        meaning: "Water falling from clouds",
        gender: "m",
        genderReason: "Natural phenomena are often maskulin"
    },
    {
        german: "der Schnee",
        english: "the snow",
        pronunciation: "[deːɐ̯ ʃneː]",
        englishPronunciation: "der SHNAY",
        meaning: "Frozen water crystals",
        gender: "m",
        genderReason: "Natural phenomena are often maskulin"
    },
    {
        german: "der Wind",
        english: "the wind",
        pronunciation: "[deːɐ̯ vɪnt]",
        englishPronunciation: "der VINT",
        meaning: "Moving air",
        gender: "m",
        genderReason: "Natural phenomena are often maskulin"
    },
    {
        german: "die Sonne",
        english: "the sun",
        pronunciation: "[diː ˈzɔnə]",
        englishPronunciation: "dee ZON-uh",
        meaning: "The star at the center of our solar system",
        gender: "f",
        genderReason: "The sun is feminin in German"
    },
    {
        german: "der Mond",
        english: "the moon",
        pronunciation: "[deːɐ̯ moːnt]",
        englishPronunciation: "der MOHNT",
        meaning: "Earth's natural satellite",
        gender: "m",
        genderReason: "The moon is maskulin in German"
    },
    {
        german: "der Stern",
        english: "the star",
        pronunciation: "[deːɐ̯ ʃtɛʁn]",
        englishPronunciation: "der SHTERN",
        meaning: "A luminous point in the night sky",
        gender: "m",
        genderReason: "Stars are maskulin in German"
    },
    // Emotions
    {
        german: "die Freude",
        english: "the joy",
        pronunciation: "[diː ˈfʁɔɪdə]",
        englishPronunciation: "dee FROY-duh",
        meaning: "A feeling of great pleasure and happiness",
        gender: "f",
        genderReason: "Words ending in -e are often feminin"
    },
    {
        german: "die Trauer",
        english: "the sorrow",
        pronunciation: "[diː ˈtʁaʊɐ]",
        englishPronunciation: "dee TROW-er",
        meaning: "Deep distress caused by loss",
        gender: "f",
        genderReason: "Abstract concepts are often feminin"
    },
    {
        german: "die Wut",
        english: "the anger",
        pronunciation: "[diː vuːt]",
        englishPronunciation: "dee VOOT",
        meaning: "Strong feeling of displeasure",
        gender: "f",
        genderReason: "Emotions are often feminin"
    },
    {
        german: "die Liebe",
        english: "the love",
        pronunciation: "[diː ˈliːbə]",
        englishPronunciation: "dee LEE-buh",
        meaning: "Strong affection for someone",
        gender: "f",
        genderReason: "Words ending in -e are often feminin"
    },
    {
        german: "der Hass",
        english: "the hatred",
        pronunciation: "[deːɐ̯ has]",
        englishPronunciation: "der HAHSS",
        meaning: "Intense dislike",
        gender: "m",
        genderReason: "Some emotions are maskulin"
    },
    // Professions
    {
        german: "der Arzt",
        english: "the doctor",
        pronunciation: "[deːɐ̯ aːɐ̯tst]",
        englishPronunciation: "der ARTSST",
        meaning: "A medical professional",
        gender: "m",
        genderReason: "Many professions are maskulin"
    },
    {
        german: "die Ärztin",
        english: "the female doctor",
        pronunciation: "[diː ˈɛʁtstɪn]",
        englishPronunciation: "dee ERTS-tin",
        meaning: "A female medical professional",
        gender: "f",
        genderReason: "Female professions often end in -in"
    },
    {
        german: "der Lehrer",
        english: "the teacher",
        pronunciation: "[deːɐ̯ ˈleːʁɐ]",
        englishPronunciation: "der LAY-rer",
        meaning: "A person who teaches",
        gender: "m",
        genderReason: "Many professions are maskulin"
    },
    {
        german: "die Lehrerin",
        english: "the female teacher",
        pronunciation: "[diː ˈleːʁəʁɪn]",
        englishPronunciation: "dee LAY-rer-in",
        meaning: "A female person who teaches",
        gender: "f",
        genderReason: "Female professions often end in -in"
    },
    {
        german: "der Koch",
        english: "the cook",
        pronunciation: "[deːɐ̯ kɔx]",
        englishPronunciation: "der KOKH",
        meaning: "A person who prepares food",
        gender: "m",
        genderReason: "Many professions are maskulin"
    },
    {
        german: "die Köchin",
        english: "the female cook",
        pronunciation: "[diː ˈkøçɪn]",
        englishPronunciation: "dee KURKH-in",
        meaning: "A female person who prepares food",
        gender: "f",
        genderReason: "Female professions often end in -in"
    },
    // Transportation
    {
        german: "das Auto",
        english: "the car",
        pronunciation: "[das ˈaʊto]",
        englishPronunciation: "das OW-toh",
        meaning: "A road vehicle with an engine",
        gender: "n",
        genderReason: "Many vehicles are neutrum"
    },
    {
        german: "der Zug",
        english: "the train",
        pronunciation: "[deːɐ̯ tsuːk]",
        englishPronunciation: "der TSOOK",
        meaning: "A series of connected railway vehicles",
        gender: "m",
        genderReason: "Trains are maskulin in German"
    },
    {
        german: "das Fahrrad",
        english: "the bicycle",
        pronunciation: "[das ˈfaːɐ̯ʁaːt]",
        englishPronunciation: "das FAHR-raht",
        meaning: "A two-wheeled vehicle propelled by pedals",
        gender: "n",
        genderReason: "Many vehicles are neutrum"
    },
    {
        german: "das Flugzeug",
        english: "the airplane",
        pronunciation: "[das ˈfluːktsɔɪk]",
        englishPronunciation: "das FLOOK-tsoyk",
        meaning: "A powered flying vehicle with fixed wings",
        gender: "n",
        genderReason: "Many vehicles are neutrum"
    },
    {
        german: "das Schiff",
        english: "the ship",
        pronunciation: "[das ʃɪf]",
        englishPronunciation: "das SHIF",
        meaning: "A large watercraft",
        gender: "n",
        genderReason: "Many vehicles are neutrum"
    },
    // Body Parts
    {
        german: "der Kopf",
        english: "the head",
        pronunciation: "[deːɐ̯ kɔpf]",
        englishPronunciation: "der KOPF",
        meaning: "The upper part of the body",
        gender: "m",
        genderReason: "Many body parts are maskulin"
    },
    {
        german: "die Hand",
        english: "the hand",
        pronunciation: "[diː hant]",
        englishPronunciation: "dee HAHND",
        meaning: "The end of the arm",
        gender: "f",
        genderReason: "Many body parts are feminin"
    },
    {
        german: "das Bein",
        english: "the leg",
        pronunciation: "[das baɪn]",
        englishPronunciation: "das BINE",
        meaning: "The lower limb of the body",
        gender: "n",
        genderReason: "Some body parts are neutrum"
    },
    {
        german: "der Arm",
        english: "the arm",
        pronunciation: "[deːɐ̯ aʁm]",
        englishPronunciation: "der ARM",
        meaning: "The upper limb of the body",
        gender: "m",
        genderReason: "Many body parts are maskulin"
    },
    {
        german: "das Auge",
        english: "the eye",
        pronunciation: "[das ˈaʊɡə]",
        englishPronunciation: "das OW-guh",
        meaning: "The organ of sight",
        gender: "n",
        genderReason: "Some body parts are neutrum"
    },
    // Clothing
    {
        german: "das Hemd",
        english: "the shirt",
        pronunciation: "[das hɛmt]",
        englishPronunciation: "das HEMT",
        meaning: "A garment for the upper body",
        gender: "n",
        genderReason: "Many clothing items are neutrum"
    },
    {
        german: "die Hose",
        english: "the pants",
        pronunciation: "[diː ˈhoːzə]",
        englishPronunciation: "dee HOH-zuh",
        meaning: "A garment for the lower body",
        gender: "f",
        genderReason: "Words ending in -e are often feminin"
    },
    {
        german: "der Schuh",
        english: "the shoe",
        pronunciation: "[deːɐ̯ ʃuː]",
        englishPronunciation: "der SHOO",
        meaning: "A covering for the foot",
        gender: "m",
        genderReason: "Many clothing items are maskulin"
    },
    {
        german: "die Jacke",
        english: "the jacket",
        pronunciation: "[diː ˈjakə]",
        englishPronunciation: "dee YAH-kuh",
        meaning: "A short coat",
        gender: "f",
        genderReason: "Words ending in -e are often feminin"
    },
    {
        german: "der Hut",
        english: "the hat",
        pronunciation: "[deːɐ̯ huːt]",
        englishPronunciation: "der HOOT",
        meaning: "A covering for the head",
        gender: "m",
        genderReason: "Many clothing items are maskulin"
    }
];

// Combine existing and additional words
flashcardsData.push(...additionalWords);

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { flashcardsData, shuffleArray };
} 