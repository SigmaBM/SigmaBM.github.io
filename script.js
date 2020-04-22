// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.PostMessage",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": -100,
          "angle": 0,
          "width": 2,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "rect",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 802.61,
          "height": 600.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 250,
          "angle": 0,
          "width": 192,
          "height": 27.12,
          "stroke": "#000000",
          "strokeWidth": 0,
          "fill": "#ffffff",
          "text": "按空格键开始游戏",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "24",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": -264,
          "top": 25,
          "angle": 0,
          "width": 576,
          "height": 58.58,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#ffffff",
          "text": "游戏规则：当您和对手出示的硬币均为正面或反面时\n即可获得一分，您的对手是由计算机控制的一个程序。",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "24",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "left"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": -125,
          "angle": 0,
          "width": 160,
          "height": 45.2,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#ffffff",
          "text": "硬币配对",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "40",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 86,
          "angle": 0,
          "width": 287.96,
          "height": 27.12,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#ffffff",
          "text": "按z选择正面，按x选择反面",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "24",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "files": {
        "timg (1).gif": "embedded\u002Fa9bbbc4d8d9343673b9617bf2b7b5d02f424e0ee9caf8d3af46df88425db1de1.gif"
      },
      "parameters": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.parent.parameters.reward = 0;
this.parent.parameters.trials = 60;
}
      },
      "viewport": [
        800,
        600
      ],
      "title": "Beginning"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "rect",
          "left": 0,
          "top": -1.5,
          "angle": 0,
          "width": 802.04,
          "height": 599,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 25,
          "angle": 0,
          "width": 336,
          "height": 27.12,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#ffffff",
          "text": "该组游戏即将开始，请做好准备",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "24",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 250,
          "angle": 0,
          "width": 144,
          "height": 27.12,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#ffffff",
          "text": "按空格键继续",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "24",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": -135,
          "angle": 0,
          "width": 40,
          "height": 45.2,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#ffffff",
          "text": "一",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "40",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "BeforeBlock 1"
    },
    {
      "type": "lab.flow.Loop",
      "files": {},
      "parameters": {},
      "templateParameters": [
        {
          "var_for_sample": "1"
        }
      ],
      "sample": {
        "mode": "draw-replace",
        "n": "${this.parameters.trials}"
      },
      "responses": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.parameters.reward = 0;
this.parameters.done = 0;
this.parameters.pH_W = 0.7;
this.parameters.pH_L = 0.2;
this.parameters.last_action = "NULL";
this.parameters.last_reward = "NULL"; 
},
        "after:end": function anonymous(
) {
debugger
this.parent.parameters.reward += this.parameters.reward;
}
      },
      "title": "Block 1",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "parameters": {},
        "responses": {},
        "messageHandlers": {},
        "title": "Trial",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 801.27,
                "height": 603.19,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": -100,
                "angle": 0,
                "width": 330,
                "height": 33.9,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "请选择硬币的正面或反面",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -200,
                "top": 175,
                "angle": 0,
                "width": 83.8,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "正面：z",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": 175,
                "angle": 0,
                "width": 84.16,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "反面：x",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "image",
                "left": -200,
                "top": 50,
                "angle": 0,
                "width": 131.2,
                "height": 130.79,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_head.jpg\"] }"
              },
              {
                "type": "image",
                "left": 200,
                "top": 50,
                "angle": 0,
                "width": 132.42999999999998,
                "height": 132.42999999999998,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_tail.jpg\"] }"
              },
              {
                "type": "i-text",
                "left": -325,
                "top": -250,
                "angle": 0,
                "width": 48,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "组一",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -250,
                "angle": 0,
                "width": 324.46,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已得分：${parameters.reward}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -200,
                "angle": 0,
                "width": 307.38,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已进行：${parameters.done}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              }
            ],
            "files": {
              "coin_head.jpg": "embedded\u002F226d09add5b2d7fa79c4e5642ab6456154752d0538b70e08c1547501713b7055.jpg",
              "coin_tail.jpg": "embedded\u002Fea7543851a89e0e026eafc098b2028aeeaecd445d41729efbaac0ac693c0ff30.jpg"
            },
            "parameters": {},
            "responses": {},
            "messageHandlers": {
              "run": function anonymous(
) {
debugger
if (this.parameters.last_reward == "NULL")
  if (Math.random() < .5)
    this.parent.parameters.AI_action = "HEAD"
  else
    this.parent.parameters.AI_action = "TAIL"
else if (this.parameters.last_reward == "WIN")
  if (Math.random() < this.parameters.pH_W)
    this.parent.parameters.AI_action = "HEAD"
  else
    this.parent.parameters.AI_action = "TAIL"
else
  if (Math.random() < this.parameters.pH_L)
    this.parent.parameters.AI_action = "HEAD"
  else
    this.parent.parameters.AI_action = "TAIL"

this.parent.parent.parameters.last_action = this.parameters.AI_action;
}
            },
            "viewport": [
              800,
              600
            ],
            "title": "Blank",
            "timeout": "10",
            "tardy": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": -0.8,
                "angle": 0,
                "width": 801.27,
                "height": 601.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": -100,
                "angle": 0,
                "width": 264,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "请选择硬币的正面或反面",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -200,
                "top": 175,
                "angle": 0,
                "width": 83.8,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "正面：z",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": 175,
                "angle": 0,
                "width": 84.16,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "反面：x",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -250,
                "angle": 0,
                "width": 324.46,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已得分：${parameters.reward}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -200,
                "angle": 0,
                "width": 307.38,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已进行：${parameters.done}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": -325,
                "top": -250,
                "angle": 0,
                "width": 48,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "组一",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "image",
                "left": -200,
                "top": 50,
                "angle": 0,
                "width": 131.2,
                "height": 130.79,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_head.jpg\"] }"
              },
              {
                "type": "image",
                "left": 200,
                "top": 50,
                "angle": 0,
                "width": 132.42999999999998,
                "height": 132.42999999999998,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_tail.jpg\"] }"
              }
            ],
            "files": {
              "coin_head.jpg": "embedded\u002F226d09add5b2d7fa79c4e5642ab6456154752d0538b70e08c1547501713b7055.jpg",
              "coin_tail.jpg": "embedded\u002Fea7543851a89e0e026eafc098b2028aeeaecd445d41729efbaac0ac693c0ff30.jpg"
            },
            "parameters": {},
            "responses": {
              "keypress(z)": "HEAD",
              "keypress(x)": "TAIL"
            },
            "messageHandlers": {},
            "viewport": [
              800,
              600
            ],
            "title": "Choice",
            "correctResponse": "${parameters.AI_action}",
            "tardy": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 801.01,
                "height": 602.07,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 2,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -100,
                "top": -75,
                "angle": 0,
                "width": 216,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "对手的选择是：反面",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 61,
                "angle": 0,
                "width": 707.42,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "${state.correct ? \"😄恭喜！加一分\": \"🙁未能获得加分\"}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": 144,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "按空格键继续",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -325,
                "top": -250,
                "angle": 0,
                "width": 48,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "组一",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -250,
                "angle": 0,
                "width": 324.46,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已得分：${parameters.reward}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -200,
                "angle": 0,
                "width": 307.38,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已进行：${parameters.done}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "image",
                "left": 125,
                "top": -75,
                "angle": 0,
                "width": 129.20000000000002,
                "height": 129.20000000000002,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_tail.jpg\"] }"
              }
            ],
            "files": {
              "coin_tail.jpg": "embedded\u002Fea7543851a89e0e026eafc098b2028aeeaecd445d41729efbaac0ac693c0ff30.jpg"
            },
            "parameters": {},
            "responses": {
              "keypress(Space) ": "continue"
            },
            "messageHandlers": {
              "run": function anonymous(
) {
if (this.options.datastore.state.correct) {
  this.parent.parent.parameters.reward += 1;
  this.parent.parent.parameters.last_reward = "LOSE";
}
else
  this.parent.parent.parameters.last_reward = "WIN";
this.parent.parent.parameters.done += 1;
}
            },
            "viewport": [
              800,
              600
            ],
            "title": "ResultTail",
            "tardy": true,
            "skip": "${this.parameters.last_action == \"HEAD\"}"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": -0.5,
                "top": -0.53,
                "angle": 0,
                "width": 802.01,
                "height": 603.07,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 2,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -100,
                "top": -75,
                "angle": 0,
                "width": 216,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "对手的选择是：正面",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 62,
                "angle": 0,
                "width": 707.42,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "${state.correct ? \"😄恭喜！加一分\": \"🙁未能获得加分\"}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": 144,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "按空格键继续",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -325,
                "top": -250,
                "angle": 0,
                "width": 48,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "组一",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -250,
                "angle": 0,
                "width": 324.46,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已得分：${parameters.reward}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -200,
                "angle": 0,
                "width": 307.38,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已进行：${parameters.done}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "image",
                "left": 125,
                "top": -75,
                "angle": 0,
                "width": 131.2,
                "height": 130.79,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_head.jpg\"] }"
              }
            ],
            "files": {
              "coin_tail.jpg": "embedded\u002Fea7543851a89e0e026eafc098b2028aeeaecd445d41729efbaac0ac693c0ff30.jpg",
              "coin_head.jpg": "embedded\u002F226d09add5b2d7fa79c4e5642ab6456154752d0538b70e08c1547501713b7055.jpg"
            },
            "parameters": {},
            "responses": {
              "keypress(Space) ": "continue"
            },
            "messageHandlers": {
              "run": function anonymous(
) {
if (this.options.datastore.state.correct) {
  this.parent.parent.parameters.reward += 1;
  this.parent.parent.parameters.last_reward = "LOSE";
}
else
  this.parent.parent.parameters.last_reward = "WIN";
this.parent.parent.parameters.done += 1;
}
            },
            "viewport": [
              800,
              600
            ],
            "title": "ResultHead",
            "tardy": true,
            "skip": "${this.parameters.last_action == \"TAIL\"}"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "var_for_sample": "1"
        }
      ],
      "sample": {
        "mode": "draw-replace",
        "n": "15"
      },
      "files": {},
      "responses": {
        "keypress(0)": "skip"
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.parameters.count_down = 15
}
      },
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.canvas.Screen",
        "content": [
          {
            "type": "rect",
            "left": 0,
            "top": 0,
            "angle": 0,
            "width": 802.37,
            "height": 603.4,
            "stroke": null,
            "strokeWidth": 1,
            "fill": "black"
          },
          {
            "type": "i-text",
            "left": 0,
            "top": -75,
            "angle": 0,
            "width": 452.18,
            "height": 58.58,
            "stroke": null,
            "strokeWidth": 1,
            "fill": "#ffffff",
            "text": "第一组游戏结束，请休息15秒\n(15秒后会自动进入下一组实验的准备界面)",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontSize": "24",
            "fontFamily": "sans-serif",
            "lineHeight": 1.16,
            "textAlign": "center"
          },
          {
            "type": "i-text",
            "left": 0,
            "top": 50,
            "angle": 0,
            "width": 621.07,
            "height": 31.64,
            "stroke": null,
            "strokeWidth": 1,
            "fill": "#ffffff",
            "text": "目前您累计获得了${this.parameters.reward}分！",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontSize": "24",
            "fontFamily": "sans-serif",
            "lineHeight": 1.16,
            "textAlign": "center"
          },
          {
            "type": "i-text",
            "left": 375,
            "top": -250,
            "angle": 0,
            "width": 264.89,
            "height": 22.6,
            "stroke": null,
            "strokeWidth": 1,
            "fill": "#ffffff",
            "text": "${parameters.count_down}s",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontSize": "20",
            "fontFamily": "sans-serif",
            "lineHeight": 1.16,
            "textAlign": "right"
          }
        ],
        "files": {},
        "parameters": {},
        "responses": {},
        "messageHandlers": {
          "end": function anonymous(
) {
this.parent.parameters.count_down -= 1
}
        },
        "viewport": [
          800,
          600
        ],
        "title": "InterBlock 1",
        "timeout": "1000",
        "tardy": true,
        "timeline": []
      }
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "rect",
          "left": 0,
          "top": -1,
          "angle": 0,
          "width": 802.04,
          "height": 598,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 25,
          "angle": 0,
          "width": 392,
          "height": 31.64,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#ffffff",
          "text": "该组游戏即将开始，请做好准备",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "24",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 250,
          "angle": 0,
          "width": 144,
          "height": 27.12,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#ffffff",
          "text": "按空格键继续",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "24",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": -136,
          "angle": 0,
          "width": 40,
          "height": 45.2,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#ffffff",
          "text": "二",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "40",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "BeforeBlock 2"
    },
    {
      "type": "lab.flow.Loop",
      "files": {},
      "parameters": {},
      "templateParameters": [
        {
          "var_for_sample": "1"
        }
      ],
      "sample": {
        "mode": "draw-replace",
        "n": "${this.parameters.trials}"
      },
      "responses": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.parameters.reward = 0;
this.parameters.done = 0;
this.parameters.pH_W = 0.3;
this.parameters.pH_L = 0.8;
this.parameters.last_action = "NULL";
this.parameters.last_reward = "NULL";
},
        "after:end": function anonymous(
) {
debugger
this.parent.parameters.reward += this.parameters.reward;
}
      },
      "title": "Block 2",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "parameters": {},
        "responses": {},
        "messageHandlers": {},
        "title": "Trial",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 801.27,
                "height": 603.19,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": -100,
                "angle": 0,
                "width": 264,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "请选择硬币的正面或反面",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -200,
                "top": 175,
                "angle": 0,
                "width": 83.8,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "正面：z",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": 175,
                "angle": 0,
                "width": 84.16,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "反面：x",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "image",
                "left": -200,
                "top": 50,
                "angle": 0,
                "width": 131.2,
                "height": 130.79,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_head.jpg\"] }"
              },
              {
                "type": "image",
                "left": 200,
                "top": 50,
                "angle": 0,
                "width": 132.42999999999998,
                "height": 132.42999999999998,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_tail.jpg\"] }"
              },
              {
                "type": "i-text",
                "left": -325,
                "top": -250,
                "angle": 0,
                "width": 48,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "组二",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -250,
                "angle": 0,
                "width": 324.46,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已得分：${parameters.reward}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -200,
                "angle": 0,
                "width": 307.38,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已进行：${parameters.done}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              }
            ],
            "files": {
              "coin_head.jpg": "embedded\u002F226d09add5b2d7fa79c4e5642ab6456154752d0538b70e08c1547501713b7055.jpg",
              "coin_tail.jpg": "embedded\u002Fea7543851a89e0e026eafc098b2028aeeaecd445d41729efbaac0ac693c0ff30.jpg"
            },
            "parameters": {},
            "responses": {},
            "messageHandlers": {
              "run": function anonymous(
) {
debugger
if (this.parameters.last_reward == "NULL")
  if (Math.random() < .5)
    this.parent.parameters.AI_action = "HEAD"
  else
    this.parent.parameters.AI_action = "TAIL"
else if (this.parameters.last_reward == "WIN")
  if (Math.random() < this.parameters.pH_W)
    this.parent.parameters.AI_action = "HEAD"
  else
    this.parent.parameters.AI_action = "TAIL"
else
  if (Math.random() < this.parameters.pH_L)
    this.parent.parameters.AI_action = "HEAD"
  else
    this.parent.parameters.AI_action = "TAIL"

this.parent.parent.parameters.last_action = this.parameters.AI_action;
}
            },
            "viewport": [
              800,
              600
            ],
            "title": "Blank",
            "timeout": "10",
            "tardy": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 801.27,
                "height": 603.19,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": -100,
                "angle": 0,
                "width": 264,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "请选择硬币的正面或反面",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -200,
                "top": 175,
                "angle": 0,
                "width": 83.8,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "正面：z",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": 175,
                "angle": 0,
                "width": 84.16,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "反面：x",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -250,
                "angle": 0,
                "width": 324.46,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已得分：${parameters.reward}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -200,
                "angle": 0,
                "width": 307.38,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已进行：${parameters.done}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": -325,
                "top": -250,
                "angle": 0,
                "width": 48,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "组二",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "image",
                "left": -200,
                "top": 50,
                "angle": 0,
                "width": 131.2,
                "height": 130.79,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_head.jpg\"] }"
              },
              {
                "type": "image",
                "left": 200,
                "top": 50,
                "angle": 0,
                "width": 132.42999999999998,
                "height": 132.42999999999998,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_tail.jpg\"] }"
              }
            ],
            "files": {
              "coin_head.jpg": "embedded\u002F226d09add5b2d7fa79c4e5642ab6456154752d0538b70e08c1547501713b7055.jpg",
              "coin_tail.jpg": "embedded\u002Fea7543851a89e0e026eafc098b2028aeeaecd445d41729efbaac0ac693c0ff30.jpg"
            },
            "parameters": {},
            "responses": {
              "keypress(z)": "HEAD",
              "keypress(x)": "TAIL"
            },
            "messageHandlers": {},
            "viewport": [
              800,
              600
            ],
            "title": "Choice",
            "correctResponse": "${parameters.AI_action}",
            "tardy": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 801.01,
                "height": 602.07,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 2,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -100,
                "top": -75,
                "angle": 0,
                "width": 216,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "对手的选择是：反面",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 62,
                "angle": 0,
                "width": 606.36,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "${state.correct ? \"😄恭喜！加一分\": \"🙁未能获得加分\"}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": 144,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "按空格键继续",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -325,
                "top": -250,
                "angle": 0,
                "width": 48,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "组二",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -250,
                "angle": 0,
                "width": 324.46,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已得分：${parameters.reward}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -200,
                "angle": 0,
                "width": 307.38,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已进行：${parameters.done}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "image",
                "left": 125,
                "top": -75,
                "angle": 0,
                "width": 129.20000000000002,
                "height": 129.20000000000002,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_tail.jpg\"] }"
              }
            ],
            "files": {
              "coin_tail.jpg": "embedded\u002Fea7543851a89e0e026eafc098b2028aeeaecd445d41729efbaac0ac693c0ff30.jpg"
            },
            "parameters": {},
            "responses": {
              "keypress(Space) ": "continue"
            },
            "messageHandlers": {
              "run": function anonymous(
) {
if (this.options.datastore.state.correct) {
  this.parent.parent.parameters.reward += 1;
  this.parent.parent.parameters.last_reward = "LOSE";
}
else
  this.parent.parent.parameters.last_reward = "WIN";
this.parent.parent.parameters.done += 1;
}
            },
            "viewport": [
              800,
              600
            ],
            "title": "ResultTail",
            "tardy": true,
            "skip": "${this.parameters.last_action == \"HEAD\"}"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": -0.5,
                "top": -0.53,
                "angle": 0,
                "width": 802.01,
                "height": 603.07,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 2,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -100,
                "top": -75,
                "angle": 0,
                "width": 216,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "对手的选择是：正面",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 62,
                "angle": 0,
                "width": 606.36,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "${state.correct ? \"😄恭喜！加一分\": \"🙁未能获得加分\"}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": 144,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "按空格键继续",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -325,
                "top": -250,
                "angle": 0,
                "width": 48,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "组二",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -250,
                "angle": 0,
                "width": 324.46,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已得分：${parameters.reward}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -200,
                "angle": 0,
                "width": 307.38,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已进行：${parameters.done}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "image",
                "left": 125,
                "top": -75,
                "angle": 0,
                "width": 131.2,
                "height": 130.79,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_head.jpg\"] }"
              }
            ],
            "files": {
              "coin_tail.jpg": "embedded\u002Fea7543851a89e0e026eafc098b2028aeeaecd445d41729efbaac0ac693c0ff30.jpg",
              "coin_head.jpg": "embedded\u002F226d09add5b2d7fa79c4e5642ab6456154752d0538b70e08c1547501713b7055.jpg"
            },
            "parameters": {},
            "responses": {
              "keypress(Space) ": "continue"
            },
            "messageHandlers": {
              "run": function anonymous(
) {
if (this.options.datastore.state.correct) {
  this.parent.parent.parameters.reward += 1;
  this.parent.parent.parameters.last_reward = "LOSE";
}
else
  this.parent.parent.parameters.last_reward = "WIN";
this.parent.parent.parameters.done += 1;
}
            },
            "viewport": [
              800,
              600
            ],
            "title": "ResultHead",
            "tardy": true,
            "skip": "${this.parameters.last_action == \"TAIL\"}"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "var_for_sample": "1"
        }
      ],
      "sample": {
        "mode": "draw-replace",
        "n": "15"
      },
      "files": {},
      "responses": {
        "keypress(0)": "skip"
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.parameters.count_down = 15
}
      },
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.canvas.Screen",
        "content": [
          {
            "type": "rect",
            "left": 0,
            "top": 0,
            "angle": 0,
            "width": 802.37,
            "height": 603.4,
            "stroke": null,
            "strokeWidth": 1,
            "fill": "black"
          },
          {
            "type": "i-text",
            "left": 0,
            "top": -75,
            "angle": 0,
            "width": 452.18,
            "height": 58.58,
            "stroke": null,
            "strokeWidth": 1,
            "fill": "#ffffff",
            "text": "第二组游戏结束，请休息15秒\n(15秒后会自动进入下一组实验的准备界面)",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontSize": "24",
            "fontFamily": "sans-serif",
            "lineHeight": 1.16,
            "textAlign": "center"
          },
          {
            "type": "i-text",
            "left": 0,
            "top": 50,
            "angle": 0,
            "width": 532.35,
            "height": 27.12,
            "stroke": null,
            "strokeWidth": 1,
            "fill": "#ffffff",
            "text": "目前您累计获得了${this.parameters.reward}分！",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontSize": "24",
            "fontFamily": "sans-serif",
            "lineHeight": 1.16,
            "textAlign": "center"
          },
          {
            "type": "i-text",
            "left": 375,
            "top": -250,
            "angle": 0,
            "width": 264.89,
            "height": 22.6,
            "stroke": null,
            "strokeWidth": 1,
            "fill": "#ffffff",
            "text": "${parameters.count_down}s",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontSize": "20",
            "fontFamily": "sans-serif",
            "lineHeight": 1.16,
            "textAlign": "right"
          }
        ],
        "files": {},
        "parameters": {},
        "responses": {},
        "messageHandlers": {
          "end": function anonymous(
) {
this.parent.parameters.count_down -= 1
}
        },
        "viewport": [
          800,
          600
        ],
        "title": "InterBlock 2",
        "timeout": "1000",
        "tardy": true,
        "timeline": []
      }
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "rect",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 802.04,
          "height": 596.01,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 25,
          "angle": 0,
          "width": 336,
          "height": 27.12,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#ffffff",
          "text": "该组游戏即将开始，请做好准备",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "24",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 250,
          "angle": 0,
          "width": 144,
          "height": 27.12,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#ffffff",
          "text": "按空格键继续",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "24",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": -136,
          "angle": 0,
          "width": 40,
          "height": 45.2,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#ffffff",
          "text": "三",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "40",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "BeforeBlock 3"
    },
    {
      "type": "lab.flow.Loop",
      "files": {},
      "parameters": {},
      "templateParameters": [
        {
          "var_for_sample": "1"
        }
      ],
      "sample": {
        "mode": "draw-replace",
        "n": "${this.parameters.trials}"
      },
      "responses": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.parameters.reward = 0;
this.parameters.done = 0;
this.parameters.pH_H = 0.7;
this.parameters.pH_T = 0.3;
this.parameters.last_action = "NULL";
this.parameters.last_reward = "NULL";
},
        "after:end": function anonymous(
) {
debugger
this.parent.parameters.reward += this.parameters.reward;
}
      },
      "title": "Block 3",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "parameters": {},
        "responses": {},
        "messageHandlers": {},
        "title": "Trial",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 801.27,
                "height": 603.19,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": -100,
                "angle": 0,
                "width": 264,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "请选择硬币的正面或反面",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -200,
                "top": 175,
                "angle": 0,
                "width": 83.8,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "正面：z",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": 175,
                "angle": 0,
                "width": 84.16,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "反面：x",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "image",
                "left": -200,
                "top": 50,
                "angle": 0,
                "width": 131.2,
                "height": 130.79,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_head.jpg\"] }"
              },
              {
                "type": "image",
                "left": 200,
                "top": 50,
                "angle": 0,
                "width": 132.42999999999998,
                "height": 132.42999999999998,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_tail.jpg\"] }"
              },
              {
                "type": "i-text",
                "left": -325,
                "top": -250,
                "angle": 0,
                "width": 48,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "组三",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -250,
                "angle": 0,
                "width": 324.46,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已得分：${parameters.reward}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -200,
                "angle": 0,
                "width": 307.38,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已进行：${parameters.done}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              }
            ],
            "files": {
              "coin_head.jpg": "embedded\u002F226d09add5b2d7fa79c4e5642ab6456154752d0538b70e08c1547501713b7055.jpg",
              "coin_tail.jpg": "embedded\u002Fea7543851a89e0e026eafc098b2028aeeaecd445d41729efbaac0ac693c0ff30.jpg"
            },
            "parameters": {},
            "responses": {},
            "messageHandlers": {
              "run": function anonymous(
) {
debugger
if (this.parameters.last_action == "NULL")
  if (Math.random() < .5)
    this.parent.parameters.AI_action = "HEAD"
  else
    this.parent.parameters.AI_action = "TAIL"
else if (this.parameters.last_action == "HEAD")
  if (Math.random() < this.parameters.pH_H)
    this.parent.parameters.AI_action = "HEAD"
  else
    this.parent.parameters.AI_action = "TAIL"
else
  if (Math.random() < this.parameters.pH_T)
    this.parent.parameters.AI_action = "HEAD"
  else
    this.parent.parameters.AI_action = "TAIL"

this.parent.parent.parameters.last_action = this.parameters.AI_action;
}
            },
            "viewport": [
              800,
              600
            ],
            "title": "Blank",
            "timeout": "10",
            "tardy": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 801.27,
                "height": 603.19,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": -100,
                "angle": 0,
                "width": 264,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "请选择硬币的正面或反面",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -200,
                "top": 175,
                "angle": 0,
                "width": 83.8,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "正面：z",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": 175,
                "angle": 0,
                "width": 84.16,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "反面：x",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -250,
                "angle": 0,
                "width": 324.46,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已得分：${parameters.reward}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -200,
                "angle": 0,
                "width": 307.38,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已进行：${parameters.done}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": -325,
                "top": -250,
                "angle": 0,
                "width": 48,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "组三",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "image",
                "left": -200,
                "top": 50,
                "angle": 0,
                "width": 131.2,
                "height": 130.79,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_head.jpg\"] }"
              },
              {
                "type": "image",
                "left": 200,
                "top": 50,
                "angle": 0,
                "width": 132.42999999999998,
                "height": 132.42999999999998,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_tail.jpg\"] }"
              }
            ],
            "files": {
              "coin_head.jpg": "embedded\u002F226d09add5b2d7fa79c4e5642ab6456154752d0538b70e08c1547501713b7055.jpg",
              "coin_tail.jpg": "embedded\u002Fea7543851a89e0e026eafc098b2028aeeaecd445d41729efbaac0ac693c0ff30.jpg"
            },
            "parameters": {},
            "responses": {
              "keypress(z)": "HEAD",
              "keypress(x)": "TAIL"
            },
            "messageHandlers": {},
            "viewport": [
              800,
              600
            ],
            "title": "Choice",
            "correctResponse": "${parameters.AI_action}",
            "tardy": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": -1,
                "top": -1.03,
                "angle": 0,
                "width": 801.01,
                "height": 602.07,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 2,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -100,
                "top": -75,
                "angle": 0,
                "width": 216,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "对手的选择是：反面",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 62,
                "angle": 0,
                "width": 606.36,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "${state.correct ? \"😄恭喜！加一分\": \"🙁未能获得加分\"}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": 144,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "按空格键继续",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -325,
                "top": -250,
                "angle": 0,
                "width": 48,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "组三",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -250,
                "angle": 0,
                "width": 324.46,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已得分：${parameters.reward}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -200,
                "angle": 0,
                "width": 307.38,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已进行：${parameters.done}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "image",
                "left": 125,
                "top": -75,
                "angle": 0,
                "width": 129.20000000000002,
                "height": 129.20000000000002,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_tail.jpg\"] }"
              }
            ],
            "files": {
              "coin_tail.jpg": "embedded\u002Fea7543851a89e0e026eafc098b2028aeeaecd445d41729efbaac0ac693c0ff30.jpg"
            },
            "parameters": {},
            "responses": {
              "keypress(Space) ": "continue"
            },
            "messageHandlers": {
              "run": function anonymous(
) {
if (this.options.datastore.state.correct) {
  this.parent.parent.parameters.reward += 1;
  this.parent.parent.parameters.last_reward = "LOSE";
}
else
  this.parent.parent.parameters.last_reward = "WIN";
this.parent.parent.parameters.done += 1;
}
            },
            "viewport": [
              800,
              600
            ],
            "title": "ResultTail",
            "tardy": true,
            "skip": "${this.parameters.last_action == \"HEAD\"}"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": -0.5,
                "top": -0.53,
                "angle": 0,
                "width": 802.01,
                "height": 603.07,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 2,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -100,
                "top": -75,
                "angle": 0,
                "width": 216,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "对手的选择是：正面",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 62,
                "angle": 0,
                "width": 606.36,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "${state.correct ? \"😄恭喜！加一分\": \"🙁未能获得加分\"}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": 144,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "按空格键继续",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -325,
                "top": -250,
                "angle": 0,
                "width": 48,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "组三",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -250,
                "angle": 0,
                "width": 324.46,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已得分：${parameters.reward}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -200,
                "angle": 0,
                "width": 307.38,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已进行：${parameters.done}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "image",
                "left": 125,
                "top": -75,
                "angle": 0,
                "width": 131.2,
                "height": 130.79,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_head.jpg\"] }"
              }
            ],
            "files": {
              "coin_tail.jpg": "embedded\u002Fea7543851a89e0e026eafc098b2028aeeaecd445d41729efbaac0ac693c0ff30.jpg",
              "coin_head.jpg": "embedded\u002F226d09add5b2d7fa79c4e5642ab6456154752d0538b70e08c1547501713b7055.jpg"
            },
            "parameters": {},
            "responses": {
              "keypress(Space) ": "continue"
            },
            "messageHandlers": {
              "run": function anonymous(
) {
if (this.options.datastore.state.correct) {
  this.parent.parent.parameters.reward += 1;
  this.parent.parent.parameters.last_reward = "LOSE";
}
else
  this.parent.parent.parameters.last_reward = "WIN";
this.parent.parent.parameters.done += 1;
}
            },
            "viewport": [
              800,
              600
            ],
            "title": "ResultHead",
            "tardy": true,
            "skip": "${this.parameters.last_action == \"TAIL\"}"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "var_for_sample": "1"
        }
      ],
      "sample": {
        "mode": "draw-replace",
        "n": "15"
      },
      "files": {},
      "responses": {
        "keypress(0)": "skip"
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.parameters.count_down = 15
}
      },
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.canvas.Screen",
        "content": [
          {
            "type": "rect",
            "left": 0,
            "top": 0,
            "angle": 0,
            "width": 802.37,
            "height": 603.4,
            "stroke": null,
            "strokeWidth": 1,
            "fill": "black"
          },
          {
            "type": "i-text",
            "left": 0,
            "top": -75,
            "angle": 0,
            "width": 452.18,
            "height": 58.58,
            "stroke": null,
            "strokeWidth": 1,
            "fill": "#ffffff",
            "text": "第三组游戏结束，请休息15秒\n(15秒后会自动进入下一组实验的准备界面)",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontSize": "24",
            "fontFamily": "sans-serif",
            "lineHeight": 1.16,
            "textAlign": "center"
          },
          {
            "type": "i-text",
            "left": 0,
            "top": 50,
            "angle": 0,
            "width": 532.35,
            "height": 27.12,
            "stroke": null,
            "strokeWidth": 1,
            "fill": "#ffffff",
            "text": "目前您累计获得了${this.parameters.reward}分！",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontSize": "24",
            "fontFamily": "sans-serif",
            "lineHeight": 1.16,
            "textAlign": "center"
          },
          {
            "type": "i-text",
            "left": 375,
            "top": -250,
            "angle": 0,
            "width": 264.89,
            "height": 22.6,
            "stroke": null,
            "strokeWidth": 1,
            "fill": "#ffffff",
            "text": "${parameters.count_down}s",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontSize": "20",
            "fontFamily": "sans-serif",
            "lineHeight": 1.16,
            "textAlign": "right"
          }
        ],
        "files": {},
        "parameters": {},
        "responses": {},
        "messageHandlers": {
          "end": function anonymous(
) {
this.parent.parameters.count_down -= 1
}
        },
        "viewport": [
          800,
          600
        ],
        "title": "InterBlock 3",
        "timeout": "1000",
        "tardy": true,
        "timeline": []
      }
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "rect",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 802.04,
          "height": 596.01,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 25,
          "angle": 0,
          "width": 336,
          "height": 27.12,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#ffffff",
          "text": "该组游戏即将开始，请做好准备",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "24",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 250,
          "angle": 0,
          "width": 144,
          "height": 27.12,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#ffffff",
          "text": "按空格键继续",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "24",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": -136,
          "angle": 0,
          "width": 40,
          "height": 45.2,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#ffffff",
          "text": "四",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "40",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "BeforeBlock 4"
    },
    {
      "type": "lab.flow.Loop",
      "files": {},
      "parameters": {},
      "templateParameters": [
        {
          "var_for_sample": "1"
        }
      ],
      "sample": {
        "mode": "draw-replace",
        "n": "${this.parameters.trials}"
      },
      "responses": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.parameters.reward = 0;
this.parameters.done = 0;
this.parameters.pH_H = 0.3;
this.parameters.pH_T = 0.7;
this.parameters.last_action = "NULL";
this.parameters.last_reward = "NULL";
},
        "after:end": function anonymous(
) {
debugger
this.parent.parameters.reward += this.parameters.reward;
}
      },
      "title": "Block 4",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "parameters": {},
        "responses": {},
        "messageHandlers": {},
        "title": "Trial",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 801.27,
                "height": 603.19,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": -100,
                "angle": 0,
                "width": 264,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "请选择硬币的正面或反面",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -200,
                "top": 175,
                "angle": 0,
                "width": 83.8,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "正面：z",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": 175,
                "angle": 0,
                "width": 84.16,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "反面：x",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "image",
                "left": -200,
                "top": 50,
                "angle": 0,
                "width": 131.2,
                "height": 130.79,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_head.jpg\"] }"
              },
              {
                "type": "image",
                "left": 200,
                "top": 50,
                "angle": 0,
                "width": 132.42999999999998,
                "height": 132.42999999999998,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_tail.jpg\"] }"
              },
              {
                "type": "i-text",
                "left": -325,
                "top": -250,
                "angle": 0,
                "width": 48,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "组四",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -250,
                "angle": 0,
                "width": 324.46,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已得分：${parameters.reward}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -200,
                "angle": 0,
                "width": 307.38,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已进行：${parameters.done}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              }
            ],
            "files": {
              "coin_head.jpg": "embedded\u002F226d09add5b2d7fa79c4e5642ab6456154752d0538b70e08c1547501713b7055.jpg",
              "coin_tail.jpg": "embedded\u002Fea7543851a89e0e026eafc098b2028aeeaecd445d41729efbaac0ac693c0ff30.jpg"
            },
            "parameters": {},
            "responses": {},
            "messageHandlers": {
              "run": function anonymous(
) {
debugger
if (this.parameters.last_action == "NULL")
  if (Math.random() < .5)
    this.parent.parameters.AI_action = "HEAD"
  else
    this.parent.parameters.AI_action = "TAIL"
else if (this.parameters.last_action == "HEAD")
  if (Math.random() < this.parameters.pH_H)
    this.parent.parameters.AI_action = "HEAD"
  else
    this.parent.parameters.AI_action = "TAIL"
else
  if (Math.random() < this.parameters.pH_T)
    this.parent.parameters.AI_action = "HEAD"
  else
    this.parent.parameters.AI_action = "TAIL"

this.parent.parent.parameters.last_action = this.parameters.AI_action;
}
            },
            "viewport": [
              800,
              600
            ],
            "title": "Blank",
            "timeout": "10",
            "tardy": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 801.27,
                "height": 603.19,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": -100,
                "angle": 0,
                "width": 264,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "请选择硬币的正面或反面",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -200,
                "top": 175,
                "angle": 0,
                "width": 83.8,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "正面：z",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": 175,
                "angle": 0,
                "width": 84.16,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "反面：x",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -250,
                "angle": 0,
                "width": 324.46,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已得分：${parameters.reward}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -200,
                "angle": 0,
                "width": 307.38,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已进行：${parameters.done}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": -325,
                "top": -250,
                "angle": 0,
                "width": 48,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "组四",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "image",
                "left": -200,
                "top": 50,
                "angle": 0,
                "width": 131.2,
                "height": 130.79,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_head.jpg\"] }"
              },
              {
                "type": "image",
                "left": 200,
                "top": 50,
                "angle": 0,
                "width": 132.42999999999998,
                "height": 132.42999999999998,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_tail.jpg\"] }"
              }
            ],
            "files": {
              "coin_head.jpg": "embedded\u002F226d09add5b2d7fa79c4e5642ab6456154752d0538b70e08c1547501713b7055.jpg",
              "coin_tail.jpg": "embedded\u002Fea7543851a89e0e026eafc098b2028aeeaecd445d41729efbaac0ac693c0ff30.jpg"
            },
            "parameters": {},
            "responses": {
              "keypress(z)": "HEAD",
              "keypress(x)": "TAIL"
            },
            "messageHandlers": {},
            "viewport": [
              800,
              600
            ],
            "title": "Choice",
            "correctResponse": "${parameters.AI_action}",
            "tardy": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": -1,
                "top": -1.03,
                "angle": 0,
                "width": 801.01,
                "height": 602.07,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 2,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -100,
                "top": -75,
                "angle": 0,
                "width": 216,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "对手的选择是：反面",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 62,
                "angle": 0,
                "width": 606.36,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "${state.correct ? \"😄恭喜！加一分\": \"🙁未能获得加分\"}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": 144,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "按空格键继续",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -325,
                "top": -250,
                "angle": 0,
                "width": 48,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "组四",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -250,
                "angle": 0,
                "width": 324.46,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已得分：${parameters.reward}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -200,
                "angle": 0,
                "width": 307.38,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已进行：${parameters.done}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "image",
                "left": 125,
                "top": -75,
                "angle": 0,
                "width": 129.20000000000002,
                "height": 129.20000000000002,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_tail.jpg\"] }"
              }
            ],
            "files": {
              "coin_tail.jpg": "embedded\u002Fea7543851a89e0e026eafc098b2028aeeaecd445d41729efbaac0ac693c0ff30.jpg"
            },
            "parameters": {},
            "responses": {
              "keypress(Space) ": "continue"
            },
            "messageHandlers": {
              "run": function anonymous(
) {
if (this.options.datastore.state.correct) {
  this.parent.parent.parameters.reward += 1;
  this.parent.parent.parameters.last_reward = "LOSE";
}
else
  this.parent.parent.parameters.last_reward = "WIN";
this.parent.parent.parameters.done += 1;
}
            },
            "viewport": [
              800,
              600
            ],
            "title": "ResultTail",
            "tardy": true,
            "skip": "${this.parameters.last_action == \"HEAD\"}"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": -0.5,
                "top": -0.53,
                "angle": 0,
                "width": 802.01,
                "height": 603.07,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 2,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -100,
                "top": -75,
                "angle": 0,
                "width": 216,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "对手的选择是：正面",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 62,
                "angle": 0,
                "width": 606.36,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "${state.correct ? \"😄恭喜！加一分\": \"🙁未能获得加分\"}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": 144,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "按空格键继续",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -325,
                "top": -250,
                "angle": 0,
                "width": 48,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "组四",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -250,
                "angle": 0,
                "width": 324.46,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已得分：${parameters.reward}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -200,
                "angle": 0,
                "width": 307.38,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已进行：${parameters.done}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "image",
                "left": 125,
                "top": -75,
                "angle": 0,
                "width": 131.2,
                "height": 130.79,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_head.jpg\"] }"
              }
            ],
            "files": {
              "coin_tail.jpg": "embedded\u002Fea7543851a89e0e026eafc098b2028aeeaecd445d41729efbaac0ac693c0ff30.jpg",
              "coin_head.jpg": "embedded\u002F226d09add5b2d7fa79c4e5642ab6456154752d0538b70e08c1547501713b7055.jpg"
            },
            "parameters": {},
            "responses": {
              "keypress(Space) ": "continue"
            },
            "messageHandlers": {
              "run": function anonymous(
) {
if (this.options.datastore.state.correct) {
  this.parent.parent.parameters.reward += 1;
  this.parent.parent.parameters.last_reward = "LOSE";
}
else
  this.parent.parent.parameters.last_reward = "WIN";
this.parent.parent.parameters.done += 1;
}
            },
            "viewport": [
              800,
              600
            ],
            "title": "ResultHead",
            "tardy": true,
            "skip": "${this.parameters.last_action == \"TAIL\"}"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "var_for_sample": "1"
        }
      ],
      "sample": {
        "mode": "draw-replace",
        "n": "15"
      },
      "files": {},
      "responses": {
        "keypress(0)": "skip"
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.parameters.count_down = 15
}
      },
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.canvas.Screen",
        "content": [
          {
            "type": "rect",
            "left": 0,
            "top": 0,
            "angle": 0,
            "width": 802.37,
            "height": 603.4,
            "stroke": null,
            "strokeWidth": 1,
            "fill": "black"
          },
          {
            "type": "i-text",
            "left": 0,
            "top": -75,
            "angle": 0,
            "width": 452.18,
            "height": 58.58,
            "stroke": null,
            "strokeWidth": 1,
            "fill": "#ffffff",
            "text": "第四组游戏结束，请休息15秒\n(15秒后会自动进入下一组实验的准备界面)",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontSize": "24",
            "fontFamily": "sans-serif",
            "lineHeight": 1.16,
            "textAlign": "center"
          },
          {
            "type": "i-text",
            "left": 0,
            "top": 50,
            "angle": 0,
            "width": 621.07,
            "height": 31.64,
            "stroke": null,
            "strokeWidth": 1,
            "fill": "#ffffff",
            "text": "目前您累计获得了${this.parameters.reward}分！",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontSize": "24",
            "fontFamily": "sans-serif",
            "lineHeight": 1.16,
            "textAlign": "center"
          },
          {
            "type": "i-text",
            "left": 375,
            "top": -250,
            "angle": 0,
            "width": 264.89,
            "height": 22.6,
            "stroke": null,
            "strokeWidth": 1,
            "fill": "#ffffff",
            "text": "${parameters.count_down}s",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontSize": "20",
            "fontFamily": "sans-serif",
            "lineHeight": 1.16,
            "textAlign": "right"
          }
        ],
        "files": {},
        "parameters": {},
        "responses": {},
        "messageHandlers": {
          "end": function anonymous(
) {
this.parent.parameters.count_down -= 1
}
        },
        "viewport": [
          800,
          600
        ],
        "title": "InterBlock 4",
        "timeout": "1000",
        "tardy": true,
        "timeline": []
      }
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "rect",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 802.04,
          "height": 596.01,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 25,
          "angle": 0,
          "width": 336,
          "height": 27.12,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#ffffff",
          "text": "该组游戏即将开始，请做好准备",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "24",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 250,
          "angle": 0,
          "width": 144,
          "height": 27.12,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#ffffff",
          "text": "按空格键继续",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "24",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": -136,
          "angle": 0,
          "width": 40,
          "height": 45.2,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#ffffff",
          "text": "五",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "40",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "BeforeBlock 5"
    },
    {
      "type": "lab.flow.Loop",
      "files": {},
      "parameters": {},
      "templateParameters": [
        {
          "var_for_sample": "1"
        }
      ],
      "sample": {
        "mode": "draw-replace",
        "n": "${this.parameters.trials}"
      },
      "responses": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.parameters.reward = 0;
this.parameters.done = 0;
this.parameters.pH_W = 0.7;
this.parameters.pH_L = 0.2;
this.parameters.last_action = "NULL";
this.parameters.last_reward = "NULL";
},
        "after:end": function anonymous(
) {
debugger
this.parent.parameters.reward += this.parameters.reward;
}
      },
      "title": "Block 5",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "parameters": {},
        "responses": {},
        "messageHandlers": {},
        "title": "Trial",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 801.27,
                "height": 603.19,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": -100,
                "angle": 0,
                "width": 264,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "请选择硬币的正面或反面",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -200,
                "top": 175,
                "angle": 0,
                "width": 83.8,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "正面：z",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": 175,
                "angle": 0,
                "width": 84.16,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "反面：x",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "image",
                "left": -200,
                "top": 50,
                "angle": 0,
                "width": 131.2,
                "height": 130.79,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_head.jpg\"] }"
              },
              {
                "type": "image",
                "left": 200,
                "top": 50,
                "angle": 0,
                "width": 132.42999999999998,
                "height": 132.42999999999998,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_tail.jpg\"] }"
              },
              {
                "type": "i-text",
                "left": -325,
                "top": -250,
                "angle": 0,
                "width": 48,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "组五",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -250,
                "angle": 0,
                "width": 324.46,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已得分：${parameters.reward}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -200,
                "angle": 0,
                "width": 307.38,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已进行：${parameters.done}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              }
            ],
            "files": {
              "coin_head.jpg": "embedded\u002F226d09add5b2d7fa79c4e5642ab6456154752d0538b70e08c1547501713b7055.jpg",
              "coin_tail.jpg": "embedded\u002Fea7543851a89e0e026eafc098b2028aeeaecd445d41729efbaac0ac693c0ff30.jpg"
            },
            "parameters": {},
            "responses": {},
            "messageHandlers": {
              "run": function anonymous(
) {
debugger
if (this.parameters.last_reward == "NULL")
  if (Math.random() < .5)
    this.parent.parameters.AI_action = "HEAD"
  else
    this.parent.parameters.AI_action = "TAIL"
else if (this.parameters.last_reward == "WIN")
  if (Math.random() < this.parameters.pH_W)
    this.parent.parameters.AI_action = "HEAD"
  else
    this.parent.parameters.AI_action = "TAIL"
else
  if (Math.random() < this.parameters.pH_L)
    this.parent.parameters.AI_action = "HEAD"
  else
    this.parent.parameters.AI_action = "TAIL"

this.parent.parent.parameters.last_action = this.parameters.AI_action;
}
            },
            "viewport": [
              800,
              600
            ],
            "title": "Blank",
            "timeout": "10",
            "tardy": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 801.27,
                "height": 603.19,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": -100,
                "angle": 0,
                "width": 264,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "请选择硬币的正面或反面",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -200,
                "top": 175,
                "angle": 0,
                "width": 83.8,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "正面：z",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": 175,
                "angle": 0,
                "width": 84.16,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "反面：x",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -250,
                "angle": 0,
                "width": 324.46,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已得分：${parameters.reward}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -200,
                "angle": 0,
                "width": 307.38,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已进行：${parameters.done}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": -325,
                "top": -250,
                "angle": 0,
                "width": 48,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "组五",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "image",
                "left": -200,
                "top": 50,
                "angle": 0,
                "width": 131.2,
                "height": 130.79,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_head.jpg\"] }"
              },
              {
                "type": "image",
                "left": 200,
                "top": 50,
                "angle": 0,
                "width": 132.42999999999998,
                "height": 132.42999999999998,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_tail.jpg\"] }"
              }
            ],
            "files": {
              "coin_head.jpg": "embedded\u002F226d09add5b2d7fa79c4e5642ab6456154752d0538b70e08c1547501713b7055.jpg",
              "coin_tail.jpg": "embedded\u002Fea7543851a89e0e026eafc098b2028aeeaecd445d41729efbaac0ac693c0ff30.jpg"
            },
            "parameters": {},
            "responses": {
              "keypress(z)": "HEAD",
              "keypress(x)": "TAIL"
            },
            "messageHandlers": {},
            "viewport": [
              800,
              600
            ],
            "title": "Choice",
            "correctResponse": "${parameters.AI_action}",
            "tardy": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": -1,
                "top": -1.03,
                "angle": 0,
                "width": 801.01,
                "height": 602.07,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 2,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -100,
                "top": -75,
                "angle": 0,
                "width": 216,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "对手的选择是：反面",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 62,
                "angle": 0,
                "width": 606.36,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "${state.correct ? \"😄恭喜！加一分\": \"🙁未能获得加分\"}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": 144,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "按空格键继续",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -325,
                "top": -250,
                "angle": 0,
                "width": 48,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "组五",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -250,
                "angle": 0,
                "width": 324.46,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已得分：${parameters.reward}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -200,
                "angle": 0,
                "width": 307.38,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已进行：${parameters.done}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "image",
                "left": 125,
                "top": -75,
                "angle": 0,
                "width": 129.20000000000002,
                "height": 129.20000000000002,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_tail.jpg\"] }"
              }
            ],
            "files": {
              "coin_tail.jpg": "embedded\u002Fea7543851a89e0e026eafc098b2028aeeaecd445d41729efbaac0ac693c0ff30.jpg"
            },
            "parameters": {},
            "responses": {
              "keypress(Space) ": "continue"
            },
            "messageHandlers": {
              "run": function anonymous(
) {
if (this.options.datastore.state.correct) {
  this.parent.parent.parameters.reward += 1;
  this.parent.parent.parameters.last_reward = "LOSE";
}
else
  this.parent.parent.parameters.last_reward = "WIN";
this.parent.parent.parameters.done += 1;
}
            },
            "viewport": [
              800,
              600
            ],
            "title": "ResultTail",
            "tardy": true,
            "skip": "${this.parameters.last_action == \"HEAD\"}"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": -0.5,
                "top": -0.53,
                "angle": 0,
                "width": 802.01,
                "height": 603.07,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 2,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -100,
                "top": -75,
                "angle": 0,
                "width": 216,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "对手的选择是：正面",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 62,
                "angle": 0,
                "width": 571.52,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "${state.correct ? \"😄恭喜！加一分\": \"🙁未能获得加分\"}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": 144,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "按空格键继续",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -325,
                "top": -250,
                "angle": 0,
                "width": 48,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "组五",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -250,
                "angle": 0,
                "width": 312.32,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已得分：${parameters.reward}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": -200,
                "angle": 0,
                "width": 295.68,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "本组已进行：${parameters.done}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "20",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "image",
                "left": 125,
                "top": -75,
                "angle": 0,
                "width": 131.2,
                "height": 130.79,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin_head.jpg\"] }"
              }
            ],
            "files": {
              "coin_tail.jpg": "embedded\u002Fea7543851a89e0e026eafc098b2028aeeaecd445d41729efbaac0ac693c0ff30.jpg",
              "coin_head.jpg": "embedded\u002F226d09add5b2d7fa79c4e5642ab6456154752d0538b70e08c1547501713b7055.jpg"
            },
            "parameters": {},
            "responses": {
              "keypress(Space) ": "continue"
            },
            "messageHandlers": {
              "run": function anonymous(
) {
if (this.options.datastore.state.correct) {
  this.parent.parent.parameters.reward += 1;
  this.parent.parent.parameters.last_reward = "LOSE";
}
else
  this.parent.parent.parameters.last_reward = "WIN";
this.parent.parent.parameters.done += 1;
}
            },
            "viewport": [
              800,
              600
            ],
            "title": "ResultHead",
            "tardy": true,
            "skip": "${this.parameters.last_action == \"TAIL\"}"
          }
        ]
      }
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "rect",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 801.97,
          "height": 596.05,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 75,
          "angle": 0,
          "width": 168,
          "height": 27.12,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#ffffff",
          "text": "感谢您的参与！",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "24",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": -75,
          "angle": 0,
          "width": 870.57,
          "height": 58.58,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#ffffff",
          "text": "五组游戏结束，您累计获得了${this.parameters.reward}分\n折合额外被试费奖励${Math.round(this.parameters.reward \u002F 30 * 100) \u002F 100}元",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "24",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 250,
          "angle": 0,
          "width": 144,
          "height": 27.12,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#ffffff",
          "text": "按空格键继续",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "24",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "files": {},
      "parameters": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "messageHandlers": {
        "run": function anonymous(
) {
debugger
this.parameters.rmb = this.parameters.reward / 30 
}
      },
      "viewport": [
        800,
        600
      ],
      "title": "End",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()