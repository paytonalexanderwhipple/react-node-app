UPDATE monster 
    SET name = $1, no_appearing = $2, ac = $3
    WHERE monster_id = $4;

SELECT * FROM monster