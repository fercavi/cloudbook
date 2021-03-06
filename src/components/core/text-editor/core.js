var Project = window.Project;  
var $ = require('jquery');
var util = require('util');
var CBobject = require('cbobject');
var metadata = require('./metadata.json');

function TextBoxEditor(objectdata){
  objectdata = typeof objectdata !== 'undefined' ? objectdata : {"text":"Lorem ipsum", "position" : [200,200]};
  TextBoxEditor.super_.call(this,objectdata.position,metadata['namespace']);
  this.text = objectdata.text;
}

util.inherits(TextBoxEditor,CBobject);

TextBoxEditor.prototype.editorView = function editorView() {
  var aux = TextBoxEditor.super_.prototype.editorView.call(this);
  aux.html(this.text);
  aux.addClass('raptor');
  return aux;
};

TextBoxEditor.add_callback = CBobject.add_callback + '; $( ".raptor" ).raptor({});';

/*
function add (){
  return new TextBoxEditor();
}

function restore (objectdata){
  return new TextBoxEditor(objectdata);
}

exports.add = add;
exports.restore = restore;
*/
module.exports = TextBoxEditor;