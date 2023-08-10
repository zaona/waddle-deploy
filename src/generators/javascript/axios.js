import { javascriptGenerator } from "blockly/javascript";import  Blockly from "blockly";
javascriptGenerator['axios_import'] = function () {
    var code = `const axios = require('axios');\n`;
    return code;
};

javascriptGenerator['axios_getpost_simple'] = function (block) {
    var mode = block.getFieldValue('MODE');
    var ok = javascriptGenerator.statementToCode(block, 'OK');
    var error = javascriptGenerator.statementToCode(block, 'ERROR');
    var url = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_ATOMIC) || "''";
    var code = `axios.${mode}(${url})
  .then((response) => {
  ${ok}
  })
  .catch((error) => {
  ${error}
  });
`;
    return code;
};

javascriptGenerator['axios_response'] = function () {
    return ['response', Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator['axios_responsedropdown'] = function (block) {
    var dropdown_mode = block.getFieldValue('MODE');
        var code = `response.${dropdown_mode}`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator['axios_error'] = function () {
    return ['error', Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator['axios_getpost'] = function (block) {
    var dropdown_mode = block.getFieldValue('MODE');
    var value_url = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_ATOMIC) || "''";
    var statements_par = javascriptGenerator.statementToCode(block, 'PAR');
    var statements_ok = javascriptGenerator.statementToCode(block, 'OK');
    var statements_error = javascriptGenerator.statementToCode(block, 'error');
        var code = `
axios.${dropdown_mode}(${value_url},{
  ${statements_par}
  })
  .then((response) => {
  ${statements_ok}
  })
  .catch((error) => {
  ${statements_error}
  });
`;
    return code;
};

javascriptGenerator['axios_timeout'] = function (block) {
    var value_num = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var code = `timeout: ${value_num},\n`;
    return code;
};

javascriptGenerator['axios_maxcontentlength'] = function (block) {
    var value_num = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var code = `maxContentLength: ${value_num},\n`;
    return code;
};

javascriptGenerator["axios_data"] = function(block){
    var value_num = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var code = `data: ${value_num},\n`;
    return code;
}

javascriptGenerator['axios_withcredentials'] = function(block){
    var checkbox_name = block.getFieldValue('NAME') === 'TRUE';
    var code = `withCredentials: ${checkbox_name},\n`;
    return code;
}