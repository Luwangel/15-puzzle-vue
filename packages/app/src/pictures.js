import { choiceInArray } from '../../core/src';

import palm from './assets/images/puzzle/palm.jpg';
import panda from './assets/images/puzzle/panda.jpg';
import strasbourg from './assets/images/puzzle/strasbourg.jpg';
import tree from './assets/images/puzzle/tree.jpg';
import cabane from './assets/images/puzzle/cabane.jpg';

export const url = picture => `url("${picture}")`;

const pictures = {
    palm: url(palm),
    panda: url(panda),
    strasbourg: url(strasbourg),
    tree: url(tree),
    cabane: url(cabane),
};

export const getRandomPicture = () => {
    const choice = choiceInArray(Object.keys(pictures));
    return pictures[choice];
};

export default pictures;
