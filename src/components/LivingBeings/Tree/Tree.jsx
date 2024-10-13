import tree from "@assets/livingBeings/tree/tree.svg";
import deadTree from "@assets/livingBeings/tree/tree_dead.svg";
import sadTree from "@assets/livingBeings/tree/tree_sad.svg";
import { LivingBeingsFactory } from "../LivingBeingsFactory";

const Tree = LivingBeingsFactory.createLivingBeing({
  name: "[дерево]",
  sources: {
    0: deadTree,
    1: sadTree,
    2: tree,
  },
});

export default Tree;
