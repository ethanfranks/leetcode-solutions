# Notes

My first attempt ran into an edge case which helped me see that I was not fully
understanding the definition of isomorphic strings. Originally I thought that
the one-way mapping of an isomorphic string meant that only the first string had
to map to the second. Once I ran into a test case where one way mapping worked
from string s to string t, but not from string t to string s, I realized that I
needed to map both strings as key-value pairs, and test them independently of
one another.
