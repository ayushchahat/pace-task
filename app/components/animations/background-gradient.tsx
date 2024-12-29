"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

interface BackgroundGradientProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
  colors?: string[]; // Accept colors as prop
}

export const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  children,
  className,
  containerClassName,
  animate = true,
  colors = ["#00ccb1", "#7b61ff", "#ffc414", "#1ca0fb"], // Default colors if none are provided
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: "100% 50%",
    },
  };

  // Construct the gradient string from the `colors` array
  const gradientBackground = `radial-gradient(circle farthest-side at 0 100%, ${colors[0]}, transparent), 
    radial-gradient(circle farthest-side at 100% 0, ${colors[1]}, transparent), 
    radial-gradient(circle farthest-side at 100% 100%, ${colors[2]}, transparent), 
    radial-gradient(circle farthest-side at 0 0, ${colors[3]}, #141316)`;

  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
          background: gradientBackground, // Apply the dynamic gradient
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform"
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
          background: gradientBackground, // Apply the dynamic gradient
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform"
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
