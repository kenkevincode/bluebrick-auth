
async function post (url, bodyData /* , cancelToken = undefined */) {
  const response = await post_(url, bodyData)
  return await response.json()
}

async function postOnly (url, bodyData /* , cancelToken = undefined */) {
  return await post_(url, bodyData)
}

function isJson (obj) {
  return obj.constructor === Object || obj.constructor === Array
}

function serializeBody (headers, body) {
  if (!body) return null

  if (isJson(body)) {
    headers['Content-Type'] = 'application/json'
    return JSON.stringify(body)
  }

  headers['Content-Type'] = 'application/x-www-form-urlencoded'
  return body.toString()
}

async function post_ (url, bodyData) {
  const headers = {}
  const body = serializeBody(headers, bodyData)

  const options = {
    method: 'POST',
    mode: 'cors',
    headers,
    body
  }

  return await fetch(url, options)
}

export default {
  post,
  postOnly
}
