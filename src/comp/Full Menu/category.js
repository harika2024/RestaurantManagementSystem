import starter from '../../assests/Icons/starterIcon.png'
import veg from '../../assests/Icons/salad.png'
import chicken from '../../assests/Icons/dinner.png'
import ice from '../../assests/Icons/ice-cream-cup.png'
import coke from '../../assests/Icons/coke.png'
import wine from '../../assests/Icons/wine-bottle.png'




export const categories = [
    {
        id: 1,
        name: "Stater",
        urlParamName: "starter",
        image: starter
    },
    {
        id: 2,
        name: "Veg",
        urlParamName: "veg",
        image: veg
    },
    {
        id: 3,
        name: "Non-Veg",
        urlParamName: "nonveg",
        image: chicken
    },
    {
        id: 4,
        name: "Desserts",
        urlParamName: "dessert",
        image: ice

    },
    {
        id: 5,
        name: "Beverages",
        urlParamName: "drinks",
        image: coke

    },
    {
        id: 6,
        name: "Wine",
        urlParamName: "wine",
        image: wine

    }
];
