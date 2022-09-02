Blockly.Blocks["yolobit_blynkv2_connect_wifi"] = {
  init: function () {
    this.jsonInit({
      colour: "#00A06B",
      nextStatement: null,
      tooltip: "Kết nối vào mạng WiFi",
      message0: "kết nối WiFi %1 %2 mật khẩu %3 %4",
      previousStatement: null,
      args0: [
        { type: "input_dummy" },
        { type: "input_value", name: "WIFI", check: "String" },
        { type: "input_dummy" },
        { type: "input_value", name: "PASSWORD", check: "String" },
      ],
      helpUrl: "",
    });
  },
};

Blockly.Blocks['yolobit_blynkv2_connect'] = {
  init: function() {
    this.jsonInit({
    "type": "yolobit_blynkv2_connect",
    "message0": 
    Blockly.Msg.YOLOBIT_BLYNK_CONNECT_MESSAGE0,
      "args0": [
        {
          "type": "input_value",
          "name": "auth_key"
        },
        {
          type: "input_statement",
          name: "on_connected_action"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "inputsInline": false,
      "colour": "#00A06B",
      "tooltip":
        Blockly.Msg.YOLOBIT_BLYNK_CONNECT_TOOLTIP,
      "helpUrl": 
        Blockly.Msg.YOLOBIT_BLYNK_CONNECT_HELPURL
    });
  },
  getDeveloperVars: function() {
    return ['blynk'];
  }
};

Blockly.Blocks['yolobit_blynkv2_app_pin_write'] = {
  init: function() {
    this.jsonInit({
    "type": "yolobit_blynkv2_app_pin_write",
    "message0": Blockly.Msg.YOLOBIT_BLYNK_APP_PIN_WRITE_MESSAGE0,
    "args0": [
      {
        "type": "field_variable",
        "name": "value",
        "variable": Blockly.Msg.YOLOBIT_BLYNK_APP_PIN_WRITE_MESSAGE1
      },
      {
        "type": "field_dropdown",
        "name": "pin",
        "options": [
          [
            "V0",
            "0"
          ],
          [
            "V1",
            "1"
          ],
          [
            "V2",
            "2"
          ],
          [
            "V3",
            "3"
          ],
          [
            "V4",
            "4"
          ],
          [
            "V5",
            "5"
          ],
          [
            "V6",
            "6"
          ],
          [
            "V7",
            "7"
          ],
          [
            "V8",
            "8"
          ],
          [
            "V9",
            "9"
          ],
          [
            "V10",
            "10"
          ],
          [
            "V11",
            "11"
          ],
          [
            "V12",
            "12"
          ],
          [
            "V13",
            "13"
          ],
          [
            "V14",
            "14"
          ],
          [
            "V15",
            "15"
          ],
          [
            "V16",
            "16"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "handler"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": '#00A06B',
    "tooltip": Blockly.Msg.YOLOBIT_BLYNK_APP_PIN_WRITE_TOOLTIP,
    "helpUrl": Blockly.Msg.YOLOBIT_BLYNK_APP_PIN_WRITE_HELPURL
    });
  }
};

Blockly.Blocks['yolobit_blynkv2_update_pin'] = {
  init: function() {
    this.jsonInit({
      "type": "yolobit_blynkv2_update_pin",
      "message0": Blockly.Msg.YOLOBIT_BLYNK_UPDATE_PIN_MESSAGE0,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "pin",
          "options": [
            [
              "V0",
              "0"
            ],
            [
              "V1",
              "1"
            ],
            [
              "V2",
              "2"
            ],
            [
              "V3",
              "3"
            ],
            [
              "V4",
              "4"
            ],
            [
              "V5",
              "5"
            ],
            [
              "V6",
              "6"
            ],
            [
              "V7",
              "7"
            ],
            [
              "V8",
              "8"
            ],
            [
              "V9",
              "9"
            ],
            [
              "V10",
              "10"
            ],
            [
              "V11",
              "11"
            ],
            [
              "V12",
              "12"
            ],
            [
              "V13",
              "13"
            ],
            [
              "V14",
              "14"
            ],
            [
              "V15",
              "15"
            ],
            [
              "V16",
              "16"
            ]
          ]
        },
        {
          "type": "input_value",
          "name": "value"
        },
        {
          "type": "input_dummy"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#00A06B',
      "tooltip": Blockly.Msg.YOLOBIT_BLYNK_UPDATE_PIN_TOOLTIP,
      "helpUrl": Blockly.Msg.YOLOBIT_BLYNK_UPDATE_PIN_HELPURL
    });
  }
};

Blockly.Blocks['yolobit_blynkv2_notify'] = {
  init: function() {
    this.jsonInit({
      "type": "yolobit_blynkv2_notify",
      "message0": Blockly.Msg.YOLOBIT_BLYNK_NOTIFY_MESSAGE0,
      "args0": [
        {
          "type": "input_value",
          "name": "event"
        },
        {
          "type": "input_value",
          "name": "message"
        },
        {
          "type": "input_dummy"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#00A06B',
      "tooltip": Blockly.Msg.YOLOBIT_BLYNK_NOTIFY_TOOLTIP,
      "helpUrl": Blockly.Msg.YOLOBIT_BLYNK_NOTIFY_HELPURL
    });
  }
};

Blockly.Blocks['yolobit_blynkv2_run'] = {
  init: function() {
    this.jsonInit({
      "type": "yolobit_blynkv2_run",
      "message0": Blockly.Msg.YOLOBIT_BLYNK_RUN_MESSAGE0,
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#00A06B',
      "tooltip": Blockly.Msg.YOLOBIT_BLYNK_RUN_TOOLTIP,
      "helpUrl": Blockly.Msg.YOLOBIT_BLYNK_RUN_HELPURL
    });
  }
};

// Any imports need to be reserved words
Blockly.Python.addReservedWords('blynklib_v2');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('blynk');

Blockly.Python['yolobit_blynkv2_connect_wifi'] = function(block) {
  Blockly.Python.definitions_['import_wifi_manager'] = 'from wifi_manager import *';
  var value_wifi = Blockly.Python.valueToCode(block, 'WIFI', Blockly.Python.ORDER_ATOMIC);
  var value_password = Blockly.Python.valueToCode(block, 'PASSWORD', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'wifi_manager.connect_wifi(' + value_wifi + ', ' + value_password + ')\n';
  return code;
};

Blockly.Python['yolobit_blynkv2_connect'] = function(block) {
  Blockly.Python.definitions_['import_gc'] = 'import gc; gc.collect()';
  Blockly.Python.definitions_['import_blynklib'] = 'import blynklib_v2';
  var value_auth_key = Blockly.Python.valueToCode(block, 'auth_key', Blockly.Python.ORDER_ATOMIC);
  var on_connected_action = Blockly.Python.statementToCode(block, 'on_connected_action');
  // TODO: Assemble Python into code variable.

  //Global variables except local variable
  var globals = [];
  var varName;
  var workspace = block.workspace;
  var variables = workspace.getAllVariables() || [];
  for (var i = 0, variable; variable = variables[i]; i++) {
    varName = variable.name;
    if (Blockly.Python.variableDB_.getName(varName, Blockly.Names.NameType?Blockly.Names.NameType.VARIABLE:Blockly.Variables.NAME_TYPE) != 'ping') {
      globals.push(Blockly.Python.variableDB_.getName(varName,
        Blockly.Names.NameType?Blockly.Names.NameType.VARIABLE:Blockly.Variables.NAME_TYPE));
    }
  }
  globals = globals.length ? Blockly.Python.INDENT + 'global ' + globals.join(', ') : '';

  var code = 
    ['blynk = blynklib_v2.Blynk(' + value_auth_key + ')',
      '@blynk.on("connected")',
      'def blynk_connected(ping):',
      globals,
      on_connected_action || Blockly.Python.PASS
    ].join('\n');

  return code + '\n';
};

Blockly.Python['yolobit_blynkv2_update_pin'] = function(block) {
  var dropdown_name = block.getFieldValue('pin');
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'blynk.virtual_write('+ dropdown_name + ', ' + value_value +')\n';
  return code;
};

Blockly.Python['yolobit_blynkv2_app_pin_write'] = function(block) {
  var dropdown_v = block.getFieldValue('pin');
  var variable_value = Blockly.Python.variableDB_.getName(block.getFieldValue('value'), Blockly.Names.NameType?Blockly.Names.NameType.VARIABLE:Blockly.Variables.NAME_TYPE);
  var statements_action = Blockly.Python.statementToCode(block, 'handler');

  //Global variables except local variable
  var globals = [];
  var varName;
  var variables = block.workspace.getAllVariables() || [];

  for (var i = 0, variable; variable = variables[i]; i++) {
    varName = variable.name;
    if (Blockly.Python.variableDB_.getName(varName, Blockly.Names.NameType?Blockly.Names.NameType.VARIABLE:Blockly.Variables.NAME_TYPE) != variable_value) {
      globals.push(Blockly.Python.variableDB_.getName(varName,
        Blockly.Names.NameType?Blockly.Names.NameType.VARIABLE:Blockly.Variables.NAME_TYPE));
    }
  }

  globals = globals.length ? Blockly.Python.INDENT + 'global ' + globals.join(', ') : '';

  // TODO: Assemble Python into code variable.
  var code = 
  ['@blynk.on("V' + dropdown_v + '")',
    'def v' + dropdown_v + '_write_handler(' + variable_value + '):',,
    globals,
    Blockly.Python.INDENT + variable_value + ' = '+ variable_value + '[0]\n',
    statements_action
  ].join('\n');

  return code + '\n';
};

Blockly.Python['yolobit_blynkv2_notify'] = function(block) {
  var value_event = Blockly.Python.valueToCode(block, 'event', Blockly.Python.ORDER_ATOMIC);
  var value_message = Blockly.Python.valueToCode(block, 'message', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'blynk.log_event(' + value_event + ', ' + value_message + ')\n';
  return code;
};

Blockly.Python['yolobit_blynkv2_run'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'blynk.run()\n';
  return code;
};