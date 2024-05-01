
function createNineShapes() {
    let shapes = [];

    shapes.push(createPyramid());
    shapes[0].translate([-1, 1, 0]);
    shapes.push(createSquare());
    shapes[1].translate([0, 1, 0]);
    shapes.push(createPyramid());
    shapes[2].translate([1, 1, 0]);


    shapes.push(createSquare());
    shapes[3].translate([-1, 0, 0]);
    shapes.push(createPyramid());
    shapes[4].translate([0, 0, 0]);
    shapes.push(createSquare());
    shapes[5].translate([1, 0, 0]);

    shapes.push(createPyramid());
    shapes[6].translate([-1, -1, 0]);
    shapes.push(createSquare());
    shapes[7].translate([0, -1, 0]);
    shapes.push((createPyramid()));
    shapes[8].translate([1, -1, 0]);


    return shapes;
}


function createTeaPot(teapot_vertices) {
    teapot_vertices = parseOBJ(teapot_data);

    shapes[4] = (createOBJ(teapot_vertices));
    shapes[4].translate([0, -0.25, 0]);
    shapes[4].scale([0.5, 0.5, 0.5]);
}

// COPIED FROM TUTORIAL
function createSquare() {
    // define vertex positions & colors
    const vertices = [
        // X, Y, Z, W -> 36 vertices cus we have 6 faces(cube) each face has 2 triangles
        0.2, 0.2, 0.2,
        -0.2, 0.2, 0.2,
        0.2, -0.2, 0.2,

        -0.2, 0.2, 0.2,
        -0.2, -0.2, 0.2,
        0.2, -0.2, 0.2,

        -0.2, -0.2, -0.2,
        -0.2, -0.2, 0.2,
        -0.2, 0.2, 0.2,

        -0.2, -0.2, -0.2,
        -0.2, 0.2, 0.2,
        -0.2, 0.2, -0.2,

        0.2, 0.2, -0.2,
        -0.2, -0.2, -0.2,
        -0.2, 0.2, -0.2,

        0.2, 0.2, -0.2,
        0.2, -0.2, -0.2,
        -0.2, -0.2, -0.2,

        0.2, -0.2, 0.2,
        -0.2, -0.2, -0.2,
        0.2, -0.2, -0.2,

        0.2, -0.2, 0.2,
        -0.2, -0.2, 0.2,
        -0.2, -0.2, -0.2,

        0.2, 0.2, 0.2,
        0.2, -0.2, -0.2,
        0.2, 0.2, -0.2,

        0.2, -0.2, -0.2,
        0.2, 0.2, 0.2,
        0.2, -0.2, 0.2,

        0.2, 0.2, 0.2,
        0.2, 0.2, -0.2,
        -0.2, 0.2, -0.2,

        0.2, 0.2, 0.2,
        -0.2, 0.2, -0.2,
        -0.2, 0.2, 0.2,
    ];

    const colorData = [  // one color for each face 
        [114 / 255, 24 / 255, 23 / 255],
        [250 / 255, 159 / 255, 66 / 255],
        [43 / 255, 65 / 255, 98 / 255],
        [11 / 255, 110 / 255, 79 / 255],
        [205 / 255, 199 / 255, 229 / 255],
        [168 / 255, 194 / 255, 86 / 255],
    ];

    const colors = [];

    colorData.forEach(color => {
        for (let i = 0; i < 6; ++i) {
            colors.push(color);
        }
    });

    const cube = new Shape();
    cube.initData(vertices, colors)

    return cube;
}

function createPyramid() {

    const vertices = [
        // X, Y, Z, W 

        -0.2, -0.2, 0.2,
        0.2, -0.2, 0.2,
        0.2, -0.2, -0.2,

        -0.2, -0.2, 0.2,
        0.2, -0.2, -0.2,
        -0.2, -0.2, -0.2,

        0.0, 0.2, 0.0,
        -0.2, -0.2, 0.2,
        0.2, -0.2, 0.2,

        0.0, 0.2, 0.0,
        0.2, -0.2, 0.2,
        0.2, -0.2, -0.2,

        0.0, 0.2, 0.0,
        0.2, -0.2, -0.2,
        -0.2, -0.2, -0.2,

        0.0, 0.2, 0.0,
        -0.2, -0.2, -0.2,
        -0.2, -0.2, 0.2
    ];

    const colors = [

        114 / 255, 24 / 255, 23 / 255,
        114 / 255, 24 / 255, 23 / 255,
        114 / 255, 24 / 255, 23 / 255,

        114 / 255, 24 / 255, 23 / 255,
        114 / 255, 24 / 255, 23 / 255,
        114 / 255, 24 / 255, 23 / 255,


        43 / 255, 65 / 255, 98 / 255,
        43 / 255, 65 / 255, 98 / 255,
        43 / 255, 65 / 255, 98 / 255,


        134 / 255, 165 / 255, 217 / 255,
        134 / 255, 165 / 255, 217 / 255,
        134 / 255, 165 / 255, 217 / 255,


        216 / 255, 151 / 255, 60 / 255,
        216 / 255, 151 / 255, 60 / 255,
        216 / 255, 151 / 255, 60 / 255,


        189 / 255, 198 / 255, 150 / 255,
        189 / 255, 198 / 255, 150 / 255,
        189 / 255, 198 / 255, 150 / 255
    ];

    const pyramid = new Shape();
    pyramid.initData(vertices, colors)

    return pyramid;
}
