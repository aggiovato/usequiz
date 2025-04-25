import { Request, Response } from "express";
import alphabet from "../utils/data/alphabet.json";

export const getAllLetters = (req: Request, res: Response) => {
  try {
    res.status(200).json(alphabet);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error getting all letters", details: error });
  }
};

export const getAllLettersSVG = (req: Request, res: Response) => {
  try {
    const svgs = alphabet.map((entry) => entry.svg).join("\n");

    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>SVG Alphabet</title>
          <style>
            body {
              display: flex;
              flex-wrap: wrap;
              gap: 1rem;
              padding: 2rem;
              background-color: #f8f8f8;
            }
            svg {
              width: 100px;
              height: 100px;
              border: 1px solid #ccc;
              background: white;
              padding: 4px;
            }
          </style>
        </head>
        <body>
          ${svgs}
        </body>
        </html>
      `;

    res.setHeader("Content-Type", "text/html");
    res.status(200).send(html);
  } catch (error) {
    res.status(500).send("Error rendering SVG page");
  }
};

export const getLetterSVG = (req: Request, res: Response) => {
  try {
    const { letter } = req.params;
    if (!letter) {
      res.status(400).json({ error: "Invalid letter" });
    }

    const match = alphabet.find((entry) => entry.letter.includes(letter));

    if (!match) {
      res.status(404).json({ error: "SVG not found" });
    }

    res.setHeader("Content-Type", "image/svg+xml");
    res.send(match!.svg);
  } catch (error) {
    res.status(400).json({ error: "Error getting letter", details: error });
  }
};
