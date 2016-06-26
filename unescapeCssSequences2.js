const RegularExpressions={
 CSS:{Sequence:/\\((([\dA-Fa-f]{2}|[\dA-Fa-f]{1,5})\s)|([\dA-Fa-f]{6}|[\dA-Fa-f]{4}))/g}
};

function unescapeCssSequences(s){
 const w=window,f=w.String.fromCharCode,i=w.parseInt;
 return s.replace(RegularExpressions.CSS.Sequence,function(c){return f(i(c.slice(2),16));});
}

console.log(unescapeCssSequences("a\\0020b\\0022c"));
