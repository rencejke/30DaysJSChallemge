//Regular Expression (Regex) symbols/operators.

/*

-> []: A set of characters
        [a-c] means, a or b or c
        [a-z] means, any letter a to z
        [A-Z] means, any character A to Z
        [0-3] means, 0 or 1 or 2 or 3
        [0-9] means any number 0 to 9
        [A-Za-z0-9] any character which is a to z, A to Z, 0 to 9

-> \: uses to escape special characters
    \d mean: match where the string contains digits (numbers from 0-9)
    \D mean: match where the string does not contain digits
    \s mean: One Whitespace
    \S mean: One non-whitespace 
    \w mean: One word character
    \W mean: One non-word character
    \n mean: Newline
    \r: Carriage return
    \t: Tab
    \0: Null character
    \YYY: Octal Character YYY
    \xYY:  Hexadecimal characte YYY
    \uYYY:  Hexadecimal characte YYYY
    \cY: Control character Y

-> . : any character except new line character(\n)

-> ^: starts with
    r'^substring' eg r'^love', a sentence which starts with a word love
    r'[^abc] mean not a, not b, not c.

-> $: ends with
    r'substring$' eg r'love$', sentence ends with a word love

-> *: zero or more times
    r'[a]*' means a optional or it can occur many times.

-> +: one or more times
    r'[a]+' means at least once or more times

-> ?: zero or one times
    r'[a]?' means zero times or once

-> \b: word bounder, matches with the beginning or ending of a word

-> \B: non-word bounder

-> {3}: Exactly 3 characters

-> {3,}: At least 3 characters

-> {3,8}: 3 to 8 characters

-> |: Either or
    r'apple|banana' mean either of an apple or a banana

-> (): Capture and group

-> (?): Non Capturing group

-> \Y: Match the Y'th captured group

-> (?=): Positive lookahead

-> (?!): Negative lookahead

-> $$: Insert $

-> $&: Insert entire match

-> $`: Insert preceding string

-> $': Insert following string

-> $Y: Insert Y'th captured group


*/