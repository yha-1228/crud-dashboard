type ClassInput = string | undefined | null | boolean;

/**
 * concat classnames
 */
export const cn = (...classInputs: ClassInput[]) => {
  return classInputs.filter(Boolean).join(' ');
};
