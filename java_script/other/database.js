class player {
    constructor (firstName, lastName, role, phoneNum, sesionTime, sessionId) {

    }
}

class character extends player{
    constructor (firstName, lastName, role, phoneNum, sesionTime, sessionId, lvlTotal, titles, age, height, str, dex, con, int, wis, cha, tools, race) {
        super(firstName, lastName, role, phoneNum, sesionTime, sessionId)
        this.lvlTotal = lvlTotal;
        this.titles = titles;
        this.tittleCount = titles.length;
        this.age = age;
        this.height = height;
        this.str = str;
        this.dex = dex;
        this.con = con;
        this.int = int;
        this.wis = wis;
        this.cha = cha;
        this.tools = tools;
        this.race = race;
    }
}

class bard extends character {
    constructor (firstName, lastName, role, phoneNum, sesionTime, sessionId, lvlTotal, titles, age, height, str, dex, con, int, wis, cha, tools, race, level, skills, proficiencies, spells) {
        super(firstName, lastName, role, phoneNum, sesionTime, sessionId, lvlTotal, titles, age, height, str, dex, con, int, wis, cha, tools, race)
    }
}

let Nimajneb = new character("John", "Doe", "Dm", "(505) 505-5055", "2:20pm Mondays", 1, 1, ["three Kobalts in a Trench Coat"], 23, "8'0", 18, 17, 16, 15, 14, 13, ["dagger", "nife", "food"], "kobalt");