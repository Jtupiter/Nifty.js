this["NiftyTemplates"] = this["NiftyTemplates"] || {};

this["NiftyTemplates"]["templates/alert.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="nifty-modal">\n    <div class="nifty-content">\n        <h3>' +
((__t = ( title )) == null ? '' : __t) +
'</h3>\n        <div class="nifty-inner">\n            <p class="nifty-alert-message">' +
((__t = ( message )) == null ? '' : __t) +
'</p>\n            <div class="nifty-buttons">\n                <button class="btn btn-default nifty-close">OK</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class="nifty-overlay"></div>';

}
return __p
};

this["NiftyTemplates"]["templates/confirm.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="nifty-modal">\n    <div class="nifty-content">\n        <h3>' +
((__t = ( title )) == null ? '' : __t) +
'</h3>\n        <div class="nifty-inner">\n            <p>' +
((__t = ( message )) == null ? '' : __t) +
'</p>\n            <div class="nifty-buttons">\n                <button id="no-btn" class="btn btn-default">No</button>\n                <button id="yes-btn" class="btn btn-default">Yes</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class="nifty-overlay"></div>';

}
return __p
};

this["NiftyTemplates"]["templates/loading.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="nifty-modal">\n    <div class="nifty-content">\n        <div class="loading">' +
((__t = ( message )) == null ? '' : __t) +
'</div>\n    </div>\n</div>\n<div class="nifty-overlay"></div>';

}
return __p
};

this["NiftyTemplates"]["templates/login.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="nifty-modal">\n  <div class="nifty-content">\n    <h3>Login</h3>\n    <div class="nifty-error">This is a test error message</div>\n    <div class="nifty-inner">\n      <form role="form">\n        <div class="form-group">\n          <label for="email">Email address</label>\n          <input type="text" class="form-control" id="email">\n        </div>\n        <div class="form-group">\n          <label for="password">Password</label>\n          <input type="password" class="form-control" id="password">\n        </div>\n        <div class="nifty-buttons">\n          <button id="cancel-btn" class="btn btn-default">Cancel</button>\n          <button type="submit" id="login-btn" class="btn btn-default">Login</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<div class="nifty-overlay"></div>';

}
return __p
};

this["NiftyTemplates"]["templates/modal.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="nifty-modal">\n    <div class="nifty-content"></div>\n</div>\n<div class="nifty-overlay"></div>';

}
return __p
};

this["NiftyTemplates"]["templates/prompt.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="nifty-modal">\n    <div class="nifty-content">\n        <h3>' +
((__t = ( title )) == null ? '' : __t) +
'</h3>\n        <div class="nifty-error">This is a test error message</div>\n        <div class="nifty-inner">\n            <p>' +
((__t = ( message )) == null ? '' : __t) +
'</p>\n            <input type="' +
((__t = ( type )) == null ? '' : __t) +
'" value="' +
((__t = ( value )) == null ? '' : __t) +
'">\n            <div class="nifty-buttons">\n                <button id="cancel-btn" class="btn btn-default">Cancel</button>\n                <button id="ok-btn" class="btn btn-default">OK</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class="nifty-overlay"></div>';

}
return __p
};