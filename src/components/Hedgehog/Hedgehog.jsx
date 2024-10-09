import cls from "./Hedgehog.module.scss";
import hedgehogLogo from "/hedgehog.svg";

const defaultSize = 25;

const Hedgehog = (options) => {
  const { size, ...props } = options;

  return (
    <img
      className={cls.Hedgehog}
      src={hedgehogLogo}
      height={size || defaultSize}
      width={size || defaultSize}
      alt="Тут должен быть ёж"
      {...props}
    />
  );
};

export default Hedgehog;
