const url = `http://jsonplaceholder.typicode.com/posts/?_limit=4`

async function renderData() {
  const myResponse = await (await fetch(url)).json()
  const myUrl = window.location.pathname.split("/").pop()
  const urlId = parseInt(myUrl.split(".html")[0])
  const bodyObject = myResponse.find((element) => element.id === urlId)
  let dataCard = ""
  const dataBody = `<h1 class="title">${bodyObject.title}</h1>
  <div class="subtitle">
    <span class="completed-title"
      >Completed on
      <span class="completed-title-data">December 27, 2019</span>
    </span>
  </div>

  <div class="project-image-section">
    <img
      class="project-image"
      src="../assets/projects-section/${bodyObject.id}.jpg"
      alt="Simplify image"
    />
  </div>
  <article class="project-description">${bodyObject.body}</article>`
  myResponse.forEach((item) => {
    return (
      item.id !== urlId &&
      (dataCard += `<article class="project-card">
                            <a target="_blank" class="project-wrapper" href="/pages/${
                              item.id
                            }.html">
                            <img
                            class="img-project"
                            src="../assets/projects-section/${item.id}.jpg"
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
                            <a target="_blank" class="learn-more" href="/pages/${
                              item.id
                            }.html"
                                >Learn more</a
                            >
                            </div>
                        </article>`)
    )
  })
  document.querySelector(".projects-container").innerHTML = dataCard
  document.querySelector("#project").innerHTML = dataBody
}
renderData()
