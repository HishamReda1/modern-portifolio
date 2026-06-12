"use client";
import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();

  // Normalize newlines and convert them into explicit <br> tokens
  const normalized =
    typeof words === "string"
      ? words.replace(/\r\n/g, "\n").replace(/\n/g, " <br> ")
      : "";

  const wordsArray = normalized.split(/\s+/).filter(Boolean);

  useEffect(() => {
    // animate all spans inside the scoped node
    animate(
      "span",
      { opacity: 1, y: 0 },
      { duration: 0.6, delay: stagger(0.06) }
    );
    // scope and animate are stable from useAnimate, include them to satisfy lint
  }, [animate, scope]);

  const renderWords = () => (
    <motion.div ref={scope}>
      {wordsArray.map((token, idx) => {
        if (token.toLowerCase() === "<br>") {
          return <br key={`br-${idx}`} />;
        }

        const isHighlight =
          token.toLowerCase() === "artist" ||
          token.toLowerCase().startsWith("engineer");

        return (
          <motion.span
            key={`${token}-${idx}`}
            className={`${
              isHighlight ? "text-purple" : "dark:text-white text-black"
            } opacity-0 inline-block`}
          >
            {token}
            &nbsp;
          </motion.span>
        );
      })}
    </motion.div>
  );

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export default TextGenerateEffect;
