export const testApi = async () => {
    const response = await fetch("/api/hello");
    const data = await response.json();
    console.log(data);
}

