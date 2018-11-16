let dungeon = [];

let id = 0;

let dungeon_controller = {
    create: (req, res) => {
        let newMonster = {
            name: req.body.name,
            noAppearing: req.body.noAppearing,
            AC: req.body.AC,
            move: req.body.move,
            HD: req.body.HD,
            noOfAttacks: req.body.noOfAttacks,
            damageAttack: req.body.damageAttack,
            specialAttacks: req.body.specialAttacks,
            specialDefenses: req.body.specialDefenses,
            magicResistance: req.body.magicResistance,
            intelligence: req.body.intelligence,
            alignment: req.body.alignment,
            size: req.body.size,
            psionicAbility: req.body.psionicAbility,
            attackDefenceModes: req.body.attackDefenceModes,
            xp: req.body.xp,
            id,
        }
        dungeon.push(newMonster)
        id++
        res.status(201).send(dungeon)
    },
    read: (req, res) => {
        res.status(200).send(dungeon)
    },
    readByName: (req, res) => {
        let result = dungeon.filter((monster) => 
            req.body.name.toLowerCase() === monster.name.toLowerCase())
        res.status(200).send(result)
    },
    update: (req, res) => {
        dungeon.forEach((monster) => {
            if(monster.id == req.params.id) {
                monster.name = req.body.name || monster.name;
                monster.noAppearing = req.body.noAppearing ||monster.noAppearing;
                monster.AC = req.body.AC || monster.AC;
                monster.move = req.body.move || monster.move;
                monster.HD = req.body.HD || monster.HD;
                monster.damageAttack = req.body.damageAttack || monster.damageAttack;
                monster.noOfAttacks = req.body.noOfAttacks || monster.noOfAttacks;
                monster.specialAttacks = req.body.specialAttacks || monster.specialAttacks;
                monster.specialDefenses = req.body.specialDefenses || monster.specialDefenses;
                monster.magicResistance = req.body.magicResistance || monster.magicResistance;
                monster.intelligence = req.body.intelligence || monster.intelligence;
                monster.alignment = req.body.alignment || monster.alignment;
                monster.size = req.body.size || monster.size;
                monster.psionicAbility = req.body.psionicAbility || monster.psionicAbility;
                monster.attackDefenceModes = req.body.attackDefenceModes || monster.attackDefenceModes;
                monster.xp = req.body.xp || monster.xp;
            }
        })
        res.status(200).send(dungeon)
    },
    delete: (req, res) => {
        dungeon = dungeon.filter((monster) => monster.name != req.query.name)
        res.status(200).send(dungeon)
    }
}

module.exports = dungeon_controller;