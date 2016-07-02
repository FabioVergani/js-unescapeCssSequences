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


	-

Any character except NUL is allowed in CSS class names in CSS.
(If CSS contains NUL (escaped or not), the result is undefined.


In CSS, identifiers (including element names, classes, and IDs in selectors)
can contain only the characters [a-z0-9] and ISO 10646 characters U+00A1 and higher,
plus the hyphen (-) and the underscore (_);
they cannot start with a digit, or a hyphen followed by a digit.
Identifiers can also contain escaped characters and any ISO 10646 character as a numeric code.
For instance, the identifier "B&W?" may be written as "B\&W\?" or "B\26 W\3F".

https://www.w3.org/TR/CSS21/grammar.html#scanner

h		[0-9a-f]
nonascii	[\240-\377]
unicode		\\{h}{1,6}(\r\n|[ \t\r\n\f])?
escape		{unicode}|\\[^\r\n\f0-9a-f]

Basically1, a name must begin with an underscore (_), a hyphen (-), or a letter(a–z), followed by any number of hyphens, underscores, letters, or numbers. There is a catch: if the first character is a hyphen, the second character must2 be a letter or underscore, and the name must be at least 2 characters long.

-?[_a-zA-Z]+[_a-zA-Z0-9-]*


-?(?:[_a-z]|[\200-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])(?:[_a-z0-9-]|[\200-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])*
So all of your listed character except “-” and “_” are not allowed if used directly.
But you can encode them using a backslash foo\~bar or using the unicode notation foo\7E bar

Third, backslash escapes allow authors to refer to characters they cannot easily put in a document. In this case, the backslash is followed by at most six hexadecimal digits (0..9A..F), which stand for the ISO 10646 ([ISO10646]) character with that number, which must not be zero. (It is undefined in CSS 2.1 what happens if a style sheet does contain a character with Unicode codepoint zero.) If a character in the range [0-9a-fA-F] follows the hexadecimal number, the end of the number needs to be made clear. There are two ways to do that:

with a space (or other white space character): "\26 B" ("&B"). In this case, user agents should treat a "CR/LF" pair (U+000D/U+000A) as a single white space character.
by providing exactly 6 hexadecimal digits: "\000026B" ("&B")
In fact, these two methods may be combined. Only one white space character is ignored after a hexadecimal escape. Note that this means that a "real" space after the escape sequence must be doubled.

If the number is outside the range allowed by Unicode (e.g., "\110000" is above the maximum 10FFFF allowed in current Unicode), the UA may replace the escape with the "replacement character" (U+FFFD). If the character is to be displayed, the UA should show a visible symbol, such as a "missing character" glyph (cf. 15.2, point 5).

Note: Backslash escapes are always considered to be part of an identifier or a string (i.e., "\7B" is not punctuation, even though "{" is, and "\32" is allowed at the start of a class name, even though "2" is not).
The identifier "te\st" is exactly the same identifier as "test".
