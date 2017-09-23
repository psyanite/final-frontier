import graphqlify from 'graphqlify'

// todo: get this from confrigs
const HOST = 'http://192.168.1.6:3000/graphql'

export default class Toaster {

  static get = async (query) => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      dataType: 'json',
    }

    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query: graphqlify(query),
      }),
    }

    const response = await fetch(`${HOST}`, options)
    if (response.ok) {
      const { data } = await response.json()
      return data
    }
    throw new Error(response.status)
  }

  // static xhr = async (route, params, method) => {
  //   const headers = {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //     dataType: 'json',
  //   }
  //
  //   const options = { method, headers }
  //   if (params) {
  //     options.body = JSON.stringify(params)
  //   }
  //
  //   const response = await fetch(`${HOST}${route}`, options)
  //   console.log(`${HOST}${route}`)
  //   console.log(options)
  //   console.log(response)
  //   if (response.ok) console.log(response.json)
  //   if (response.ok) return await response.json()
  //   throw new Error(response.status)
  // }
  //
  // // static get = async (route) => await this.xhr(route, null, 'GET')
  //
  // static get = async (route) => {
  //   const params = null
  //
  //   const method = 'GET'
  //
  //   const headers = {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //     dataType: 'json',
  //   }
  //
  //   const options = { method, headers }
  //   if (params) {
  //     options.body = JSON.stringify(params)
  //   }
  //
  //   const response = await fetch(`${HOST}${route}`, options)
  //   console.log(`${HOST}${route}`)
  //   console.log(options)
  //   console.log(response)
  //   if (response.ok) console.log(response.json)
  //   if (response.ok) return await response.json()
  //   throw new Error(response.status)
  // }
  //
  //
  // static put = async (route, params) => await this.xhr(route, params, 'PUT')
  //
  // static post = async (route, params) => await this.xhr(route, params, 'POST')
  //
  // static delete = async (route, params) => await this.xhr(route, params, 'DELETE')

}
