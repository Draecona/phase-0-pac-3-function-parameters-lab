require ( './root.js' );


describe('introduction(name)', function() {
  it('takes in an argument of a name and returns a phrase with that name using string interpolation', function() {
    expect(introduction("Draecona")).toEqual("Hi, my name is Draecona.");
  })
})

describe('introductionWithLanguage(name, language)', function() {
  it('takes in two arguments, a name and a language, and returns a phrase using those arguments', function() {
    expect(introductionWithLanguage("Draecona", "JavaScript.js")).toEqual("Hi, my name is Draecona and I am learning to program in JavaScript.");
    })
})

describe('introductionWithLanguageOptional(name, language)', function() {
  it('takes in two arguments, a name and a language, and language defaults to JavaScript', function() {
    expect(introductionWithLanguageOptional("Draecona")).toEqual("Hi, my name is Draecona and I am learning to program in JavaScript.");
  })
})

describe('introductionWithLanguageOptional(name, language)', function() {
  it('takes in two arguments, a name and a language, and the default value can be overridden with an argument', function() {
    expect(introductionWithLanguageOptional("Draecona", "JavaScript")).toEqual("Hi, my name is Draecona and I am learning to program in JavaScript.");
  })
})
