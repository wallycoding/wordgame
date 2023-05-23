const createRng = (size: number, mode: "str" | "int" = "int") => {
  if (mode === "str") return Array(size).fill("");
  const range: number[] = [];
  for (let i = 0; i < size; i++) range.push(i);
  return range;
};

export default createRng;
