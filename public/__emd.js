/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-languages version: 0.9.0(e162b4ba29044167bc7181c42b3270fa8a467424)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-languages/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("emd",["require","exports"],function(e,s){
  "use strict";
  Object.defineProperty(s,"__esModule",{value:!0}),
  s.conf={
    comments:{
      lineComment:"#",
      blockComment:["'''","'''"]
    },
    brackets:[
      ["{","}"],["[","]"],["(",")"]
    ],
    autoClosingPairs:[
      {open:"{",close:"}"},
      {open:"[",close:"]"},
      {open:"(",close:")"},
      {open:'"',close:'"',notIn:["string"]},
      {open:"'",close:"'",notIn:["string","comment"]}
    ],
    surroundingPairs:[
      {open:"{",close:"}"},
      {open:"[",close:"]"},
      {open:"(",close:")"},
      {open:'"',close:'"'},
      {open:"'",close:"'"}
    ]
  },

  s.language={
    defaultToken:"",
    tokenPostfix:".python",
    keywords:[/* */],
    brackets:[
      {open:"{",close:"}",token:"delimiter.curly"},
      {open:"[",close:"]",token:"delimiter.bracket"},
      {open:"(",close:")",token:"delimiter.parenthesis"}
    ],
    tokenizer:{
      root:[
        {include:"@whitespace"},
        {include:"@numbers"}/*,{include:"@strings"}*/,
        [/[,:;\|]/,"delimiter"],
        [/[{}\[\]()]/,"@brackets"],
        [/@[a-zA-Z]\w*/,"tag"],
        [/%[a-zA-Z]\w*/,"tag"],
        [/#[a-zA-Z]\w*/,"tag"],
        [/[a-zA-Z]\w*/,{cases:{"@keywords":"keyword","@default":"identifier"}}]
      ],
      whitespace:[
        [/\s+/,"white"],
        [/(^# .*$)/,"comment"]
      ],
      endDocString:[
        [/\\'/,"string"],[/.*$/,"string"]
      ],
      endDblDocString:[
        [/\\"/,"string"],[/.*$/,"string"]
      ],
      numbers:[
        [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/,"number.hex"],
        [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/,"number"]
      ],
      strings:[
        [/'$/,"string.escape","@popall"],
        [/'/,"string.escape","@stringBody"],
        [/"$/,"string.escape","@popall"],
        [/"/,"string.escape","@dblStringBody"]
      ],
      stringBody:[
        [/\\./,"string"],
        [/'/,"string.escape","@popall"],
        [/.(?=.*')/,"string"],
        [/.*\\$/,"string"],
        [/.*$/,"string","@popall"]
      ],
      dblStringBody:[
        [/\\./,"string"],
        [/"/,"string.escape","@popall"],
        [/.(?=.*")/,"string"],
        [/.*\\$/,"string"],
        [/.*$/,"string","@popall"]
      ]
    }



  }
});
