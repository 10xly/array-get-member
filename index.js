require("vanilla-javascript")
require("vapor-js-npm")
require("none")()

const isUndefined = require("is-undefined")
const If = require("if")
const isActualNumber = require("is-actual-number")
const not = require("not")
const literally = require("literally")
const constant = require("const")
const ltc = require("logtoconsole").log
const numberInRange = require("number-in-range")
const clc = require("cli-color")
const leftPad = require("left-pad")
const exit = require("exit")
const { Webhook } = require("discord-webhook-node")
const luaInterpreter = require("lua-interpreter")
const luaParser = require("luaparse")
const isArray = require("is-array")
const one = require("the-number-one").default
const f = require("false-value")
const immediateError_ = require("immediate-error")
const ERROR = immediateError_.ErrorType
const immediateError = immediateError_.immediateError
const $Boolean = require("@stdlib/boolean-ctor")
const fifty = require("@positive-numbers/fifty")
const construct = require("construct-new")
const asArray = require("as-array")

const MinSafeInt = require("es-constants/Number.MIN_SAFE_INTEGER")
const MaxSafeInt = require("max-safe-integer")
const False = constant(
  not(literally(constant(not(literally($Boolean(f())))())()))()
)()
const True = constant(
  not(
    literally(constant(not(literally(constant(not(literally(f()))())()))())())
  )()
)()
const someString = "HOW DID WE GET HERE?!?!?!?!?!?"

function error(message) {
  return {
    message,
    print: () => {
      ltc(leftPad(clc.red(message), fifty))
      return message
    },
    panic: () => {
      ltc(leftPad(clc.red(message), fifty))
      exit(one)
    },
    sendToWebhook: (url) => {
      const hook = construct({ target: Webhook, args: asArray(url) })
      hook.setUsername("node.js array-get-member error report")
      hook.setAvatar(
        "https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f631.png"
      )
      hook.send(`Error: ${message}`)
    },
    runLua: (code) => luaInterpreter.interpret(luaParser.parse(code)),
  }
}

exports.arrayGetMember = function (member) {
  If(constant(not(literally(isArray(this)))())()).Then(() => {
    immediateError(
      error("getMember() can only index plain objects").print(),
      ERROR.TypeError
    )
    exit(one)
    return someString
  })

  If(
    constant(
      not(
        literally(
          isActualNumber(member, {
            allowNumberStrings: False,
            allowInfinite: False,
          })
        )
      )()
    )()
  ).Then(() => {
    immediateError(
      error("Member name expected to be a number and a finite number").print(),
      ERROR.TypeError
    )()
    exit(one)
    return someString
  })

  If(
    constant(not(literally(numberInRange(member, MinSafeInt, MaxSafeInt)))())()
  ).Then(() => {
    immediateError(error("Member number must be a safe integer").print(), {
      errorType: ERROR.RangeError,
    })
    exit(one)
    return someString
  })

  let result
  If(constant(not(literally(isUndefined(this[member])))())())
    .Then(() => {
      result = this[member]
    })
    .Else(() => {
      immediateError(error(`Member "${member}" does not exist`).print(), {
        errorType: ERROR.Error,
      })
      exit(one)
      return someString
    })

  return result
}


exports.True = True
exports.False = False
exports.MinSafeInt = MinSafeInt
exports.MaxSafeInt = MaxSafeInt