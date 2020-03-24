import Vue from 'vue'
import Vuex from 'vuex'
import types from './types'

/*
API FAKE
*/

function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const fetchApi = async (username, password) => {
  await sleep(1000)
  return {
    token: 'token',
    username: username
  }
}

Vue.use(Vuex)

const actions = {
  async login (context, {username, password}) {
    if (context.state.isLogging) return
    context.commit(types.LOGIN_REQUEST)
    console.log(context.state.isLogging)

    const response = await fetchApi(username, password)
    if (!response.token) return context.commit(types.LOGIN_ERROR, response.error.message)
    console.log(response)
    context.commit(types.LOGIN_SUCESS, {username: response.username, token: response.token})
  }
}

const mutations = {
  [types.LOGIN_REQUEST]: (state) => {
    Object.assign(state, {
      isLogging: true,
      isLogged: false,
      token: '',
      username: '',
      error: {
      }
    })
    console.log(state)
  },
  [types.LOGIN_ERROR]: (state, message) => {
    Object.assign(state, {
      isLogging: false,
      isLogged: false,
      token: '',
      username: '',
      error: {
        message: message
      }
    })
  },
  [types.LOGIN_SUCESS]: (state, {username, token}) => {
    Object.assign(state, {
      isLogging: false,
      isLogged: true,
      token: token,
      username: username,
      error: {
      }
    })
  }
}

const state = {
  isLogging: false,
  isLogged: false,
  token: '',
  username: '',
  error: {
    message: ''
  }
}

export default new Vuex.Store({actions, mutations, state})
