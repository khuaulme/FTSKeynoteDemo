exports = function(payload) {
    var queryArg = payload.query.arg || '';
    
   return context.functions.execute("movies_FTS", queryArg);

};