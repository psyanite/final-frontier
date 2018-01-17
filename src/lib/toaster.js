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
    console.log(response)
    console.log(response._bodyText)
    throw new Error(response.status)
  }

}
