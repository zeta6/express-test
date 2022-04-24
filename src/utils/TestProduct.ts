export const chkTestProductVal = (
  discountRate: number,
  category: string
): void => {
  // let bool = true;
  const categorys = ["other", "ring", "necklace", "earring"];
  if (!categorys.includes(category)) {
    // bool = false;
    throw `error: Invalid category value.`;
  }
  if (discountRate > 100 || discountRate < 0) {
    throw `error: Invalid discountRate value.`;
  }
};
