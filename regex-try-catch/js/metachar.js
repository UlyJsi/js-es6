let re;
// literal charackters
re = /hello/i;

// $^\? - metacharacters symbols
re = /^h/i; // must start with h
re = /world$/i; // must end with world
re = /^hello$/i; // start and end with hello
re = /h.llo/i; // matches any ONE CHARACTER
re = /h*llo/i; // matches any MULTIPLE or 0 characters
re = /gre?a?y/i; // can be grey or gray or gry
re = /gre?a?y\?/i; // escape character

// brackets [] - character set
re = /gr[ae]y/i; // must be only a or e - not null
re = /[GF]ray/; // must be only G or F
re = /[^GF]ray/i; // match anything exept G or F
re = /[A-Z]ray/i; // match any uppercase letter 
re = /[a-z]ray/i; // match any lowercase letter
re = /[A-Za-z]ray/i; // match any letter, any case
re = /[0-9]ray/i; // match any digit

// braces(curly braces) {} - quantifiers
re = /Hel{2}o/i; // must be exactly two "L"
re = /Hel{2,4}o/i; // must be between 2 and 4 "L"
re = /Hel{2,}o/i; // must be at least 2 "L"

// parentheses () - for grouping
re = /^([0-9]x){3}$/ // exactly 3 times like "1x2x3x"

// shorthand character classes
re = /\w/; // word character - any letter or any number or _
re = /\w+/; // one or more previous
re = /\W/; // non-word-numeric character
re = /\d/; // match any digit
re = /\d+/; // match any digit 0 or more times
re = /\D/; // match any non-digit
re = /\s/; // match whitespace character
re = /\S/; // match non-whitespace character
re = /Hell\b/i; // word boundary - looks fro specific word (Hello = null, Hell = ok)

// assertions - conditions
re = /x(?=y)/; // match x only if followed by "y"
re = /x(?!y)/; // match x only if NOT followed by "y"

// string to match
const str = "1x2x3x4x";
// log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}.`)
  } else {
    console.log(`${str} doesn not match ${re.source}.`)
  }
}

reTest(re, str);