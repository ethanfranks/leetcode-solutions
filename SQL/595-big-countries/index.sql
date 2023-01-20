-- Initial Solution

-- SELECT name, population, area
-- FROM World
-- WHERE population >= 25000000
-- OR area >= 3000000;

-- More Performant Solution
SELECT name, population, area 
FROM World
WHERE (World.area >= 3000000)

UNION

SELECT name, population, area 
FROM World
WHERE (World.population >= 25000000);
