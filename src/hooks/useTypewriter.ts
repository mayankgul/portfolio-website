import {useEffect, useState} from "react";

const useTypewriter = (lines: string[], speed = 20) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentLine((prev) => prev + lines[lineIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, speed);

        return () => clearTimeout(timeout);
      } else {
        setDisplayedLines((prev) => [...prev, lines[lineIndex]]);
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
        setCurrentLine("");
      }
    }
  }, [charIndex, lineIndex, lines, speed]);

  return [...displayedLines, currentLine];
};

export default useTypewriter;
