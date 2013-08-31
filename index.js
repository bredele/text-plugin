
/**
 * Expose 'text-plugin'
 */

module.exports = function(el, expr){
  el.innerText = this.get(expr);
  this.on('change ' + expr, function(val){
    el.innerText = val;
  });
};