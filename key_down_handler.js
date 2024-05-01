
function test1(event) {

    if (event.key == " ") {
        camera_movement = !camera_movement;
    }

    if (event.key >= 1 && event.key <= 9) {
        shapes[event.key - 1].selected = !shapes[event.key - 1].selected;
    }

    if (event.key === '0') {
        all_selected = !all_selected;
        shapes.forEach(shape => {
            shape.selected = all_selected;
        });
    }

    if (camera_movement) {
        // SPACE IS PRESSED; ONLY CAMERA IS MOVING
        let arrow = event.key;
        switch (arrow) {
            case "ArrowLeft":
                moveCamera("right")
                break;
            case "ArrowRight":
                moveCamera("left")
                break;
            case "ArrowDown":
                moveCamera("up")
                break;
            case "ArrowUp":
                moveCamera("down")
                break;
            default:
                console.log("Invalid direction, sorry")
        }
    } else {
        // SPACE IS DESELECTED, SHAPES ARE MOVING

        let pressed_key = event.key;

        shapes.forEach(shape => {
            if (shape.selected) {
                switch (pressed_key) {
                    case 'a':
                        shape.scale([0.9, 1, 1], all_selected);
                        break;
                    case 'A':
                        shape.scale([1.1, 1, 1], all_selected);
                        break;
                    case 'b':
                        shape.scale([1, 0.9, 1], all_selected);
                        break;
                    case 'B':
                        shape.scale([1, 1.1, 1], all_selected);
                        break;
                    case 'c':
                        shape.scale([1, 1, 0.9], all_selected);
                        break;
                    case 'C':
                        shape.scale([1, 1, 1.1], all_selected);
                        break;
                    default:
                        console.log("Key pressed: ", pressed_key, " -> no scaling.");
                }
            }
        });


        shapes.forEach(shape => {
            if (shape.selected) {
                switch (pressed_key) {
                    case 'i':
                        shape.rotate(0.2, [-1, 0, 0], all_selected);
                        break;
                    case 'k':
                        shape.rotate(0.2, [1, 0, 0], all_selected);
                        break;
                    case 'o':
                        shape.rotate(0.2, [0, -1, 0], all_selected);
                        break;
                    case 'u':
                        shape.rotate(0.2, [0, 1, 0], all_selected);
                        break;
                    case 'l':
                        shape.rotate(0.2, [0, 0, -1], all_selected);
                        break;
                    case 'j':
                        shape.rotate(0.2, [0, 0, 1], all_selected);
                        break;
                    default:
                        console.log("Key pressed: ", pressed_key, " -> no rotation.");
                }
            }
        });



        shapes.forEach(shape => {
            if (shape.selected) {
                switch (pressed_key) {
                    case "ArrowUp":
                        shape.translate([0, 0.1, 0], all_selected);
                        break;
                    case "ArrowDown":
                        shape.translate([0, -0.1, 0], all_selected);
                        break;
                    case "ArrowLeft":
                        shape.translate([-0.1, 0, 0], all_selected);
                        break;
                    case "ArrowRight":
                        shape.translate([0.1, 0, 0], all_selected);
                        break;
                    case ".":
                        shape.translate([0, 0, -0.1], all_selected);
                        break;
                    case ",":
                        shape.translate([0, 0, 0.1], all_selected);
                        break;
                    default:
                        console.log("Key pressed: ", pressed_key, " -> no translation.");
                }
            }
        });

    }
}
