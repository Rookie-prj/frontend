export const isValidString = (value: string | null | undefined): boolean => {
  return !!value && value.trim() !== '';
};

export const isValidNumber = (value: number | null | undefined): boolean => {
  return value !== null && value !== undefined;
};

export const isValidArray = <T>(value: T[] | null | undefined, minLength = 1): boolean => {
  return !!value && value.length >= minLength;
};

export const validateAll = (...conditions: boolean[]): boolean => {
  return conditions.every((condition) => condition === true);
};

export const validateConditional = (condition: boolean, value: boolean): boolean => {
  return !condition || value;
};

export const validateStep1 = (projectType: string | null, period: number | null): boolean => {
  return validateAll(isValidString(projectType), isValidNumber(period));
};

export const validateStep3 = (
  title: string | null,
  description: string | null,
  projectFields: string[],
): boolean => {
  return validateAll(isValidString(title), isValidString(description), isValidArray(projectFields));
};

export const validateStep4 = (
  distance: string | null,
  skillText: string | null,
  tools: string[],
  method: string | null,
): boolean => {
  return validateAll(
    isValidString(distance),
    isValidString(skillText),
    isValidArray(tools),
    isValidString(method),
  );
};

export const validateStep5 = (endDateType: string | null, endDate: Date | null): boolean => {
  if (!isValidString(endDateType)) {
    return false;
  }
  return validateConditional(endDateType === 'DATE_SPECIFIED', !!endDate);
};
