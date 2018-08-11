import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  InputGroup,
  InputGroupAddon,
  Input,
} from 'reactstrap'
import * as api from '../../helpers/api'

const AuthScreen = ({
  match: { params },
  username,
  checkCreds,
  resetCreds,
  cleanEstimate,
  closeAuthScreen,
  openGuestSession,
}) => (
  <div className="overlay auth-screen">
    {username ? (
      <div className="panel">
        <div>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          Welcome, {username}!
        </div>
        <Button
          color="primary"
          outline
          onClick={closeAuthScreen}
        >
          Close
        </Button>
        <Button
          color="danger"
          outline
          onClick={() => {
            api.removeCreds()
            resetCreds()
            cleanEstimate(params)
          }}
        >
          Log Out
        </Button>
      </div>
    ) : (
      <div className="panel">
        <form
          onSubmit={e => {
            e.preventDefault()
            const [dbName, apiKey] = e.target.credentials.value.split(':')
            api.setCreds({ dbName, apiKey, username: e.target.username.value })
            checkCreds()
          }}
        >
          <label htmlFor="username">
            Public Name
          </label>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              @
            </InputGroupAddon>
            <Input
              name="username"
              id="username"
              placeholder="Enter your public name…"
              required
              autoFocus // eslint-disable-line jsx-a11y/no-autofocus
            />
          </InputGroup>
          <label htmlFor="credentials">
            Access Key
          </label>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              **
            </InputGroupAddon>
            <Input
              type="password"
              name="credentials"
              id="credentials"
              placeholder="Enter access key…"
              required
            />
          </InputGroup>
          <Button color="primary" outline>
            Sign In
          </Button>
        </form>
        Or
        <br />
        <Button
          color="primary"
          outline
          onClick={openGuestSession}
        >
          Guest Session
        </Button>
      </div>
    )}
  </div>
)

AuthScreen.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      estimateId: PropTypes.string,
    }).isRequired,
  }).isRequired,
  username: PropTypes.string.isRequired,
  checkCreds: PropTypes.func.isRequired,
  resetCreds: PropTypes.func.isRequired,
  cleanEstimate: PropTypes.func.isRequired,
  closeAuthScreen: PropTypes.func.isRequired,
  openGuestSession: PropTypes.func.isRequired,
}

export default AuthScreen