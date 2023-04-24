import React, { useRef, useEffect } from "react";

const FourQuard = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const width = canvas.width;
        const height = canvas.height;

        // draw initial circle
        ctx.beginPath();
        ctx.arc(width / 4, height / 4, 30, 0, 2 * Math.PI);
        ctx.fillStyle = "#0095DD";
        ctx.fill();

        // add mouse event listeners
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleMouseLeave);

        // cleanup event listeners
        return () => {
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    const handleMouseMove = (event) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const width = canvas.width;
        const height = canvas.height;

        const mouseX = event.clientX - canvas.offsetLeft;
        const mouseY = event.clientY - canvas.offsetTop;

        // check which quadrant the mouse is over
        const xIndex = mouseX < width / 2 ? 0 : 1;
        const yIndex = mouseY < height / 2 ? 0 : 1;

        // draw circle on current quadrant
        ctx.clearRect(xIndex * width / 2, yIndex * height / 2, width / 2, height / 2);
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 30, 0, 2 * Math.PI);
        ctx.fillStyle = "#0095DD";
        ctx.fill();

        // draw mirrored circle on other quadrants
        for (let x = 0; x < 2; x++) {
            for (let y = 0; y < 2; y++) {
                if (x !== xIndex || y !== yIndex) {
                    ctx.save();
                    ctx.translate(x * width / 2, y * height / 2);
                    ctx.scale(xIndex === 1 ? -1 : 1, yIndex === 1 ? -1 : 1);
                    ctx.drawImage(canvas, xIndex * width / 2, yIndex * height / 2, width / 2, height / 2, 0, 0, width / 2, height / 2);
                    ctx.restore();
                }
            }
        }
    };

    const handleMouseLeave = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const width = canvas.width;
        const height = canvas.height;

        // clear canvas and redraw initial circle
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.arc(width / 4, height / 4, 30, 0, 2 * Math.PI);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
    };

    return <canvas ref={canvasRef} width={500} height={500} style={{ border: "1px solid black", marginTop: "100px" }} />;
};

export default FourQuard
