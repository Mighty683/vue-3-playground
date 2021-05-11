export async function getUsers(): Promise<String[]> {
  // Simulation of api
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(['Tomek', 'Adam', 'Robert'])
    }, 2000))
}