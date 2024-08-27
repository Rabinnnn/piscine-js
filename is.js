is.num = (input) => Number.isNaN(input)
is.nan = (input) => Number.isNaN(input)
is.str = (input) => typeof input === 'string'
is.bool = (input) => typeof input === 'boolean'
is.undef = (input) => typeof input === 'undefined'
is.def = (input) => typeof input !== 'undefined'
is.arr = (input) => Array.isArray(input)
is.obj = (input) => input !== null && typeof input === 'object' && !Array.isArray(input)
is.fun = (input) => typeof input === 'function'
is.truthy = (input) => !!input
is.falsy = (input) => !input