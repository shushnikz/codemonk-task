import React, { useRef, useEffect } from "react";

const DrawMirrorCircle = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const width = canvas.width;
        const height = canvas.height;

        // draw initial circle
        ctx.beginPath();
        ctx.arc(width / 4, height / 2, 30, 0, 2 * Math.PI);
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

        // check if mouse is over left half of canvas
        if (mouseX < width / 2) {
            // draw circle on left half
            ctx.clearRect(0, 0, width / 2, height);
            ctx.beginPath();
            ctx.arc(mouseX, mouseY, 30, 0, 2 * Math.PI);
            ctx.fillStyle = "#0095DD";
            ctx.fill();

            // draw mirrored circle on right half
            ctx.save();
            ctx.translate(width / 2, 0);
            ctx.scale(-1, 1);
            ctx.drawImage(canvas, 0, 0, width / 2, height, -width / 2, 0, width / 2, height);
            ctx.restore();
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
        ctx.arc(width / 4, height / 2, 50, 0, 2 * Math.PI);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
    };

    return <canvas ref={canvasRef} width={500} height={500} style={{ border: "1px solid black", marginTop: "100px" }} />;
};

export default DrawMirrorCircle
