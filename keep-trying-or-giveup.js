function retry(count, func) {
    return async (...args) => {
        while (true) {
            try {
                return await func(...args)
            } catch (e) {
                if (count === 0) throw e
                count--
            }
        }
    }
}

function timeout(delay, func) {
    return async (...args) => {
        let start = new Date()
        const result = await func(...args)
        if (new Date() - start <= delay) return result
        throw new Error('timeout')
    }
}