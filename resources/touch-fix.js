// Remove touch checks on selected mobile sites
delete Document.prototype.createTouch
delete Document.prototype.ontouchstart
delete Document.prototype.ontouchend
delete Document.prototype.ontouchcancel
delete Document.prototype.TouchEvent
