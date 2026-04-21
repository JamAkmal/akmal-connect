import { useEffect, useState } from "react";

const TypingRotate = ({ texts = [], period = 2000 }) => {
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = isDeleting ? 40 : 80;

    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      // When word is complete
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), period);
      }

      // When deletion is complete
      else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, texts, period]);

  return (
    <code className="font-mono text-primary">
      {text}
      <span className="animate-pulse"></span>
    </code>
  );
};

export default TypingRotate;