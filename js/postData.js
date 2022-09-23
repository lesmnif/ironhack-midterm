document.getElementById("form-container").addEventListener("submit", addPost)

async function addPost(event) {
  event.preventDefault()
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const phone = document.getElementById("phone").value
  const body = document.getElementById("message").value

  try {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        body: body,
      }),
      headers: {
        "Content-type": "application/json, text/plain",
      },
    })
    const form = document.getElementById("form-container")
    form.reset()
    document.getElementById(
      "successForm"
    ).innerHTML = `Petition sent, we'll get in touch with you.`
  } catch (error) {
    alert("Something went wrong, try again later")
    console.log("this is my error", error)
  }
}
