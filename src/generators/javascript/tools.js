import { javascriptGenerator } from "blockly/javascript";import  Blockly from "blockly";javascriptGenerator['tools_clip'] = function (block) {
    var text_tag = block.getFieldValue('tag');
    var statements_codes = javascriptGenerator.statementToCode(block, 'codes');
    var code = '// ' + text_tag + '\n' + statements_codes;
    return code + '\n';
};

javascriptGenerator['tools_only_run'] = function (block) {
    var value_codes = Blockly.JavaScript.valueToCode(block, 'codes', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_codes;
    return code + ';\n';
};

javascriptGenerator['tools_exegesis'] = function (block) {
    var text_exegesis = block.getFieldValue('exegesis');
    var code = '// ' + text_exegesis + '\n';
    return code;
};

javascriptGenerator['tools_dict'] = function (block) {
    var statements_items = javascriptGenerator.statementToCode(block, 'items');
    var code = '{' + statements_items + '}';
    return [code, 0];
};

javascriptGenerator['tools_list'] = function (block) {
    var statements_items = javascriptGenerator.statementToCode(block, 'items');
    var code = '[' + statements_items + ']';
    return [code, 0];
};

javascriptGenerator['tools_dictItem'] = function (block) {
    var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `${value_key}: ${value_value},\n`;
    return code;
};

javascriptGenerator['tools_listItem'] = function (block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `$${value_value},\n`;
    return code;
};
