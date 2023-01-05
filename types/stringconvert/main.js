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

        this.createExpression(variables);

        this.createLastLine();
    }

    createExpression(variables) {
        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\titoa(num, S, "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(10),
                window.CodeGenerator.createPart(");")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tS = strrev(S);")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tnum = atoi(S);")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tprintf("),
                window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", num);")
        ));

        this.answers[0] = this.getStringInverted(variables.numbers);
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
                window.CodeGenerator.createPart("*S;")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tint ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("num;")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tS = ("),
                window.CodeGenerator.createPart("char", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("*)malloc("),
                window.CodeGenerator.createPart("sizeof", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("("),
                window.CodeGenerator.createPart("char"),
                window.CodeGenerator.createPart(")*"),
                window.CodeGenerator.createPart(10),
                window.CodeGenerator.createPart(");")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tnum = "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(variables.numbers, window.CodeGenerator.CodeType.NUMBER),
                window.CodeGenerator.createPart(";")
        ));

        return variables;
    }

    getStringInverted(number) {
        return number.split("").reverse().join("");
    }
}

class Variables {
    numbers;
    number;

    constructor() {
        let n1 = random.nextInt(2) + 4;
        this.numbers = '';
        for (let i = 0; i < n1; i++)
            this.numbers += (i == 0 ? random.nextInt(9) + 1 : random.nextInt(10)).toString();
    }
}


window.mainController.setTask(new TemplateGenerator());