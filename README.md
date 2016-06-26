if you would want to use it in a CSS the plus sign (+) is U+002B,
you would escape it into \2b (note the space character at the end)
or \00002b (using exactly six hexadecimal digits).
Any characters matching [\t\n\v\f\r] need to be escaped based on their Unicode code points.
The space character ( ) can simply be backslashed (\ ). Other whitespace characters don’t need to be escaped.

		Hexadecimal:{
			Long:/\\[\dA-Fa-f]{6}/g,
			Short:/\\[\dA-Fa-f]{1,5}\s/g,
		},
		UnicodeCodePoint:{
			Long:/\\[\dA-Fa-f]{4}/g,
			Short:/\\[\dA-Fa-f]{2}\s/g,
		}
		
		
![Regular expression visualization](https://github.com/FabioVergani/js-unescapeCssSequences/blob/master/RegularExpressionVisualization.png)


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

