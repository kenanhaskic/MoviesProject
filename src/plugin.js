export default{
    install(Vue, options) {
        const name='Kenan',lastname='Haskic'
    
        Vue.prototype.getfullname = function() {
          return name+lastname;
        };
        
        
}
}