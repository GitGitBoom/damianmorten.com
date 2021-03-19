import {useState, useRef} from 'react'
import Motion from 'framer-motion';
import { MotionBox } from '@/atoms/motion-box';
import type {Props as MotionBoxProps} from '@/atoms/motion-box';

export type Direction = 'top' | 'right' | 'bottom' | 'left';

const IntroBoxShadowMap = {
  top: "0px 100px",
  right: "-100px 0px",
  bottom: "0px -100px",
  left: "100px 0px"
}

const HoverBoxShadowMap = {
  top: "0px 25px",
  right: "-25px 0px",
  bottom: "0px -25px",
  left: "25px 0px"
}

const RotateMap = {
  top: "rotateX",
  right: "rotateY",
  bottom: "rotateX",
  left: "rotateY"
}

const GradiantMap = {
  top: "25deg, white, #0F0F0F 70%",
  right: "115deg, white, #0F0F0F 70%",
  bottom: "-205deg, white, #0F0F0F 70%",
  left: "-115deg, white, #0F0F0F 70%"
}

export interface Props extends MotionBoxProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  zIndex?: number;
  openDir?: Direction;
  hoverDir?: Direction;
}

export const FlappyBox: React.FC<Props> = (props) => {
  const [isHover, setIsHover] = useState(false);
  const introFinished = useRef(false);
  const {
    children,
    duration = 5,
    delay = 1,
    openDir = 'right',
    hoverDir = openDir,
    zIndex = 1,
    ...restOfProps
  } = props;

  const introTransition = {
    type: 'spring',
    bounce: 0.7,
    duration,
    delay
  }

  const hoverTransition = {
    // type: 'spring',
    // bounce: 0.5,
    duration: 0.75
  }

  const box: Motion.Variants = {
    hidden: {
      transformOrigin: openDir,
      [RotateMap[openDir]]: 90,
      boxShadow: `${IntroBoxShadowMap[openDir]} 40px black`
    },
    visible: {
      rotateX: 0,
      rotateY: 0,
      boxShadow: `0px 0px 0px black`,
      transition: introTransition
    },
    hover: {
      transformOrigin: hoverDir,
      rotateX: 0,
      rotateY: 0,
      [RotateMap[hoverDir]]: 15,
      boxShadow: `${HoverBoxShadowMap[hoverDir]} 30px black`,
    },
    unhover: {
      transformOrigin: hoverDir,
      rotateX: 0,
      rotateY: 0,
      boxShadow: "0px 0px 0px black",
      transition: hoverTransition,
    }
  };

  const gradient: Motion.Variants = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 0,
      transition: introTransition
    },
    hover: {
      opacity: 0.2
    },
    unhover: {
      opacity: 0,
      transition: hoverTransition
    }
  };

  return (
    <MotionBox
      {...restOfProps}
      variants={box}
      initial="hidden"
      animate={introFinished.current ? (isHover ? "hover" : "unhover") : "visible"}
      onAnimationComplete={() => {introFinished.current = true}}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      position={restOfProps.position ?? 'relative'}
    >
      {children}
      <MotionBox
        variants={gradient}
        bg={`linear-gradient(${GradiantMap[introFinished.current ? hoverDir : openDir]})`}
        position="absolute"
        top={0}
        right={0}
        bottom={0}
        left={0}
      />
    </MotionBox>
  )
}