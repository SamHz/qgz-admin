import fetch from '@/utils/fetch'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return fetch({
    url: '/api/auth/signine',
    method: 'post',
    data
  })
}

export function logout() {
  return fetch({
    url: '/api/auth/logout',
    method: 'post'
  })
}

export function getUserInfo() {
  return fetch({
    url: '/api/auth/info',
    method: 'get'
  })
}

