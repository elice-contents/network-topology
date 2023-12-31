import bus from "../assets/bus.png";
import fullyConnected from "../assets/fully-connected.png";
import line from "../assets/line.png";
import mesh from "../assets/mesh.png";
import ring from "../assets/ring.png";
import star from "../assets/star.png";
import tree from "../assets/tree.png";

const topologiesList = [
  {
    id: 1,
    name: "링형 (Ring Topology)",
    src: ring,
    routerPos: [
      [186, 120],
      [442, 120],
      [50, 265],
      [580, 265],
      [186, 410],
      [442, 410],
    ],
    answerPathList: [
      [
        [221, 155],
        [477, 155],
      ],
      [
        [477, 155],
        [615, 300],
      ],
      [
        [615, 300],
        [477, 445],
      ],
      [
        [477, 445],
        [221, 445],
      ],
      [
        [221, 445],
        [85, 300],
      ],
      [
        [85, 300],
        [221, 155],
      ],
    ],
  },
  {
    id: 2,
    name: "부분 메시형 (Partially Connected Mesh Topology)",
    src: mesh,
    routerPos: [
      [100, 120],
      [250, 120],
      [100, 250],
      [370, 250],
      [370, 380],
      [520, 380],
    ],
    answerPathList: [
      [
        [135, 155],
        [285, 155],
      ],
      [
        [285, 155],
        [405, 285],
      ],
      [
        [405, 285],
        [405, 415],
      ],
      [
        [555, 415],
        [405, 415],
      ],
      [
        [135, 155],
        [135, 285],
      ],
      [
        [135, 285],
        [405, 415],
      ],
      [
        [405, 415],
        [135, 155],
      ],
    ],
  },
  {
    id: 3,
    name: "스타형 (Star Topology)",
    src: star,
    routerPos: [
      [315, 100],
      [100, 200],
      [315, 250],
      [530, 200],
      [180, 400],
      [450, 400],
    ],
    answerPathList: [
      [
        [350, 285],
        [350, 135],
      ],
      [
        [350, 285],
        [565, 235],
      ],
      [
        [350, 285],
        [485, 435],
      ],
      [
        [350, 285],
        [215, 435],
      ],
      [
        [350, 285],
        [135, 235],
      ],
    ],
  },
  {
    id: 4,
    name: "완전 메시형 (Fully Connected Mesh Topology)",
    src: fullyConnected,
    routerPos: [
      [186, 120],
      [442, 120],
      [50, 265],
      [580, 265],
      [186, 410],
      [442, 410],
    ],
    answerPathList: [
      [
        [221, 155],
        [477, 155],
      ],
      [
        [477, 155],
        [615, 300],
      ],
      [
        [615, 300],
        [477, 445],
      ],
      [
        [477, 445],
        [221, 445],
      ],
      [
        [85, 300],
        [221, 445],
      ],
      [
        [85, 300],
        [221, 155],
      ],
      [
        [221, 155],
        [477, 445],
      ],
      [
        [477, 155],
        [221, 445],
      ],
      [
        [221, 155],
        [221, 445],
      ],
      [
        [85, 300],
        [615, 300],
      ],
      [
        [85, 300],
        [477, 155],
      ],
      [
        [85, 300],
        [477, 445],
      ],
      [
        [221, 445],
        [615, 300],
      ],
      [
        [477, 445],
        [477, 155],
      ],
      [
        [615, 300],
        [221, 155],
      ],
    ],
  },
  {
    id: 5,
    name: "선형 (Line Topology)",
    src: line,
    routerPos: [
      [0, 250],
      [126, 250],
      [252, 250],
      [378, 250],
      [504, 250],
      [630, 250],
    ],
    answerPathList: [
      [
        [35, 285],
        [161, 285],
      ],
      [
        [161, 285],
        [287, 285],
      ],
      [
        [287, 285],
        [413, 285],
      ],
      [
        [413, 285],
        [539, 285],
      ],
      [
        [539, 285],
        [665, 285],
      ],
    ],
  },
  {
    id: 6,
    name: "트리형 (Tree Topology)",
    src: tree,
    routerPos: [
      [100, 150],
      [315, 150],
      [530, 150],
      [207.5, 250],
      [422.5, 250],
      [315, 350],
    ],
    answerPathList: [
      [
        [135, 185],
        [242.5, 285],
      ],
      [
        [242.5, 285],
        [350, 185],
      ],
      [
        [457.5, 285],
        [350, 385],
      ],
      [
        [242.5, 285],
        [350, 385],
      ],
      [
        [457.5, 285],
        [565, 185],
      ],
    ],
  },
  {
    id: 7,
    name: "버스형 (Bus Topology)",
    src: bus,
    routerPos: [
      [0, 400],
      [126, 150],
      [252, 400],
      [378, 150],
      [504, 400],
      [630, 150],
    ],
    answerPathList: [
      [
        [35, 435],
        [35, 305],
      ],
      [
        [161, 185],
        [161, 305],
      ],
      [
        [287, 435],
        [287, 305],
      ],
      [
        [413, 185],
        [413, 305],
      ],
      [
        [539, 435],
        [539, 305],
      ],
      [
        [665, 185],
        [665, 305],
      ],
    ],
  },
];

export default topologiesList;
