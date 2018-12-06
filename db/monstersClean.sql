CREATE TABLE monster (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    no_appearing VARCHAR(20),
    AC INTEGER,
    move VARCHAR(10),
    HD VARCHAR(20),
    no_of_attacks INTEGER,
    damage_attack VARCHAR(30),
    special_attacks VARCHAR(200),
    special_defences VARCHAR(200),
    magic_resistance INTEGER,
    intelligence VARCHAR(20),
    alignment VARCHAR(40),
    size VARCHAR(10),
    psionic_ability VARCHAR(20),
    attack_defence_modes VARCHAR(30),
    xp VARCHAR(20)
);

INSERT INTO monster 
    (name, no_appearing, ac, move, hd, no_of_attacks, damage_attack, special_attacks, special_defences, magic_resistance, intelligence, alignment, size, psionic_ability, attack_defence_modes, xp)
    VALUES ('test', '5-10', '8', '12"', '1 + 2', '3', '1-2/1-8/1-12', 'NIL', 'NIL', '10%', 'low', 'lawful evil', 'L', '175-245', 'a,b,d,f,j', '100+26/hp')