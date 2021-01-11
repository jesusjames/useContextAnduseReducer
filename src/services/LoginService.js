export const login = async ({ username, password }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'jesus' && password === '12345') {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    });
}