const setRandomInitPath = (answerPathList) => {
  const len = answerPathList.length;
  const ratio = Math.floor(len * 0.5);
  const resultList = [];

  while (resultList.length <= ratio) {
    const temp = Math.floor(Math.random() * len);
    if (!resultList.includes(temp)) resultList.push(temp);
  }

  return resultList.map((i) => answerPathList[i]);
};

export default setRandomInitPath;
