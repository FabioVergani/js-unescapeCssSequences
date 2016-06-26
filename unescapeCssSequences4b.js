const RegularExpressions={
 CSS:{
	Sequence:(function(){
	 const o=/\\((([\dA-F]{2}|[\dA-F]{1,5})\s)|([\dA-F]{6}|[\dA-F]{4}))/gim,t=(function(){const $=window,c=$.String.fromCharCode,i=$.parseInt;return function(m){return c(i(m.slice(2),16));};})(); 
	 o.unescape=function(s,k){const f=k||t;return s.replace(this,f);};
	 return o;
	})(),
 }
};

console.dir(RegularExpressions);
console.log(RegularExpressions.CSS.Sequence.unescape("a\\0020b\\0022c"));
console.log(RegularExpressions.CSS.Sequence.unescape("a\\0020b\\0022c","A"));

