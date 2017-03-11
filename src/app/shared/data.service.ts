export class DataService {
    getDetails(): Promise<string> {
        const resultPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Data');
            }, 1500);
        });
        return resultPromise;
    }
}
