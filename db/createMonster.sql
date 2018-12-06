INSERT INTO monster 
    (name, no_appearing, ac, move, hd, no_of_attacks, damage_attack, special_attacks, special_defences, magic_resistance, intelligence, alignment, size, psionic_ability, attack_defence_modes, xp)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16);

SELECT * FROM monster