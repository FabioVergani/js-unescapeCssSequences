const RegularExpressions={
 CSS:{
	Sequence:(function(){
	 const o=/\\((([\dA-F]{2}|[\dA-F]{1,5})\s)|([\dA-F]{6}|[\dA-F]{4}))/gim;
	 o.unescape=function(s){
		const $=window,f=$.String.fromCharCode,i=$.parseInt;
		return s.replace(this,function(c){return f(i(c.slice(2),16));});
	 };
	 return o;
	})(),
 }
};

//console.dir(RegularExpressions);
//console.log(RegularExpressions.CSS.Sequence.unescape("a\\0020b\\0022c"));
