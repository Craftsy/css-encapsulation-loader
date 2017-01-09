const encapsulateCss = require('encapsulate-css').default;
const path = require('path');

const classnameFromFilename = (filename) => filename.replace(/(^.*)\..*/, '$1').replace(/\W+/g, '_');

module.exports = function(source) {
    this.cacheable();

    const optFileOut = source.indexOf('/* disable-encapsulation */') !== -1;
    const filename = path.basename(this.resourcePath);

    if (optFileOut === true) {
        return source;
    } else {
        return encapsulateCss(source, classnameFromFilename(filename));
    }
};
