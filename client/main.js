import { Meteor } from "meteor/meteor"
import React from "react"
import ReactDOM from "react-dom"
import { Session } from "meteor/session"

import AppRouter from "../imports/routes/AppRouter"
import "../imports/startup/simple-schema-configuration"

Meteor.startup(() => {
    Session.set("showVisible", true)
    ReactDOM.render(<AppRouter />, document.getElementById("app"))
})
