
LiteRenderer = function() {
  return {
    display: function(tree,mother) {
      var child_nodes = tree['*'];
      _.each(child_nodes,function(vn,kn) {
        if (typeof(vn)=='string')
          mother.append(vn)
        else {
          var tag_name=_.keys(vn)[0];
          //temporarily remove the children so attributes can be passed as second arg to jQuery
          //element creator
          var children = vn[tag_name]['*'];
          delete vn[tag_name]['*'];
          el = $("<"+tag_name+">",vn[tag_name]);
          //add back in children and recursively render
          vn[tag_name]['*']=children;
          mother.append(LiteRenderer.display(vn[tag_name],el)); 
        }
      });
      return mother;
    } 
  }
}();
