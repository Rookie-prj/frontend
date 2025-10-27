class HttpError extends Error {
  status: number;
  response?: any;

  constructor(message: string, status: number, response?: any) {
    super(message);
    this.name = 'CustomHttpError';
    this.status = status;
    this.response = response;
  }
}
export default HttpError;
