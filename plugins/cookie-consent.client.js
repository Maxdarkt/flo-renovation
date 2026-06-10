import Vue from 'vue'

const STORAGE_KEY = 'flo-cookie-consent'
const GTAG_ID = 'AW-11399990970'

let gtagLoaded = false

function loadGtag() {
  if (gtagLoaded || typeof window === 'undefined') {
    return
  }
  gtagLoaded = true

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', GTAG_ID)
}

export default (context, inject) => {
  const state = Vue.observable({
    status: null,
    visible: false,
  })

  try {
    state.status = window.localStorage.getItem(STORAGE_KEY)
  } catch (e) {
    state.status = null
  }

  if (state.status === 'accepted') {
    loadGtag()
  } else if (state.status !== 'refused') {
    state.visible = true
  }

  const persist = (value) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value)
    } catch (e) {
      // localStorage indisponible : on garde le choix en mémoire pour la session
    }
    state.status = value
    state.visible = false
  }

  inject('cookieConsent', {
    get status() {
      return state.status
    },
    get visible() {
      return state.visible
    },
    accept() {
      persist('accepted')
      loadGtag()
    },
    refuse() {
      persist('refused')
    },
    reopen() {
      state.visible = true
    },
  })
}
