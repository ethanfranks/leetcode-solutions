-- Write your MySQL query statement below --

-- Initial Solution --

SELECT product_id 
FROM Products
WHERE low_fats = 'Y'
AND recyclable = 'Y';

-- ALternative Solution --

-- SELECT product_id
-- FROM Products
-- WHERE 'N' NOT IN (low_fats, recyclable);
