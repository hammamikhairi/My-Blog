const uuseCopy = (e) => {
  console.log(e.target.offsetParent.children[0].children[0].children[0].innerText.split("\n").filter(item => item !== '').join("\n"))

  navigator.clipboard.writeText(e.target.offsetParent.children[0].children[0].children[0].innerText.split("\n").filter(item => item !== '').join("\n"))

}

export default uuseCopy;