class Common {
  openPage (url) {
    location.href = location.origin + url
  }
}

window.common = new Common();