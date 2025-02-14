import animatecss from './animatecss';
import animista from './animista';
const sortObject = (o) => Object.keys(o)
    .sort()
    .reduce((r, k) => ((r[k] = o[k]), r), {});
export default Object.assign({ none: [] }, sortObject(Object.assign(Object.assign({}, animatecss), animista)));
