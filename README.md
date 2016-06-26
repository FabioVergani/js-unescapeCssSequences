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
		
		
![Regular expression visualization](sss)

