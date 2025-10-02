
"use client";

import { CardInfo, cardsInfo } from "./card-data";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "motion/react";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";

const SwipeInfiniteCard = () => {
  const [cards, setCards] = useState<CardInfo[]>(cardsInfo);
  const dismissedCards = useRef<Set<number>>(new Set());

  return (
    <div className="grid min-h-screen w-full place-items-center ">
      {cards.map((card, index) => {
        return (
          <Card
            key={card.id}
            cards={cards}
            setCards={setCards}
            dismissedCards={dismissedCards}
            {...card}
            index={index}
          />
        );
      })}
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
}: {
  id: number;
  src: string;
  cards: CardInfo[];
  setCards: Dispatch<SetStateAction<CardInfo[]>>;
  dismissedCards: React.MutableRefObject<Set<number>>;
  index: number;
}) => {
  const x = useMotionValue(0);

  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  const rawRotate = useTransform(x, [-150, 150], [-18, 18]);

  const isFrontCard = index === 0;

  const rotate = useTransform(rawRotate, (latest) => {
    const offset = isFrontCard ? 0 : id % 2 ? 6 : -6;
    return latest + offset;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 50) {
      const cardToReinsert = cards.find((card) => card.id === id);
      
      if(cardToReinsert){
        setCards((prev) => prev.filter((v) => v.id !== id));

        dismissedCards.current.add(id);
        setTimeout(() => {
          setCards((prev) => {
            if(prev.some(card => card.id === id)){
              return prev;
            }
            return [...prev, cardToReinsert]
          })
          dismissedCards.current.delete(id);
        }, 1500);
      }

    }
  };

  return (
    <>
      <motion.div
        className="m-0 h-96 w-80 origin-bottom rounded-xl p-0 hover:cursor-grab active:cursor-grabbing"
        style={{
          gridColumn: 1,
          gridRow: 1,
          x,
          opacity,
          rotate,
          zIndex: cards.length - index,
          transition: "0.125s transform",
          boxShadow: isFrontCard
            ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
            : undefined,
        }}
        animate={{
          scale: isFrontCard ? 1 : 0.98,
        }}
        drag={isFrontCard ? "x" : false}
        dragConstraints={{
          left: 0,
          right: 0,
        }}
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
    </>
  );
};

export default SwipeInfiniteCard;
