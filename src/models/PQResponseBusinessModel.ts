interface IResponseBusiness<T> {
    message: string,
    success: boolean,
    detail: [T | object]
}

export {
    IResponseBusiness
}