"use client";

import { CardInfo, cardsInfo } from "./card-data";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  Variants,
} from "motion/react";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const CARD_WIDTH = 256;
const CARD_HEIGHT = 304;
const CARD_MARGIN = 32;

const DeckCard = () => {
  const [cards, setCards] = useState<CardInfo[]>(cardsInfo);
  const [isOpen, setIsOpen] = useState(false);
  const dismissedCards = useRef<Set<number>>(new Set());

  const totalWidth = cards.length * (CARD_WIDTH + CARD_MARGIN) - CARD_MARGIN;
  const containerPositions = cards.map((_, index) => {
    return index * (CARD_WIDTH + CARD_MARGIN) - totalWidth / 2 + CARD_WIDTH / 2;
  });

  return (
    <div className="grid min-h-screen w-full place-items-center">
      <div className="relative">
        <div
          className="relative"
          style={{ width: totalWidth, height: CARD_HEIGHT }}
        >
          {cards.map((card, index) => {
            return (
              <Card
                key={card.id}
                cards={cards}
                setCards={setCards}
                dismissedCards={dismissedCards}
                {...card}
                index={index}
                isOpen={isOpen}
                targetPosition={containerPositions[index]}
                totalCards={cards.length}
              />
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            onClick={() => setIsOpen((v) => !v)}
            className="cursor-pointer rounded-lg bg-zinc-300 px-6 py-3 font-medium text-black transition-all duration-150 ease-out hover:bg-zinc-200"
          >
            {isOpen ? "Close Deck" : "Open Deck"}
          </Button>
        </div>
      </div>
    </div>
  );
};

const Card = ({
  id,
  src,
  cards,
  setCards,
  dismissedCards,
  index,
  isOpen,
  targetPosition,
  totalCards,
}: {
  id: number;
  src: string;
  cards: CardInfo[];
  setCards: Dispatch<SetStateAction<CardInfo[]>>;
  dismissedCards: React.MutableRefObject<Set<number>>;
  index: number;
  isOpen: boolean;
  targetPosition: number;
  totalCards: number;
}) => {
  const x = useMotionValue(0);

  const dragOpacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  const rawRotate = useTransform(x, [-150, 150], [-18, 18]);

  const isFrontCard = index === 0;
  const baseOffset = isFrontCard ? 0 : id % 2 ? 6 : -6;
  const dragRotate = useTransform(rawRotate, (latest) => latest + baseOffset);

  const rotate = useMotionValue(baseOffset);
  const opacity = useMotionValue(1);

  useEffect(() => {
    if (!isOpen) {
      const unsubR = dragRotate.on("change", (v) => rotate.set(v));
      return () => unsubR();
    } else {
      animate(rotate, 0, { type: "spring", stiffness: 260, damping: 25 });
    }
  }, [isOpen, dragRotate, rotate]);

  useEffect(() => {
    if (isFrontCard && !isOpen) {
      const unsubO = dragOpacity.on("change", (v) => opacity.set(v));
      return () => unsubO();
    } else {
      opacity.set(1);
    }
  }, [isFrontCard, isOpen, dragOpacity, opacity]);

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 50) {
      const cardToReinsert = cards.find((card) => card.id === id);

      if (cardToReinsert) {
        setCards((prev) => prev.filter((v) => v.id !== id));

        dismissedCards.current.add(id);

        setTimeout(() => {
          x.set(0);
          setCards((prev) => {
            if (prev.some((card) => card.id === id)) {
              return prev;
            }
            return [...prev, cardToReinsert];
          });
          dismissedCards.current.delete(id);
        }, 1000);
      }
    } else {
      animate(x, 0, { type: "spring", stiffness: 260, damping: 25 });
    }
  };

  const cardVariants: Variants = {
    closed: {
      x: 0,
      scale: isFrontCard ? 1 : 0.98,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 25,
        delay: (totalCards - 1 - index) * 0.08,
      },
    },
    open: {
      x: targetPosition,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 25,
        delay: index * 0.08,
      },
    },
  };

  return (
    <motion.div
      className="absolute h-76 w-64 origin-bottom rounded-xl hover:cursor-grab active:cursor-grabbing"
      style={{
        left: `calc(50% - ${CARD_WIDTH / 2}px)`,
        top: 0,
        x,
        opacity,
        rotate,
        zIndex: isOpen ? index : cards.length - index,
        boxShadow:
          isFrontCard && !isOpen
            ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
            : undefined,
      }}
      variants={cardVariants}
      animate={isOpen ? "open" : "closed"}
      drag={isFrontCard && !isOpen ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
    >
      <Image
        src={src}
        alt={`card-${id}`}
        width={500}
        height={500}
        className="pointer-events-none h-full w-full rounded-xl object-cover"
        priority={index === 0}
      />
    </motion.div>
  );
};

export default DeckCard;
