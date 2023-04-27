import React, { useRef, useEffect } from "react";

const DrawCircle = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        // const ctx = canvas.getContext("2d");

        // const width = canvas.width;
        // const height = canvas.height;

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

        // clear canvas and draw circle around mouse position
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 30, 0, 2 * Math.PI);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
    };

    const handleMouseLeave = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const width = canvas.width;
        const height = canvas.height;

        // clear canvas
        ctx.clearRect(0, 0, width, height);
    };

    return <canvas ref={canvasRef} width={500} height={500} style={{ border: "1px solid black", marginTop: "100px" }} />;
};

export default DrawCircle
