console.log('Init task script')

class TemplateGenerator {

    lines = Array();
    answers = {};

    constructor() {
        this.createTemplate();
    }

    getName() {
        return 'Операції циклу while та do-while';
    }

    setTemplate(pane) {
        for (let i = 0; i < this.lines.length; i++) pane.append(this.lines[i]);
    }

    getAnswers() {
        return this.answers;
    }

    createTemplate() {
        this.createFirstsLine();
        let variables = this.createVariables();
        this.createFirstExpression(variables);
        this.createSecondExpression(variables);
        this.createThirdExpression(variables);
        this.createLastLine();
    }

    createVariables() {
        let x = window.random.nextInt(20);
        let y = window.random.nextInt(20);
        let z = window.random.nextInt(20);
        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tint", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" x="),
                window.CodeGenerator.createPart(x),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" y="),
                window.CodeGenerator.createPart(y),
                window.CodeGenerator.createPart(";")
        ));

        return new Variables(x, y, z);
    }

    createFirstExpression(variables) {
        let
                n1 = (variables.y > 10 ? 0 : 10) + window.random.nextInt(10);
        let
                c1 = variables.y > 10 ? window.CodeGenerator.CompareOperator.MORE : window.CodeGenerator.CompareOperator.LESS;
        let
                ido1 = variables.y > 10 ? window.CodeGenerator.IDOperator.PREFIXDECREMENT : window.CodeGenerator.IDOperator.PREFIXINCREMENT;
        let
                o1 = window.random.key(window.CodeGenerator.Operator);

        while(n1 == 0 && o1 == window.CodeGenerator.Operator.DIVISION) {
            n1 = (variables.y > 10 ? 0 : 10) + window.random.nextInt(10);
        }

        variables.y = n1;
        variables.x = parseInt(window.CodeGenerator.exeOperator(variables.x, variables.y, o1));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\twhile", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("(y"),
                window.CodeGenerator.createPart(window.CodeGenerator.getOperator(c1)),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart(") "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("y", ido1),
                window.CodeGenerator.createPart("; x"),
                window.CodeGenerator.createPart(window.CodeGenerator.getOperator(o1)),
                window.CodeGenerator.createPart("=y;"),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" printf("),
                window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", x)"),
                window.CodeGenerator.createPart(";")
        ));

        this.answers[0] = variables.x.toString();
    }

    createSecondExpression(variables) {
        variables.x = window.random.nextInt(10);
        variables.y = window.random.nextInt(10);
        let
                o1 = window.random.nextInt(2) == 1 ? window.CodeGenerator.Operator.ADDITION : window.CodeGenerator.Operator.DIFFERENCE;
        let
                n1 = variables.y > 5 ? 0 : 5 + window.random.nextInt(5);
        let
                c1 = variables.y > 5 ? window.CodeGenerator.CompareOperator.MORE : window.CodeGenerator.CompareOperator.LESS;
        let
                ido1 = variables.y > 5 ? window.CodeGenerator.IDOperator.PREFIXDECREMENT : window.CodeGenerator.IDOperator.PREFIXINCREMENT;

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tx="),
                window.CodeGenerator.createPart(variables.x),
                window.CodeGenerator.createPart("; y="),
                window.CodeGenerator.createPart(variables.y),
                window.CodeGenerator.createPart(";")
        ));

        while (window.CodeGenerator.compare(variables.y, n1, c1) == 1) {
            variables.y = window.CodeGenerator.exeOperator(variables.y, ido1);
            variables.x = window.CodeGenerator.exeOperator(variables.x, variables.y, o1);
        }
        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\twhile", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("(y"),
                window.CodeGenerator.createPart(window.CodeGenerator.getOperator(c1)),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart(") x"),
                window.CodeGenerator.createPart(window.CodeGenerator.getOperator(o1)),
                window.CodeGenerator.createPart("="),
                window.CodeGenerator.createPart("y", ido1),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tprintf("),
                window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", x)"),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tprintf("),
                window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", y)"),
                window.CodeGenerator.createPart(";")
        ));

        this.answers[1] = variables.x.toString();
        this.answers[2] = variables.y.toString();
    }

    createThirdExpression(variables) {
        variables.y = window.random.nextInt(9) + 1;
        variables.z = window.random.nextInt(10);
        let n1 = window.random.nextInt(variables.y);
        let
                o1 = window.random.nextInt(2) == 1 ? window.CodeGenerator.Operator.ADDITION : window.CodeGenerator.Operator.DIFFERENCE;

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\ty="),
                window.CodeGenerator.createPart(variables.y),
                window.CodeGenerator.createPart("; z="),
                window.CodeGenerator.createPart(variables.z),
                window.CodeGenerator.createPart(";")
        ));

        do {
            variables.z = window.CodeGenerator.exeOperator(variables.z, variables.y, o1);
        }
        while (--variables.y > n1);

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tdo", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" z"),
                window.CodeGenerator.createPart(window.CodeGenerator.getOperator(o1)),
                window.CodeGenerator.createPart("=y;")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\twhile", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("(--y>"),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart("); "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" printf("),
                window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", z)"),
                window.CodeGenerator.createPart(";")
        ));

        this.answers[3] = variables.z.toString();
    }

    createFirstsLine() {
        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("#include", window.CodeGenerator.CodeType.DIRECTIVE),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" <stdio.h>", window.CodeGenerator.CodeType.LIBRARY)
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
    }

    createLastLine() {
        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("}")
        ));
    }
}

class Variables {
    x;
    y;
    z;

    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

window.mainController.setTask(new TemplateGenerator());