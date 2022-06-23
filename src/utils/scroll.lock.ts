const $body = document.querySelector('body')
let scrollPosition = 0

const ScrollLock = {
  disableBodyScroll() {
    if (!$body) {
      return
    }

    scrollPosition = window.pageYOffset
    $body.style.overflow = 'hidden'
    $body.style.position = 'fixed'
    $body.style.top = `-${scrollPosition}px`
    $body.style.width = '100%'
  },

  enableBodyScroll() {
    if (!$body) {
      return
    }

    $body.style.removeProperty('overflow')
    $body.style.removeProperty('position')
    $body.style.removeProperty('top')
    $body.style.removeProperty('width')
    window.scrollTo(0, scrollPosition)
  }
}

export default ScrollLock
