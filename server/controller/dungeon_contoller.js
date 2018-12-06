let { findBestMatch } = require('string-similarity')

let dungeon_controller = {
    create: (req, res) => {
        let dbInstance = req.app.get('db')
        let {
            name,
            no_appearing,
            ac,
            move,
            hd,
            no_of_attacks,
            damage_attack,
            special_attacks,
            special_defenses,
            magic_resistance,
            intelligence,
            alignment,
            size,
            psionic_ability,
            attack_defence_modes,
            xp,
            } = req.body
            dbInstance.createMonster([name,
                no_appearing,
                ac,
                move,
                hd,
                no_of_attacks,
                damage_attack,
                special_attacks,
                special_defenses,
                magic_resistance,
                intelligence,
                alignment,
                size,
                psionic_ability,
                attack_defence_modes,
                xp,]).then(monsterArr => {
                    res.status(201).send(monsterArr)
                }).catch(error => {
                    console.log(`dungeon_controller/create${error}`)
                    res.sendStatus(500)
                })
        
        
    },
    read: (req, res) => {
        let dbInstance = req.app.get('db')
        dbInstance.getMonsters()
            .then(monsterArr => {
                res.status(200).send(monsterArr)
            })
    },
    readByName: (req, res) => {
        let dbInstance = req.app.get('db')
        dbInstance.getMonsters()
            .then(monsterArr => {
                let names = [] // gets a list of names to run string similarity to get best match
                monsterArr.forEach(monster => {names.push(monster.name)})
                let { bestMatch } = findBestMatch(req.params.name ,names)
                let result = monsterArr.filter(monster => monster.name == bestMatch.target)
                res.status(200).send(result)
            }).catch(error => {console.log(`dungeon_controller/readByName ${error}`)})
    },
    update: (req, res) => {
        let dbInstance = req.app.get('db')
        let {
            name,
            no_appearing,
            ac,
            move,
            hd,
            no_of_attacks,
            damage_attack,
            special_attacks,
            special_defenses,
            magic_resistance,
            intelligence,
            alignment,
            size,
            psionic_ability,
            attack_defence_modes,
            xp,
        } = req.body;
        let { id } = req.params
    },
    delete: (req, res) => {
        dungeon = dungeon.filter((monster) => monster.name != req.query.name)
        res.status(200).send(dungeon)
    }
}

module.exports = dungeon_controller;