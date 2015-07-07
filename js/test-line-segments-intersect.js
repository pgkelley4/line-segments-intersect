/**
 * Tests for the line-segments-intersect.js JavaScript file.
 *
 * @author Peter Kelley
 */

test( "No intersect", function() {
	p = {x:0, y:1};
	p2 = {x:0, y:3};
	q = {x:1, y:0};
	q2 = {x:3, y:0};
	equal( doLineSegmentsIntersect(p, p2, q, q2), false, "Passed!" );
});

test( "Intersect", function() {
	p = {x:0, y:0};
	p2 = {x:3, y:3};
	q = {x:0, y:2};
	q2 = {x:2, y:0};
	equal( doLineSegmentsIntersect(p, p2, q, q2), true, "Passed!" );
});

test( "Intersect with negatives", function() {
	p = {x:0, y:0};
	p2 = {x:-3, y:-3};
	q = {x:0, y:-2};
	q2 = {x:-2, y:0};
	equal( doLineSegmentsIntersect(p, p2, q, q2), true, "Passed!" );
});

test( "Intersect at start point", function() {
	p = {x:0, y:0};
	p2 = {x:2, y:0};
	q = {x:0, y:0};
	q2 = {x:0, y:2};
	equal( doLineSegmentsIntersect(p, p2, q, q2), true, "Passed!" );
});

test( "Intersect at end point", function() {
	p = {x:0, y:0};
	p2 = {x:2, y:0};
	q = {x:3, y:3};
	q2 = {x:2, y:0};
	equal( doLineSegmentsIntersect(p, p2, q, q2), true, "Passed!" );
});

test( "No intersect because parallel vertically", function() {
	p = {x:0, y:0};
	p2 = {x:0, y:3};
	q = {x:2, y:0};
	q2 = {x:2, y:3};
	equal( doLineSegmentsIntersect(p, p2, q, q2), false, "Passed!" );
});

test( "No intersect because parallel horizontally", function() {
	p = {x:0, y:0};
	p2 = {x:3, y:0};
	q = {x:0, y:1};
	q2 = {x:3, y:1};
	equal( doLineSegmentsIntersect(p, p2, q, q2), false, "Passed!" );
});

test( "No intersect because parallel diagonally", function() {
	p = {x:0, y:0};
	p2 = {x:3, y:3};
	q = {x:1, y:0};
	q2 = {x:4, y:3};
	equal( doLineSegmentsIntersect(p, p2, q, q2), false, "Passed!" );
});

test( "Collinear with overlap", function() {
	p = {x:0, y:0};
	p2 = {x:3, y:3};
	q = {x:2, y:2};
	q2 = {x:5, y:5};
	equal( doLineSegmentsIntersect(p, p2, q, q2), true, "Passed!" );
});

test( "Collinear with overlap at single point vertical", function() {
	p = {x:0, y:0};
	p2 = {x:0, y:2};
	q = {x:0, y:2};
	q2 = {x:0, y:4};
	equal( doLineSegmentsIntersect(p, p2, q, q2), true, "Passed!" );
});

test( "Collinear with overlap at single point horizontal", function() {
	p = {x:0, y:0};
	p2 = {x:2, y:0};
	q = {x:2, y:0};
	q2 = {x:4, y:0};
	equal( doLineSegmentsIntersect(p, p2, q, q2), true, "Passed!" );
});

test( "Collinear with overlap horizontal with negatives", function() {
	p = {x:1, y:0};
	p2 = {x:-1, y:0};
	q = {x:2, y:0};
	q2 = {x:0, y:0};
	equal( doLineSegmentsIntersect(p, p2, q, q2), true, "Passed!" );
});

test( "Collinear without overlap vertical", function() {
	p = {x:0, y:0};
	p2 = {x:0, y:2};
	q = {x:0, y:3};
	q2 = {x:0, y:4};
	equal( doLineSegmentsIntersect(p, p2, q, q2), false, "Passed!" );
});

test( "Collinear without overlap vertical reverse order", function() {
	p = {x:0, y:2};
	p2 = {x:0, y:3};
	q = {x:0, y:0};
	q2 = {x:0, y:1};
	equal( doLineSegmentsIntersect(p, p2, q, q2), false, "Passed!" );
});

test( "Collinear with overlap reverse point order", function() {
	p = {x:0, y:0};
	p2 = {x:3, y:3};
	q = {x:5, y:5};
	q2 = {x:2, y:2};
	equal( doLineSegmentsIntersect(p, p2, q, q2), true, "Passed!" );
});

test( "Collinear without overlap", function() {
	p = {x:0, y:0};
	p2 = {x:3, y:3};
	q = {x:4, y:4};
	q2 = {x:6, y:6};
	equal( doLineSegmentsIntersect(p, p2, q, q2), false, "Passed!" );
});

test( "Collinear with overlap at single point with negatives", function() {
	p = {x:0, y:-1};
	p2 = {x:0, y:-2};
	q = {x:0, y:-2};
	q2 = {x:0, y:-3};
	equal( doLineSegmentsIntersect(p, p2, q, q2), true, "Passed!" );
});

test( "Collinear with overlap at single point reverse", function() {
	p = {x:0, y:3};
	p2 = {x:0, y:2};
	q = {x:0, y:2};
	q2 = {x:0, y:1};
	equal( doLineSegmentsIntersect(p, p2, q, q2), true, "Passed!" );
});

test( "Collinear without overlap at single point with negatives", function() {
	p = {x:0, y:-1};
	p2 = {x:0, y:-2};
	q = {x:0, y:-3};
	q2 = {x:0, y:-4};
	equal( doLineSegmentsIntersect(p, p2, q, q2), false, "Passed!" );
});

test( "Collinear with overlap with negatives", function() {
	p = {x:0, y:-1};
	p2 = {x:0, y:-3};
	q = {x:0, y:-2};
	q2 = {x:0, y:-4};
	equal( doLineSegmentsIntersect(p, p2, q, q2), true, "Passed!" );
});

test( "Collinear, q is part of p", function() {
	p = {x:10, y:0};
	p2 = {x:40, y:0};
	q = {x:30, y:0};
	q2 = {x:20, y:0};
	equal( doLineSegmentsIntersect(p, p2, q, q2), true, "Passed!" );
});
