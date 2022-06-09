import {breedsReducer, setBreeds} from "./breeds-reducer";

describe('set breeds', () => {
    let initialState
    let breeds
    beforeEach(() => {
        breeds = [
            {
                "id": 1,
                "image": {
                    "height": 1199,
                    "id": "BJa4kxc4X",
                    "url": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
                    "width": 1600
                },
                "life_span": "10 - 12 years",
                "name": "Affenpinscher",
            },
            {
                "id": 2,
                "image": {
                    "height": 380,
                    "id": "hMyT4CDXR",
                    "url": "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg",
                    "width": 606
                },
                "life_span": "10 - 13 years",
                "name": "Afghan Hound",
            }
        ]
        initialState = {
            breeds: breeds,
            limits: [5, 10, 15, 20],
            currentPage: 0,
            totalCount: 172
        }
    })
    test('set breeds', () => {
        expect(breedsReducer(initialState, setBreeds(breeds)))
            .toEqual(
                {
                    breeds: [
                        {
                            "id": 1,
                            "image": {
                                "height": 1199,
                                "id": "BJa4kxc4X",
                                "url": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
                                "width": 1600
                            },
                            "life_span": "10 - 12 years",
                            "name": "Affenpinscher",
                        },
                        {
                            "id": 2,
                            "image": {
                                "height": 380,
                                "id": "hMyT4CDXR",
                                "url": "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg",
                                "width": 606
                            },
                            "life_span": "10 - 13 years",
                            "name": "Afghan Hound",
                        }
                    ],
                    limits: [5, 10, 15, 20],
                    currentPage: 0,
                    totalCount: 172
                }
            )
    })
})