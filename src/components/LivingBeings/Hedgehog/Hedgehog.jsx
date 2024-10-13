import hedgehogLogo from "@assets/livingBeings/hedgehog/hedgehog.svg";
import deadHedgehogLogo from "@assets/livingBeings/hedgehog/hedgehog_dead.svg";
import sadHedgehogLogo from "@assets/livingBeings/hedgehog/hedgehog_sad.svg";
import { LivingBeingsFactory } from "../LivingBeingsFactory";

const Hedgehog = LivingBeingsFactory.createLivingBeing({
  name: "[ёж]",
  sources: {
    0: deadHedgehogLogo,
    1: sadHedgehogLogo,
    2: hedgehogLogo,
  },
});

export default Hedgehog;
