const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function GetCanvas() {
    if (ctx !== null)
        return ctx
        
    throw new Error("Canvas is null!");
}

export {canvas, GetCanvas};