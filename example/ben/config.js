var config = {
    // style: 'mapbox://styles/branigan/cjzsvonse027m1co4nkxp13b3',
    style: 'mapbox://styles/mapbox/outdoors-v11',
    accessToken: 'pk.eyJ1IjoibWJ4c29sdXRpb25zIiwiYSI6ImNrMm01aG9hdTBlZGwzbXQ1ZXVrNHNmejAifQ.QHQA0N6XPWddCXtvoODHZg',
    showMarkers: false,
    theme: 'light',
    title: "Ben's life",
    subtitle: 'A little jaunt around the world',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'birth',
            alignment: 'right',
            title: "Yo, I got born!",
            image: 'baby_passport.jpg',
            description: "11 December 1981, I was born. It was at the QEII hospital; I don't remember it at all.",
            location: {
                center: { lon: -1.94129, lat: 52.45162 },
                zoom: 16.00,
                pitch: 43.50,
                bearing: 96.80
            },


        },
        {
            id: 'brum',
            alignment: 'right',
            title: 'Brief Interlude as a Brummie',
            image: 'Ben looks at himself in mirror.jpeg',
            description: 'back to Bristol Road South briefly, before heading off to... ',
            location: {
                center: { lon: -2.00544, lat: 52.39561 },
                zoom: 16.00,
                pitch: 0.00,
                bearing: 0.00
            },


        },
        {
            id: 'saudi',
            alignment: 'left',
            title: 'Saudi Arabia',
            image: 'saudiRiver.jpg',
            description: "In this era, the world bank was splashing money around like crazy, and dad was in Saudi helping them spend it. That was in Taif.",
            location: {
                center: { lon: 40.54159118971121, lat: 21.482295263306458 },
                zoom: 5.14,
                pitch: 0.00,
                bearing: 0.00
            },


        },
        {
            id: 'Mascara',
            alignment: 'left',
            title: 'Mascara',
            image: 'tent684.jpg',
            description: "Brief stop in north Africa",
            location: {
                center: { lon: 0.11140050591709612, lat: 35.39316399545672 },
                zoom: 5,
                pitch: 0.00,
                bearing: 0.00
            },


        },
        {
            id: 'wolf',
            alignment: 'right',
            title: 'Wolves 🐺',
            image: "youngFam.jpg",
            description: 'After being a fancy imperialist baby, I moved to the posh bit of Wolverhampton until I was 7.',
            location: {
                center: { lon: -2.17378, lat: 52.59382 },
                zoom: 10,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: 'lyminge',
            alignment: 'left',
            title: 'Lyminge',
            image: 'firstBike.jpg',
            description: "The Channel Tunnel slurped up almost everyone in the UK's construction industry. So we (three kids, 2 adults in tow) moved to Lyminge. It was a bit of a reverse culture shock. Cosmoplitan midlands to monocultural Kent.",
            location: {
                center: { lon: 1.08849, lat: 51.12540 },
                zoom: 10,
                pitch: 0.00,
                bearing: 0.00
            },


        },
        {
            id: 'harvey',
            alignment: 'right',
            title: 'Harvey Grammar School',
            image: 'noEye.jpg',
            description: 'For a while, I went to school, but then they kicked me out.',
            location: {
                center: { lon: 1.15742, lat: 51.08659 },
                zoom: 15.82,
                pitch: 45,
                bearing: 45
            },


        },
        {
            id: 'mech',
            alignment: 'left',
            title: 'Exeter',
            image: 'bigHair.jpg',
            description: "I tried doing a bit of mech-eng, but it turns out that I liked night clubs a lot more",
            location: {
                center: { lon: -3.543416960291649, lat: 50.724911970300646 },
                zoom: 13,
                pitch: 0.00,
                bearing: 0.00
            },


        },
        {
            id: 'kayak',
            alignment: 'right',
            title: 'Exeter',
            image: 'sjack.jpg',
            description: "but I especially liked kayaking",
            location: {
                center: { lon: -3.543416960291649, lat: 50.7294215276713 },
                zoom: 9,
                pitch: 45,
                bearing: 45
            },

        },
        {
            id: 'arch',
            alignment: 'right',
            title: 'Oxford Brookes',
            image: 'prelimSurgery.jpg',
            description: "So eventually I droped eng, and went to arch, and made some building that looked like this.",
            location: {
                center: { lon: -1.2240581552245382, lat: 51.75469704995436 },
                zoom: 11,
                pitch: 0.00,
                bearing: 0.00
            },

        },
        {
            id: 'party',
            alignment: 'right',
            title: '...for a long time',
            image: 'gold.jpg',
            description: "",
            location: {
                center: { lon: -1.2372885216129335, lat: 51.75083618910704 },
                zoom: 14,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: 'melb',
            alignment: 'right',
            title: 'RMIT',
            image: 'para1.jpg',
            description: "I went to RMIT for a semester",
            location: {
                center: { lon: 144.8965512632817, lat: -37.84437895626407 },
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: 'movingT',
            alignment: 'right',
            title: 'Major study',
            image: 'MS.png',
            description: "How do we think about confidence?",
            location: {
                center: { lon: -1.2372885216129335, lat: 51.75083618910704 },
                zoom: 6,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: 'gfc',
            alignment: 'right',
            title: 'GFC',
            image: '',
            description: "💩",
            location: {
                center: { lon: -1.2372885216129335, lat: 51.75083618910704 },
                zoom: 2,
                pitch: 70,
                bearing: 120
            },
        },
        {
            id: 'bvn',
            alignment: 'right',
            title: 'Sydney, and BVN',
            image: '2011.jpg',
            description: `"why don't you stay in London and be unemployed with the rest of us?"`,
            location: {
                center: { lon: 151.22892458193908, lat: -33.870970327921796 },
                zoom: 8,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: 'van',
            alignment: 'right',
            title: 'Vancouver?',
            image: 'snowBeard.jpg',
            description: "Vancouver's lovely, the weather is surprisingly great",
            location: {
                center: { lon: -123.10296280069538, lat: 49.265780223497416 },
                zoom: 8,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: 'sydAgain',
            alignment: 'left',
            title: 'Nope, Sydney again',
            image: '85.gif',
            description: "That didn't exactly go to plan, anyway, here's a picture of my snatch.",
            location: {
                center: { lon: 151.1610893102926, lat: -33.90405459036874 },
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: 'righthere',
            alignment: 'right',
            title: 'Right here',
            image: 'here.jpg',
            description: "and now I'm here with you nice people",
            location: {
                center: { lon: 151.20747107062905, lat: -33.87176427440331 },
                zoom: 15,
                pitch: 0.00,
                bearing: 0.00
            },
        }
        {
            id: 'righthere',
            alignment: 'right',
            title: '❤',
            image: '',
            description: "",
            location: {
                center: { lon: 151.20747107062905, lat: -33.87176427440331 },
                zoom: 15,
                pitch: 60.00,
                bearing: 0
            },
        }

    ]
};
//https://imgflip.com/gif/7184eq