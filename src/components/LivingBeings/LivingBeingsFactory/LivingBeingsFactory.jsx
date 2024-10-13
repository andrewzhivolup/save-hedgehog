import cls from "./LivingBeingsFactory.module.scss";

const defaultSize = 25;

class LivingBeingsFactory {
  static createLivingBeing(options) {
    const { sources, name } = options;
    return function ({ size, state, ...props }) {
      const getSrc = function () {
        const livingBeingState = state || 0;
        return sources[livingBeingState] || "";
      };
      return (
        <img
          className={cls.Animal}
          src={getSrc()}
          height={size || defaultSize}
          width={size || defaultSize}
          alt={`${name.toLowerCase()}`}
          {...props}
        />
      );
    };
  }
}

export default LivingBeingsFactory;
