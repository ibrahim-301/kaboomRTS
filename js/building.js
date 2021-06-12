export default class Building {

    constructor(xPos, yPos, tag, width = 30, height = 30){

        let c;

        if(tag == 'player-building'){
            c = [0.2, 1, 0.2, 1];
        }
        else c = [1, 0.3, 0.3, 1];

        this.building = add([
            rect(width, height),
            pos(xPos, yPos),
            color(c),
            tag,
            'Killable',
            {   
                health: 100,
                gate_x: 380,
                gate_y: 430,
                isHighlighted: false,
            }
        ]);

    }

}
