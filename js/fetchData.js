const url = `https://jsonplaceholder.typicode.com/posts/?_limit=3`

async function renderData() {
  const myResponse = await (await fetch(url)).json()
  let dataCard = ""
  myResponse.forEach((item) => {
    return (dataCard += `<article class="project-card">
                            <a target="_blank" class="project-wrapper" href="./pages/${
                              item.id
                            }.html">
                            <img
                            class="img-project"
                            src="./assets/projects-section/${item.id}.jpg"
                            alt="Project 1"
                            />
                            <div class="project-inner-card">
                            <h4 class="project-title">${
                              item.title.split(" ")[0] +
                              " " +
                              item.title.split(" ")[1]
                            }</h4>
                            <p class="project-description capitalize">
                                ${item.body}
                            </p>
                            <a target="_blank" class="learn-more" href="./pages/${
                              item.id
                            }.html"
                                >Learn more</a
                            >
                            </div>
                        </article>`)
  })
  document.querySelector(".projects-container").innerHTML = dataCard
}

renderData()
