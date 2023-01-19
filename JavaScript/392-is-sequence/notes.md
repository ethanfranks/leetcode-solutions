# Notes

## Initial Thoughts

The fastest way to solve this problem would be to check that all characters in
string s are contained within string t. If one character from string s is not
found in string t then string s cannot be a subsequence of string t, and the
function can return false.

If all of the characters of string s are found in string t, the next step would
be to determine what order the characters appear in string t. This could be
accomplished by iterating over string s and mapping each character in s to the
index of that character in string t, and with each iteration comparing the value
of the previous character to the value of the current. If the index of the
previous character is greater than the index of the current character then
return false, otherwise continue. If the loop makes it through every iteration
over string s and does not return false, then return true.

## Results

### First Attempt

I failed to consider the edge case that s equaled an empty string, resulting in
an output of undefined. To solve for this I added a simple if statement to the
beginning of the function which returns false if s is undefined.

### Second Attempt

Failed due to another edge case in which string s consisted of multiples of the
same character. This made me realize I had chosen the wrong data structure by
using a map, as a map must have unique keys. Instead, I will use an array of the
indexes.

In this test case string t also had multiples of he same character, which made
me realize that the String.prototype.indexOf() function would not be sufficient
as it always returns the index of the first match.

### Third Attempt

So frustrating to be owned by edge cases. I'm getting closer every step, but
definitely need to work on my ability to think through edge cases ahead of time.
I've been told by some of my developer friends that it is something that comes
with practice. I wonder if I can find any resources to help me directly train
this kind of thinking, other than just getting owned on leet code? xD

Test Case:

- s = "ab"
- t = "baab"

### Fourth Attempt (Successful!)

Ok, I decided to start fresh and attempt an altogether different solution. My
code was getting far too complex and unreadable, and was obviously not catching
edge cases. I realized that by iterating over string s, and with each iteration
checking whether the current character was included in string t, I could then
slice that portion of string t off and compare the next iteration to the slice.
In this way ensuring the preceding matches from s to t are in relative positions
to each other from start to finish.
