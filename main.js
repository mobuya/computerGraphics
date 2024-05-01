const { mat4 } = glMatrix;
const toRad = glMatrix.glMatrix.toRadian;

let shapes = [];
let gl = null;

// i used global variables so i can access it better with other js files, im sorry
let camera_movement = false;
let all_selected = false;
let mouseClick = false;

let lastMouseX = 0;
let lastMouseY = 0;

const locations = {
    attributes: {
        vertexLocation: null,
        colorLocation: null
    }, uniforms: {
        modelViewMatrix: null,
        projectionMatrix: null
    }
}

const viewMatrix = mat4.create();

window.onload = async () => {
    let canvas = document.getElementById("canvas");
    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    gl.enable(gl.DEPTH_TEST);
    gl.viewport(0, 0, canvas.clientWidth, canvas.clientHeight);
    gl.clearColor(241 / 255, 240 / 255, 204 / 255, 1); // background color

    const program = createShaderProgram("v-shader", "f-shader");
    gl.useProgram(program);

    locations.attributes.vertexLocation = gl.getAttribLocation(program, "vertexPosition");
    locations.attributes.colorLocation = gl.getAttribLocation(program, "vertexColor");  // binding the buffers 
    locations.uniforms.modelViewMatrix = gl.getUniformLocation(program, "modelViewMatrix");
    locations.uniforms.projectionMatrix = gl.getUniformLocation(program, "projectionMatrix");

    mat4.lookAt(viewMatrix, [0, 0, 6], [0, 0, 0], [0, 1, 0]);
    mat4.translate(viewMatrix, viewMatrix, [0, 0, 1]);

    const projectionMatrix = mat4.create();
    mat4.perspective(projectionMatrix, toRad(45), canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    gl.uniformMatrix4fv(locations.uniforms.projectionMatrix, gl.FALSE, projectionMatrix);

    // function in shape_generator
    shapes = createNineShapes();

    // function in mouse_handler
    window.addEventListener("mousedown", (event) => {
        lastMouseX = event.clientX; // Reset last mouse positions
        lastMouseY = event.clientY;
        checkLeftMouseClick(event);
    });

    window.addEventListener("mouseup", (event) => {
        lastMouseX = event.clientX;
        lastMouseY = event.clientY;
        mouseClick = false;
    });

    // function in key_down_handler
    window.addEventListener("mousemove", (event) => {
        mouseMovements(event);
    });


    // function in key_down_handler
    window.addEventListener("keydown", (event) => {
        test1(event);
    });

    teapot_data = await loadData();
    createTeaPot(teapot_data);

    requestAnimationFrame(render);
}

async function loadData() {
    const data = await fetch('teapot.obj').then(result => result.text());
    return data;
}

let then = 0;

// render is a constant loop function
function render(now) {
    let delta = now - then;
    // turn it into seconds
    delta *= 0.001;
    // save for next iteration
    then = now;

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    shapes.forEach(shape => {
        shape.draw();
        if (shape.selected == true & !camera_movement) {
            shape.drawLocalCoordinateSystem();
        }

    })

    requestAnimationFrame(render)
}