const dropDownOptions = [
    {
        buttonName: "show info",
        selector: "a",
        intercept: "person/get-person-by-id"
    },
    {
        buttonName: "start chat",
        selector: "button",
        intercept: "discussion/can-ask-to-step-in"
    },
];

const getAppointments = {
    "jsonrpc": "2.0",
    "result": {
        "data": [
            {
                "appointmentId": "40287:bce2bfff-eb2c-468d-8b35-fba943b431b5:f1a98bf0-23f1-4122-b74b-a4400742ffe7:1687599900",
                "dateStart": "2023-06-24 11:45:00.000000+02:00",
                "dateEnd": "2023-06-24 12:45:00.000000+02:00",
                "status": "awaiting",
                "wishId": "65cf7e95-8ce2-d7e7-7eee-d7126c6b1d73",
                "isRestorable": true,
                "client": {
                    "personId": "bce2bfff-eb2c-468d-8b35-fba943b431b5",
                    "firstName": "Client Cypress1",
                    "lastName": "T.",
                    "profilePicture": "https:\/\/hw-office-api-staging.s3.eu-west-1.amazonaws.com\/profile_pictures\/42b300bb-fcab-4885-993b-b77a184010c3.jpeg-160x160.jpg"
                }
            }
        ]
    },
    "id": "e8b7b089-d7a7-4482-b229-4be486c5a77f"
}

const client = {
    name: 'Client Cypress1',
    appointmentTime: '11:45 - 12:45'

}

const appointmentsData = {
    dropDownOptions,
    getAppointments,
    client
}

export default appointmentsData