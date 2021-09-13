import _ from 'lodash'

// Validator functions that will return a message if test does not pass
export function isRequired(val) {
    return _.isEmpty(val) ? "This field is required" : "" 
}

export function mustBeValidEmail(email) {
    var EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return EMAIL_REGEX.test(String(email).toLowerCase()) ? "" : "Must be a valid email"
}