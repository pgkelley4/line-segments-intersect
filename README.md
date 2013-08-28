line-segments-intersect
=======================

See if two line segments intersect or not. This uses the vector cross
product approach described here: http://stackoverflow.com/a/565282/786339.
This derives its algorithm from: "Intersection of two lines in three-space" 
by Ronald Goldman.

How to use
=======================

Include the line-segments-intersect.js script in your HTML. Then call 
`doLineSegmentsIntersect(p, p2, q, q2)` to see if the line segment between 
the points p and p2 intersect with the line segment between q and q2.

Tests
=======================

I have included the unit tests I put together in the index html as an example.