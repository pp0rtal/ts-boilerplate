export function doOnCustomError(e: Error) {
  if (e instanceof CustomError) {
    // Typesafe call
    processCustomError(e);
  }

  switch (e.constructor) {
    case CustomError:
      // TS2345: Argument of type 'Error' is not assignable to parameter of type 'CustomError'.
      //   Property 'count' is missing in type 'Error' but required in type 'CustomError'
      // @ts-ignore
      processCustomError(e);
  }
}

function processCustomError(e: CustomError) {
  e.count = e.count + 1;
}

class CustomError extends Error {
  constructor(message: string, public count: number) {
    super(message);
  }
}
