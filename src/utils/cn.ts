type ClassInput = string | undefined | null | boolean;

export const cn = (...classInputs: ClassInput[]) => {
  return classInputs.filter(Boolean).join(' ');
};
