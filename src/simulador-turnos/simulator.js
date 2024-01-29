const startSimulation = () => {
    const typesOfTurn = {
        a: {
            id: 'A',
            posibility: "75%"
        },
        b: {
            id: 'B',
            posibility: "15%"
        },
        c: {
            id: 'C',
            posibility: "7%"
        },
        d: {
            id: 'D',
            posibility: "3%"
        }
    }
    
    let givenTurns = new Array(50).fill(0)
    
    let turnCount = {};
    
    for (let key in typesOfTurn) {
        turnCount[key] = 0;
    }
    
    function spinWheel(turns) {
        let totalWeight = turns.reduce((total, turn) => total + parseFloat(turn.posibility.replace('%', '')), 0);
        let randomValue = Math.random() * totalWeight;
        let weightSum = 0;
    
        for (let i = 0; i < turns.length; i++) {
            weightSum += parseFloat(turns[i].posibility.replace('%', ''));
            if (weightSum >= randomValue) {
                let id = turns[i].id;
                if (!turnCount[id]) {
                    turnCount[id] = 0;
                }
                let count = ++turnCount[id];
                return `${id}-${count.toString().padStart(3, '0')}`;
            }
        }
    }

    const setTimer = () => Math.random() *  6000

    const randomTurns = givenTurns.map(() => spinWheel(Object.values(typesOfTurn)))
    
    const randomTurnsObject = randomTurns.reduce((acc, turn) => {
        return [
            ...acc,
            {
                id: turn,
                timer: setTimer()
            }
        ]
    }, [])
    
    function pickMeATurn(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    
    const turns = {
        mine: pickMeATurn(randomTurnsObject),
        order: randomTurnsObject
    } 

    return turns
}

export {
    startSimulation
}