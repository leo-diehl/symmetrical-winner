export const createHelloWorldTitle = () => {
  const title = document.createElement('h1')
  title.textContent = 'Hello World!'
  document.body.append(title)
}
