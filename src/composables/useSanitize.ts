import DOMPurify from 'dompurify';

export function useSanitize() {
  const sanitizeHtml = (html: string) => {
    return DOMPurify.sanitize(html);
  };

  return { sanitizeHtml };
}
