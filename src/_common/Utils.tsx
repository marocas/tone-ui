import { useEffect, useState } from 'react'
import { TMQSignal } from './Types'

// TODO: Switch from this util to the bellow
export const loadScript = (url: string, component: string): Promise<void> => {
  return new Promise((resolve: any, reject: any): void => {
    const body = document.querySelector('body')
    const script = document.createElement('script')
    if (!!component) script.dataset.component = component
    script.type = 'text/javascript'
    script.async = true
    script.src = url
    ;(body as HTMLBodyElement).appendChild(script)
    script.onload = () => resolve(true)
    script.onerror = (error: any) => reject(error)
  })
}

export const load = {
  script: (url: string, component?: string) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      if (!!component) script.dataset.component = component
      script.type = 'text/javascript'
      script.async = true
      script.src = url
      script.addEventListener('load', () => resolve(script), false)
      script.addEventListener('error', () => reject(script), false)
      document.body.appendChild(script)
    })
  },
  scripts: (urls: string[], component?: string) => {
    return Promise.all(urls?.map((url) => load.script(url, component)))
  },
}

export const checkForAdBlocker = (): boolean => {
  if (document.getElementById('adTester')?.clientWidth === 0) {
    return true
  } else {
    document.getElementById('adTester')?.remove()
    return false
  }
}

export const notEmptyOrNull = (obj: any): boolean => {
  const hasOwnProperty = Object.prototype.hasOwnProperty
  if (typeof obj === 'boolean') return obj
  if (obj == null || (typeof obj === 'string' && !Boolean(obj.trim()))) return false
  if (obj.length > 0) return true
  if (Object.getOwnPropertyNames(obj).length === 0 && obj.constructor === Object) return false // validate if Object is empty
  if (typeof obj !== 'object') return false
  if (Array.isArray(obj)) return Boolean(obj.length) // validate if Array is empty
  for (const key in obj) {
    if (hasOwnProperty.call(obj, key)) return true
  }
  return true
}

export const exists = (obj: any): boolean => notEmptyOrNull(obj)

export const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export const isMobile = (): boolean =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

export const getCookies = (
  cookieName: string,
  cookieValue: string,
): { create: boolean; value: string | number | undefined } => {
  let value
  const name = `${cookieName}=`
  const decodedCookie = decodeURIComponent(document.cookie)
  const allCookieArray = decodedCookie.split(';')

  for (let i = 0; i < allCookieArray.length; i++) {
    const cookie = allCookieArray[i].trim()

    if (cookie.indexOf(name) > -1) {
      value = cookie.substring(name.length, cookie.length)
      if (value.toString() !== cookieValue.toString()) return { create: true, value }
      return { create: false, value }
    }
  }

  return { create: true, value }
}

export const dismissCookies = (
  cookieName: string,
  cookieValue: string,
  expireDay?: string,
): void => {
  const expireDate: Date = expireDay === '' ? new Date() : new Date(expireDay as string)
  expireDate.setHours(23, 59, 59, 0)
  const cookie = getCookies(cookieName, cookieValue)

  if (cookie.create && !!Number(cookie.value)) {
    setCookies(cookieName, Number(cookie.value) + 1, expireDate)
  } else {
    setCookies(cookieName, 1, expireDate)
  }
}

export const setCookies = (
  cookieName: string,
  cookieValue: string | number,
  expireDay: Date,
): void => {
  const date = new Date()
  date.setHours(23, 59, 59, 0)
  date.setTime(date.getTime() + timeDiffCalc(expireDay, date) * 24 * 60 * 60 * 1000)
  document.cookie = `${cookieName}=${cookieValue}; expires = ${date.toUTCString()}; path=/`
}

// REF.: https://bearnithi.com/2019/11/10/how-to-calculate-the-time-difference-days-hours-minutes-between-two-dates-in-javascript/
export const timeDiffCalc = (dateFuture: any, dateNow: any) => {
  let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000

  // calculate days
  const days = Math.floor(diffInMilliSeconds / 86400)
  diffInMilliSeconds -= days * 86400

  let difference = -1
  if (Date.parse(dateFuture) - Date.parse(dateNow) >= 0) difference = days
  return difference
}

export const camelCase = (string: string): string => {
  return string
    .toLowerCase()
    .replace(/(\W|_)(\w)/g, (firstLetter) => firstLetter.replace(/(\W|_)/, '').toUpperCase())
}

export const kebabCase = (string: string): string => {
  // @ts-ignore
  return string
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-')
}

/**
 * Fetch API function to handler, recives two parameters,
 * URL = Endpoint
 * fetchObject = method, header, body, etc...
 * by default fetchObject has:
 * method: POST
 * headers: 'Content-Type application/json'
 * and no body content
 *
 * @param {string} url - Endpoint
 * @param {object} fetchObject - Object to be used to fill the URL and the request data e.g.:
 */
export const fetchHandler = async (url = '', fetchObject: object = {}) => {
  fetchObject = {
    headers: { 'Content-Type': 'application/json' },
    ...fetchObject,
  }
  const response = await fetch(url, fetchObject)
  return response.json() // parses JSON response into native JavaScript objects
}

/*!
 * Get all siblings of an element
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}  elem The element
 * @return {Array}      The siblings
 */
export const getSiblings = (elem: HTMLElement) => {
  // Setup siblings array and get the first sibling
  const siblings = []
  let sibling = elem.parentNode?.firstChild

  // Loop through each sibling and push to the array
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem && sibling.nodeName === elem.nodeName) {
      siblings.push(sibling)
    }
    sibling = sibling.nextSibling
  }
  return siblings
}

/**
 *
 * @param {HTMLElement} elem
 * @return {{top: number, left: number}}
 */
export const getOffset = (elem: HTMLElement) => {
  const position = {
    top: elem.offsetTop,
    left: elem.offsetLeft,
  }
  return position
}

export const useWindowWidth = (): number => {
  const [width, setWidth] = useState(0)

  const updateWidth = () => {
    setTimeout(() => {
      setWidth(windowWidth())
    }, 0)
  }

  useEffect(() => {
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  return width
}

export const windowWidth = (): number =>
  window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

export const windowMQ = (level: TMQSignal, value = 0) => {
  const wW = windowWidth()
  switch (level) {
    case '<':
    case 'small':
      return Boolean(wW < value)
    case '<=':
    case 'small=':
      return Boolean(wW <= value)
    case '>':
    case 'big':
      return Boolean(wW > value)
    case '>=':
    case 'big=':
      return Boolean(wW >= value)
    case '=':
    case '==':
    case '===':
    case 'eq':
    case 'equal':
      return Boolean(wW === value)
    case '!=':
    case '!==':
    case 'diff':
      return Boolean(wW !== value)
  }
}

export const useIsMobile = (): boolean => {
  const [isMobile, setIsmobile] = useState(false)
  const { userAgent } = navigator

  useEffect(() => {
    setIsmobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    )
  }, [userAgent])

  return isMobile
}

export const useScrollDirection = (threshold = 0): string => {
  const [scrollDir, setScrollDir] = useState('up')

  useEffect(() => {
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }

      setScrollDir(scrollY > lastScrollY ? 'down' : 'up')
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        // ref.: https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
        // The window.requestAnimationFrame() method tells the browser that you wish to perform an animation
        // and requests that the browser calls a specified function to update an animation before the next repaint.
        // The method takes a callback as an argument to be invoked before the repaint.
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollDir, threshold])

  return scrollDir
}
