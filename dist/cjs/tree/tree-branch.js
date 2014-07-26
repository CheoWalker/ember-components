"use strict";
var Component = require("ember").Component;
var ArrayProxy = require("ember").ArrayProxy;
var computed = require("ember").computed;

var TreeBranch, WithConfigMixin;

WithConfigMixin = Em.Eu.WithConfigMixin;


/**
 * A branch of a tree.
 *
 * @class TreeBranch
 */

TreeBranch = Component.extend(WithConfigMixin, {

  /**
   * The node to render its children within this branch
   * this property is expected to be defined by the user
   */
  node: void 0,

  /**
   * The root node of the tree
   */
  rootNode: computed.alias('node.root'),

  /**
   * A list of {{#crossLink "TreeNode"}}nodes{{/crossLink}} instances.
   */
  nodes: computed.alias('node.children'),

  /**
   * True if node's children should be loaded asynchronously
   * This gives the opportunity to the user to invoke an async call to the server to retrieve data for the current
   * branch being opened
   */
  async: false,
  tagName: 'ul',
  layoutName: 'em-tree-branch',
  classNameBindings: ['styleClasses'],
  styleClasses: (function() {
    var _ref;
    return (_ref = this.get('config.tree.branchClasses')) != null ? _ref.join(" ") : void 0;
  }).property()
});

exports["default"] = TreeBranch;;