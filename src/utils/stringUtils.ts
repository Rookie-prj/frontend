export const removeBrackets = (str: string) => str.replace(/^\[|\]$/g, '');
/** 한글 포함된 URL 인코딩 */
export const getEncodedImageUrl = (url?: string | null, fallback = '') =>
  !url ? fallback : encodeURI(url);
