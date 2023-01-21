# Notes

## Initial Attempt

Another simple question with an easy solution. After submitting this solution
with a runtime of 1334 ms, beating only 5.7% of other submissions, I did some
research to find out how I can make such a simple query more performant.

I was unable to quickly come up with any answers to that questions, but did find
a common thread related to LeetCode runtimes, which is that they are often
inconsistent. Many other users were sharing an experience that I have had as
well, which is that the exact same solution to a problem can produce
dramatically different runtimes from one submission to the next. Sooo, I'm not
worrying about it for now.

## Alternative Solution

While searching for a more performant solution to the problem I did find an
alternative solution using WHERE/NOT IN. I thought this was useful as practice
looking at the problem from a different angle, although the solution is not any
more performant, as far as I can tell.
