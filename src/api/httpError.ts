class HttpError extends Error {
  statusCode: number;
  response?: any;

  constructor(message: string, statusCode: number, response?: any) {
    super(message);
    this.name = 'CustomHttpError';
    this.statusCode = statusCode;
    this.response = response;
  }
}
export default HttpError;
