import {getBreeds} from "./breeds-selector";

describe('get breeds from store', () => {
    let breeds
    beforeEach(() => {
        breeds = {
            breeds: {
                breeds: [{
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
                    }]
            }
        }
    })
    test('array of breeds is empty', () => {
        expect(getBreeds([])).toEqual([])
    })
    test('array of breeds is filled', () => {
        expect(getBreeds(breeds))
            .toEqual([{
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
                        }]
                )
    })
})