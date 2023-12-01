import GooglePayButton from "@google-pay/button-react";

export default function GooglePayTransaction({ total }) {
    console.log(total)
    const paymentRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
            {
                type: "CARD",
                parameters: {
                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                    allowedCardNetworks: ["MASTERCARD", "VISA"]
                },
                tokenizationSpecification: {
                    type: "PAYMENT_GATEWAY",
                    parameters: {
                        gateway: "example",
                        gatewayMerchantId: "exampleGatewayMerchantId"
                    }
                }
            }
        ],
        merchantInfo: {
            merchantId: "123456796533",
            merchantName: "Demo Merchant"
        },
        transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: JSON.stringify(total),
            // { total },
            currencyCode: "USD",
            countryCode: "US"
        },
        shippingAddressRequired: true,
        callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION']
    };

    return (
        <div className="demo">
            <GooglePayButton
                environment="TEST"
                buttonColor='default'
                buttonType='Buy'
                buttonSizeMode='static'
                paymentRequest={paymentRequest}
                onLoadPaymentData={paymentRequest => {
                    console.log("sucess payment data", paymentRequest);
                }}
                onPaymentAuthorized={paymentData => {
                    console.log('Payment Authorized sucess', paymentData)
                    return { transactionState: 'SUCCESS' }
                }}

                onPaymentDataChanged={paymentData => {
                    console.log('Payment data changed', paymentData)
                    return {}
                }}
                existingPaymentMethodRequired='false'
            // style={{ width: 240, height: 40 }}
            />
        </div>
    );
}
