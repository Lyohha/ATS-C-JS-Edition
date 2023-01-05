console.log('Init task script')

class TemplateGenerator {

    lines = Array();
    answers = {};

    constructor() {
        this.createTemplate();
    }

    getName() {
        return 'Функції strlen, strstr';
    }

    setTemplate(pane) {
        for (let i = 0; i < this.lines.length; i++) pane.append(this.lines[i]);
    }

    getAnswers() {
        return this.answers;
    }

    createTemplate() {
        let variables = this.createFirstsLine();

        this.createFirstExpression(variables);
        this.createSecondExpression(variables);
        this.createLastLine();
    }

    createFirstExpression(variables) {

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tlen = strlen(S);")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tpos = strstr(SS, S);")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tindex = pos == "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("NULL", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("?-"),
                window.CodeGenerator.createPart(1),
                window.CodeGenerator.createPart(":pos;")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tprintf("),
                window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", len);")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tprintf("),
                window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", index);")
        ));

        this.answers[0] = variables.S.length.toString();
        this.answers[1] = variables.type == 0 ? variables.index.toString() : "-1";
    }

    createSecondExpression(variables) {

        let
                n1 = window.random.nextInt(variables.S.length),
                n2 = window.random.nextInt(variables.SS.length);

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tS["),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart("] = SS["),
                window.CodeGenerator.createPart(n2),
                window.CodeGenerator.createPart("];")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tprintf("),
                window.CodeGenerator.createPart("\"%s\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", S);")
        ));

        this.changeChar(variables, n1, n2);

        this.answers[2] = variables.S;
    }

    changeChar(variables, n1, n2) {
        let builder = '';
        if (n1 != 0)
            builder += variables.S.substring(0, n1);
        builder += variables.SS.charAt(n2);
        if (n1 != variables.S.length - 1)
            builder += variables.S.substring(n1 + 1);

        variables.S = builder;
    }

    createFirstsLine() {
        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("#include", window.CodeGenerator.CodeType.DIRECTIVE),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" <stdio.h>", window.CodeGenerator.CodeType.LIBRARY)
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("#include", window.CodeGenerator.CodeType.DIRECTIVE),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" <string.h>", window.CodeGenerator.CodeType.LIBRARY)
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart(" ")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("void", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" main()")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("{")
        ));

        return this.createVariables();
    }

    createLastLine() {
        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("}")
        ));
    }

    createVariables() {
        let variables = new Variables();
        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tchar ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("*S, *SS;")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tint ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("index, len, pos;")
        ));

        variables.S = this.createString();
        variables.type = window.random.nextInt(2);
        if (variables.type == 0) {
            variables.index = variables.S.length - (random.nextInt(variables.S.length - 2) + 1);
            variables.SS = variables.S.substring(variables.index);
        } else {
            variables.SS = this.createString(random.nextInt(variables.S.length - 2) + 1);
        }

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tS = "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(variables.S, window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart("\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tSS = "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(variables.SS, window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart("\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(";")
        ));

        return variables;
    }

    createString(length = null) {

        let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

        if(length == null) 
            length = window.random.nextInt(8) + 2;

        let
                builder = "";
        let c;
        let symbols = new Array();

        for (let i = 0; i < length; i++) {
            do {
                c = alphabet[window.random.nextInt(alphabet.length)];
            } while (symbols.includes(c));
            symbols.push(c);
        }

        for (let i = 0; i < length; i++)
            builder += symbols[i];

        return builder;
    }

}

class Variables {
    SS;
    S;
    type;
    index;

    constructor(SS, S, type, index) {
        this.SS = SS;
        this.S = S;
        this.type = type;
        this.index = index;
    }
}


window.mainController.setTask(new TemplateGenerator());