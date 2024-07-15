
module.exports = function post_loader(content) {
    const relativePath = this.utils.contextify(this.context,this.resource);
    const injected_code = `console.log('injected code for ${relativePath}');`
    return injected_code + content;
}