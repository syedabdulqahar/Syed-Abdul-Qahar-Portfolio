import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Typewriter = ({
  words,
  typingSpeed = 80,
  deletingSpeed = 60,
  delayBetweenWords = 2000,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      // Typing
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        // Wait before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    } else {
      // Deleting
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, deletingSpeed);
      } else {
        // Move to next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
  ]);

  return (
    <span className="text-cyan-400 light:text-teal-700">
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="ml-1 inline-block w-0.5 h-8 bg-cyan-400 light:bg-teal-600"
      />
    </span>
  );
};
