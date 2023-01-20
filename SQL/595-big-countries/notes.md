# 595. Big Countries - Notes

## Solutions are written for MySQL RDBMS.

This was quite straightforward. Not much to say other than in regards to
performance, where I was surprised to see my solution only beat 5.1% of others.
I reattempted the problem with the same SQL, as my browser had had an issue when
submitting the first time and I received a little bit better placing, beating
12.1% of others.

I am still surprised by this though, as it is not immediately apparent to me how
I could better query the data. I'm curious though, and am planning on talking to
some of my senior dev friends about the problem and possible methods to improve
performance.

## After some research...

I found a solution which uses a UNION with a separate SELECT statement for each
of the WHERE clauses. This did produce a more performant query using MySQL. The
explanation I found for this is that MySQL uses only one index per table on a
given query, and thus has to do a table scan to find rows that match the OR
clause, instead of doing an indexed search. Others are saying that most RDBMSs
perform "Index Merge Optimization" to get a merged result of individual scans
when using an OR clause in a WHERE statement. Essentially performing a UNION
under the hood, as I understand it.

I also found one example of a solution which used a more specific identifier in
the WHERE clauses by appending the column name to the Table name and wrapping
it, and the condition in parentheses, i.e. _(World.area >= 3000000)_ instead of
_area >= 3000000_. This did seem to be more performant, but I don't really
understand why.
