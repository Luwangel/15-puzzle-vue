import palm from './assets/images/puzzle/palm.jpg';
import panda from './assets/images/puzzle/panda.jpg';
import strasbourg from './assets/images/puzzle/strasbourg.jpg';
import tree from './assets/images/puzzle/tree.jpg';
import cabane from './assets/images/puzzle/cabane.jpg';

const url = picture => `url("${picture}")`;

export default {
    palm: url(palm),
    panda: url(panda),
    strasbourg: url(strasbourg),
    tree: url(tree),
    cabane: url(cabane),
};
