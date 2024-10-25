import cls from "./LivingBeingsFactory.module.scss";
import styled, { keyframes } from "styled-components";

const defaultSize = 25;

function getRandomAngle() {
  const params = { min: 8, max: 12 };
  return Math.random() * (params.max - params.min) + params.min;
}

function getRandomSign() {
  return Math.random() > 0.5 ? "-" : "+";
}

const random = {
  sign: getRandomSign(),
  angle: getRandomAngle(),
};

const moveAndChangeColor = keyframes`
  0% {
    transform: rotate(${random.angle}deg);
  }
  50% {
    transform: rotate(-${random.angle}deg);
  }
  100% {
    transform: rotate(+${random.angle}deg);
  }
`;

const Box = styled.div`
  transform: scale(-1, 1);
  animation: rotate 3s infinite;
  animation: ${moveAndChangeColor} 4s infinite;
`;

class LivingBeingsFactory {
  static createLivingBeing(options) {
    const { sources, name } = options;
    return function ({ size, state, ...props }) {
      const getSrc = function () {
        const livingBeingState = state || 0;
        return sources[livingBeingState] || "";
      };
      return (
        <>
          <Box>
            <img
              className={cls.Animal}
              src={getSrc()}
              height={size || defaultSize}
              width={size || defaultSize}
              alt={`${name.toLowerCase()}`}
              {...props}
            />
          </Box>
        </>
      );
    };
  }
}

export default LivingBeingsFactory;
