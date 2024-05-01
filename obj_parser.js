
function parseOBJ(data) {

    const objVertices = [];
    const faces = [];

    const lines = data.split('\n');

    lines.forEach(line => {
        if (line.startsWith('v ')) {
            const vertexInfo = line.trim().split(/\s+/);
            const x = vertexInfo[1];
            const y = vertexInfo[2];
            const z = vertexInfo[3];
            objVertices.push([x, y, z]);
        } else if (line.startsWith('f ')) {
            const faceInfo = line.trim().split(/\s+/);
            for (i = 1; i < faceInfo.length; i++) {
                let oneFace = faceInfo[i].split("//");
                const vertexIndex = parseInt(oneFace[0]) - 1;
                faces.push(...objVertices[vertexIndex]);
            }
        }
    })
    //console.log(faces.length)
    //console.log(faces)
    return faces;
}


function createOBJ(faces) {
    const colors = [];
    for (i = 0; i < faces.length / 3; i++) {
        colors.push(...[114 / 255, 24 / 255, 23 / 255]); // red
        //colors.push(...[43 / 255, 65 / 255, 98 / 255]); // blue
    }

    const teaPot = new Shape();
    teaPot.initData(faces, colors);

    return teaPot;
}

