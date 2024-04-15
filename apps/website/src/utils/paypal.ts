import checkoutNodeJssdk from "@paypal/checkout-server-sdk"
import { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, isProduction } from "./env"

const configureEnvironment = () => {
  return isProduction
    ? new checkoutNodeJssdk.core.LiveEnvironment(PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET)
    : new checkoutNodeJssdk.core.SandboxEnvironment(
        PAYPAL_CLIENT_ID,
        PAYPAL_CLIENT_SECRET
      )
}

const getPaypal = () => {
  if (!PAYPAL_CLIENT_ID) {
    throw new Error("PayPal client ID not specified on the .env file")
  }

  if (!PAYPAL_CLIENT_SECRET) {
    throw new Error("PayPal secret ID not specified on the .env file")
  }

  return new checkoutNodeJssdk.core.PayPalHttpClient(configureEnvironment())
}

export default getPaypal
